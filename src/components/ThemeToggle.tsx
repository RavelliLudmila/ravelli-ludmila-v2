'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './theme-provider';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                aria-label="Toggle theme"
            />
        );
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
    );
};

export default ThemeToggle;
