'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

    const primaryGradient =
        theme === 'dark'
            ? 'radial-gradient(circle, hsla(330, 85%, 75%, 0.35) 20%, hsla(260, 75%, 78%, 0.25) 75%, hsla(260, 75%, 78%, 0.15) 90%, transparent 100%)'
            : 'radial-gradient(circle, hsla(330, 85%, 75%, 0.35) 10%, hsla(259, 100%, 83%, 0.18) 75%, hsla(259, 100%, 83%, 0.08) 90%, transparent 100%)';

    const secondaryGradient =
        theme === 'dark'
            ? 'radial-gradient(circle, hsla(330, 85%, 75%, 0.18) 0%, hsla(260, 75%, 78%, 0.12) 50%, transparent 75%)'
            : 'radial-gradient(circle, hsla(330, 77%, 84%, 0.12) 0%, hsla(259, 100%, 83%, 0.08) 50%, transparent 75%)';

    return (
        <>
            <motion.div
                className="pointer-events-none fixed z-0 hidden lg:block"
                animate={{
                    x: mousePosition.x - 150,
                    y: mousePosition.y - 150,
                }}
                transition={{
                    type: 'spring',
                    damping: 25,
                    stiffness: 150,
                }}
                style={{
                    width: theme === 'dark' ? '300px' : '400px',
                    height: theme === 'dark' ? '300px' : '400px',
                    background: primaryGradient,
                    filter: theme === 'dark' ? 'blur(150px)' : 'blur(50px)',
                    left: 0,
                    top: 0,
                    transform: 'translate(-50%, -50%)',
                }}
            />

            <motion.div
                className="pointer-events-none fixed -z-10 hidden lg:block"
                animate={{
                    x: mousePosition.x - 150,
                    y: mousePosition.y - 150,
                }}
                transition={{
                    type: 'spring',
                    damping: 35,
                    stiffness: 120,
                }}
                style={{
                    width: theme === 'dark' ? '450px' : '550px',
                    height: theme === 'dark' ? '450px' : '550px',
                    background: secondaryGradient,
                    filter: theme === 'dark' ? 'blur(150px)' : 'blur(60px)',
                    left: 0,
                    top: 0,
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
};

export default CursorGlow;
