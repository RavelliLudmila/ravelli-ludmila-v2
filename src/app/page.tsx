import dynamic from 'next/dynamic';
import CursorGlow from '@/components/CursorGlow';
import HeroSection from '@/components/HeroSection';
import MobileNavBar from '@/components/MobileNavBar';
import NavBar from '@/components/NavBar';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import { ContactProvider } from '@/context/ContactContext';

const AboutSection = dynamic(() => import('@/components/AboutSection'));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'));

export default function Home() {
    return (
        <ContactProvider>
            <main>
                <NavBar />
                <CursorGlow />
                <MobileNavBar />
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ExperienceSection />
            </main>
        </ContactProvider>
    );
}
