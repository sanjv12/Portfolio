import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Project Hub",
    description:
      "Developed a web application that allows users to add their project details and links to their accounts. Enabled users to search for other users and view their projects. Made each user’s project portfolio accessible across the internet using their username.",
    tech: [ "Springboot","ReactJS", "Java","HTML","CSS","Javascript"],
    link: "#",
    github: "#",
  },
  {
    title: "Fileshare Website",
    description:
      "Developed a file-sharing platform that allows users to upload and download files without authentication, using a user-provided key as input for file access.",
    tech: ["Flask", "SQLite", "Python","HTML","CSS","Javascript"],
    link: "#",
    github: "#",
  },
  {
    title: "Sign Language Conversation Tool",
    description:
      "Developed a Sign Language conversation tool that convertes American Sign Language to text and text to Sign Language. Utilized a Machine Learning Model to recogonize sign language and convert it to corresponding letter.",
    tech: ["Flask", "SQLite", "Python","HTML","CSS","Javascript","TensorFlow"],
    link: "#",
    github: "#",
  },
  {
    title: "Library Management System",
    description:
      "Developed a Library Management System with distinct user and admin portals to streamline library operations. Enabled users to browse books, place requests, and manage returns, while allowing admins to add books, approve or deny requests, and manage issued items",
    tech: ["Flask", "SQLite", "Python","HTML","CSS","Javascript"],
    link: "#",
    github: "#",
  },
  {
    title: "Chatbot for Prakruti Assessment",
    description:
      "Developed a web-based chatbot interface for Prakruti assessment, enabling users to interactively receive personalized health insights. Built an algorithm to analyze user responses and provide tailored recommendations on food, lifestyle adjustments, and health concerns, with an emphasis on privacy and data security",
    tech: ["Flask", "SQLite", "Python","HTML","CSS","Javascript"],
    link: "#",
    github: "#",
  },

];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore some of my recent work and side projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                  <div className="flex gap-4 pt-4 border-t border-border">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      Source
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
