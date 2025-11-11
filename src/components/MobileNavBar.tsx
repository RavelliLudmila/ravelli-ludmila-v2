'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code2, Mail, Briefcase, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

interface NavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
}

const navItems: NavItem[] = [
    { id: 'hero', label: 'Inicio', icon: <Home size={20} /> },
    { id: 'about', label: 'Sobre mí', icon: <User size={20} /> },
    { id: 'projects', label: 'Proyectos', icon: <Code2 size={20} /> },
    { id: 'skills', label: 'Habilidades', icon: <Sparkles size={20} /> },
    { id: 'experience', label: 'Experiencia', icon: <Briefcase size={20} /> },
    { id: 'contact', label: 'Contacto', icon: <Mail size={20} /> },
];

const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    'fixed top-6 right-6 z-50 md:hidden',
                    'glass-effect p-3 rounded-full',
                    'border border-border',
                    'hover:border-primary transition-all duration-300',
                    'shadow-soft hover:shadow-glow',
                    'active:scale-95'
                )}
                aria-label="Toggle menu"
            >
                <motion.div initial={false} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.nav
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                damping: 25,
                                stiffness: 200,
                            }}
                            className={cn(
                                'fixed top-0 right-0 bottom-0 w-72 z-40 md:hidden',
                                'glass-effect border-l border-border',
                                'p-8 flex flex-col'
                            )}
                        >
                            <div className="flex flex-col gap-3 mt-20">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.08,
                                            duration: 0.3,
                                        }}
                                        onClick={() => scrollToSection(item.id)}
                                        className={cn(
                                            'flex items-center gap-4 p-4 rounded-lg',
                                            'hover:bg-primary/10 active:bg-primary/20',
                                            'transition-all duration-300 text-left',
                                            'border border-transparent',
                                            'hover:border-primary/20',
                                            'group'
                                        )}
                                    >
                                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                        <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                                            {item.label}
                                        </span>
                                    </motion.button>
                                ))}
                                <ThemeToggle animationIndex={navItems.length} />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.08 + 0.2 }}
                                className="mt-auto"
                            >
                                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
                                <p className="text-xs text-center text-muted-foreground">Ludmila Ravelli</p>
                            </motion.div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileNavBar;
