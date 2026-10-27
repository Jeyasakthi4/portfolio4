"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Jeyasakthi4",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jeya-sakthi-p",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:jeyasakthipandiaraja@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="portfolio-footer relative">
      {/* Glow Divider */}
      <div className="footer-glow-divider absolute inset-x-0 top-0 h-[1px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-brand space-y-4"
          >
            <h3 className="text-2xl font-bold text-primary">
              Jeyasakthi P
            </h3>
            <p className="text-muted-foreground max-w-sm">
              B.Tech Information Technology undergraduate specializing in full stack development,
modern web technologies, and performance-driven user interfaces.

            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.15 }}
                    className="footer-social w-10 h-10 rounded-lg flex items-center justify-center"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="footer-link relative text-sm"
                >
                  <span>
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 jeyasakthipandiaraja@gmail.com</p>
              <p>📱 +91 9383493906</p>
              <p>📍 Chennai, India</p>
            </div>
            <p className="text-sm text-muted-foreground pt-2">
              Open to opportunities & collaborations 🚀
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="footer-bottom py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            © {currentYear} Jeyasakthi P · Made with
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.2, repeatDelay: 2 }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.span>
            & ☕
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Next.js & Tailwind CSS
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
              className="footer-top-button w-9 h-9 rounded-lg flex items-center justify-center"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
