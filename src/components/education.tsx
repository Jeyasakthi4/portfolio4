"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Star,
} from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Sri Sairam Engineering College",
      location: "Chennai, India",
      period: "2023 – 2027",
      status: "Currently Pursuing",
      gpa: "In Progress",
      description:
        "Building a strong foundation in computer science with hands-on exposure to programming, web development, and core security concepts.",
      subjects: [
        "Data Structures & Algorithms",
        "Computer Networks",
        "Web Development",
        "Database Management Systems",
        "Software Engineering",
        "Cryptography",
      ],
      achievements: [
        "Consistent academic performance",
        "Active participant in coding competitions",
      ],
    },
    {
      degree: "Intermediate (XII)",
      institution: "St. Mary's Hr. Sec. School",
      location: "Chennai, India",
      period: "2021 – 2023",
      status: "Completed",
      gpa: "89%",
      description:
        "Completed higher secondary education with a strong focus on Mathematics, Physics, and Computer Science.",
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      achievements: [
        "Secured 89%",
        "Strong foundation in STEM subjects",
        "Developed analytical thinking",
      ],
    },
    {
      degree: "Secondary School Certificate (X)",
      institution: "Sri Bala Vidyalaya (CBSE)",
      location: "Chennai, India",
      period: "2019 – 2021",
      status: "Completed",
      gpa: "91%",
      description:
        "Achieved excellent academic results with strong fundamentals across all core subjects.",
      subjects: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Computer Applications",
      ],
      achievements: [
        "Achieved 91%",
        "Academic excellence award",
        "Consistent top performance",
      ],
    },
  ];

  return (
    <section id="education" className="portfolio-section education-section py-28 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="portfolio-section-heading"
        >
          <span className="section-kicker">A FOUNDATION FOR WHAT&apos;S NEXT</span>
          <h2>Education</h2>
          <p>
            A structured academic journey shaping my technical and problem-solving skills
          </p>
        </motion.div>

        {/* ===== Timeline ===== */}
        <div className="education-timeline relative ml-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="education-entry mb-20 ml-10 relative"
            >
              {/* Timeline Dot */}
              <span className="education-dot absolute -left-[47px] top-6 w-4 h-4 rounded-full" />

              {/* Card */}
              <div className="education-card glass-panel rounded-2xl p-7">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="education-icon w-14 h-14 rounded-xl flex items-center justify-center">
                    <GraduationCap className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary font-medium">
                      {edu.institution}
                    </p>

                    <div className="education-meta flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star size={14} /> {edu.gpa}
                      </span>
                    </div>

                    <span
                      className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium
                        ${
                          edu.status === "Currently Pursuing"
                            ? "education-status-current"
                            : "education-status-complete"
                        }
                      `}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {edu.description}
                </p>

                {/* Subjects */}
                <div className="mb-6">
                  <h4 className="flex items-center text-sm font-semibold mb-3">
                    <BookOpen size={16} className="mr-2 text-primary" />
                    Key Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="skill-chip px-3 py-1 text-xs rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="education-achievements rounded-xl p-5">
                  <h4 className="flex items-center text-sm font-semibold mb-3">
                    <Award size={16} className="mr-2 text-primary" />
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((ach) => (
                      <li
                        key={ach}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <span className="education-achievement-dot w-2 h-2 rounded-full mt-2 mr-3" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 