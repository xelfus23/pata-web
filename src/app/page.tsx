"use client";
import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Hero from "@/app/components/hero";
import Projects from "@/app/components/projects";
import CursorFollower from "@/components/ui/cursor";
import GridBackground from "@/components/ui/gridBackground";

export default function Home() {
    const sections = [
        { key: 1, component: <Hero /> },
        {
            key: 2,
            component: <About />,
        },
        {
            key: 4,
            component: <Projects />,
        },
        {
            key: 5,
            component: <Contact />,
        },
    ];

    return (
        <main className="scroll-smooth overflow-y-hidden relative">
            <CursorFollower lag={0.05} />
            {sections.map((v, i) => (
                <div className="min-h-screen z-0" key={i}>
                    {v.component}
                </div>
            ))}

            <div className="absolute h-fit w-full top-0 -z-10">
                {Array(sections.length)
                    .fill(0)
                    .map((_, i) => (
                        <GridBackground key={i} />
                    ))}
            </div>
        </main>
    );
}
