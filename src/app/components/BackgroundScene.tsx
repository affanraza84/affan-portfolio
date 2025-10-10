"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Particle field
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i + 1] = (Math.random() - 0.5) * 20;
      posArray[i + 2] = (Math.random() - 0.5) * 20;

      const t = Math.random();
      colorsArray[i] = 0.2 + t * 0.5;
      colorsArray[i + 1] = 0.5 + t * 0.3;
      colorsArray[i + 2] = 0.8 + t * 0.2;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorsArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    particlesRef.current = particlesMesh;
    scene.add(particlesMesh);

    // Geometric shapes
    const geometries = [
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1.2, 0),
      new THREE.IcosahedronGeometry(0.8, 0),
    ];

    const shapes = geometries.map((geometry, index) => {
      const material = new THREE.MeshBasicMaterial({
        color: [0x00ffff, 0x6366f1, 0xec4899][index],
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set((index - 1) * 3, Math.sin(index) * 2, -2);
      scene.add(mesh);
      return mesh;
    });

    // Animation
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsedTime * 0.05;
        particlesRef.current.rotation.x = elapsedTime * 0.03;
      }

      shapes.forEach((shape, index) => {
        shape.rotation.x = elapsedTime * (0.5 + index * 0.1);
        shape.rotation.y = elapsedTime * (0.3 + index * 0.1);
        shape.position.y = Math.sin(elapsedTime + index) * 0.5;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      geometries.forEach((g) => g.dispose());
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />;
}
