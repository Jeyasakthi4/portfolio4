"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Code, Database } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Student Management System",
      description: "A comprehensive web application for managing student data with multi-role portal functionality including dashboards, attendance tracking, grades management, and discussion forums.",
      image: null,
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap 5"],
      features: [
        "Secure session-based authentication",
        "Multi-role dashboards (Student/Teacher/Admin)",
        "Attendance management system",
        "Grade tracking and reporting",
        "Discussion forums",
        "Responsive design"
      ],
      github: "#",
      demo: "#",
      category: "Web Application",
      status: "Completed",
      duration: "3 months"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills, projects, and experience with smooth animations and interactive elements.",
      image: null,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design",
        "Smooth animations",
        "Dark/Light theme",
        "Contact form",
        "SEO optimized",
        "Fast loading"
      ],
      github: "https://github.com/Jeyasakthi4",
      demo: "#",
      category: "Portfolio",
      status: "Completed",
      duration: "1 month"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Code size={32} className="text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                        <div className="mt-4 text-xs text-muted-foreground">
                          Project Screenshot Coming Soon
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-lg bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-lg bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Project Meta */}
                  <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Database size={16} className="mr-2" />
                      {project.category}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0"></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <motion.a
              href="https://github.com/Jeyasakthi4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Github size={20} className="mr-2" />
              Visit GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
