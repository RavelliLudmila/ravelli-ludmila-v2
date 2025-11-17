import dynamic from 'next/dynamic';
import CursorGlow from '@/components/CursorGlow';
import HeroSection from '@/components/HeroSection';
import MobileNavBar from '@/components/MobileNavBar';
import NavBar from '@/components/NavBar';
import SkillsSection from '@/components/SkillsSection';

const AboutSection = dynamic(() => import('@/components/AboutSection'));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'));

export default function Home() {
    return (
        <main>
            <NavBar />
            <CursorGlow />
            <MobileNavBar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
        </main>
    );
}
