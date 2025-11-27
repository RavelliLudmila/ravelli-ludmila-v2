'use client';

import React from 'react';
import { ArrowDown, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CSSPropertiesWithVars extends React.CSSProperties {
    '--count'?: number;
    '--custom-rotate'?: string;
    '--z-index'?: number;
    '--animation-timeline'?: string;
    viewTimeline?: string;
    timelineScope?: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    gradient: string;
    image?: string;
    link?: string;
    github?: string;
    customRotate: string;
}

const projects: Project[] = [
    {
        id: 0,
        title: 'EcoRed',
        description:
            'Marketplace sustentable para conectar usuarios que desean descartar materiales con emprendedores que los reutilizan. Desarrollé el frontend completo con enfoque en accesibilidad y experiencia de usuario, colaborando directamente con backend y data.',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Google Maps'],
        gradient: 'from-purple-400 to-indigo-400',
        image: '/EcoRed.webp',
        customRotate: '3deg',
    },
    {
        id: 1,
        title: 'PsyMatch',
        description:
            'Plataforma para conectar pacientes con profesionales de salud mental mediante un algoritmo de matching inteligente. Lideré la implementación frontend, diseñé dashboards para distintos tipos de usuario e integré Google OAuth, MercadoPago y Mapbox.',
        tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Formik', 'PostgreSQL'],
        gradient: 'from-pink-400 to-purple-400',
        image: '/PsyMatch.webp',
        link: 'https://psymatch-frontend-app.onrender.com',
        github: 'https://github.com/PsyMatch/PsyMatch-Frontend',
        customRotate: '-1deg',
    },
    {
        id: 2,
        title: 'Aura',
        description:
            'E-commerce diseñado para ofrecer una experiencia de compra moderna y elegante. Implementé el App Router de Next.js, diseñé la interfaz con modo oscuro/claro y desarrollé funcionalidades de carrito, favoritos y dashboard de usuario.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Context API', 'Responsive'],
        gradient: 'from-indigo-400 to-blue-400',
        image: '/Aura.webp',
        link: 'https://www.aurafitarg.com.ar',
        github: 'https://github.com/RavelliLudmila/aura-ecommerce',
        customRotate: '2deg',
    },
    {
        id: 3,
        title: 'Portfolio Interactivo',
        description:
            'Portfolio profesional con diseño inspirado en WhatsApp que ofrece una experiencia única de navegación. Implementé un sistema de chat interactivo con animaciones fluidas, formulario de contacto integrado con EmailJS y diseño completamente responsive.',
        tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
        gradient: 'from-pink-300 to-purple-300',
        image: '/Portfolio.webp',
        link: 'https://v1.ravelliludmila.com.ar',
        github: 'https://github.com/RavelliLudmila/ravelli-ludmila',
        customRotate: '-2deg',
    },
];

const ProjectsSection = () => {
    const timelineScopes = projects.map((_, i) => `--trigger-${i}`).join(', ');

    return (
        <section
            id="projects"
            className="selected-work gradient-bg"
            style={
                {
                    '--count': 7,
                    timelineScope: timelineScopes,
                } as CSSPropertiesWithVars
            }
        >
            <div id="projects-scroll" style={{ position: 'absolute', top: '55vh' }} />
            <div className="scroll-heading-fixed px-6 md:px-16">
                <h2 className="mb-4 text-center">
                    <span className="text-gradient">Proyectos</span>
                </h2>
                <p className="text-center opacity-70 max-w-2xl mx-auto mb-8">Proyectos reales que combinan tecnología, diseño y propósito</p>

                <div className="flex justify-end items-center mt-15 mb-8 text-muted-foreground opacity-50 animate-bounce">
                    <p className="text-sm pr-2">Desliza hacia abajo</p>
                    <ArrowDown className="w-6 h-6" />
                </div>
            </div>

            {/* Scroll trigger divs */}
            <div className="card-scroll-triggers pb-16">
                {projects.map((_, i) => (
                    <div key={i} className="scroll-trigger" style={{ viewTimeline: `--trigger-${i}` } as CSSPropertiesWithVars} aria-hidden="true" />
                ))}
            </div>

            <div className="selected-work__items">
                {projects.map((project, index) => (
                    <article
                        key={project.id}
                        className="work-thumb"
                        style={
                            {
                                '--custom-rotate': project.customRotate,
                                '--z-index': index + 1,
                                '--animation-timeline': `--trigger-${index}`,
                            } as CSSPropertiesWithVars
                        }
                    >
                        <div className="work-thumb__content">
                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6">
                                <Image
                                    src={project.image || '/default-image.png'}
                                    alt={project.title}
                                    width={350}
                                    height={350}
                                    className="rounded-lg"
                                />
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl">
                                        <span>{project.title}</span>
                                    </h3>
                                    <p className="opacity-70 leading-relaxed text-sm md:text-base">{project.description}</p>
                                </div>
                            </div>

                            <div className="labels mb-6">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="label">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                                    >
                                        <ExternalLink size={16} />
                                        Ver proyecto
                                    </Link>
                                )}
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                                    >
                                        <Github size={16} />
                                        Código
                                    </Link>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
