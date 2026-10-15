import { Head } from '@inertiajs/react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Contact from '../Components/Contact';

export default function Home() {
    return (
        <>
            <Head>
                <title>Aleksis Ošiņš — Full-stack Developer</title>

                <meta
                    name="description"
                    content="Portfolio of Aleksis Ošiņš, a full-stack developer specializing in React, Laravel, PHP and modern web development."
                />
            </Head>

            <main className="portfolio min-h-screen">
                <Navbar />
                <Hero />
                <Skills />
                <Education />
                <Contact />
            </main>
        </>
    );
}