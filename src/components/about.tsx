"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Calendar, Languages, Award } from "lucide-react";

export default function About() {
  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Chennai, India" },
    { icon: Phone, label: "Phone", value: "+91 9383493906" },
    { icon: Mail, label: "Email", value: "jeyasakthipandiaraja@gmail.com" },
    { icon: Calendar, label: "Age", value: "20 years old" },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: "Native" },
  ];

  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and the skills I bring
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Personal Information
            </h3>

            <div className="space-y-4 mb-8">
              {personalInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Languages size={20} className="text-primary mr-2" />
                Languages
              </h4>
              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-3 rounded-lg bg-accent/50"
                  >
                    <span className="text-foreground font-medium">{lang.name}</span>
                    <span className="text-primary text-sm">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - About Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Who Am I?
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a dedicated BTech Information Technology undergraduate with a strong
                interest in software development and modern web technologies. I enjoy
                building clean, responsive, and user-focused applications.
              </p>

              <p>
                My technical journey started with learning how websites and applications
                work, which led me to develop skills in HTML, CSS, JavaScript, and
                frontend frameworks. I&apos;m also familiar with programming languages such as
                Python, Java, C, and PHP.
              </p>

              <p>
                I actively participate in technical activities and collaborative projects,
                where I enjoy solving real-world problems through logical thinking and
                efficient coding practices. I believe continuous learning is essential
                in the ever-evolving IT industry.
              </p>

              <p>
                I&apos;m eager to gain industry experience, contribute to impactful projects,
                and grow as a professional in the fields of information technology,
                software development, and web engineering.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Award size={20} className="text-primary mr-2" />
                Key Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "BTech Information Technology Student",
                  "Frontend & Web Development Skills",
                  "Strong Problem-Solving Ability",
                  "Passionate About Learning New Technologies",
                ].map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-primary/5 border border-primary/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground text-sm">{highlight}</span>
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
