'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './theme-provider';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
    animationIndex?: number;
}

const ThemeToggle = ({ animationIndex = 6 }: ThemeToggleProps) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return <button aria-label="Toggle theme" className="md:block" />;
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: animationIndex * 0.08,
                    duration: 0.3,
                }}
                onClick={toggleTheme}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    'flex md:hidden items-center gap-4 p-4 rounded-lg w-full',
                    'hover:bg-primary/10 active:bg-primary/20',
                    'transition-all duration-300 text-left',
                    'border border-transparent',
                    'hover:border-primary/20',
                    'group'
                )}
                aria-label="Cambiar tema"
            >
                <AnimatePresence mode="wait">
                    {theme === 'light' ? (
                        <motion.div
                            key="sun-mobile"
                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="text-primary group-hover:scale-110 transition-transform duration-300"
                        >
                            <Sun size={20} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon-mobile"
                            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="text-primary group-hover:scale-110 transition-transform duration-300"
                        >
                            <Moon size={20} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {theme === 'light' ? 'Tema claro' : 'Tema oscuro'}
                </span>
            </motion.button>

            <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
                aria-label="Cambiar tema"
            >
                <AnimatePresence mode="wait">
                    {theme === 'light' ? (
                        <motion.div
                            key="sun"
                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="absolute"
                        >
                            <Sun size={15} className="text-muted-foreground hover:text-secondary hover:scale-125 transition-all duration-200" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="absolute"
                        >
                            <Moon size={15} className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-200" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    );
};

export default ThemeToggle;
