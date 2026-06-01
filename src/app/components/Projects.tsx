import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
    image: "project1",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description:
      "Intuitive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "project2",
    technologies: ["React", "Express.js", "PostgreSQL", "Socket.io"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "AI Chatbot",
    description:
      "Smart chatbot powered by AI that can answer questions, provide recommendations, and learn from conversations.",
    image: "project3",
    technologies: ["React", "Python", "TensorFlow", "REST API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website with smooth animations and interactive elements. Showcases projects and skills.",
    image: "project4",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard with detailed forecasts, interactive maps, and location-based weather alerts.",
    image: "project5",
    technologies: ["React", "Weather API", "Chart.js", "CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Blog Platform",
    description:
      "Full-stack blog platform with rich text editor, user authentication, comments, and social sharing features.",
    image: "project6",
    technologies: ["React", "Node.js", "MySQL", "Bootstrap"],
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Some of my recent work and creations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative z-10 text-6xl font-bold opacity-20">
                  {project.title.substring(0, 2)}
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-[#06B6D4] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-center text-sm font-medium hover:shadow-lg hover:shadow-[#6366F1]/50 transition-shadow"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-white/10 border border-white/20 rounded-lg text-center text-sm font-medium hover:bg-white/20 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
