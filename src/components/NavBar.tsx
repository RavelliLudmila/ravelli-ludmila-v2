'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

interface NavSection {
    id: string;
    label: string;
}

const sections: NavSection[] = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'contact', label: 'Contacto' },
];

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [hoveredDot, setHoveredDot] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-8">
            <ul className="flex flex-col gap-6">
                {sections.map((section) => (
                    <li key={section.id} className="relative group">
                        <button
                            onClick={() => scrollToSection(section.id)}
                            onMouseEnter={() => setHoveredDot(section.id)}
                            onMouseLeave={() => setHoveredDot(null)}
                            className={cn(
                                'relative w-3 h-3 rounded-full transition-all duration-300',
                                activeSection === section.id ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-muted-foreground/30',
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
