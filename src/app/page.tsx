import { HeroSection } from '@/components/HeroSection';
import MobileNavBar from '@/components/MobileNavBar';
import NavBar from '@/components/NavBar';

export default function Home() {
    return (
        <main>
            <NavBar />
            <MobileNavBar />
            <HeroSection />
        </main>
    );
}
