"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    number: "01",
    eyebrow: "IMMERSIVE WEB PLATFORM",
    title: "3D Job Portal",
    description:
      "A new way to explore career opportunities. Candidates and recruiters meet inside an interactive 3D workspace built to make job discovery feel more human.",
    image: "/files/images/3d.png",
    technologies: ["React.js", "Node.js", "MongoDB", "Three.js", "Tailwind CSS"],
    highlights: ["Interactive 3D workspace", "Candidate & recruiter dashboards"],
    github: "https://github.com/Jeyasakthi4/3d-job-portal",
    demo: "https://d-job-portal.web.app",
    category: "Web Application",
    status: "Live project",
    duration: "3 months",
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    number: "02",
    eyebrow: "SAFETY, WITH YOU",
    title: "HerSafe Companion",
    description:
      "A personal safety companion that brings emergency support, live location sharing, and trusted contacts together in one thoughtful mobile experience.",
    image: "/files/images/her.png",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Dart"],
    highlights: ["SOS alerts & live GPS", "Emergency contact integration"],
    github: "https://github.com/Jeyasakthi4/her-cycle-companion",
    demo: "https://agent-69c546596356e64276a3d874--hersafecompanion.netlify.app/",
    category: "Mobile Application",
    status: "Live project",
    duration: "2 months",
    icon: ShieldCheck,
  },
  {
    id: 3,
    number: "03",
    eyebrow: "CONNECTED ENVIRONMENT",
    title: "Smart Wearable Air Monitoring System",
    description:
      "A compact IoT wearable that senses surrounding air quality and turns environmental data into timely, useful alerts for everyday wellbeing.",
    image: null,
    technologies: ["Arduino", "ESP32", "C++", "MQ Sensors", "Blynk"],
    highlights: ["Real-time air quality sensing", "Connected mobile alerts"],
    github:
      "https://github.com/Jeyasakthi4/Smart-Wearable-Air-Monitoring-Device",
    demo: null,
    category: "IoT Project",
    status: "Completed",
    duration: "4 months",
    icon: Wind,
  },
];

const filters = ["All", ...new Set(projects.map((project) => project.category))];

export default function Projects() {
  const [filterCategory, setFilterCategory] = useState("All");
  const visibleProjects =
    filterCategory === "All"
      ? projects
      : projects.filter((project) => project.category === filterCategory);

  return (
    <section id="projects" className="portfolio-section project-section">
      <div className="project-orb project-orb-one" aria-hidden="true" />
      <div className="project-orb project-orb-two" aria-hidden="true" />

      <div className="project-shell">
        <motion.header
          className="project-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="section-kicker">
            <Sparkles size={13} />
            SELECTED WORK · 2024—2026
          </span>
          <h2>
            Ideas made <span>real.</span>
          </h2>
          <p>
            A few things I&apos;ve designed, developed, and learned along the way.
            Each project starts with a real problem and ends with something
            people can use.
          </p>
          <div className="project-highlights" aria-label="Project portfolio summary">
            <span><strong>03</strong> featured projects</span>
            <i />
            <span><strong>03</strong> areas explored</span>
            <i />
            <span className="project-open-status"><span /> Always building</span>
          </div>
        </motion.header>

        <div className="project-toolbar">
          <div className="project-filter-label">
            <Layers3 size={15} />
            <span>EXPLORE BY DISCIPLINE</span>
          </div>
          <div className="project-filters" role="group" aria-label="Filter projects">
            {filters.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilterCategory(category)}
                className={`project-filter${filterCategory === category ? " is-active" : ""}`}
                aria-pressed={filterCategory === category}
              >
                {category}
                {filterCategory === category && (
                  <span className="project-filter-count">
                    {visibleProjects.length.toString().padStart(2, "0")}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => {
              const ProjectIcon = project.icon;
              const isFeatured = filterCategory === "All" && index === 0;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  whileHover={{ y: -5 }}
                  className={`project-card${isFeatured ? " project-card-featured" : ""}`}
                >
                  <div className="project-card-topline">
                    <span className="project-number">{project.number} / 03</span>
                    <span className="project-status">
                      <span />
                      {project.status}
                    </span>
                  </div>

                  <div className={`project-visual${project.image ? "" : " project-visual-device"}`}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} interface preview`}
                        fill
                        sizes={isFeatured
                          ? "(max-width: 760px) 100vw, 55vw"
                          : "(max-width: 760px) 100vw, 34vw"}
                        className="project-image"
                      />
                    ) : (
                      <div className="iot-preview" aria-label="Illustration of a connected air quality sensor">
                        <div className="iot-orbit iot-orbit-one" />
                        <div className="iot-orbit iot-orbit-two" />
                        <div className="iot-sensor">
                          <div className="iot-sensor-screen">
                            <Wind size={28} />
                            <span>AQ</span>
                          </div>
                          <span className="iot-sensor-light" />
                        </div>
                        <div className="iot-readout iot-readout-top">
                          <span>AIR QUALITY</span>
                          <strong>GOOD <Check size={12} /></strong>
                        </div>
                        <div className="iot-readout iot-readout-bottom">
                          <span>LIVE SENSOR</span>
                          <div className="iot-bars"><i /><i /><i /><i /><i /><i /><i /></div>
                        </div>
                        <span className="iot-node iot-node-one" />
                        <span className="iot-node iot-node-two" />
                        <span className="iot-node iot-node-three" />
                      </div>
                    )}
                    <span className="project-visual-wash" />
                    <span className="project-visual-label">
                      <Code2 size={12} />
                      {project.eyebrow}
                    </span>
                    <span className="project-visual-index">{project.number}</span>
                  </div>

                  <div className="project-card-content">
                    <div className="project-title-row">
                      <div className="project-icon"><ProjectIcon size={17} /></div>
                      <span className="project-category">{project.category}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-highlights-list">
                      {project.highlights.map((highlight) => (
                        <span key={highlight}>
                          <Check size={13} />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="project-tech-list" aria-label="Technologies used">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-card-footer">
                      <span className="project-duration">
                        <CalendarDays size={13} />
                        {project.duration}
                      </span>
                      <div className="project-actions">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="project-action project-action-code"
                        >
                          <Github size={15} />
                          <span>Source</span>
                          <ArrowUpRight size={13} />
                        </a>
                        {project.demo ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} live demo`}
                            className="project-action project-action-demo"
                          >
                            <span>Live demo</span>
                            <ExternalLink size={13} />
                          </a>
                        ) : (
                          <span className="project-action project-action-unavailable" aria-label="Live demo unavailable">
                            In progress
                            <ArrowDownRight size={13} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.a
          href="https://github.com/Jeyasakthi4"
          target="_blank"
          rel="noopener noreferrer"
          className="project-more-link"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="project-more-icon"><Github size={20} /></span>
          <span className="project-more-copy">
            <strong>Curious what I&apos;m building next?</strong>
            <span>Explore more experiments and code on GitHub</span>
          </span>
          <span className="project-more-action">Visit GitHub <ArrowUpRight size={15} /></span>
        </motion.a>
      </div>
    </section>
  );
}
