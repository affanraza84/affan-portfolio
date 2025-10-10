"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Sparkles, Rocket, Target } from "lucide-react";

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4"
    >
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
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
            About Me
          </motion.div>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        {/* 3D Canvas Section */}
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
                {/* Interactive 3D Canvas */}
                <InteractiveCanvas />

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

        {/* About Content */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 rounded-2xl blur-lg" />
            <div className="relative bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-purple-950/40 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 sm:p-10 md:p-12 shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              <p className="text-lg text-cyan-100/80 leading-relaxed mb-6">
                I&apos;m a passionate{" "}
                <span className="text-cyan-400 font-semibold">
                  Full Stack Developer
                </span>{" "}
                and{" "}
                <span className="text-purple-400 font-semibold">
                  UI/UX Designer
                </span>{" "}
                who loves crafting beautiful, functional digital experiences.
                With a keen eye for design and a solid foundation in modern web
                technologies, I transform complex problems into elegant
                solutions.
              </p>
              <p className="text-lg text-cyan-100/80 leading-relaxed">
                My journey in tech is driven by curiosity and a constant desire
                to learn. I believe in writing{" "}
                <span className="text-blue-400 font-semibold">
                  clean, maintainable code
                </span>{" "}
                and creating interfaces that users love. Whether it&apos;s
                building scalable applications or designing intuitive user
                experiences, I&apos;m always excited to take on new challenges.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What I Do Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3
            className="text-3xl font-bold text-cyan-300 mb-10 text-center"
            style={{
              textShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
            }}
          >
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Full Stack Development",
                description:
                  "Building robust web applications with modern frameworks and technologies",
                gradient: "from-cyan-500 to-blue-600",
                glowColor: "rgba(34, 211, 238, 0.4)",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description:
                  "Creating beautiful, intuitive interfaces that users love to interact with",
                gradient: "from-purple-500 to-pink-600",
                glowColor: "rgba(168, 85, 247, 0.4)",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description:
                  "Ensuring lightning-fast load times and smooth user experiences",
                gradient: "from-yellow-500 to-orange-600",
                glowColor: "rgba(251, 191, 36, 0.4)",
              },
              {
                icon: Sparkles,
                title: "Creative Solutions",
                description:
                  "Thinking outside the box to solve complex technical challenges",
                gradient: "from-green-500 to-emerald-600",
                glowColor: "rgba(34, 197, 94, 0.4)",
              },
              {
                icon: Rocket,
                title: "Modern Tech Stack",
                description:
                  "Leveraging cutting-edge tools and frameworks for optimal results",
                gradient: "from-blue-500 to-indigo-600",
                glowColor: "rgba(59, 130, 246, 0.4)",
              },
              {
                icon: Target,
                title: "Goal-Oriented",
                description:
                  "Focused on delivering projects that exceed expectations",
                gradient: "from-red-500 to-rose-600",
                glowColor: "rgba(239, 68, 68, 0.4)",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div
                    className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to right, ${item.glowColor}, ${item.glowColor})`,
                    }}
                  />

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-cyan-950/60 via-blue-950/60 to-purple-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 shadow-lg">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-cyan-300 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-cyan-100/70 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"
                      style={{ skewX: "-20deg" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Interactive 3D Canvas Component
const InteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 320;
    canvas.height = 320;

    const centerX = 160;
    const centerY = 160;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
      angle: number;
      distance: number;
    }> = [];

    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * 320,
        y: Math.random() * 320,
        z: Math.random() * 1000,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        angle: Math.random() * Math.PI * 2,
        distance: Math.random() * 150 + 50,
      });
    }

    let animationId: number;
    let rotation = 0;

    const animate = () => {
      ctx.fillStyle = "rgba(8, 47, 73, 0.1)";
      ctx.fillRect(0, 0, 320, 320);

      rotation += 0.005;

      // Draw connecting lines first (behind particles)
      ctx.strokeStyle = "rgba(34, 211, 238, 0.15)";
      ctx.lineWidth = 0.5;

      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.globalAlpha = ((100 - distance) / 100) * 0.3;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;

      // Update and draw particles
      particles.forEach((particle) => {
        // Rotate particles around center
        const newAngle = particle.angle + rotation;
        particle.x =
          centerX +
          Math.cos(newAngle) * particle.distance +
          (mousePos.x - centerX) * 0.05;
        particle.y =
          centerY +
          Math.sin(newAngle) * particle.distance +
          (mousePos.y - centerY) * 0.05;

        // Update Z position for depth effect
        particle.z -= particle.speed;
        if (particle.z <= 0) {
          particle.z = 1000;
        }

        // Draw particle with depth effect
        const scale = 1000 / (1000 + particle.z);
        const size = particle.size * scale;

        const hue = ((particle.angle * 180) / Math.PI + rotation * 100) % 360;
        const alpha = scale * 0.8;

        ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          size * 3
        );
        gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, ${alpha * 0.4})`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: "transparent" }}
    />
  );
};

export default About;
