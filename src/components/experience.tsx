"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Briefcase,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ================= INTERNSHIPS ================= */

const internships = [
  {
    role: "Software Development Intern",
    company: "TechnoHacks Solutions Pvt. Ltd.",
    period: "Apr 2025 – May 2025",
    location: "Online",
    description:
      "Worked on real-world development tasks, strengthening JavaScript logic, Git workflows, and professional coding practices.",
    skills: ["JavaScript", "Git & GitHub", "Problem Solving"],
    certificate: "/files/certificates/TechnoHacks intern.pdf",
  },
  {
    role: "Web Development Intern",
    company: "Makos Infotech Pvt. Ltd.",
    period: "Jun 2025 – Jul 2025",
    location: "Offline",
    description:
      "Worked on client-based web projects focusing on responsive UI development and full stack components.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    certificate: "/files/certificates/makos intern.pdf",
  },
];

/* ================= CERTIFICATIONS ================= */

const certifications = [
  {
    title: "Python Skillrack",
    issuer: "Skillrack",
    image: "/files/certificates/skillrack.jpeg",
    file: "/files/certificates/skillrack.pdf",
  },
  {
    title: "Graphic Design Essentials",
    issuer: "Canva",
    image: "/files/certificates/canva graphic.jpeg",
    file: "/files/certificates/canva graphic course.pdf",
  },
  {
    title: "Canva Essentials",
    issuer: "Canva",
    image: "/files/certificates/canva.jpeg",
    file: "/files/certificates/canva.pdf",
  },
  {
    title: "JavaScript Bootcamp",
    issuer: "Udemy",
    image: "/files/certificates/udemy javascript course.jpeg",
    file: "/files/certificates/udemy javascript course.pdf",
  },
  {
    title: "JavaScript Bootcamp",
    issuer: "Udemy",
    image: "/files/certificates/udemy html css course.jpeg",
    file: "/files/certificates/udemy html css course.pdf",
  },
];

/* ================= COMPONENT ================= */

export default function ExperienceAndCertifications() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  /* Auto Carousel */
  useEffect(() => {
    if (hovered) return;

    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % certifications.length),
      4500
    );
    return () => clearInterval(timer);
  }, [hovered]);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );

  const next = () =>
    setCurrent((prev) => (prev + 1) % certifications.length);

  return (
    <>
      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="portfolio-section experience-section py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="portfolio-section-heading">
            <span className="section-kicker">THE JOURNEY SO FAR</span>
            <h2>Experience</h2>
            <p>Learning by building, collaborating, and solving real-world problems.</p>
          </div>

          <div className="experience-timeline relative ml-4 sm:ml-6">
            <motion.span
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1 }}
              className="experience-rail absolute left-0 top-0 w-[2px]"
            />

            {internships.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="experience-entry mb-16 ml-6 sm:ml-10 relative"
              >
                <span className="experience-dot absolute -left-[31px] sm:-left-[47px] top-5 w-4 h-4 rounded-full" />

                <div className="experience-card glass-panel rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-primary" />
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                  </div>

                  <span className="inline-block mb-3 text-sm text-primary font-medium">
                    {item.company}
                  </span>

                  <div className="experience-meta flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {item.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-chip px-3 py-1 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link inline-flex items-center gap-2 text-sm"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section
        id="certifications"
        className="portfolio-section certifications-section py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="portfolio-section-heading">
            <span className="section-kicker">ALWAYS IN PROGRESS</span>
            <h2>Certifications</h2>
            <p>
            Credentials that back up the skills I apply in real-world scenarios 📜
            </p>
          </div>

          <div
            className="relative flex justify-center items-center h-[300px] overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {certifications.map((cert, i) => {
              const offset = i - current;

              return (
                <motion.div
                  key={i}
                  className="absolute"
                  animate={{
                    x: offset * 320,
                    scale: offset === 0 ? 1 : 0.85,
                    opacity: offset === 0 ? 1 : 0.45,
                    zIndex: offset === 0 ? 10 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  <a href={cert.file} target="_blank">
                    <div className="certification-card group relative">
                      <div className="certification-image">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 640px) 82vw, 300px"
                        className="object-cover"
                      />
                      </div>

                      <div className="certification-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition rounded-xl flex flex-col items-center justify-center text-center px-4">
                        <p className="text-white font-semibold text-sm mb-1">
                          {cert.title}
                        </p>
                        <span className="text-primary text-xs">
                          {cert.issuer}
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Previous certificate"
              className="carousel-control p-2 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next certificate"
              className="carousel-control p-2 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {certifications.map((_, i) => (
              <span
                key={i}
                className={`carousel-dot${i === current ? " is-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
