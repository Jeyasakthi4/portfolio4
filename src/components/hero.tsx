"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Instagram,
} from "lucide-react";
import { useState, useEffect } from "react";
import ClientOnly from "./client-only";

/* ================= Typing Effect ================= */
const roles = [
  "B.Tech IT Student",
  "Frontend Developer",
  "Web Enthusiast",
];

function useTypingEffect(words: string[], speed = 120, pause = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typedText = useTypingEffect(roles);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15" />

      {/* Floating particles */}
      <ClientOnly>
        <div className="absolute inset-0 overflow-hidden">
          {windowSize.width > 0 &&
            [...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/40 rounded-full"
                initial={{
                  x: Math.random() * windowSize.width,
                  y: Math.random() * windowSize.height,
                }}
                animate={{
                  x: Math.random() * windowSize.width,
                  y: Math.random() * windowSize.height,
                }}
                transition={{
                  duration: Math.random() * 12 + 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
        </div>
      </ClientOnly>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Neon image border */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="relative mx-auto w-60 h-60 sm:w-72 sm:h-72 rounded-3xl p-[3px]">
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative w-full h-full rounded-3xl bg-background overflow-hidden">
              <img
                src="/files/images/IMG_20250725_234801.jpg"
                alt="Jeyasakthi P"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4"
        >
          Hi, I&apos;m <span className="text-primary">Jeyasakthi P</span>
        </motion.h1>

        {/* Typing */}
        <div className="text-xl sm:text-2xl lg:text-3xl mb-6">
          <span className="text-primary font-semibold">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          B.Tech Information Technology undergraduate passionate about frontend
          development, modern UI design, and scalable web solutions.
        </p>

        {/* Neon Buttons (FILLED) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          {/* Primary */}
          <motion.a
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="px-10 py-3 rounded-xl font-semibold text-primary-foreground
              bg-primary
              shadow-[0_0_25px_rgba(99,102,241,0.6)]
              hover:shadow-[0_0_40px_rgba(99,102,241,0.9)]
              transition-all duration-300
              flex items-center gap-2 justify-center"
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>

          {/* Secondary */}
          <motion.a
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/files/resume/JEYASAKTHI_P_RESUME.pdf"
            target="_blank"
            className="px-10 py-3 rounded-xl font-semibold text-secondary-foreground
              bg-secondary
              shadow-[0_0_25px_rgba(236,72,153,0.6)]
              hover:shadow-[0_0_40px_rgba(236,72,153,0.9)]
              transition-all duration-300
              flex items-center gap-2 justify-center"
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: Github, href: "https://github.com/Jeyasakthi4" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/jeya-sakthi-p" },
            { icon: Instagram, href: "https://www.instagram.com/jeya_sakthi2005" },
          ].map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="w-12 h-12 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground
                transition-all flex items-center justify-center"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>

        {/* Scroll down */}
        <motion.button onClick={scrollToNext}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground hover:text-primary"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <ArrowDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}


