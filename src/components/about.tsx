"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Languages,
  Award,
  GraduationCap,
  Code,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
  /* ================= Cursor Glow ================= */
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Chennai, India" },
    { icon: Phone, label: "Phone", value: "+91 9383493906" },
    { icon: Mail, label: "Email", value: "jeyasakthipandiaraja@gmail.com" },
    { icon: Calendar, label: "Age", value: "20 Years" },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: "Native" },
  ];

  const stats = [
    { icon: GraduationCap, value: "BTech IT", label: "Undergraduate" },
    { icon: Code, value: "10+", label: "Projects Built" },
    { icon: Award, value: "5+", label: "Tech Skills" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${cursor.x}px ${cursor.y}px, rgba(99,102,241,0.12), transparent 80%)`,
        }}
      />

      {/* Background */}
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
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A closer look at my background, interests, and technical journey
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 bg-background/60 backdrop-blur
                border border-primary/20
                hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]
                transition-all duration-300 text-center"
              >
                <Icon size={28} className="mx-auto text-primary mb-3" />
                <h3 className="text-2xl font-bold text-foreground">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>

            <div className="space-y-4 mb-10">
              {personalInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-xl
                    bg-background/60 backdrop-blur
                    border border-border
                    hover:border-primary/40 hover:shadow-md transition"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-medium text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Languages */}
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Languages size={20} className="text-primary mr-2" />
              Languages
            </h4>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center p-4 rounded-xl
                  bg-primary/5 border border-primary/20"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-primary text-sm">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Who Am I?</h3>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a BTech Information Technology undergraduate passionate
                about software development and modern web technologies.
              </p>

              <p>
                My interests lie in frontend development, UI engineering, and
                understanding how secure systems are built and maintained.
              </p>

              <p>
                I enjoy solving real-world problems, collaborating on projects,
                and continuously improving my technical and logical skills.
              </p>

              <p>
                I&apos;m eager to gain industry exposure and contribute to
                impactful projects while growing as a professional developer.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Award size={20} className="text-primary mr-2" />
                Key Highlights
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "BTech Information Technology Student",
                  "Frontend & Web Development",
                  "Strong Problem Solving",
                  "Fast Learner & Tech Enthusiast",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl
                    bg-background/60 backdrop-blur
                    border border-primary/20
                    hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]
                    transition-all"
                  >
                    <span className="text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
