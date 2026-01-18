"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      "Worked on client-based web projects focusing on responsive UI development and frontend components.",
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
      <section id="experience" className="py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="relative ml-6">
            <motion.span
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1 }}
              className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-blue-500/70 to-transparent"
            />

            {internships.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 ml-10 relative"
              >
                <span className="absolute -left-[47px] top-5 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.9)]" />

                <div className="bg-background/80 backdrop-blur border border-border rounded-xl p-6 hover:-translate-y-1 transition hover:border-blue-500/50 hover:shadow-[0_0_45px_rgba(59,130,246,0.45)]">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-blue-500" />
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                  </div>

                  <span className="inline-block mb-3 text-sm text-blue-400 font-medium">
                    {item.company}
                  </span>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
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
                        className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.certificate}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-400 text-sm hover:underline"
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
        className="py-20 bg-gradient-to-b from-black via-[#050b1d] to-black"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Certifications
          </h2>
          <p className="text-center text-muted-foreground mb-14">
            Credentials that back up the skills I apply in real-world scenarios 📜
          </p>

          <div
            className="relative flex justify-center items-center h-[300px]"
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
                    <div className="group relative">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-[300px] h-[210px] object-cover rounded-xl border border-white/10 shadow-xl"
                      />

                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition rounded-xl flex flex-col items-center justify-center text-center px-4">
                        <p className="text-white font-semibold text-sm mb-1">
                          {cert.title}
                        </p>
                        <span className="text-blue-400 text-xs">
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
              className="p-2 rounded-full border border-white/20 hover:bg-white/10"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full border border-white/20 hover:bg-white/10"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {certifications.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
