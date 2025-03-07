"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaGithub, FaTimes } from "react-icons/fa";


// Composant MovingGrid avec masque CSS pour un fade sur les côtés
const MovingGrid = ({ gridColor }: { gridColor: string }) => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
      }}
      transition={{ ease: "easeOut", duration: 0.1 }}
    />
  );
};

// Composant AnimatedBigLight (lumière animée en arrière-plan)
const AnimatedBigLight = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const lightColor = isDarkMode ? "rgba(138,43,226,0.2)" : "rgba(255,160,0,0.4)";
  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        width: "800px",
        height: "700px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${lightColor}, transparent 70%)`,
        bottom: "-40%",
        left: "-8%",
      }}
      animate={{ scale: [1, 1.05, 1], rotate: [0, 10, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

// Composant ImageSlider avec modal de zoom en fixed et centré
const ImageSlider = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  // selectedIndex détermine l'image affichée dans le modal
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const leftIndex = (current - 1 + images.length) % images.length;
  const rightIndex = (current + 1) % images.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Navigation dans le modal
  const navigateModalLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const navigateModalRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12" style={{ perspective: 1000 }}>
      <LayoutGroup>
        <div className="flex items-center justify-center h-96 relative space-x-4">
          {/* Image de gauche */}
          <motion.div
            layoutId={`image-${images[leftIndex]}`}
            className="w-64 h-40 relative cursor-pointer"
            initial={{ opacity: 0.7, scale: 0.9 }}
            animate={{ opacity: 0.7, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedIndex(leftIndex)}
          >
            <Image
              src={images[leftIndex]}
              alt="Slide précédent"
              fill
              className="rounded-xl shadow-2xl object-cover"
            />
          </motion.div>

          {/* Image centrale */}
          <motion.div
            layoutId={`image-${images[current]}`}
            className="w-96 h-72 relative cursor-pointer"
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={() => setSelectedIndex(current)}
          >
            <Image
              src={images[current]}
              alt={`Slide ${current + 1}`}
              fill
              className="rounded-xl shadow-2xl object-cover"
            />
          </motion.div>

          {/* Image de droite */}
          <motion.div
            layoutId={`image-${images[rightIndex]}`}
            className="w-64 h-40 relative cursor-pointer"
            initial={{ opacity: 0.7, scale: 0.9 }}
            animate={{ opacity: 0.7, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedIndex(rightIndex)}
          >
            <Image
              src={images[rightIndex]}
              alt="Slide suivant"
              fill
              className="rounded-xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>

        {/* Modal de zoom */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-md rounded-xl"
              onClick={() => setSelectedIndex(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                layoutId={`image-${images[selectedIndex]}`}
                onClick={(e) => e.stopPropagation()}
                // Conteneur avec dimensions fixes et limites à la viewport
                className="absolute w-[100%] h-[900px] max-w-[90vw] max-h-[90vh]"
              >
                <Image
                  src={images[selectedIndex]}
                  alt="Vue agrandie"
                  fill
                  className="object-contain rounded-xl shadow-2xl bg-black/40 transform -translate-y-1/4 w-[90%] h-[90%] "
                />
                {/* Bouton de fermeture */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute -top-48 right-4 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
                >
                  <FaTimes size={24} />
                </button>
                {/* Flèche gauche */}
                <button
                  onClick={navigateModalLeft}
                  className="absolute left-4 top-1/4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
                >
                  <FaChevronLeft size={24} />
                </button>
                {/* Flèche droite */}
                <button
                  onClick={navigateModalRight}
                  className="absolute right-4 top-1/4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
                >
                  <FaChevronRight size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>

      {/* Contrôles du slider */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full backdrop-blur-sm bg-black/30 hover:bg-violet-500/50 transition-colors"
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full backdrop-blur-sm bg-black/30 hover:bg-violet-500/50 transition-colors"
        >
          <FaChevronLeft className="text-white text-xl rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  if (!mounted) return null;

  const gridColor = isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const sliderImages = [
    "/images/portfolio1.png",
    "/images/portfolio2.png",
    "/images/portfolio3.png",
    "/images/portfolio4.png",
    "/images/portfolio5.png",
    "/images/portfolio6.png",
  ];

  return (
    <div className={`${isDarkMode ? "bg-neutral-950" : "bg-white"} relative w-full min-h-screen overflow-hidden`}>
      <MovingGrid gridColor={gridColor} />
      <AnimatedBigLight isDarkMode={isDarkMode} />

      {/* Bouton de retour */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-5 left-5 z-50"
      >
        <Link
          href="/projets"
          className={`flex items-center gap-2 p-3 rounded-full backdrop-blur-sm transition-colors ${
            isDarkMode ? "bg-black/10 hover:bg-violet-500/30" : "bg-gray-200 hover:bg-yellow-500/30"
          }`}
        >
          <FaChevronLeft className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`} />
        </Link>
      </motion.div>

      <main className="relative z-10 pt-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`backdrop-blur-sm rounded-2xl p-8 shadow-xl border ${
            isDarkMode ? "bg-neutral-900/30 border-gray-700" : "bg-white/50 border-gray-200"
          }`}
        >
          <h1
            className={`text-4xl font-bold mb-6 text-center ${
              isDarkMode
                ? "bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent"
                : "text-yellow-500"
            }`}
          >
            Portfolio
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-8">
                <h2 className={`${isDarkMode ? "text-neutral-200" : "text-neutral-800"} text-2xl font-semibold mb-4`}>
                  Contexte du projet
                </h2>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed text-justify space-y-4`}>
                  Ce portfolio interactif et moderne a été conçu pour présenter mon parcours, mes compétences et mes réalisations de manière dynamique et immersive.
                  Il intègre une interface épurée avec des animations fluides, mettant en avant mon expertise en développement web, cybersécurité et audiovisuel. 
                  Chaque section a été pensée pour offrir une navigation intuitive et une expérience engageante, avec une mise en avant détaillée de mes projets et de leurs technologies.
                  Développé avec Next.js, TypeScript et TailwindCSS, ce projet illustre mon approche du design moderne et de l’optimisation des performances web.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-8">
                <h2 className={`${isDarkMode ? "text-neutral-200" : "text-neutral-800"} text-2xl font-semibold mb-4`}>
                  Fonctionnalités clés
                </h2>
                <ul className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} list-disc pl-6 space-y-3`}>
                  <li>Design élégant et animations fluides pour une navigation agréable</li>
                  <li>Section &quot;À propos&quot; détaillant mon parcours et mes motivations</li>
                  <li>Présentation interactive de mes expériences scolaires et professionnelles</li>
                  <li>Mise en avant des compétences techniques et soft skills</li>
                  <li>Affichage détaillé des projets avec description, technologies et captures d’écran</li>
                  <li>Optimisation des performances et du référencement (SEO) pour une meilleure visibilité</li>
                </ul>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="space-y-8">
              <div>
                <h3 className={`${isDarkMode ? "text-violet-400" : "text-yellow-500"} text-xl font-semibold mb-3`}>
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className={`px-3 py-1.5 rounded-full ${isDarkMode ? "bg-violet-500/10 text-violet-400" : "bg-yellow-500/10 text-yellow-500"} text-sm`}>
                    TypeScript
                  </span>
                  <span className={`px-3 py-1.5 rounded-full ${isDarkMode ? "bg-violet-500/10 text-violet-400" : "bg-yellow-500/10 text-yellow-500"} text-sm`}>
                    React
                  </span>
                  <span className={`px-3 py-1.5 rounded-full ${isDarkMode ? "bg-violet-500/10 text-violet-400" : "bg-yellow-500/10 text-yellow-500"} text-sm`}>
                    TailwindCSS
                  </span>
                  <span className={`px-3 py-1.5 rounded-full ${isDarkMode ? "bg-violet-500/10 text-violet-400" : "bg-yellow-500/10 text-yellow-500"} text-sm`}>
                    Next.js
                  </span>
                  <span className={`px-3 py-1.5 rounded-full ${isDarkMode ? "bg-violet-500/10 text-violet-400" : "bg-yellow-500/10 text-yellow-500"} text-sm`}>
                    CSS
                  </span>
                </div>
              </div>

              <div>
                <h3 className={`${isDarkMode ? "text-violet-400" : "text-yellow-500"} text-xl font-semibold mb-3`}>
                  Ressources
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MathIzuki/Valres"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 transition-colors ${isDarkMode ? "text-gray-300 hover:text-violet-400" : "text-gray-700 hover:text-yellow-500"}`}
                  >
                    <FaGithub className="text-xl" />
                    Code source
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <ImageSlider images={sliderImages} />
        </motion.div>
      </main>
    </div>
  );
}
