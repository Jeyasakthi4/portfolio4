"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Globe,
  Users,
  Layers,
  Braces,
  FileCode,
  Cpu,
  Terminal,
  Layout,
  GitBranch,
  Github,
  Monitor,
  Server,
  Lightbulb,
  Bug,
  Clock,
  MessageSquare,
  Users2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  /* ================= Cursor Glow ================= */
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ================= 3D Tilt ================= */
  const useTilt = () => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -10;
      const rotateY = ((x / rect.width) - 0.5) * 10;

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const reset = () => {
      if (ref.current) {
        ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
      }
    };

    return { ref, handleMove, reset };
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      skills: [
        { name: "HTML5", level: 90, icon: FileCode },
        { name: "CSS3", level: 85, icon: Layout },
        { name: "JavaScript", level: 80, icon: Braces },
        { name: "Bootstrap 5", level: 85, icon: Monitor },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 75, icon: Terminal },
        { name: "Java", level: 70, icon: Cpu },
        { name: "C", level: 75, icon: Code },
        { name: "PHP", level: 70, icon: Server },
      ],
    },
    {
      title: "Web & UI Concepts",
      icon: Globe,
      skills: [
        { name: "Responsive Design", level: 85, icon: Monitor },
        { name: "UI/UX Basics", level: 80, icon: Palette },
        { name: "Form Validation", level: 75, icon: FileCode },
        { name: "Authentication Flow", level: 75, icon: Server },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: [
        { name: "Git", level: 80, icon: GitBranch },
        { name: "GitHub", level: 85, icon: Github },
        { name: "VS Code", level: 90, icon: Braces },
        { name: "MySQL", level: 70, icon: Database },
      ],
    },
    {
      title: "Core IT Skills",
      icon: Layers,
      skills: [
        { name: "Problem Solving", level: 85, icon: Lightbulb },
        { name: "Logical Thinking", level: 80, icon: Cpu },
        { name: "Debugging", level: 75, icon: Bug },
        { name: "Code Optimization", level: 70, icon: Terminal },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Communication", level: 85, icon: MessageSquare },
        { name: "Team Collaboration", level: 90, icon: Users2 },
        { name: "Adaptability", level: 85, icon: Layers },
        { name: "Time Management", level: 80, icon: Clock },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${cursor.x}px ${cursor.y}px, rgba(99,102,241,0.12), transparent 80%)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clear overview of my technical and professional skill set
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const tilt = useTilt();

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  ref={tilt.ref}
                  onMouseMove={tilt.handleMove}
                  onMouseLeave={tilt.reset}
                  className="rounded-2xl p-6 bg-background/60 backdrop-blur
                  border border-border hover:border-primary/50
                  hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]
                  transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4"
                    >
                      <Icon size={24} className="text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <SkillIcon size={16} className="text-primary" />
                              <span className="text-sm font-medium">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-primary text-sm font-semibold">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
                            <motion.div
                              className="h-2 rounded-full
                              bg-gradient-to-r from-primary to-secondary
                              shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="rounded-2xl p-10
          bg-gradient-to-r from-primary/10 to-secondary/10
          border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Growing Every Day
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              I continuously improve my skills by building projects,
              practicing problem-solving, and learning modern
              technologies relevant to the IT industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
