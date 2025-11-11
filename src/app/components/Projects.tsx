"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  ExternalLink,
  Github,
  Rocket,
  ShoppingBag,
  Shirt,
  MessageCircle,
  Sparkles,
  Video,
} from "lucide-react";

const ProjectsPage = () => {
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

  const projects = [
    {
      title: "Kajal Bakery",
      description:
        "Modern bakery website, SEO-optimized e-commerce platform featuring a dynamic product catalog, secure contact form, and API-driven architecture. Successfully deployed on Vercel and Render for seamless accessibility.",
      image:
        "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-pink-500 to-rose-600",
      glowColor: "rgba(236, 72, 153, 0.4)",
      github: "https://github.com/affanraza84/kajalProductsNew",
      live: "https://kajal-products-new-v7eq.vercel.app",
      icon: ShoppingBag,
    },
    {
      title: "WearXO",
      description:
        "A full-stack e-commerce platform with an interactive t-shirt designer and user authentication, enabling users to create, save, and manage their custom designs while maintaining a secure experience.",
      image:
        "https://i.pinimg.com/1200x/05/08/42/05084291df014119af9dd425cc94530e.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
      gradient: "from-purple-500 to-indigo-600",
      glowColor: "rgba(168, 85, 247, 0.4)",
      github: "https://github.com/affanraza84/T-Shirt-Wear-XO",
      live: "https://t-shirt-wear-xo.vercel.app/",
      icon: Shirt,
    },
    {
      title: "Fittara",
      description:
        "A premium lehenga shopping website with appointment booking and customization options for traditional wear, delivering a seamless and personalized online shopping experience.",
      image:
        "https://i.pinimg.com/736x/b9/2f/f5/b92ff5d2013e43589349109e09f7955f.jpg",
      tech: ["React", "Three.js", "Express", "PostgreSQL"],
      gradient: "from-amber-500 to-orange-600",
      glowColor: "rgba(251, 191, 36, 0.4)",
      github: "https://github.com/affanraza84/Lehenga-SIte",
      live: "https://lehenga-s-ite-pxx6.vercel.app",
      icon: Sparkles,
    },
    {
      title: "Chatting Sapphire",
      description:
        "A real-time chat app supporting multiple rooms, media sharing, and JWT-based authentication. Leveraged Socket.io for event-driven communication and implemented persistent message storage for reliable user experience.",
      image:
        "https://i.pinimg.com/1200x/18/f7/a8/18f7a83f40c9fad584c0faf06c22ac1c.jpg",
      tech: ["React", "Socket.io", "Firebase", "WebRTC"],
      gradient: "from-blue-500 to-cyan-600",
      glowColor: "rgba(59, 130, 246, 0.4)",
      github: "https://github.com/affanraza84/Chatting-App-Sapphire",
      live: "https://chatting-app-smoky-zeta.vercel.app/",
      icon: MessageCircle,
    },
    {
      title: "Marvel Website",
      description:
        "Immersive Marvel-themed website with stunning parallax effects, hero animations, interactive character gallery, and cinematic transitions for ultimate fan experience.",
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=600&fit=crop",
      tech: ["React", "Framer Motion", "GSAP", "Canvas"],
      gradient: "from-red-500 to-red-700",
      glowColor: "rgba(239, 68, 68, 0.4)",
      github: "https://github.com/affanraza84/ieteProject",
      live: "https://github.com/affanraza84/ieteProject",
      icon: Rocket,
    },
    {
      title: "Netflix Clone",
      description:
        "A basic Netflix clone featuring user authentication, movie browsing, trailer playback, and watchlist functionality using data from the TMDB API.",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
      tech: ["React", "Redux", "Firebase", "TMDB API"],
      gradient: "from-red-600 to-black",
      glowColor: "rgba(220, 38, 38, 0.4)",
      github: "https://github.com/affanraza84/netflixClone",
      live: "https://github.com/affanraza84/netflixClone",
      icon: Video,
    },
  ];

  const displayedProjects = projects;

  return (
    <section
      id="projects"
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
            My Projects
          </motion.div>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        {/* Network Canvas Section */}
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
                        "rgba(168, 85, 247, 0.3)",
                        "rgba(236, 72, 153, 0.3)",
                        "rgba(34, 211, 238, 0.3)",
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
                className="absolute -inset-8 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl blur-3xl"
              />

              {/* Main Canvas Container */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-3 border-purple-400/50 shadow-[0_0_40px_rgba(168,85,247,0.6)] bg-gradient-to-br from-purple-950/40 via-pink-950/40 to-cyan-950/40 backdrop-blur-xl flex-shrink-0">
                {/* Network Canvas */}
                <NetworkCanvas />

                {/* Holographic scan lines */}
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/20 to-transparent z-20 pointer-events-none"
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
                    <div className="w-full h-0.5 bg-purple-400" />
                    <div className="w-0.5 h-full bg-purple-400" />
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
                    className="absolute w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]"
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

        {/* Projects Grid */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/affanraza84?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(34, 211, 238, 0.4), rgba(168, 85, 247, 0.4))",
                    "linear-gradient(45deg, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4))",
                    "linear-gradient(45deg, rgba(236, 72, 153, 0.4), rgba(34, 211, 238, 0.4))",
                    "linear-gradient(45deg, rgba(34, 211, 238, 0.4), rgba(168, 85, 247, 0.4))",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Button */}
              <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl overflow-hidden shadow-2xl">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Content */}
                <div className="relative flex items-center gap-3 text-white font-bold text-lg">
                  <Github className="w-5 h-5" />
                  <span>View More on GitHub</span>
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Particle effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: "50%",
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Corner accents */}
              {[0, 90, 180, 270].map((rotation) => (
                <motion.div
                  key={rotation}
                  className="absolute top-0 left-0 w-3 h-3"
                  style={{
                    transformOrigin: "center",
                    rotate: rotation,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-0.5 bg-cyan-400" />
                  <div className="w-0.5 h-full bg-cyan-400" />
                </motion.div>
              ))}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Featured Stats */}
        <motion.div variants={itemVariants}>
          {/* <ProjectStats /> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    gradient: string;
    glowColor: string;
    github: string;
    live: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const IconComponent = project.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow effect */}
        <div
          className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${project.glowColor}, ${project.glowColor})`,
          }}
        />

        {/* Card */}
        <div className="relative bg-gradient-to-br from-cyan-950/60 via-blue-950/60 to-purple-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl overflow-hidden shadow-2xl">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />

            {/* Overlay gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40 mix-blend-overlay`}
            />

            {/* Icon badge */}
            <motion.div
              className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </motion.div>

            {/* Scan line effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2,
              }}
              style={{ height: "30%" }}
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors">
              {project.title}
            </h3>

            <p className="text-cyan-100/80 text-sm mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05, x: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-medium shadow-lg hover:shadow-cyan-500/50 transition-shadow"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">Code</span>
              </motion.a>

              <motion.a
                href={project.live}
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Live</span>
              </motion.a>
            </div>
          </div>

          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            style={{ skewX: "-20deg" }}
          />

          {/* Bottom accent */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// const ProjectStats = () => {
//   const stats = [
//     {
//       number: "6+",
//       label: "Completed Projects",
//       icon: "🎯",
//       gradient: "from-cyan-500 to-blue-600",
//     },
//     {
//       number: "20+",
//       label: "Technologies Used",
//       icon: "⚙️",
//       gradient: "from-purple-500 to-pink-600",
//     },
//     {
//       number: "1000+",
//       label: "Hours Coded",
//       icon: "⏱️",
//       gradient: "from-green-500 to-emerald-600",
//     },
//     {
//       number: "5★",
//       label: "Average Rating",
//       icon: "⭐",
//       gradient: "from-yellow-500 to-orange-600",
//     },
//   ];

//   return (
//     <div>
//       <h3
//         className="text-3xl font-bold text-cyan-300 mb-10 text-center"
//         style={{
//           textShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
//         }}
//       >
//         Project Highlights
//       </h3>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             className="relative group"
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ scale: 1.1, y: -10 }}
//           >
//             <div className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/40 to-pink-500/40" />

//             <div className="relative bg-gradient-to-br from-purple-950/60 via-pink-950/60 to-cyan-950/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6 text-center">
//               <motion.div
//                 className="text-4xl mb-3"
//                 animate={{
//                   rotate: [0, 10, -10, 0],
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   delay: index * 0.2,
//                 }}
//               >
//                 {stat.icon}
//               </motion.div>
//               <motion.div
//                 className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
//               >
//                 {stat.number}
//               </motion.div>
//               <div className="text-cyan-100/80 text-sm font-medium">
//                 {stat.label}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
}

const NetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 320;
    canvas.height = 320;

    let animationId: number;

    const nodes: Node[] = [];
    const nodeCount = 35;
    const maxDistance = 80;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * 320,
        y: Math.random() * 320,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        hue: Math.random() * 60 + 260,
      });
    }

    // Pulsating energy rings
    let ringPhase = 0;

    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = "rgba(8, 47, 73, 0.12)";
      ctx.fillRect(0, 0, 320, 320);

      ringPhase += 0.02;

      // Draw energy rings from center
      for (let i = 0; i < 5; i++) {
        const phase = ringPhase + i * 0.5;
        const radius = (Math.sin(phase) * 0.5 + 0.5) * 120 + 20;
        const opacity = (Math.sin(phase) * 0.5 + 0.5) * 0.3;

        const gradient = ctx.createRadialGradient(
          160,
          160,
          radius - 10,
          160,
          160,
          radius + 10
        );
        gradient.addColorStop(0, `rgba(168, 85, 247, 0)`);
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${opacity})`);
        gradient.addColorStop(1, `rgba(236, 72, 153, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(160, 160, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Update nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > 320) node.vx *= -1;
        if (node.y < 0 || node.y > 320) node.vy *= -1;

        node.x = Math.max(0, Math.min(320, node.x));
        node.y = Math.max(0, Math.min(320, node.y));
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.4;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${
              (nodes[i].hue + nodes[j].hue) / 2
            }, 80%, 65%, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes with glow
      nodes.forEach((node) => {
        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 4
        );
        gradient.addColorStop(0, `hsla(${node.hue}, 80%, 70%, 0.8)`);
        gradient.addColorStop(0.5, `hsla(${node.hue}, 80%, 65%, 0.4)`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${node.hue}, 90%, 75%, 1)`;
        ctx.fill();

        // Inner highlight
        ctx.beginPath();
        ctx.arc(
          node.x - node.radius * 0.3,
          node.y - node.radius * 0.3,
          node.radius * 0.4,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
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

export default ProjectsPage;