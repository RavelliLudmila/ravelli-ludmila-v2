'use client';

import { useEffect, useRef } from 'react';

interface SectionConfig {
    id: string;
    desktopTargetId?: string;
    offsetPx?: number;
    desktopOffsetPx?: number;
    offsetVh?: number;
    desktopOffsetVh?: number;
    extraSnapIds?: string[];
    desktopExtraSnapIds?: string[];
}

interface SectionWheelNavigatorProps {
    sections: SectionConfig[];
    lockDurationMs?: number;
}

const SectionWheelNavigator = ({ sections, lockDurationMs = 650 }: SectionWheelNavigatorProps) => {
    const snapPointsRef = useRef<number[]>([]);
    const currentIndexRef = useRef(0);
    const isLockedRef = useRef(false);
    const lockTimerRef = useRef<number | null>(null);

    useEffect(() => {
        const clearLockTimer = () => {
            if (lockTimerRef.current !== null) {
                window.clearTimeout(lockTimerRef.current);
                lockTimerRef.current = null;
            }
        };

        const updateCurrentIndex = (points?: number[]) => {
            const snapPoints = points || snapPointsRef.current;
            if (!snapPoints.length) return;

            const position = window.scrollY + window.innerHeight / 2;
            let currentIndex = 0;

            for (let i = 0; i < snapPoints.length; i++) {
                if (position >= snapPoints[i]) {
                    currentIndex = i;
                } else {
                    break;
                }
            }

            currentIndexRef.current = currentIndex;
        };

        const resolveTargetId = (config: SectionConfig) => {
            const isDesktop = window.innerWidth >= 768;
            if (isDesktop && config.desktopTargetId) return config.desktopTargetId;
            return config.id;
        };

        const resolveExtraSnapIds = (config: SectionConfig) => {
            const isDesktop = window.innerWidth >= 768;
            if (isDesktop && config.desktopExtraSnapIds?.length) return config.desktopExtraSnapIds;
            return config.extraSnapIds || [];
        };

        const resolveOffsetPx = (config: SectionConfig, viewportHeight: number) => {
            const isDesktop = window.innerWidth >= 768;

            if (isDesktop) {
                if (typeof config.desktopOffsetPx === 'number') return config.desktopOffsetPx;
                if (typeof config.desktopOffsetVh === 'number') return (config.desktopOffsetVh / 100) * viewportHeight;
            }

            if (typeof config.offsetPx === 'number') return config.offsetPx;
            if (typeof config.offsetVh === 'number') return (config.offsetVh / 100) * viewportHeight;

            return 0;
        };

        const buildSnapPoints = () => {
            const viewportHeight = window.innerHeight;
            const points: number[] = [];

            sections.forEach((config) => {
                const targetId = resolveTargetId(config);
                const element = document.getElementById(targetId);
                if (!element) return;

                const rect = element.getBoundingClientRect();
                const offsetPx = resolveOffsetPx(config, viewportHeight);
                const start = Math.round(rect.top + window.scrollY + offsetPx);
                const availableHeight = Math.max(0, Math.round(rect.height - offsetPx));

                points.push(start);

                const extraHeight = availableHeight - viewportHeight;
                if (extraHeight > 0) {
                    const segments = Math.ceil(extraHeight / viewportHeight);
                    for (let i = 1; i <= segments; i++) {
                        const stop = Math.min(start + i * viewportHeight, start + extraHeight);
                        points.push(Math.round(stop));
                    }
                }

                const extraIds = resolveExtraSnapIds(config);
                extraIds.forEach((extraId) => {
                    const extraEl = document.getElementById(extraId);
                    if (!extraEl) return;
                    const extraRect = extraEl.getBoundingClientRect();
                    points.push(Math.round(extraRect.top + window.scrollY));
                });
            });

            const uniquePoints = Array.from(new Set(points)).sort((a, b) => a - b);
            snapPointsRef.current = uniquePoints;
            updateCurrentIndex(uniquePoints);
        };

        const lockNavigation = () => {
            isLockedRef.current = true;
            clearLockTimer();
            lockTimerRef.current = window.setTimeout(() => {
                isLockedRef.current = false;
            }, lockDurationMs);
        };

        const hasScrollableParent = (target: EventTarget | null, deltaY: number) => {
            let node = target as HTMLElement | null;

            while (node && node !== document.body) {
                const style = window.getComputedStyle(node);
                const canScroll = /(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight;

                if (canScroll) {
                    const atTop = node.scrollTop <= 0;
                    const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight;

                    if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) {
                        return true;
                    }
                }

                node = node.parentElement;
            }

            return false;
        };

        const handleWheel = (event: WheelEvent) => {
            if (event.ctrlKey || event.metaKey) return;

            const direction = Math.sign(event.deltaY);
            if (direction === 0) return;

            if (hasScrollableParent(event.target, event.deltaY)) return;

            if (!snapPointsRef.current.length) return;

            event.preventDefault();

            if (isLockedRef.current) return;

            const nextIndex = Math.min(Math.max(currentIndexRef.current + direction, 0), snapPointsRef.current.length - 1);

            if (nextIndex === currentIndexRef.current) return;

            const target = snapPointsRef.current[nextIndex];

            lockNavigation();
            window.scrollTo({ top: target, behavior: 'auto' });
            currentIndexRef.current = nextIndex;
        };

        const handleResize = () => {
            buildSnapPoints();
        };

        const handleScroll = () => {
            updateCurrentIndex();
        };

        buildSnapPoints();
        const delayedRebuild = window.setTimeout(buildSnapPoints, 300);

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.clearTimeout(delayedRebuild);
            clearLockTimer();
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections, lockDurationMs]);

    return null;
};

export default SectionWheelNavigator;
