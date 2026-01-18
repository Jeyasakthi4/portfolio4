"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jeyasakthipandiaraja@gmail.com",
      href: "mailto:jeyasakthipandiaraja@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9383493906",
      href: "tel:+919383493906"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Jeyasakthi4"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jeya-sakthi-p"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/jeya_sakthi2005?igsh=c284bmJ0ZXUzZm54"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Connect with me through any of the platforms below. I&apos;m always excited to discuss new opportunities,
            collaborate on projects, or just have a chat about technology and development!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Let&apos;s Connect
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Follow Me on Social Media
              </h4>
              <div className="flex justify-center space-x-8">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center space-y-3 group"
                    >
                      <div className="w-20 h-20 rounded-xl bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                        <Icon size={32} className="transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {social.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {social.label === 'GitHub' && 'Jeyasakthi4'}
                          {social.label === 'LinkedIn' && 'jeya-sakthi-p'}
                          {social.label === 'Instagram' && '@jeya_sakthi2005'}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>


          </motion.div>
        </div>


      </div>
    </section>
  );
}
