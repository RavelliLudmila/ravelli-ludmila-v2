'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './theme-provider';

const CursorGlow = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!mounted) {
        return null;
    }

    const primaryGradient = 'radial-gradient(circle, hsla(330, 85%, 75%, 0.25) 50%, hsla(260, 75%, 78%, 0.15) 75%, hsla(260, 75%, 78%, 0.05) 90%, transparent 100%)' ;

    const secondaryGradient = 'radial-gradient(circle, hsla(330, 85%, 75%, 0.1) 50%, hsla(260, 75%, 78%, 0.05) 50%, transparent 75%)' ;

    const xPositionPrimary = theme === 'dark' ? mousePosition.x - 75 : mousePosition.x - 200;
    const yPositionPrimary = theme === 'dark' ? mousePosition.y - 75 : mousePosition.y - 200;

    const xPositionSecondary = theme === 'dark' ? mousePosition.x - 100 : mousePosition.x - 200;
    const yPositionSecondary = theme === 'dark' ? mousePosition.y - 100 : mousePosition.y - 200;

    return (
        <>
            <div
                className="pointer-events-none rounded-full fixed hidden lg:block"
                style={{
                    width: theme === 'dark' ? '150px' : '400px',
                    height: theme === 'dark' ? '150px' : '400px',
                    background: primaryGradient,
                    filter: theme === 'dark' ? 'blur(100px)' : 'blur(200px)',
                    left: `${xPositionPrimary}px`,
                    top: `${yPositionPrimary}px`,
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                    position: 'fixed',
                }}
            />

            <div
                className="pointer-events-none rounded-full fixed hidden lg:block"
                style={{
                    width: theme === 'dark' ? '200px' : '400px',
                    height: theme === 'dark' ? '200px' : '400px',
                    background: secondaryGradient,
                    filter: 'blur(100px)',
                    left: `${xPositionSecondary}px`,
                    top: `${yPositionSecondary}px`,
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                    position: 'fixed',
                }}
            />
        </>
    );
};

export default CursorGlow;
