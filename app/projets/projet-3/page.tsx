"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const prevSlide = () => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;

  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exitRight: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
    exitLeft: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12">
      <div className="flex items-center justify-center h-96 overflow-hidden">
        {/* Image précédente */}
        <div className="relative w-48 h-64 opacity-70 transform scale-90 transition-all z-10">
          <Image
            src={images[prevIndex]}
            alt="Slide précédent"
            fill
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>

        {/* Slide principal */}
        <div className="relative w-80 h-96 mx-4 z-20">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit={direction === "right" ? "exitLeft" : "exitRight"}
              className="absolute w-full h-full"
            >
              <Image
                src={images[current]}
                alt={`Slide ${current + 1}`}
                fill
                className="rounded-xl shadow-2xl object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image suivante */}
        <div className="relative w-48 h-64 opacity-70 transform scale-90 transition-all z-10">
          <Image
            src={images[nextIndex]}
            alt="Slide suivant"
            fill
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>

      {/* Contrôles */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
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

export default function EpicurioPage() {
  const sliderImages = [
    "/images/epicurio1.webp",
    "/images/epicurio2.webp",
    "/images/epicurio3.webp",
    "/images/epicurio4.webp",
    "/images/epicurio5.webp",
    "/images/epicurio6.webp",
    "/images/epicurio7.webp",
  ];

  return (
    <div className="relative w-full min-h-screen dark:bg-neutral-900">
      {/* Flèche de retour */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-5 left-5 z-50"
      >
        <Link
          href="/projets"
          className="flex items-center gap-2 p-3 rounded-full backdrop-blur-sm bg-black/10 hover:bg-violet-500/30 transition-colors"
        >
          <FaChevronLeft className="text-black dark:text-white text-xl" />
        </Link>
      </motion.div>

      <main className="relative z-10 pt-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-sm bg-white/50 dark:bg-neutral-900/30 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-neutral-700/30"
        >
          <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
            Epicurio
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Contexte du projet
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Développée durant ma seconde année de BTS SIO, Epicurio est une application mobile innovante 
                  permettant de découvrir et d'explorer des recettes culinaires. Ce projet a servi de support 
                  principal pour l'épreuve E5 du BTS, mettant en avant mes compétences en développement Android.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Fonctionnalités clés
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                  <li>Recherche intelligente avec filtres avancés</li>
                  <li>Affichage détaillé des recettes avec instructions pas à pas</li>
                  <li>Système de favoris et historique de consultation</li>
                  <li>Génération aléatoire de recettes</li>
                  <li>Interface utilisateur intuitive et moderne</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-500 dark:text-violet-400">
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm">
                    Kotlin
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm">
                    Android Studio
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm">
                    API Rest
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-500 dark:text-violet-400">
                  Ressources
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/votrecompte/epicurio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
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