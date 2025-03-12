"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import HomeBackground from "@/components/ui/homeBackground";

export default function Home() {
    return (
        <main className="scroll-smooth overflow-hidden">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <HomeBackground />
        </main>
    );
}
