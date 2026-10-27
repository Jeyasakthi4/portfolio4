"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Code2,
  Crown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Palette,
  Sprout,
} from "lucide-react";
import { useEffect, useRef, type MouseEvent } from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/Jeyasakthi4", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jeya-sakthi-p",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jeya_sakthi2005",
    icon: Instagram,
  },
  {
    label: "Email",
    href: "mailto:jeyasakthipandiaraja@gmail.com",
    icon: Mail,
  },
];

const badges = [
  { label: "Build", icon: Code2 },
  { label: "Design", icon: Palette },
  { label: "Learn", icon: BookOpen },
  { label: "Grow", icon: Sprout },
];

const particles = [
  { left: "8%", top: "24%", delay: "0s" },
  { left: "17%", top: "70%", delay: "1.2s" },
  { left: "31%", top: "15%", delay: "2.4s" },
  { left: "46%", top: "77%", delay: ".7s" },
  { left: "57%", top: "22%", delay: "1.8s" },
  { left: "72%", top: "12%", delay: ".4s" },
  { left: "84%", top: "68%", delay: "2s" },
  { left: "94%", top: "37%", delay: "1s" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = cursorGlowRef.current;
    if (!section || !glow) return;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = section.getBoundingClientRect();
      glow.style.transform = `translate3d(${event.clientX - bounds.left - 180}px, ${event.clientY - bounds.top - 180}px, 0)`;
    };

    section.addEventListener("pointermove", handlePointerMove);
    return () => section.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const handlePortraitMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    event.currentTarget.style.transform = `rotate(2deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetPortrait = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "rotate(2deg)";
  };

  return (
    <section id="home" ref={sectionRef} className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div ref={cursorGlowRef} className="hero-cursor-glow" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-one" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-two" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="hero-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-copy glass-panel"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="hero-eyebrow">
            <span className="availability-dot" />
            B.TECH INFORMATION TECHNOLOGY
          </div>
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1 className="hero-name">Jeyasakthi P</h1>
          <p className="hero-roles">
            Full Stack Development Enthusiast
            <span aria-hidden="true"> · </span>
            UI/UX Designer
            <span aria-hidden="true"> · </span>
            Frontend Developer
          </p>
          <p className="hero-tagline">
            Designing &amp; building
            <br />
            web experiences that <em>matter.</em>
          </p>
          <p className="hero-description">
            I turn thoughtful ideas into intuitive, beautifully crafted digital
            experiences — one detail at a time.
          </p>

          <div className="hero-actions">
            <motion.a
              href="#projects"
              className="hero-cta"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Projects <ArrowRight size={17} />
            </motion.a>
            <a className="hero-contact-link" href="#contact">
              Let&apos;s connect <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-socials" aria-label="Social links">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                <Icon size={18} strokeWidth={1.7} />
              </a>
            ))}
            <span className="socials-caption">Find me around the web</span>
          </div>
        </motion.div>

        <div className="hero-visual">
          <div className="city-window" aria-hidden="true">
            <span className="window-glow" />
            <span className="city-building city-building-one" />
            <span className="city-building city-building-two" />
            <span className="city-building city-building-three" />
          </div>
          <div className="window-crossbar" aria-hidden="true" />
          <svg
            className="badge-connector"
            viewBox="0 0 130 220"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 12C90 10 112 50 48 76C-16 102 8 142 83 146C126 149 119 186 54 208"
              stroke="url(#connector-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 7"
            />
            <defs>
              <linearGradient id="connector-gradient" x1="0" y1="0" x2="120" y2="210">
                <stop stopColor="#67e8f9" />
                <stop offset="1" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
          <motion.div
            ref={portraitRef}
            className="polaroid"
            initial={{ opacity: 0, y: 30, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
            onMouseMove={handlePortraitMove}
            onMouseLeave={resetPortrait}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="polaroid-photo">
              <Image
                src="/files/images/jeyy1.jpg"
                alt="Illustrated portrait of Jeyasakthi P with long dark hair, glasses, and a dark outfit"
                width={853}
                height={1280}
              />
              <span className="photo-corner photo-corner-one" />
              <span className="photo-corner photo-corner-two" />
              <span className="photo-stamp">CREATIVE<br />MIND</span>
            </div>
            <p className="polaroid-caption">
              Better Code
              <br />
              Better Tomorrow <span>♡</span>
            </p>
          </motion.div>
          <div className="crown-orbit" aria-hidden="true">
            <Crown size={23} strokeWidth={1.35} />
          </div>
          <div className="hero-badges">
            {badges.map(({ label, icon: Icon }, index) => (
              <motion.div
                className="hero-badge"
                key={label}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3.5 + index * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.35,
                }}
              >
                <Icon size={16} strokeWidth={1.8} />
                <span>{label}</span>
                {label === "Build" && <span className="badge-code">&lt;/&gt;</span>}
              </motion.div>
            ))}
          </div>
          <div className="visual-spark visual-spark-one" aria-hidden="true">✳</div>
          <div className="visual-spark visual-spark-two" aria-hidden="true">✦</div>
        </div>
      </div>

      <div className="desk-scene" aria-hidden="true">
        <div className="desk-shelf">
          <div className="desk-plant">
            <span /><span /><span /><i />
          </div>
          <div className="desk-books"><i>JS</i><i>REACT</i><i>UI/UX</i></div>
          <div className="desk-laptop"><span /><i /></div>
          <div className="desk-notebook"><span /><span /><span /><span /></div>
          <div className="desk-pen" />
          <div className="desk-mug"><span /></div>
        </div>
        <div className="desk-front" />
      </div>

      <a className="hero-scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} />
      </a>
      <div className="hero-index" aria-hidden="true">
        <span>01</span> / 07
      </div>
    </section>
  );
}
