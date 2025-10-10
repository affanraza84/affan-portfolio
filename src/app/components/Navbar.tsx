"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const canvasRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Three.js 3D Background
  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 100,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, 100);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;
    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);
    // Create rotating torus
    const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.x = -5;
    scene.add(torus);
    // Animation
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      renderer.setSize(window.innerWidth, 100);
      camera.aspect = window.innerWidth / 100;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);
  const navItems = [
    { name: "Home", href: "#home"},
    { name: "About", href: "#about"},
    { name: "Skills", href: "#skills"},
    { name: "Projects", href: "#projects"},
    { name: "Experience", href: "#experience"},
    { name: "Contact", href: "#contact"},
  ];
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="fixed top-0 w-full z-50"
    >
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      {/* Glass Morphism Container */}
      <div
        className={`relative transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-2xl shadow-2xl border-b border-white/10"
            : "backdrop-blur-xl"
        }`}
        style={{
          background: isScrolled
            ? "linear-gradient(to right, rgba(49, 46, 129, 0.85), rgba(88, 28, 135, 0.85), rgba(131, 24, 67, 0.85))"
            : "linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(30, 27, 75, 0.85), rgba(49, 46, 129, 0.75))",
        }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(to right, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15))",
            backgroundSize: "200% 200%",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            {/* Holographic Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 relative z-10"
            >
              <a href="#home" className="flex items-center gap-4 group">
                {/* 3D Floating Orb */}
                <div className="relative w-14 h-14">
                  {/* Outer glow ring */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="absolute inset-0 rounded-full blur-lg"
                    style={{
                      background:
                        "linear-gradient(to top right, rgb(6, 182, 212), rgb(59, 130, 246), rgb(147, 51, 234))",
                      opacity: 0.9,
                    }}
                  />
                  {/* Main orb */}
                  <motion.div
                    animate={{
                      rotateY: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-1 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to bottom right, rgb(34, 211, 238), rgb(59, 130, 246), rgb(147, 51, 234))",
                      boxShadow:
                        "0 0 40px rgba(59, 130, 246, 1), inset 0 0 20px rgba(255, 255, 255, 0.5)",
                    }}
                  />
                  {/* Inner highlight */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white blur-sm"
                  />
                  {/* Orbiting particles */}
                  {[0, 120, 240].map((angle, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                      }}
                      className="absolute inset-0"
                    >
                      <div
                        className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `translate(-50%, -50%) translateY(-28px) rotate(${angle}deg)`,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                {/* Holographic Text */}
                <div className="relative">
                  <motion.div
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.8)",
                        "0 0 20px rgba(147, 51, 234, 0.8)",
                        "0 0 10px rgba(59, 130, 246, 0.8)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-2xl font-black tracking-wider"
                  >
                    <span className="text-cyan-300">AFFAN&apos;S</span>
                    <span className="text-purple-400">PORTFOLIO</span>
                  </motion.div>
                  {/* Scan line effect */}
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent h-1/2"
                    style={{ mixBlendMode: "overlay" }}
                  />
                </div>
              </a>
            </motion.div>
            {/* Desktop Navigation - Floating Pills */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, type: "spring" }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <motion.a
                    href={item.href}
                    onClick={() => setActiveSection(item.name.toLowerCase())}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden ${
                      activeSection === item.name.toLowerCase()
                        ? "text-white shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                        : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    style={
                      activeSection === item.name.toLowerCase()
                        ? {
                            background:
                              "linear-gradient(to right, rgb(6, 182, 212), rgb(59, 130, 246), rgb(147, 51, 234))",
                          }
                        : undefined
                    }
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      style={{ width: "50%" }}
                    />
                    <span className="relative z-10">{item.name}</span>
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
                      style={{
                        background:
                          "linear-gradient(to right, rgb(6, 182, 212), rgb(59, 130, 246), rgb(147, 51, 234))",
                      }}
                    />
                  </motion.a>
                  {/* Active indicator */}
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
            {/* Mobile Menu Button - Futuristic */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 rounded-xl border border-cyan-400/30 backdrop-blur-xl"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="h-6 w-6 text-cyan-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </motion.div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-md -z-10" />
              </motion.button>
            </div>
          </div>
        </div>
        {/* Animated bottom border */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-0.5"
          style={{
            background:
              "linear-gradient(to right, rgb(6, 182, 212), rgb(59, 130, 246), rgb(147, 51, 234))",
            backgroundSize: "200% 100%",
          }}
        />
      </div>
      {/* Mobile Menu - Holographic Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="md:hidden relative overflow-hidden"
          >
            {/* Background with gradient */}
            <div
              className="absolute inset-0 backdrop-blur-2xl"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(49, 46, 129, 0.95), rgba(88, 28, 135, 0.95), rgba(0, 0, 0, 0.95))",
              }}
            />
            {/* Animated grid pattern */}
            <motion.div
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative flex flex-col px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group flex items-center gap-4 px-6 py-4 rounded-2xl border border-cyan-400/20 backdrop-blur-xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                  }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                    }}
                  />
                  {/* Icon with glow
                  <motion.span
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl relative z-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  >
                    {item.icon}
                  </motion.span> */}
                  <span className="relative z-10 font-semibold text-lg text-cyan-200">
                    {item.name}
                  </span>
                  {/* Arrow */}
                  <motion.span
                    className="ml-auto text-cyan-400 opacity-0 group-hover:opacity-100"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{ width: "50%" }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
export default Navbar;
