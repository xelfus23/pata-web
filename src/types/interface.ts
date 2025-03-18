// src/types/project.ts
export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string; // Optional, as not all projects might be open-source
    liveUrl?: string; // Optional, as not all projects might be deployed
    highlights: string[];
    imageUrl: string;
}
