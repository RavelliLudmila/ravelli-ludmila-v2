import dynamic from 'next/dynamic';
import CursorGlow from '@/components/CursorGlow';
import HeroSection from '@/components/HeroSection';
import MobileNavBar from '@/components/MobileNavBar';
import NavBar from '@/components/NavBar';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SectionWheelNavigator from '@/components/SectionWheelNavigator';
import { ContactProvider } from '@/context/ContactContext';
import Notification from '@/components/contact/Notification';

const AboutSection = dynamic(() => import('@/components/AboutSection'));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'));

const SECTIONS = [
    { id: 'hero' },
    { id: 'about' },
    { id: 'experience' },
    { id: 'skills' },
    {
        id: 'projects',
        desktopTargetId: 'projects-scroll',
        desktopExtraSnapIds: ['project-1', 'project-2', 'project-3'],
    },
];

export default function Home() {
    return (
        <ContactProvider>
            <SectionWheelNavigator sections={SECTIONS} />
            <main>
                <NavBar />
                <Notification />
                <CursorGlow />
                <MobileNavBar />
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <SkillsSection />
                <ProjectsSection />
            </main>
        </ContactProvider>
    );
}
