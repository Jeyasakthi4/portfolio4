"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Code, Database, Star, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const projects = [
    {
      id: 1,
      title: "3D Job Portal",
      description:
        "A modern job portal platform that connects job seekers and recruiters with interactive 3D UI elements, secure authentication, and real-time job application tracking.",
      image: "/files/images/3d.png",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Three.js",
        "Tailwind CSS"
      ],
      features: [
        "Secure user authentication",
        "3D interactive user interface",
        "Job posting and application system",
        "Recruiter and candidate dashboards",
        "Real-time application tracking",
        "Responsive design"
      ],
      github: "https://github.com/Jeyasakthi4/3d-job-portal",
      demo: "https://d-job-portal.web.app",
      category: "Web Application",
      status: "Completed",
      duration: "3 months",
      rating: 5
    },
    {
      id: 2,
      title: "HerSafe Companion",
      description:
        "A women safety application designed to provide emergency assistance, live location tracking, and instant alert systems for enhanced personal security.",
      image: "/files/images/her.png",
      technologies: [
        "Flutter",
        "Firebase",
        "Google Maps API",
        "Dart"
      ],
      features: [
        "SOS emergency alerts",
        "Live GPS location tracking",
        "Emergency contact integration",
        "Real-time notifications",
        "User-friendly mobile interface",
        "Secure cloud data storage"
      ],
      github: "https://github.com/Jeyasakthi4/her-cycle-companion",
      demo: "https://agent-69c546596356e64276a3d874--hersafecompanion.netlify.app/",
      category: "Mobile Application",
      status: "Completed",
      duration: "2 months",
      rating: 5
    },
    {
      id: 3,
      title: "Smart Wearable Air Monitoring System",
      description:
        "An IoT-based wearable device that monitors air quality parameters in real time and alerts users about harmful environmental conditions.",
      image: null,
      technologies: [
        "Arduino",
        "ESP32",
        "IoT",
        "C++",
        "MQ Sensors",
        "Blynk"
      ],
      features: [
        "Real-time air quality monitoring",
        "Wearable compact design",
        "Gas and pollution detection",
        "Mobile app integration",
        "Instant health alerts",
        "Cloud-based data monitoring"
      ],
      github: "https://github.com/Jeyasakthi4/Smart-Wearable-Air-Monitoring-Device",
      demo: "#",
      category: "IoT Project",
      status: "Completed",
      duration: "4 months",
      rating: 4
    }
  ];

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = filterCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === filterCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: "-10%", right: "-5%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          style={{ bottom: "-10%", left: "-5%" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md"
              animate={{
                borderColor: ["rgba(var(--color-primary), 0.3)", "rgba(var(--color-primary), 0.8)", "rgba(var(--color-primary), 0.3)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-sm font-medium text-primary">Featured Works</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Crafted <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">Projects</span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore a curated collection of innovative solutions I&apos;ve built, each representing unique challenges and creative implementations
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, catIdx) => (
            <motion.button
              key={category}
              onClick={() => setFilterCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ delay: catIdx * 0.05 }}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filterCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/50 border border-primary/50"
                  : "bg-accent hover:bg-accent/80 text-foreground border border-border hover:border-primary/30"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative h-full cursor-pointer"
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                animate={{ 
                  rotateZ: [0, 360],
                  backgroundPosition: ["0%", "100%"]
                }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
              />

              <div className="relative h-full bg-card/80 backdrop-blur-md rounded-2xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col">
                {/* Image Section */}
                <div className="relative h-64 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden flex-shrink-0">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ 
                      scale: hoveredId === project.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          y: hoveredId === project.id ? -10 : 0
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                        <motion.div
                          animate={{ 
                            rotate: hoveredId === project.id ? 360 : 0,
                            scale: hoveredId === project.id ? 1.2 : 1
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <Code size={60} className="text-primary/60" />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>

                  {/* Animated overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                    animate={{
                      opacity: hoveredId === project.id ? 0.4 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Status Badge */}
                  <motion.div
                    className="absolute top-4 right-4 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    animate={{
                      y: hoveredId === project.id ? -5 : 0
                    }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.span 
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.status}
                    </motion.span>
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    className="absolute top-4 left-4 flex items-center gap-1 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + index * 0.1 }}
                  >
                    {[...Array(project.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 12 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <motion.div
                    className="flex items-start justify-between mb-3"
                    animate={{
                      x: hoveredId === project.id ? 5 : 0
                    }}
                  >
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                      {project.title}
                    </h3>
                  </motion.div>

                  <motion.p 
                    className="text-sm text-muted-foreground mb-4 line-clamp-2"
                    animate={{
                      color: hoveredId === project.id ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.6)"
                    }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack with stagger animation */}
                  <motion.div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ y: -3, scale: 1.05 }}
                          transition={{ delay: techIdx * 0.05 + index * 0.1 }}
                          className="px-2.5 py-1.5 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <motion.span 
                          className="px-2.5 py-1.5 text-xs font-medium text-muted-foreground bg-accent/40 rounded border border-border/50"
                          whileHover={{ scale: 1.05 }}
                        >
                          +{project.technologies.length - 3}
                        </motion.span>
                      )}
                    </div>
                  </motion.div>

                  {/* Meta Info */}
                  <motion.div 
                    className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b border-border/50"
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0.7
                    }}
                  >
                    <motion.div 
                      className="flex items-center gap-1"
                      whileHover={{ x: 2 }}
                    >
                      <Calendar size={14} />
                      {project.duration}
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-1"
                      whileHover={{ x: -2 }}
                    >
                      <Database size={14} />
                      {project.category}
                    </motion.div>
                  </motion.div>

                  {/* Action Links */}
                  <motion.div 
                    className="flex items-center gap-3 mt-auto"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-accent hover:bg-primary/20 text-foreground hover:text-primary border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-gradient-to-r from-primary/30 to-secondary/30 hover:from-primary hover:to-secondary text-primary hover:text-primary-foreground border border-primary/30 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                  </motion.div>
                </div>

                {/* Hover overlay glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  animate={{
                    boxShadow: hoveredId === project.id 
                      ? "inset 0 0 30px rgba(var(--color-primary), 0.2)" 
                      : "inset 0 0 0px rgba(var(--color-primary), 0)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block relative group">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000"
              animate={{ 
                rotateZ: [0, 360],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
            />
            <motion.div 
              className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-colors overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"
                animate={{
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <motion.div className="relative">
                <motion.h3 
                  className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Want to see more?
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground mb-6 text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Explore my complete portfolio and contributions on GitHub
                </motion.p>
                <motion.a
                  href="https://github.com/Jeyasakthi4"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 border border-primary/50"
                >
                  <Github size={24} className="mr-2" />
                  Visit GitHub Profile
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ChevronRight size={24} className="ml-2" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
