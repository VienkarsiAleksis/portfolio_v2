import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Contact from '../Components/Contact';

export default function Home() {
    return (
        <main className="portfolio min-h-screen">
            <Navbar />
            <Hero />
            <Skills />
            <Education />
            <Contact />
        </main>
    );
}