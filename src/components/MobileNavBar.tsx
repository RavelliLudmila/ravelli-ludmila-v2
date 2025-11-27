'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { Menu, X, Home, User, Code2, Mail, Briefcase, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { useContact } from '@/context/ContactContext';

interface NavItem {
    id: string;
    label: string;
    icon: ReactNode;
}

const navItems: NavItem[] = [
    { id: 'hero', label: 'Inicio', icon: <Home size={20} /> },
    { id: 'about', label: 'Sobre mí', icon: <User size={20} /> },
    { id: 'experience', label: 'Experiencia', icon: <Briefcase size={20} /> },
    { id: 'skills', label: 'Habilidades', icon: <Sparkles size={20} /> },
    { id: 'projects', label: 'Proyectos', icon: <Code2 size={20} /> },
    { id: 'contact', label: 'Contacto', icon: <Mail size={20} /> },
];

const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { open } = useContact();

    const scrollToSection = (id: string) => {
        if (id === 'contact') {
            open();
            setIsOpen(false);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className={cn(
                    'fixed top-6 right-6 z-50 md:hidden',
                    'glass-effect p-3 rounded-full',
                    'border border-border',
                    'hover:border-primary transition-all duration-300',
                    'shadow-soft hover:shadow-glow',
                    'active:scale-95'
                )}
                aria-label="Abrir menú de navegación"
                aria-expanded={isOpen}
            >
                <span className="sr-only">Abrir o cerrar menú</span>
                <div className={cn('transition-transform duration-200', isOpen ? 'rotate-90' : 'rotate-0')}>
                    {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
                </div>
            </button>

            <div
                className={cn(
                    'fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-200',
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
                onClick={() => setIsOpen(false)}
                aria-hidden
            />

            <nav
                className={cn(
                    'fixed top-0 right-0 bottom-0 w-72 z-50 md:hidden',
                    'glass-effect border-l border-border',
                    'p-8 flex flex-col bg-background/80 backdrop-blur-xl',
                    'transition-transform duration-300 ease-out',
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div className="flex flex-col gap-3">
                    {navItems.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={cn(
                                'flex items-center gap-4 p-4 rounded-lg',
                                'hover:bg-primary/10 active:bg-primary/20',
                                'transition-all duration-200 text-left',
                                'border border-transparent',
                                'hover:border-primary/20',
                                'group'
                            )}
                            style={{ transitionDelay: `${index * 40}ms` }}
                        >
                            <span className="text-primary group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">{item.label}</span>
                        </button>
                    ))}
                </div>

                <div className="mt-auto">
                    <ThemeToggle animationIndex={navItems.length} />
                    <p className="text-xs text-center text-muted-foreground pt-6 mt-6 border-t border-border/60">Ludmila Ravelli</p>
                </div>
            </nav>
        </>
    );
};

export default MobileNavBar;
