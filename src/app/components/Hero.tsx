"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github, X, Instagram } from "lucide-react";

interface TypingEffectProps {
  texts: string[];
}

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
    >
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Holographic Avatar */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex justify-center"
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Outer rotating rings */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10 - index * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  padding: `${index * 10}px`,
                }}
              >
                <div
                  className="w-full h-full rounded-full border-2"
                  style={{
                    borderColor: [
                      "rgba(34, 211, 238, 0.3)",
                      "rgba(99, 102, 241, 0.3)",
                      "rgba(236, 72, 153, 0.3)",
                    ][index],
                    borderStyle: "dashed",
                  }}
                />
              </motion.div>
            ))}

            {/* Glowing orb background */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-2xl"
            />

            {/* Main avatar container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-40 h-40 rounded-full overflow-hidden border-3 border-cyan-400/50 shadow-[0_0_40px_rgba(34,211,238,0.6)] bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 backdrop-blur-xl flex items-center justify-center"
            >
              {/* Holographic scan lines */}
              {/* <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent z-20 pointer-events-none"
                style={{ height: "30%" }}
              /> */}

              {/* Avatar Image - Replace src with your image URL */}
              <Image
                src="/Images/my-pic.jpeg"
                alt="Mohammad Affan Raza"
                className="object-cover relative z-10"
                fill
              />

              {/* Fallback emoji if image doesn't load */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 flex items-center justify-center text-5xl z-0"
                style={{
                  filter: "drop-shadow(0 0 15px rgba(34, 211, 238, 0.8))",
                }}
              >
                👨‍💻
              </motion.div>

              {/* Corner accents */}
              {[0, 90, 180, 270].map((rotation) => (
                <motion.div
                  key={rotation}
                  className="absolute top-0 left-0 w-5 h-5 z-30"
                  style={{
                    transformOrigin: "80px 80px",
                    rotate: rotation,
                  }}
                >
                  <div className="w-full h-0.5 bg-cyan-400" />
                  <div className="w-0.5 h-full bg-cyan-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* Orbiting particles */}
            {[0, 120, 240].map((angle) => (
              <motion.div
                key={angle}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: angle / 360,
                }}
                className="absolute inset-0"
              >
                <div
                  className="absolute w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) translateY(-100px) rotate(${angle}deg)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Greeting with Wave */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center justify-center gap-2"
        >
          {/* <motion.span
            animate={{ 
              rotate: [0, 14, -8, 14, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatDelay: 1 
            }}
            className="text-4xl"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.8))',
            }}
          >
            👋
          </motion.span> */}
          <span className="text-2xl sm:text-3xl font-bold text-cyan-200">
            Hello, I&apos;m
          </span>
        </motion.div>

        {/* Name with Glitch Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black text-cyan-300"
              style={{
                textShadow: "0 0 25px rgba(34, 211, 238, 0.5)",
              }}
            >
              <motion.span
                animate={{
                  color: ["#67e8f9", "#60a5fa", "#a78bfa", "#67e8f9"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Mohammad
              </motion.span>
              <br />
              <motion.span
                animate={{
                  color: ["#a78bfa", "#f472b6", "#67e8f9", "#a78bfa"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Affan Raza
              </motion.span>
            </motion.h1>

            {/* Glitch layers */}
            <motion.h1
              animate={{
                opacity: [0, 0.5, 0],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 4,
              }}
              className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl font-black text-cyan-500 pointer-events-none"
              style={{ mixBlendMode: "screen" }}
            >
              <span>Mohammad</span>
              <br />
              <span>Affan Raza</span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Typing Effect with Holographic Box */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="relative inline-block">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 rounded-xl blur-lg" />
            <div className="relative bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-purple-950/40 backdrop-blur-xl border border-cyan-400/30 rounded-xl px-8 py-4 shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              <TypingEffect
                texts={[
                  "Full Stack Developer",
                  "DevOps Learner",
                  "Problem Solver",
                  "Gen AI Explorer",
                  "DSA Enthusiast",
                ]}
              />
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-cyan-100/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4"
        >
          Crafting{" "}
          <span className="text-cyan-400 font-semibold">cutting-edge</span>{" "}
          digital experiences with clean code and
          <span className="text-purple-400 font-semibold">
            {" "}
            innovative
          </span>{" "}
          design.
          <br />
          Transforming visions into{" "}
          <span className="text-blue-400 font-semibold">
            interactive reality
          </span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
        >
          {/* Primary Button */}
          <motion.a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:dd808a92-f7b2-44c8-bf7e-0f5ac8dc5656"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 rounded-xl overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
              style={{ backgroundSize: "200% 200%" }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

            <span className="relative z-10 flex items-center gap-2 text-white font-bold text-base">
              <span>View Resume</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          {/* Secondary Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-12 py-5 rounded-xl bg-transparent border-2 border-cyan-400/50 backdrop-blur-xl text-cyan-300 font-bold text-base overflow-hidden group"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Get In Touch</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          {[
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/mohammad-affan-raza-b6039b288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              label: "LinkedIn",
              gradient: "from-cyan-500 to-blue-600",
              glowColor: "rgba(34, 211, 238, 0.6)",
            },
            {
              icon: Github,
              href: "https://share.google/6cF1Ocfh2f8uqF6V2",
              label: "GitHub",
              gradient: "from-gray-700 to-gray-900",
              glowColor: "rgba(156, 163, 175, 0.6)",
            },
            {
              icon: X,
              href: "https://x.com/AffanRaza485434?t=rdR3kzsXcX1bzEp4sqHsIQ&s=09",
              label: "X",
              gradient: "from-blue-400 to-cyan-500",
              glowColor: "rgba(96, 165, 250, 0.6)",
            },
            {
              icon: Instagram,
              href: "https://www.instagram.com/affanraza8083?igsh=aHkxMzhqbnE2eGxs",
              label: "Instagram",
              gradient: "from-purple-500 to-pink-600",
              glowColor: "rgba(236, 72, 153, 0.6)",
            },
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-lg overflow-hidden group`}
                title={social.label}
                style={{
                  boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${social.glowColor}, 0 0 60px ${social.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                }}
              >
                {/* Inner glow effect on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-300" />

                {/* Icon */}
                <IconComponent className="relative z-10 w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{ skewX: "-20deg" }}
                />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Typing Effect Component with Holographic Style
const TypingEffect: React.FC<TypingEffectProps> = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];
        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <div className="h-9 flex items-center justify-center min-w-[280px]">
      <motion.span
        className="text-xl sm:text-2xl font-bold text-cyan-300"
        style={{
          textShadow: "0 0 18px rgba(34, 211, 238, 0.5)",
        }}
      >
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-cyan-400 ml-1"
        >
          |
        </motion.span>
      </motion.span>
    </div>
  );
};

export default Home;
