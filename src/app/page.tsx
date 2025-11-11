import AboutSection from '@/components/AboutSection';
import CursorGlow from '@/components/CursorGlow';
import HeroSection from '@/components/HeroSection';
import MobileNavBar from '@/components/MobileNavBar';
import NavBar from '@/components/NavBar';

export default function Home() {
    return (
        <main>
            <NavBar />
            <CursorGlow />
            <MobileNavBar />
            <HeroSection />
            <AboutSection />
        </main>
    );
}
