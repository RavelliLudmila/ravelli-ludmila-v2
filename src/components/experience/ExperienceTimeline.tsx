import { cn } from '@/lib/utils';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { ExperienceModal } from './ExperienceModal';

type ExperienceEntry = {
    id: string;
    category: string;
    title: string;
    institution: string;
    description: string;
    position: number;
    vertical: 'top' | 'bottom';
    offset?: number;
    width?: string;
    anchor?: 'left' | 'center' | 'right';
    highlight?: boolean;
    stack?: string[];
};

type TimelinePoint = {
    id: string;
    label: string;
    position: number;
    icon?: React.ReactNode;
    connector: {
        direction: 'top' | 'bottom';
        height: number;
    };
    connector2?: {
        direction: 'top' | 'bottom';
        height: number;
    };
    spanPosition: number;
    spanOffset: number;
};

const experiences: ExperienceEntry[] = [
    {
        id: 'degree',
        category: 'Experiencia academica',
        title: 'Tecnicatura Universitaria en Tecnologías de la Información',
        institution: 'Universidad Tecnológica Nacional - FRSF',
        description: 'Fundamentos de programación, arquitectura de computadoras, bases de datos, análisis de sistemas y gestión agil de proyectos.',
        position: 50,
        vertical: 'top',
        offset: -10,
        width: '100%',
        anchor: 'center',
        highlight: true,
        stack: ['Java', 'MySQL', 'UML', 'Arquitectura de Computadoras'],
    },
    {
        id: 'teaching',
        category: 'Experiencia profesional',
        title: 'Teaching Assistant',
        institution: 'SoyHenry Bootcamp',
        description:
            'Acompañamiento a estudiantes en el aprendizaje de tecnologías frontend y backend. Soporte técnico, liderazgo de sesiones de pair programming y revisión de proyectos.',
        position: 55,
        vertical: 'top',
        offset: 90,
        width: '40%',
        anchor: 'center',
        stack: ['Code Review', 'Mentoría Técnica', 'Pair Programming', 'Comunicación Efectiva'],
    },
    {
        id: 'fullstack',
        category: 'Experiencia academica',
        title: 'Full Stack Developer',
        institution: 'SoyHenry Bootcamp',
        description: 'Entrenamiento intensivo en React, Next.js, Node.js, Express, PostgreSQL, Tailwind CSS, TypeScript y metodologías ágiles.',
        position: 37.5,
        vertical: 'bottom',
        offset: -70,
        width: '55%',
        anchor: 'center',
        stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Git & GitHub'],
    },
    {
        id: 'frontend',
        category: 'Experiencia profesional',
        title: 'Frontend Developer && UX/UI Designer',
        institution: 'EcoRed - Henry Projects',
        description:
            'Desarrollo del frontend completo con Next.js 15, React 19 y TypeScript. Diseño de flujos de navegación, wireframes y componentes reutilizables.',
        position: 83,
        vertical: 'bottom',
        offset: -70,
        width: '35%',
        anchor: 'center',
        stack: ['Next.js', 'Tailwind CSS', 'Figma', 'Framer Motion'],
    },
];

const timelinePoints: TimelinePoint[] = [
    {
        id: 'start',
        label: 'Ago. 2023',
        position: 3,
        icon: <GraduationCap className="h-4 w-4" />,
        connector: { direction: 'top', height: 200 },
        spanOffset: 0,
        spanPosition: 10,
    },
    {
        id: 'degree',
        label: 'Abr. 2025',
        position: 15,
        icon: <GraduationCap className="h-4 w-4" />,
        connector: { direction: 'bottom', height: 50 },
        spanOffset: 0,
        spanPosition: 70,
    },
    {
        id: 'teaching',
        label: 'Jul. 2025',
        position: 40,
        icon: <Briefcase className="h-4 w-4" />,
        connector: { direction: 'top', height: 100 },
        spanOffset: 0,
        spanPosition: 10,
    },
    {
        id: 'fullstack',
        label: 'Sep. 2025',
        position: 60,
        icon: <GraduationCap className="h-4 w-4" />,
        connector: { direction: 'bottom', height: 50 },
        spanOffset: 0,
        spanPosition: 70,
    },
    {
        id: 'frontend',
        label: 'Oct. 2025',
        position: 70,
        icon: <Briefcase className="h-4 w-4" />,
        connector: { direction: 'bottom', height: 50 },
        connector2: { direction: 'top', height: 100 },
        spanOffset: 0,
        spanPosition: 10,
    },
    {
        id: 'now',
        label: 'Act.',
        position: 95,
        icon: <GraduationCap className="h-4 w-4" />,
        connector: { direction: 'top', height: 200 },
        connector2: { direction: 'bottom', height: 50 },
        spanOffset: -25,
        spanPosition: 70,
    },
];

const TOP_BASE_OFFSET = 240;
const BOTTOM_BASE_OFFSET = 140;

const ExperienceCard = ({ entry, onClick }: { entry: ExperienceEntry; onClick: () => void }) => (
    <Card className="cursor-pointer py-4 hover:gradient-bg-secondary transition-all duration-300" onClick={onClick}>
        <CardHeader className="px-4">
            <CardTitle>{entry.title}</CardTitle>
            <CardDescription>{entry.institution}</CardDescription>
        </CardHeader>
    </Card>
);

const ExperienceTimeline = () => {
    const [selectedExperience, setSelectedExperience] = useState<ExperienceEntry | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (experience: ExperienceEntry) => {
        setSelectedExperience(experience);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="block pt-12">
            <div className="relative h-auto min-h-[400px]">
                <div className="absolute left-0 top-1/2 h-[3px] rounded-full bg-foreground/15" style={{ width: '100%' }} />
                {timelinePoints.map((point) => (
                    <div
                        key={point.id}
                        className="absolute flex -translate-x-1/2 -translate-y-7 flex-col items-center gap-3 text-sm text-muted-foreground"
                        style={{ left: `${point.position}%`, top: '53%' }}
                    >
                        <div className="relative flex items-center justify-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-primary to-secondary text-background shadow-soft">
                                {point.icon}
                            </div>
                            {point.connector && (
                                <span
                                    className={cn(
                                        'absolute left-1/2 w-px bg-foreground/30',
                                        point.connector.direction === 'top' ? 'bottom-full' : 'top-full'
                                    )}
                                    style={{
                                        height: point.connector.height,
                                        transform: 'translateX(-50%)',
                                    }}
                                />
                            )}
                            {point.connector2 && (
                                <span
                                    className={cn(
                                        'absolute left-1/2 w-px bg-foreground/30',
                                        point.connector2.direction === 'top' ? 'bottom-full' : 'top-full'
                                    )}
                                    style={{
                                        height: point.connector2.height,
                                        transform: 'translateX(-50%)',
                                    }}
                                />
                            )}
                        </div>
                        <span
                            className="text-xs font-medium text-muted-foreground"
                            style={{ transform: `translate(${point.spanOffset}px, ${-point.spanPosition}px)` }}
                        >
                            {point.label}
                        </span>
                    </div>
                ))}

                {experiences.map((entry) => {
                    const top =
                        entry.vertical === 'top'
                            ? `calc(50% - ${TOP_BASE_OFFSET - (entry.offset ?? 0)}px)`
                            : `calc(50% + ${BOTTOM_BASE_OFFSET + (entry.offset ?? 0)}px)`;

                    const translate = entry.anchor === 'center' ? '-50%' : entry.anchor === 'right' ? '-100%' : '0';

                    return (
                        <div
                            key={entry.id}
                            className="absolute bg-background rounded-xl z-20"
                            style={{
                                left: `${entry.position}%`,
                                top,
                                width: entry.width || 'min(420px, 50vw)',
                                transform: `translateX(${translate})`,
                            }}
                        >
                            <ExperienceCard entry={entry} onClick={() => handleCardClick(entry)} />
                        </div>
                    );
                })}
            </div>
            <ExperienceModal isOpen={isModalOpen} onClose={handleCloseModal} experience={selectedExperience} />
        </div>
    );
};

export default ExperienceTimeline;
