import ProjectsCarousel from './projects/ProjectsCarousel';
import ProjectsSlides from './projects/ProjectsSlides';

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

export const projects: Project[] = [
    {
        id: 0,
        title: 'EcoRed',
        description:
            'Marketplace sustentable para conectar usuarios que desean descartar materiales con emprendedores que los reutilizan. Diseñé y desarrollé el frontend completo con enfoque en accesibilidad y experiencia de usuario, colaborando directamente con backend y data.',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma'],
        gradient: 'from-purple-400 to-indigo-400',
        image: '/EcoRed.webp',
        customRotate: '3deg',
    },
    {
        id: 1,
        title: 'PsyMatch',
        description:
            'Plataforma para conectar pacientes con profesionales de salud mental mediante un algoritmo de matching. Lideré la implementación frontend, diseñé dashboards para distintos tipos de usuario e integré Google OAuth, MercadoPago y Mapbox.',
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
            'E-commerce diseñado para ofrecer una experiencia de compra moderna y elegante. Implementé el App Router de Next.js, diseñé la interfaz con modo oscuro/claro y desarrollé funcionalidades de carrito y dashboard de usuario.',
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
    return (
        <section id="projects">
            <div className="hidden sm:block">
                <ProjectsSlides />
            </div>
            <div className="block sm:hidden">
                <ProjectsCarousel />
            </div>
        </section>
    );
};

export default ProjectsSection;
