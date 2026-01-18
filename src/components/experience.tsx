"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  ExternalLink,
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
  },
  {
    role: "Web Development Intern",
    company: "Makos Infotech Pvt. Ltd.",
    period: "Jun 2025 – Jul 2025",
    location: "Offline",
    description:
      "Worked on client-based web projects focusing on responsive UI development and frontend components.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];

/* ================= CERTIFICATIONS ================= */

const certifications = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    image: "/images/certificates/genai.png",
    link: "/files/certificates/genai.pdf",
  },
  {
    title: "Data Science & Analytics",
    issuer: "HP Foundation",
    image: "/images/certificates/hp.png",
    link: "/files/certificates/hp.pdf",
  },
  {
    title: "Graphic Design Essentials",
    issuer: "Canva",
    image: "/images/certificates/design.png",
    link: "/files/certificates/design.pdf",
  },
];

/* ================= COMPONENT ================= */

export default function ExperienceAndCertifications() {
  const [current, setCurrent] = useState(0);

  /* Auto Carousel */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certifications.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <h2 className="text-4xl font-bold mb-20 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        {/* ================= TIMELINE ================= */}
        <div className="relative border-l border-blue-500/30 ml-6">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 ml-10 relative"
            >
              {/* Dot */}
              <span className="absolute -left-[47px] top-4 w-4 h-4 rounded-full bg-blue-500" />

              {/* Card */}
              <div className="
                bg-background/80 backdrop-blur
                border border-border
                rounded-xl p-6
                hover:border-blue-500/50
                hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]
                transition
              ">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-blue-500" />
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                </div>

                <p className="text-blue-400 font-medium">
                  {item.company}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground my-3">
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

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3 py-1 text-xs rounded-full
                        bg-blue-500/10 text-blue-400
                        border border-blue-500/20
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= CERTIFICATIONS ================= */}
        <h2 className="text-4xl font-bold mt-32 mb-10 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        {/* Carousel */}
        <div className="relative flex justify-center overflow-hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="
              w-[360px] bg-background/80 backdrop-blur
              border border-border rounded-xl
              hover:shadow-[0_0_40px_rgba(59,130,246,0.45)]
            "
          >
            <img
              src={certifications[current].image}
              alt={certifications[current].title}
              className="w-full h-[220px] object-cover rounded-t-xl"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold">
                {certifications[current].title}
              </h3>
              <p className="text-blue-400 text-sm">
                {certifications[current].issuer}
              </p>

              <a
                href={certifications[current].link}
                target="_blank"
                className="inline-flex items-center gap-2 mt-4 text-blue-400 text-sm hover:underline"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

