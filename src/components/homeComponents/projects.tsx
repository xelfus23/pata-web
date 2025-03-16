import Section from "../ui/section";
import ProjectCard from "../ui/card";

const Projects = () => {
    const projects = [
        {
            title: "Fitness App",
            description:
                "A fitness mobile application that leverages AI to generate exercise plans.",
            technologies: ["React Native", "React"],
            githubUrl: "#",
            liveUrl: "#",
        },
        {
            title: "Fitness App",
            description:
                "A fitness mobile application that leverages AI to generate exercise plans.",
            technologies: ["React Native", "React"],
            githubUrl: "#",
            liveUrl: "#",
        },
        {
            title: "Fitness App",
            description:
                "A fitness mobile application that leverages AI to generate exercise plans.",
            technologies: ["React Native", "React"],
            githubUrl: "#",
            liveUrl: "#",
        },
        {
            title: "Fitness App",
            description:
                "A fitness mobile application that leverages AI to generate exercise plans.",
            technologies: ["React Native", "React"],
            githubUrl: "#",
            liveUrl: "#",
        },
    ];


    return (
        <Section
            id="projects"
            title="Projects"
            subtitle="Check out some of my recent work"
        >
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                        index={index}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
