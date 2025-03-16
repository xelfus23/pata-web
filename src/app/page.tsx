"use client";
import About from "@/components/homeComponents/about";
import Contact from "@/components/homeComponents/contact";
import Hero from "@/components/homeComponents/hero";
import Projects from "@/components/homeComponents/projects";
import Skills from "@/components/homeComponents/skills";
import CursorFollower from "@/components/ui/cursor";
import GridBackground from "@/components/ui/gridBackground";
// import Debug from "@/components/ui/debug";
export default function Home() {
    const sections = [
        { key: 1, component: <Hero /> },
        {
            key: 2,
            component: <About />,
        },
        {
            key: 3,
            component: <Skills />,
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
        <main className="scroll-smooth">
            <CursorFollower lag={0.05}/>

            {sections.map((v, i) => (
                <div className="min-h-screen z-0" key={i}>
                    {v.component}
                </div>
            ))}

            <div className="absolute h-fit w-full top-0">
                {Array(sections.length)
                    .fill(0)
                    .map((_, i) => (
                        <GridBackground key={i} />
                    ))}
            </div>

            {/* <Debug /> */}
        </main>
    );
}
