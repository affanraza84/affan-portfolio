"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  X,
  MessageSquare,
  User,
  Clock,
  CheckCircle,
  ArrowUp,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error("Failed to submit form");
        alert("Something went wrong. Please try again!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error connecting to the server.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "affanraza8081@gmail.com",
      link: "mailto:affanraza8081@gmail.com",
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "rgba(34, 211, 238, 0.4)",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "BIT Mesra, Ranchi, Jharkhand",
      link: "https://www.google.com/maps?client=safari&rls=en&oe=UTF-8&dlnr=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Ked7wvBT-_Q5MQTnxfMcDBhm&daddr=Mesra,+Jharkhand+835215",
      gradient: "from-purple-500 to-pink-600",
      glowColor: "rgba(168, 85, 247, 0.4)",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      link: "#",
      gradient: "from-orange-500 to-red-600",
      glowColor: "rgba(249, 115, 22, 0.4)",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/affanraza84",
      gradient: "from-gray-500 to-gray-700",
      glowColor: "rgba(107, 114, 128, 0.4)",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/mohammad-affan-raza-b6039b288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      gradient: "from-blue-500 to-blue-700",
      glowColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      icon: X,
      label: "X",
      link: "https://x.com/AffanRaza485434?t=rdR3kzsXcX1bzEp4sqHsIQ&s=09",
      gradient: "from-sky-400 to-blue-500",
      glowColor: "rgba(56, 189, 248, 0.4)",
    },
    {
      icon: FaDiscord,
      label: "Discord",
      link: "https://discord.com/users/affanraza_7365",
      gradient: "from-indigo-500 to-purple-600",
      glowColor: "rgba(99, 102, 241, 0.4)",
    },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </motion.div>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        {/* Email Canvas Section */}
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
                        "rgba(236, 72, 153, 0.3)",
                        "rgba(16, 185, 129, 0.3)",
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
                className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-pink-500 to-emerald-500 rounded-3xl blur-3xl"
              />

              {/* Main Canvas Container */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-3 border-cyan-400/50 shadow-[0_0_40px_rgba(34,211,238,0.6)] bg-gradient-to-br from-cyan-950/40 via-pink-950/40 to-emerald-950/40 backdrop-blur-xl flex-shrink-0">
                {/* Message Canvas */}
                <MessageCanvas />

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

        {/* Contact Info Cards */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group cursor-pointer"
                >
                  <div
                    className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: info.glowColor }}
                  />

                  <div className="relative bg-gradient-to-br from-cyan-950/60 via-blue-950/60 to-purple-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 text-center shadow-2xl overflow-hidden">
                    <motion.div
                      className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </motion.div>
                    <h4 className="text-cyan-300 font-semibold mb-2">
                      {info.label}
                    </h4>
                    <p className="text-cyan-100/80 text-sm">{info.value}</p>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"
                      style={{ skewX: "-20deg" }}
                    />

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient}`}
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Form and Social Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 relative group"
          >
            <div className="absolute -inset-1 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-purple-500/40" />

            <div className="relative bg-gradient-to-br from-cyan-950/60 via-blue-950/60 to-purple-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 shadow-2xl overflow-hidden">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
                <Send className="w-6 h-6" />
                Send Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-20 h-20 text-emerald-400 mb-4" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-cyan-300 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-cyan-100/80">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cyan-300 text-sm font-semibold mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 bg-cyan-950/30 border border-cyan-400/30 rounded-xl text-cyan-100 placeholder-cyan-100/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                          placeholder="Affan Raza"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-cyan-300 text-sm font-semibold mb-2">
                        Your Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 bg-cyan-950/30 border border-cyan-400/30 rounded-xl text-cyan-100 placeholder-cyan-100/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                          placeholder="affanraza@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-cyan-300 text-sm font-semibold mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 bg-cyan-950/30 border border-cyan-400/30 rounded-xl text-cyan-100 placeholder-cyan-100/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-cyan-300 text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full px-4 py-3 bg-cyan-950/30 border border-cyan-400/30 rounded-xl text-cyan-100 placeholder-cyan-100/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                      placeholder="Drop me a message if you'd like to work together or discuss potential opportunities..."
                    />
                  </div>

                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </div>
              )}

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl pointer-events-none"
                style={{ skewX: "-20deg" }}
              />
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/40 to-pink-500/40" />

              <div className="relative bg-gradient-to-br from-cyan-950/60 via-blue-950/60 to-purple-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-cyan-300 mb-6">
                  Connect With Me
                </h3>

                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-900/30 to-transparent border-l-2 border-cyan-400/50 rounded-r-xl group/social relative overflow-hidden"
                      >
                        <motion.div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </motion.div>
                        <span className="text-cyan-100 font-medium">
                          {social.label}
                        </span>

                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(90deg, ${social.glowColor}, transparent)`,
                          }}
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-500/40 to-green-500/40" />

              <div className="relative bg-gradient-to-br from-cyan-950/60 via-blue-950/60 to-purple-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-cyan-300 mb-4">
                  Availability
                </h3>
                <p className="text-cyan-100/80 text-sm leading-relaxed mb-4">
                  I&apos;m currently available for freelance projects and
                  full-time opportunities. Let&apos;s discuss how we can work
                  together!
                </p>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-emerald-400"
                  />
                  Available for work
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Go to Top Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center pb-8"
        >
          <motion.button
            onClick={scrollToTop}
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full rounded-full border-2 border-cyan-400" />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="w-full h-full rounded-full border-2 border-purple-400" />
            </motion.div>

            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-purple-500/40" />

            {/* Main button */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-cyan-950/80 via-blue-950/80 to-purple-950/80 backdrop-blur-xl border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center justify-center overflow-hidden">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Arrow with animation */}
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowUp className="w-7 h-7 text-cyan-300 relative z-10" />
              </motion.div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                style={{ skewX: "-20deg" }}
              />
            </div>

            {/* Text below button */}
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-cyan-300 text-sm font-semibold">
                Back to Top
              </span>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>


    </section>
  );
};

interface Message {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  rotationSpeed: number;
  hue: number;
}

const MessageCanvas = () => {
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

    const messages: Message[] = [];
    const numMessages = 8;

    for (let i = 0; i < numMessages; i++) {
      messages.push({
        x: Math.random() * 320,
        y: Math.random() * 320,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: 15 + Math.random() * 10,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        hue: 180 + Math.random() * 60,
      });
    }

    const drawEnvelope = (
      x: number,
      y: number,
      size: number,
      angle: number,
      hue: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      ctx.fillStyle = `hsla(${hue}, 70%, 60%, 0.9)`;
      ctx.fillRect(-size, -size * 0.7, size * 2, size * 1.4);

      ctx.fillStyle = `hsla(${hue}, 80%, 50%, 0.9)`;
      ctx.beginPath();
      ctx.moveTo(-size, -size * 0.7);
      ctx.lineTo(0, 0);
      ctx.lineTo(size, -size * 0.7);
      ctx.closePath();
      ctx.fill();

      ctx.shadowBlur = 20;
      ctx.shadowColor = `hsla(${hue}, 80%, 60%, 0.8)`;
      ctx.strokeStyle = `hsla(${hue}, 90%, 70%, 1)`;
      ctx.lineWidth = 2;
      ctx.strokeRect(-size, -size * 0.7, size * 2, size * 1.4);

      ctx.restore();
    };

    const animate = () => {
      ctx.fillStyle = "rgba(8, 47, 73, 0.12)";
      ctx.fillRect(0, 0, 320, 320);

      time += 0.01;

      const pulseRadius = 80 + Math.sin(time * 2) * 20;
      for (let i = 0; i < 3; i++) {
        const radius = pulseRadius + i * 30;
        const opacity = (1 - i * 0.3) * 0.3;

        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      messages.forEach((message, index) => {
        message.x += message.vx;
        message.y += message.vy;
        message.angle += message.rotationSpeed;

        if (message.x < 0 || message.x > 320) message.vx *= -1;
        if (message.y < 0 || message.y > 320) message.vy *= -1;

        message.x = Math.max(0, Math.min(320, message.x));
        message.y = Math.max(0, Math.min(320, message.y));

        for (let j = index + 1; j < messages.length; j++) {
          const dx = messages[j].x - message.x;
          const dy = messages[j].y - message.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.3;
            ctx.strokeStyle = `rgba(236, 72, 153, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(message.x, message.y);
            ctx.lineTo(messages[j].x, messages[j].y);
            ctx.stroke();
          }
        }

        drawEnvelope(
          message.x,
          message.y,
          message.size,
          message.angle,
          message.hue
        );
      });

      const centralSize = 25 + Math.sin(time * 3) * 5;
      drawEnvelope(centerX, centerY, centralSize, time * 0.5, 190);

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

export default ContactPage;