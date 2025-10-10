"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Code2, Database, Server,Terminal, Sparkles, Zap, Star, Hexagon, Layers, Triangle, FileJson, Shield, Cloud, Cloudy, Github, GitBranch, Box } from "lucide-react";

const SkillsPage = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "rgba(34, 211, 238, 0.4)",
      skills: [
        { name: "React.js", icon: Layers },
        { name: "Next.js", icon: Triangle },
        { name: "TypeScript", icon: FileJson },
        { name: "Tailwind CSS", icon: Sparkles },
        { name: "Framer Motion", icon: Zap },
        { name: "Three.js", icon: Box },
      ]
    },
    {
      title: "Backend",
      icon: Database,
      gradient: "from-green-500 to-emerald-600",
      glowColor: "rgba(34, 197, 94, 0.4)",
      skills: [
        { name: "Node.js", icon: Hexagon },
        { name: "Express.js", icon: Zap },
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Server},
        { name: "Authentication", icon: Shield },
        { name: "REST APIs", icon: Code2 },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Terminal,
      gradient: "from-purple-500 to-pink-600",
      glowColor: "rgba(168, 85, 247, 0.4)",
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "Render", icon: Cloud },
        { name: "AWS", icon: Cloudy},
        { name: "GitHub", icon: Github },
        { name: "Vercel", icon: Triangle },
        { name: "Figma", icon: Layers },
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4"
    >
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16 mt-8">
          <motion.div
            animate={{
              color: ["#67e8f9", "#60a5fa", "#a78bfa", "#67e8f9"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-4"
            style={{
              textShadow: "0 0 25px rgba(34, 211, 238, 0.5)",
            }}
          >
            My Skills
          </motion.div>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        {/* Wave Canvas Section */}
        <motion.div
          variants={itemVariants}
          className="mb-16 flex justify-center"
        >
          <div className="relative w-80 h-80">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full"
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
                    padding: `${index * 15}px`,
                  }}
                >
                  <div
                    className="w-full h-full rounded-3xl border-2"
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

              {/* Glowing background */}
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
                className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-3xl"
              />

              {/* Main Canvas Container */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-3 border-cyan-400/50 shadow-[0_0_40px_rgba(34,211,238,0.6)] bg-gradient-to-br from-cyan-950/40 via-blue-950/40 to-purple-950/40 backdrop-blur-xl flex-shrink-0">
                {/* Wave Canvas */}
                <WaveCanvas />

                {/* Holographic scan lines */}
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent z-20 pointer-events-none"
                  style={{ height: "30%" }}
                />

                {/* Corner accents */}
                {[0, 90, 180, 270].map((rotation) => (
                  <motion.div
                    key={rotation}
                    className="absolute top-0 left-0 w-6 h-6 z-30"
                    style={{
                      transformOrigin: "160px 160px",
                      rotate: rotation,
                    }}
                  >
                    <div className="w-full h-0.5 bg-cyan-400" />
                    <div className="w-0.5 h-full bg-cyan-400" />
                  </motion.div>
                ))}
              </div>

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
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) translateY(-180px) rotate(${angle}deg)`,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <SkillCard 
                key={categoryIndex}
                category={category}
                index={categoryIndex}
              />
            ))}
          </div>
        </motion.div>

        {/* Floating Skill Badges */}
        <motion.div 
          variants={itemVariants}
          className="relative mb-16 overflow-hidden"
        >
          <div className="text-3xl font-bold text-cyan-300 mb-10 text-center"
            style={{
              textShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
            }}
          >
            Tech Universe
          </div>
          <div className="relative w-full h-96 max-w-5xl mx-auto px-4 sm:px-8">
            <FloatingBadges />
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants}>
          <StatsSection />
        </motion.div>
      </motion.div>
    </section>
  );
};

interface SkillCardProps {
  category: {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    gradient: string;
    glowColor: string;
    skills: Array<{ name: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }>;
  };
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const IconComponent = category.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow effect */}
        <div
          className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to right, ${category.glowColor}, ${category.glowColor})`,
          }}
        />

        {/* Card */}
        <div className="relative bg-gradient-to-br from-cyan-950/60 via-blue-950/60 to-purple-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 shadow-lg overflow-hidden min-h-[320px]">
          {/* Icon Header */}
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <IconComponent className="w-7 h-7 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-cyan-300">{category.title}</h3>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {category.skills.map((skill, skillIndex) => {
              const SkillIcon = skill.icon;
              return (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.15 + skillIndex * 0.08,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="group/skill relative"
                >
                  <div className="relative bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-400/20 rounded-xl p-3 text-center overflow-hidden">
                    {/* Skill Icon */}
                    <motion.div 
                      className="mb-2 relative z-10 flex justify-center"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: skillIndex * 0.2 
                      }}
                    >
                      <SkillIcon className="w-8 h-8 text-cyan-300" />
                    </motion.div>
                    
                    {/* Skill Name */}
                    <div className="text-cyan-100 font-medium text-sm relative z-10">
                      {skill.name}
                    </div>

                    {/* Sparkle effect on hover */}
                    <motion.div
                      className="absolute top-1 right-1 opacity-0 group-hover/skill:opacity-100"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                    </motion.div>

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${category.glowColor}, transparent 70%)`
                      }}
                    />

                    {/* Shine sweep on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700 rounded-xl"
                      style={{ skewX: "-20deg" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"
            style={{ skewX: "-20deg" }}
          />

          {/* Decorative corner */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl"
            style={{ backgroundColor: category.glowColor.replace('0.4', '0.3') }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

interface Badge {
  text: string;
  color: string;
  x: string;
  y: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const FloatingBadges = () => {
  const badges: Badge[] = [
    { text: "React", color: "#61dadc", x: "10%", y: "20%", icon: Sparkles },
    { text: "TypeScript", color: "#3178e7", x: "60%", y: "15%", icon: Code2 },
    { text: "Node.js", color: "#339933", x: "25%", y: "60%", icon: Hexagon },
    { text: "Three.js", color: "#1111", x: "65%", y: "70%", icon: Star },
    { text: "Next.js", color: "#ffffff", x: "45%", y: "40%", icon: Zap },
    { text: "Tailwind", color: "#06b7d4", x: "15%", y: "80%", icon: Sparkles },
    { text: "MongoDB", color: "#47A248", x: "70%", y: "35%", icon: Database },
    { text: "Docker", color: "#2496ED", x: "30%", y: "25%", icon: Hexagon },
  ];

  return (
    <>
      {badges.map((badge, index) => {
        const IconComponent = badge.icon;
        return (
          <motion.div
            key={index}
            className="absolute group"
            style={{
              left: badge.x,
              top: badge.y,
              transform: "translateX(-50%)",
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
            whileHover={{ scale: 1.3, y: -15, zIndex: 50 }}
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
              style={{
                background: `radial-gradient(circle, ${badge.color}80, transparent 70%)`
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main badge */}
            <div
              className="relative px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl font-bold text-white shadow-2xl backdrop-blur-sm border-2 overflow-hidden text-xs sm:text-sm md:text-base whitespace-nowrap"
              style={{
                backgroundColor: badge.color === "#ffffff" || badge.color === "#000000" 
                  ? badge.color === "#ffffff" ? "#000000dd" : "#ffffffdd"
                  : badge.color + "dd",
                borderColor: badge.color,
                boxShadow: `0 0 30px ${badge.color}80, inset 0 0 20px ${badge.color}40`
              }}
            >
              {/* Icon */}
              <motion.div
                className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              >
                <div 
                  className="rounded-full p-1 sm:p-1.5 shadow-lg"
                  style={{
                    backgroundColor: badge.color,
                  }}
                >
                  <IconComponent 
                    className="w-2 h-2 sm:w-3 sm:h-3" 
                    style={{
                      color: badge.color === "#ffffff" || badge.color === "#000000"
                        ? badge.color === "#ffffff" ? "#000000" : "#ffffff"
                        : "#ffffff"
                    }}
                  />
                </div>
              </motion.div>

              {/* Orbiting particles */}
              {[0, 120, 240].map((angle) => (
                <motion.div
                  key={angle}
                  className="absolute opacity-0 group-hover:opacity-100"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: angle / 360
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full shadow-lg"
                    style={{
                      backgroundColor: badge.color,
                      transform: `translate(-50%, -50%) translateY(-30px)`,
                      boxShadow: `0 0 10px ${badge.color}`
                    }}
                  />
                </motion.div>
              ))}

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ["-200%", "200%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.5
                }}
                style={{ skewX: "-20deg" }}
              />

              {/* Text */}
              <span className="relative z-10 flex items-center gap-2">
                {badge.text}
              </span>
            </div>

            {/* Bottom glow */}
            <motion.div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full blur-sm opacity-0 group-hover:opacity-100"
              style={{
                backgroundColor: badge.color,
                boxShadow: `0 0 20px ${badge.color}`
              }}
            />
          </motion.div>
        );
      })}
    </>
  );
};

interface Stat {
  number: string;
  label: string;
  icon: string;
  gradient: string;
}

const StatsSection = () => {
  const stats: Stat[] = [
    { number: "10+", label: "Projects Completed", icon: "🚀", gradient: "from-cyan-500 to-blue-600" },
    { number: "15+", label: "Technologies Mastered", icon: "⚡", gradient: "from-purple-500 to-pink-600" },
    { number: "2+", label: "Years Experience", icon: "📅", gradient: "from-green-500 to-emerald-600" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐", gradient: "from-yellow-500 to-orange-600" },
  ];

  return (
    <div>
      <h3
        className="text-3xl font-bold text-cyan-300 mb-10 text-center"
        style={{
          textShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
        }}
      >
        Achievements
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -10 }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/40 to-purple-500/40" />

            {/* Card */}
            <div className="relative bg-gradient-to-br from-cyan-950/60 via-blue-950/60 to-purple-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 text-center">
              <motion.div
                className="text-4xl mb-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-cyan-100/80 text-sm font-medium">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

interface Wave {
  amplitude: number;
  frequency: number;
  speed: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  hue: number;
}

// Wave Canvas Component
const WaveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 320;
    canvas.height = 320;

    let animationId: number;
    let time = 0;

    // Wave configuration
    const waves: Wave[] = [
      { amplitude: 30, frequency: 0.02, speed: 0.03, color: "rgba(34, 211, 238, 0.3)" },
      { amplitude: 25, frequency: 0.025, speed: 0.025, color: "rgba(99, 102, 241, 0.3)" },
      { amplitude: 20, frequency: 0.03, speed: 0.02, color: "rgba(168, 85, 247, 0.3)" },
    ];

    // Floating particles
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * 320,
        y: Math.random() * 320,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        hue: Math.random() * 60 + 180, // Blue-purple range
      });
    }

    const animate = () => {
      // Create fade effect
      ctx.fillStyle = "rgba(8, 47, 73, 0.1)";
      ctx.fillRect(0, 0, 320, 320);

      time += 0.01;

      // Draw waves
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;

        for (let x = 0; x <= 320; x++) {
          const y = 
            160 + 
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 1.5 + time * wave.speed * 0.7) * (wave.amplitude * 0.5);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Fill below wave with gradient
        ctx.lineTo(320, 320);
        ctx.lineTo(0, 320);
        ctx.closePath();
        
        const gradient = ctx.createLinearGradient(0, 160, 0, 320);
        gradient.addColorStop(0, wave.color.replace("0.3", "0.1"));
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: "transparent" }}
    />
  );
};

export default SkillsPage;