import ExperienceCard from './ExperienceCard';

type ExperienceEntry = {
    id: string;
    category: string;
    title: string;
    institution: string;
    description: string;
    stack: string[];
};

const experiences: ExperienceEntry[] = [
    {
        id: 'frontend',
        category: 'Experiencia profesional',
        title: 'Frontend Developer && UX/UI Designer',
        institution: 'EcoRed - Henry Projects',
        description:
            'Desarrollo del frontend completo con Next.js 15, React 19 y TypeScript. Diseño de flujos de navegación, wireframes y componentes reutilizables.',
        stack: ['Next.js', 'Tailwind CSS', 'Figma', 'Framer Motion'],
    },
    {
        id: 'teaching',
        category: 'Experiencia profesional',
        title: 'Teaching Assistant',
        institution: 'SoyHenry Bootcamp',
        description:
            'Acompañamiento a estudiantes en el aprendizaje de tecnologías frontend y backend. Soporte técnico, liderazgo de sesiones de pair programming y revisión de proyectos.',
        stack: ['Code Review', 'Mentoría Técnica', 'Pair Programming', 'Comunicación Efectiva'],
    },
    {
        id: 'fullstack',
        category: 'Experiencia academica',
        title: 'Full Stack Developer',
        institution: 'SoyHenry Bootcamp',
        description: 'Entrenamiento intensivo en React, Next.js, Node.js, Express, PostgreSQL, Tailwind CSS, TypeScript y metodologías ágiles.',
        stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Git & GitHub'],
    },
    {
        id: 'degree',
        category: 'Experiencia academica',
        title: 'Tecnicatura Universitaria en Tecnologías de la Información',
        institution: 'Universidad Tecnológica Nacional - FRSF',
        description: 'Fundamentos de programación, arquitectura de computadoras, bases de datos, análisis de sistemas y gestión agil de proyectos.',
        stack: ['Java', 'MySQL', 'UML', 'Arquitectura de Computadoras'],
    },
];

const ExperienceTimeline = () => {
    return (
        <div className="relative w-full max-w-4xl mx-auto py-8 px-4">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 -translate-x-1/2" />

            <div className="relative space-y-16">
                {experiences.map((experience) => {
                    return (
                        <div key={experience.id} className="relative flex flex-col items-center">
                            <div className="w-full mb-4">
                                <ExperienceCard experience={experience} modal={false} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ExperienceTimeline;
