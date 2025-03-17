"use client";
import React from "react";
import HeroSection from "./components/hero";
import MyStory from "./components/myStory";
// import EducationExperience from "./components/educationExperience";
import PersonalInterests from "./components/personalInterest";
import Head from "next/head";
import Skills from "../../components/ui/skills";
import GridBackground from "@/components/ui/gridBackground";
// import Roadmap from "./components/roadmap";

const AboutPage = () => {
    const sections = [
        {
            key: 1,
            component: <HeroSection />,
        },
        {
            key: 2,
            component: <MyStory />,
        },
        {
            key: 4,
            component: <Skills />,
        },
        {
            key: 6,
            component: <PersonalInterests />,
        },
        // {
        //     key: 5,
        //     component: <EducationExperience />,
        // },
    ];

    return (
        <div className=" text-text pt-16 relative overflow-y-hidden">
            <Head>
                <title>About Me - Patrick John Medenilla</title>
                <meta
                    name="description"
                    content="Learn more about Patrick John Medenilla's journey, skills, and passion for web development."
                />
            </Head>
            {sections.map((v, i) => (
                <div className="z-0" key={i}>
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
        </div>
    );
};

export default AboutPage;
// 'use client';

// import React from "react";
// import Head from "next/head";
// import { motion } from "framer-motion";

// const AboutPage: React.FC = () => {
//     const containerVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 delayChildren: 0.3,
//                 staggerChildren: 0.1,
//             },
//         },
//     };

//     const itemVariants = {
//         hidden: { opacity: 0, y: 10 },
//         visible: { opacity: 1, y: 0 },
//     };

//     return (
//         <>
//             <Head>
//                 <title>About Me - Patrick John Medenilla</title>
//                 <meta
//                     name="description"
//                     content="Learn more about Patrick John Medenilla's journey, skills, and passion for web development."
//                 />
//             </Head>

//             <motion.div
//                 className="bg-background min-h-screen py-16 px-6 md:px-12 lg:px-24 text-text"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//             >
//                 <motion.section variants={itemVariants} className="mb-12">
//                     <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
//                         Driven by Code, Fueled by Curiosity
//                     </h1>
//                     <p className="text-lg leading-relaxed">
//                         Hello! I'm Patrick John Medenilla, a passionate web
//                         developer currently pursuing a Bachelor's degree in
//                         Information Technology with a major in Web Application
//                         Development at AMA University. My journey into the world
//                         of code began with a simple curiosity, and it has
//                         evolved into a full-blown passion for creating engaging
//                         and user-friendly web experiences.
//                     </p>
//                 </motion.section>

//                 <motion.section variants={itemVariants} className="mb-12">
//                     <h2 className="text-3xl font-semibold mb-4 text-accent">
//                         My Skillset
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <h3 className="text-2xl font-medium mb-2">
//                                 Frontend Development
//                             </h3>
//                             <ul className="list-disc list-inside">
//                                 <li>HTML5, CSS3, JavaScript, TypeScript</li>
//                                 <li>React.js, Next.js</li>
//                                 <li>Tailwind CSS, Framer Motion</li>
//                                 <li>Responsive Design Principles</li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-2xl font-medium mb-2">
//                                 Backend Development
//                             </h3>
//                             <ul className="list-disc list-inside">
//                                 <li>Node.js, Express.js</li>
//                                 <li>MongoDB, PostgreSQL (Basic Experience)</li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-2xl font-medium mb-2">
//                                 Other Skills
//                             </h3>
//                             <ul className="list-disc list-inside">
//                                 <li>Figma (UI/UX Design)</li>
//                                 <li>Git (Version Control)</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </motion.section>

//                 <motion.section variants={itemVariants} className="mb-12">
//                     <h2 className="text-3xl font-semibold mb-4 text-accent">
//                         Education & Learning
//                     </h2>
//                     <p className="text-lg leading-relaxed">
//                         Currently immersed in my Bachelor of Science in
//                         Information Technology, majoring in Web Application
//                         Development at AMA University. My studies provide a
//                         strong foundation in software development principles,
//                         database management, and web technologies. I'm always
//                         seeking new opportunities to expand my knowledge and
//                         stay ahead of the curve in the ever-evolving world of
//                         web development.
//                     </p>
//                 </motion.section>

//                 <motion.section variants={itemVariants} className="mb-12">
//                     <h2 className="text-3xl font-semibold mb-4 text-accent">
//                         Interests & Aspirations
//                     </h2>
//                     <p className="text-lg leading-relaxed">
//                         I'm deeply fascinated by modern frontend frameworks and
//                         UI/UX design. I enjoy crafting intuitive and visually
//                         appealing user interfaces. I'm also eager to explore the
//                         potential of AI integration in web applications. My goal
//                         is to become a well-rounded full-stack developer,
//                         capable of building robust and scalable web solutions
//                         from end to end.
//                     </p>
//                 </motion.section>

//                 <motion.section variants={itemVariants}>
//                     <h2 className="text-3xl font-semibold mb-4 text-accent">
//                         Let's Connect!
//                     </h2>
//                     <p className="text-lg leading-relaxed mb-4">
//                         I'm actively seeking On-the-Job Training (OJT)
//                         opportunities to further enhance my skills and
//                         contribute to real-world projects. If you're looking for
//                         a passionate and dedicated student developer, I&apos;d love
//                         to connect!
//                     </p>
//                     <p>
//                         <a
//                             href="mailto:patrick.medenilla23@gmail.com"
//                             className="text-primary hover:underline"
//                         >
//                             Email: patrick.medenilla23@gmail.com
//                         </a>
//                     </p>
//                     <p>
//                         <a
//                             href="https://github.com/xelfus23"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:underline"
//                         >
//                             GitHub: github.com/xelfus23
//                         </a>
//                     </p>
//                     <p>Phone: +63 9163318032</p>
//                 </motion.section>
//             </motion.div>
//         </>
//     );
// };

// export default AboutPage;
