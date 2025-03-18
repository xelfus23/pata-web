import Section from "../../components/ui/section";
import ProjectCard from "../../components/ui/card";
import { projectsData } from "@/lib/project/project-data";

const Projects = () => {
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
        </Section>
    );
};

export default Projects;
