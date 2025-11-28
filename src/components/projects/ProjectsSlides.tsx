'use client';

import { ArrowDown, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import { projects } from '../ProjectsSection';

interface CSSPropertiesWithVars extends React.CSSProperties {
    '--count'?: number;
    '--custom-rotate'?: string;
    '--z-index'?: number;
    '--animation-timeline'?: string;
    viewTimeline?: string;
    timelineScope?: string;
}

const ProjectsSlides = () => {
    const timelineScopes = projects.map((_, i) => `--trigger-${i}`).join(', ');

    return (
        <section
            className="selected-work gradient-bg"
            style={
                {
                    '--count': 8,
                    timelineScope: timelineScopes,
                } as CSSPropertiesWithVars
            }
        >
            <div id="projects-scroll" style={{ position: 'absolute', top: '40vh' }} />
            <div id="project-0" style={{ position: 'absolute', top: '40vh' }} />
            <div id="project-1" style={{ position: 'absolute', top: '140vh' }} />
            <div id="project-2" style={{ position: 'absolute', top: '240vh' }} />
            <div id="project-3" style={{ position: 'absolute', top: '340vh' }} />

            <div className="scroll-heading-fixed px-16">
                <h2 className="mb-4 text-center">
                    <span className="text-gradient">Proyectos</span>
                </h2>
                <p className="text-center opacity-70 max-w-2xl mx-auto mb-8">Proyectos reales que combinan tecnología, diseño y propósito</p>

                <div className="flex justify-end items-center mt-15 mb-8 text-muted-foreground opacity-50 animate-bounce">
                    <p className="text-sm pr-2">Desliza hacia abajo</p>
                    <ArrowDown className="w-6 h-6" />
                </div>
            </div>

            <div className="card-scroll-triggers pb-16">
                {projects.map((_, i) => (
                    <div key={i} className="scroll-trigger" style={{ viewTimeline: `--trigger-${i}` } as CSSPropertiesWithVars} aria-hidden="true" />
                ))}
            </div>

            <div className="selected-work__items">
                {projects.map((project, index) => (
                    <Card
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
                        <CardContent className="work-thumb__content">
                            <div className="flex gap-6 mb-6">
                                <Image
                                    src={project.image || '/default-image.png'}
                                    alt={project.title}
                                    width={350}
                                    height={350}
                                    className="rounded-lg"
                                />
                                <div className="flex flex-col items-start">
                                    <h3 className="text-2xl font-light">{project.title}</h3>
                                    <p className="opacity-70 leading-relaxed text-base text-start">{project.description}</p>
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
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSlides;
