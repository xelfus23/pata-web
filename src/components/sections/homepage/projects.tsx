import Section from "../../ui/section";
import ProjectCard from "../../ui/card";
import { projectsData } from "@/lib/project/project-data";
import { motion } from "framer-motion";
import { useCursorState } from "@/utils/cursorProvider";

const Projects = () => {
    const { setCursorState } = useCursorState();

    return (
        <Section
            id="projects"
            title="Featured Projects"
            subtitle="Check out some of my recent work"
        >
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                        imageUrl={project.imageUrl} //Pass Image to Project Card
                        index={index}
                    />
                ))}
            </div>
            <div className="flex items-center justify-center mt-20">
                <motion.a
                    href="/projects"
                    onHoverStart={() => setCursorState({ scale: 1 })}
                    onHoverEnd={() => setCursorState({ scale: 0.5 })}
                    className="bg-primary hover:bg-primary/80 px-6 py-3 rounded-md text-background hover:cursor-pointer"
                >
                    View more
                </motion.a>
            </div>
        </Section>
    );
};

export default Projects;
