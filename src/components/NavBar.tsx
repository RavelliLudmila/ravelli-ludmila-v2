'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { useContact } from '@/context/ContactContext';

interface NavSection {
    id: string;
    scrollTarget?: string;
    label: string;
}

const sections: NavSection[] = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', scrollTarget: 'projects-scroll', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
];

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [hoveredDot, setHoveredDot] = useState<string | null>(null);
    const { open, isOpen } = useContact();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section.id);

                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;

                    if (scrollPosition >= elementTop) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (section: NavSection) => {
        if (section.id === 'contact') {
            open();
            return;
        }

        const targetId = section.scrollTarget || section.id;
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-8">
            <ul className="flex flex-col gap-6">
                {sections.map((section) => (
                    <li key={section.id} className="relative group">
                        <button
                            onClick={() => scrollToSection(section)}
                            onMouseEnter={() => setHoveredDot(section.id)}
                            onMouseLeave={() => setHoveredDot(null)}
                            className={cn(
                                'relative w-3 h-3 rounded-full transition-all duration-300',
                                activeSection === section.scrollTarget || activeSection === section.id || (section.id === 'contact' && isOpen)
                                    ? 'bg-gradient-to-r from-primary to-secondary'
                                    : 'bg-muted-foreground/30',
                                hoveredDot === section.id && 'scale-125'
                            )}
                            aria-label={`Ir a ${section.label}`}
                        />
                        <span
                            className={cn(
                                'absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-medium text-foreground/80 px-3 py-1 rounded-md bg-card/90 backdrop-blur-sm border border-border shadow-lg pointer-events-none transition-all duration-300',
                                hoveredDot === section.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                            )}
                        >
                            {section.label}
                        </span>
                    </li>
                ))}
                <ThemeToggle />
            </ul>
        </nav>
    );
};

export default NavBar;
