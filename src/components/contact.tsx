"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jeyasakthipandiaraja@gmail.com",
      href: "mailto:jeyasakthipandiaraja@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9383493906",
      href: "tel:+919383493906",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "Jeyasakthi4",
      href: "https://github.com/Jeyasakthi4",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "jeya-sakthi-p",
      href: "https://www.linkedin.com/in/jeya-sakthi-p",
    },
    {
      icon: Instagram,
      label: "Instagram",
      username: "@jeya_sakthi2005",
      href: "https://www.instagram.com/jeya_sakthi2005",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing internship opportunities, full stack projects,
            and innovative ideas in web and software development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">

          {/* Availability */}
          <p className="text-sm text-primary mb-10 font-medium">
            Currently open to internships and entry-level IT roles
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              const Card = info.href ? motion.a : motion.div;

              return (
                <Card
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-4 p-6 rounded-xl 
                  bg-card border border-border hover:border-primary/50 
                  transition-all duration-300 hover:shadow-lg 
                  hover:shadow-primary/20 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={28} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Social Links */}
          <h4 className="text-lg font-semibold text-foreground mb-6">
            Connect With Me
          </h4>

          <div className="flex justify-center gap-10 flex-wrap">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.label} profile`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center space-y-3"
                >
                  <div
                    className="w-20 h-20 rounded-xl 
                    bg-gradient-to-br from-primary/20 to-primary/5 
                    hover:from-primary hover:to-primary/80 
                    hover:text-primary-foreground 
                    transition-all duration-300 
                    flex items-center justify-center 
                    shadow-lg group-hover:shadow-xl"
                  >
                    <Icon size={32} />
                  </div>

                  <div className="text-center">
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {social.username}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
