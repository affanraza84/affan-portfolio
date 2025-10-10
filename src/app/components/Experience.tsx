"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, Users, Target, Zap, Code2, Rocket } from "lucide-react";

const ExperiencePage = () => {
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

  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Digital Blinc",
      location: "Remote",
      period: "July 2025 - August 2025",
      description: "Gained real-world experience in full-stack development by contributing to an API Integration Framework project.",
      achievements: [
        "Developed and integrated RESTful APIs to streamline data flow between services.",
        "Implemented frontend features using modern frameworks, improving user experience.",
        "Optimized database queries for faster performance and scalability.",
        "Collaborated with mentors to design a modular architecture for future-ready web applications."
      ],
      tech: ["React", "Node.js", "AWS", "Express.js", "PostgreSQL"],
      gradient: "from-emerald-500 to-green-600",
      glowColor: "rgba(16, 185, 129, 0.4)",
      icon: Rocket
    },
    {
      title: "Technical Coordinator",
      company: "News and Publication Society",
      location: "BIT Mesra",
      period: "May 2025 - present",
      description: "Contributed to designing and deploying scalable web solutions by integrating modern frontend and backend technologies to optimize performance and elevate user experience.",
      achievements: [
        "Developed backend services using Express.js and MongoDB, boosting workflow efficiency by 20%.",
        "Built responsive and dynamic UI components with React.js and Tailwind CSS for seamless usability.",
        "Collaborated in Agile sprints to deliver and deploy content management system features.",
        "Ensured cross-platform optimization and maintained clean, modular code for future scalability."
      ],
      tech: ["React", "Remix", "Avion", "Tailwind"],
      gradient: "from-blue-500 to-indigo-600",
      glowColor: "rgba(59, 130, 246, 0.4)",
      icon: Code2
    },
    {
      title: "Joint-Treasurer",
      company: "Environment Protection and Awareness Club",
      location: "BIT Mesra",
      period: "May 2025 - present",
      description: "Actively contributing to campus sustainability initiatives through event organization, financial management, and community engagement under the EPAC Club, BIT Mesra.",
      achievements: [
        "Managed and maintained accurate financial records for club activities and events.",
        "Co-organized sustainability drives and awareness campaigns engaging 100+ students.",
        "Partnered with faculty and local organizations to promote eco-friendly practices on campus.",
        "Led initiatives to reduce plastic usage and increase green participation among students."
      ],
      tech: [],
      gradient: "from-purple-500 to-pink-600",
      glowColor: "rgba(168, 85, 247, 0.4)",
      icon: Briefcase
    }
  ];

  return (
    <section
      id="experience"
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
            My Experience
          </motion.div>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        {/* Timeline Canvas Section */}
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
                        "rgba(16, 185, 129, 0.3)",
                        "rgba(59, 130, 246, 0.3)",
                        "rgba(249, 115, 22, 0.3)",
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
                className="absolute -inset-8 bg-gradient-to-r from-emerald-500 via-blue-500 to-orange-500 rounded-3xl blur-3xl"
              />

              {/* Main Canvas Container */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-3 border-emerald-400/50 shadow-[0_0_40px_rgba(16,185,129,0.6)] bg-gradient-to-br from-emerald-950/40 via-blue-950/40 to-orange-950/40 backdrop-blur-xl flex-shrink-0">
                {/* Timeline Canvas */}
                <TimelineCanvas />

                {/* Holographic scan lines */}
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent z-20 pointer-events-none"
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
                    <div className="w-full h-0.5 bg-emerald-400" />
                    <div className="w-0.5 h-full bg-emerald-400" />
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
                    className="absolute w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"
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

        {/* Experience Timeline */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-orange-500 hidden md:block" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard 
                  key={index}
                  experience={exp}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div variants={itemVariants}>
          <CoreCompetencies />
        </motion.div>
      </motion.div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
    tech: string[];
    gradient: string;
    glowColor: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const IconComponent = experience.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="md:ml-20 relative">
        {/* Timeline dot */}
        <motion.div
          className="hidden md:flex absolute -left-[4.5rem] top-8 w-8 h-8 rounded-full items-center justify-center z-10"
          style={{
            background: `linear-gradient(135deg, ${experience.glowColor}, ${experience.glowColor})`
          }}
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              `0 0 0 0 ${experience.glowColor}`,
              `0 0 0 10px rgba(0,0,0,0)`,
              `0 0 0 0 ${experience.glowColor}`
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3
          }}
        >
          <div className="w-4 h-4 rounded-full bg-white" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative group"
        >
          {/* Glow effect */}
          <div
            className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${experience.glowColor}, ${experience.glowColor})`,
            }}
          />

          {/* Card */}
          <div className="relative bg-gradient-to-br from-cyan-950/60 via-blue-950/60 to-purple-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${experience.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-cyan-100 font-semibold">{experience.company}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-cyan-100/80 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-cyan-100/80 mb-6 leading-relaxed">
              {experience.description}
            </p>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + idx * 0.1 }}
                    className="flex items-start gap-3 text-cyan-100/80 text-sm"
                  >
                    <Zap className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"
              style={{ skewX: "-20deg" }}
            />

            {/* Bottom accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${experience.gradient}`} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const CoreCompetencies = () => {
  const competencies = [
    {
      category: "Technical Expertise",
      icon: Code2,
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "rgba(34, 211, 238, 0.4)",
      skills: [
        { name: "Full Stack Development", desc: "Building scalable web applications" },
        { name: "Data Structure and Algorithm", desc: "solved 100+ questions" },
        { name: "Object Oriented Programming", desc: "Learned core concepts in Java" },
        { name: "Database Design", desc: "SQL & NoSQL optimization" }
      ]
    },
    {
      category: "Leadership & Collaboration",
      icon: Users,
      gradient: "from-emerald-500 to-green-600",
      glowColor: "rgba(16, 185, 129, 0.4)",
      skills: [
        { name: "Team Management", desc: "Working with cross-functional teams" },
        { name: "Mentoring", desc: "Guiding peers and juniors in topics of web development" },
        { name: "Project Execution", desc: "Planning sprints and ensuring smooth deployment cycles" },
        { name: "Community Engagement", desc: "Organizing campus events and sustainability drives with 100+ participants" }
      ]
    },
    {
      category: "Problem Solving",
      icon: Target,
      gradient: "from-purple-500 to-pink-600",
      glowColor: "rgba(168, 85, 247, 0.4)",
      skills: [
        { name: "Algorithm Design", desc: "Designing efficient solutions for complex challenges" },
        { name: "Performance Optimization", desc: "Enhancing app speed and backend efficiency" },
        { name: "Debugging & Troubleshooting", desc: "Resolving code and API integration issues" },
        { name: "Code Review", desc: "Ensuring maintainable and scalable code standards" }
      ]
    },
    {
      category: "Innovation & Growth",
      icon: Rocket,
      gradient: "from-orange-500 to-red-600",
      glowColor: "rgba(249, 115, 22, 0.4)",
      skills: [
        { name: "Emerging Technologies", desc: "Exploring AI tools, modern frameworks and new tech stacks" },
        { name: "Creative Development", desc: "Designing unique and user-centric web solutions" },
        { name: "Process Improvement", desc: "Automating workflows for faster and cleaner deployment" },
        { name: "Continuous Learnig", desc: "Staying aligned with evolving industry standards" }
      ]
    }
  ];

  return (
    <div>
      <h3
        className="text-3xl font-bold text-cyan-300 mb-10 text-center"
        style={{
          textShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
        }}
      >
        Core Competencies
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {competencies.map((competency, index) => {
          const IconComponent = competency.icon;
          return (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Glow effect */}
              <div 
                className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: competency.glowColor }}
              />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-cyan-950/60 via-blue-950/60 to-purple-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 shadow-2xl overflow-hidden min-h-[320px]">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${competency.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-cyan-300">{competency.category}</h4>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {competency.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + skillIndex * 0.1 
                      }}
                      whileHover={{ x: 5 }}
                      className="group/skill relative"
                    >
                      <div className="relative bg-gradient-to-r from-cyan-900/30 to-transparent border-l-2 border-cyan-400/50 pl-4 py-2 rounded-r-lg overflow-hidden">
                        <div className="flex items-start gap-2">
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                              rotate: [0, 180, 360]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.2
                            }}
                            className="mt-1"
                          >
                            <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          </motion.div>
                          <div className="flex-1">
                            <h5 className="text-cyan-200 font-semibold text-sm mb-1">
                              {skill.name}
                            </h5>
                            <p className="text-cyan-100/70 text-xs leading-relaxed">
                              {skill.desc}
                            </p>
                          </div>
                        </div>

                        {/* Hover glow */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(90deg, ${competency.glowColor}, transparent)`
                          }}
                        />

                        {/* Sweep effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700"
                          style={{ skewX: "-20deg" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative corner glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl"
                  style={{ backgroundColor: competency.glowColor.replace('0.4', '0.3') }}
                />

                {/* Shine effect on card */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"
                  style={{ skewX: "-20deg" }}
                />

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${competency.gradient}`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

interface TimelinePoint {
  x: number;
  y: number;
  radius: number;
  angle: number;
  distance: number;
  speed: number;
  hue: number;
}

const TimelineCanvas = () => {
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

    const centerX = 160;
    const centerY = 160;

    // Timeline spiral points
    const timelinePoints: TimelinePoint[] = [];
    const numPoints = 40;

    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 6; // 3 full rotations
      const distance = 20 + (i / numPoints) * 100;
      timelinePoints.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        radius: 3 + (i / numPoints) * 2,
        angle: angle,
        distance: distance,
        speed: 0.01 + (i / numPoints) * 0.02,
        hue: 160 + (i / numPoints) * 60, // Green to blue
      });
    }

    // Orbiting milestones
    const milestones: TimelinePoint[] = [];
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      milestones.push({
        x: 0,
        y: 0,
        radius: 6,
        angle: angle,
        distance: 100,
        speed: 0.015,
        hue: 160 + i * 15,
      });
    }

    const animate = () => {
      // Fade effect
      ctx.fillStyle = "rgba(8, 47, 73, 0.1)";
      ctx.fillRect(0, 0, 320, 320);

      time += 0.01;

      // Draw spiral timeline path
      ctx.beginPath();
      ctx.strokeStyle = "rgba(16, 185, 129, 0.3)";
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 360; i++) {
        const angle = (i / 360) * Math.PI * 6;
        const distance = 20 + (i / 360) * 100;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Draw pulsing center
      const pulseRadius = 15 + Math.sin(time * 2) * 5;
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, pulseRadius
      );
      gradient.addColorStop(0, "rgba(16, 185, 129, 0.8)");
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.5)");
      gradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.fill();

      // Draw timeline points along spiral
      timelinePoints.forEach((point, index) => {
        const newAngle = point.angle + time * point.speed;
        const x = centerX + Math.cos(newAngle) * point.distance;
        const y = centerY + Math.sin(newAngle) * point.distance;

        // Glow
        const pointGradient = ctx.createRadialGradient(x, y, 0, x, y, point.radius * 3);
        pointGradient.addColorStop(0, `hsla(${point.hue}, 70%, 60%, 0.8)`);
        pointGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = pointGradient;
        ctx.beginPath();
        ctx.arc(x, y, point.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(x, y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${point.hue}, 80%, 70%, 1)`;
        ctx.fill();

        // Connect points
        if (index > 0) {
          const prevPoint = timelinePoints[index - 1];
          const prevX = centerX + Math.cos(prevPoint.angle + time * prevPoint.speed) * prevPoint.distance;
          const prevY = centerY + Math.sin(prevPoint.angle + time * prevPoint.speed) * prevPoint.distance;
          
          ctx.beginPath();
          ctx.strokeStyle = `hsla(${(point.hue + prevPoint.hue) / 2}, 70%, 60%, 0.3)`;
          ctx.lineWidth = 1;
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      });

      // Draw orbiting milestones
      milestones.forEach((milestone) => {
        milestone.angle += milestone.speed;
        const x = centerX + Math.cos(milestone.angle) * milestone.distance;
        const y = centerY + Math.sin(milestone.angle) * milestone.distance;

        // Large glow
        const milestoneGradient = ctx.createRadialGradient(x, y, 0, x, y, milestone.radius * 4);
        milestoneGradient.addColorStop(0, `hsla(${milestone.hue}, 80%, 70%, 0.9)`);
        milestoneGradient.addColorStop(0.5, `hsla(${milestone.hue}, 70%, 60%, 0.5)`);
        milestoneGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = milestoneGradient;
        ctx.beginPath();
        ctx.arc(x, y, milestone.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Milestone marker
        ctx.beginPath();
        ctx.arc(x, y, milestone.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${milestone.hue}, 90%, 75%, 1)`;
        ctx.fill();

        // White highlight
        ctx.beginPath();
        ctx.arc(x - 2, y - 2, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
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

export default ExperiencePage;