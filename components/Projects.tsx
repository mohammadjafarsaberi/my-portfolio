import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "React AFG Map",
    description:
      "An interactive map of Afghanistan built with React and Leaflet.js. Features region highlighting, data visualization, and responsive design.",
    imageUrl: "/afg-map-screenshot.jpg",
    tags: ["React", "JavaScript", "Leaflet.js", "GeoJSON"],
    liveUrl: "https://react-afg-map.netlify.app/",
    repoUrl: "https://github.com/mohammadjafarsaberi/react-map",
  },
  {
    title: "Teez Chat",
    description:
      "A realtime chat starter built with Laravel, Inertia, and React, using Tailwind CSS and SQLite as a modern baseline for interactive applications.",
    imageUrl: "/teezChat.JPG",
    tags: ["Laravel 12", "React 19", "Inertia", "Tailwind CSS", "SQLite"],
    liveUrl: null,
    repoUrl: "https://github.com/mohammadjafarsaberi/TeezChat",
  },
  {
    title: "Portfolio Website",
    description:
      "This responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features modern animations and clean UI.",
    imageUrl: "/portfolio.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: process.env.NEXT_PUBLIC_SITE_URL || '',
    repoUrl: "https://github.com/mohammadjafarsaberi/my-portfolio",
  },
  {
    title: "Password Generator",
    description:
      "A secure password generator with customizable options (length, character types). Built with vanilla JavaScript and CSS.",
    imageUrl: "/password-generator.jpg",
    tags: ["JavaScript", "CSS", "Security"],
    liveUrl: null,
    repoUrl: "https://github.com/mohammadjafarsaberi/password-generator",
  },

];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Here are some of my completed works. More projects coming soon!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={`${index * 0.15}s`}
              isPlaceholder={
                !project.liveUrl && project.repoUrl.includes("placeholder")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
