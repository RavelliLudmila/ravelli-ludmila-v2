'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './theme-provider';

const CursorGlow = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { theme } = useTheme();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const getResolvedTheme = (): 'light' | 'dark' => {
        if (theme === 'system') {
            return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return theme as 'light' | 'dark';
    };

    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(getResolvedTheme);

    useEffect(() => {
        const updateTheme = () => {
            setResolvedTheme(getResolvedTheme());
        };

        if (theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = () => {
                setResolvedTheme(getResolvedTheme());
            };

            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        } else {
            updateTheme();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    const primaryGradient =
        resolvedTheme === 'dark'
            ? 'radial-gradient(circle, hsla(330, 85%, 75%, 0.35) 0%, hsla(260, 75%, 78%, 0.25) 35%, hsla(260, 75%, 78%, 0.15) 60%, transparent 80%)'
            : 'radial-gradient(circle, hsla(330, 77%, 84%, 0.25) 0%, hsla(259, 100%, 83%, 0.18) 35%, hsla(259, 100%, 83%, 0.08) 60%, transparent 80%)';

    const secondaryGradient =
        resolvedTheme === 'dark'
            ? 'radial-gradient(circle, hsla(330, 85%, 75%, 0.18) 0%, hsla(260, 75%, 78%, 0.12) 50%, transparent 75%)'
            : 'radial-gradient(circle, hsla(330, 77%, 84%, 0.12) 0%, hsla(259, 100%, 83%, 0.08) 50%, transparent 75%)';

    return (
        <>
            <motion.div
                className="pointer-events-none fixed z-0 hidden lg:block"
                animate={{
                    x: mousePosition.x - 250,
                    y: mousePosition.y - 250,
                }}
                transition={{
                    type: 'spring',
                    damping: 25,
                    stiffness: 150,
                }}
                style={{
                    width: resolvedTheme === 'dark' ? '600px' : '500px',
                    height: resolvedTheme === 'dark' ? '600px' : '500px',
                    background: primaryGradient,
                    filter: resolvedTheme === 'dark' ? 'blur(60px)' : 'blur(50px)',
                }}
            />

            <motion.div
                className="pointer-events-none fixed -z-10 hidden lg:block"
                animate={{
                    x: mousePosition.x - 300,
                    y: mousePosition.y - 300,
                }}
                transition={{
                    type: 'spring',
                    damping: 35,
                    stiffness: 120,
                }}
                style={{
                    width: resolvedTheme === 'dark' ? '700px' : '600px',
                    height: resolvedTheme === 'dark' ? '700px' : '600px',
                    background: secondaryGradient,
                    filter: resolvedTheme === 'dark' ? 'blur(70px)' : 'blur(60px)',
                }}
            />
        </>
    );
};

export default CursorGlow;
