"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Composant ImageSlider : affiche trois images (centre large, côtés plus petits) avec navigation.
const ImageSlider = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-center">
        {/* Image précédente (petite, semi-transparente) */}
        <div className="relative w-48 h-32 opacity-70">
          <Image
            src={images[prevIndex]}
            alt="Slide précédent"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Image centrale (grande) */}
        <div className="relative w-80 h-56 mx-4">
          <Image
            src={images[current]}
            alt="Slide courant"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Image suivante (petite, semi-transparente) */}
        <div className="relative w-48 h-32 opacity-70">
          <Image
            src={images[nextIndex]}
            alt="Slide suivant"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      {/* Boutons de navigation */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          onClick={prevSlide}
          className="bg-white/70 p-2 rounded-full shadow"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/70 p-2 rounded-full shadow"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default function EpicurioPage() {
  // Remplacez ces chemins par ceux de vos captures d'écran réelles
  const sliderImages = [
    "/images/epicurio1.png",
    "/images/epicurio2.png",
    "/images/epicurio3.png",
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-900 p-8">
      {/* Lien de retour */}
      <Link href="/projets">
        <a className="mb-4 inline-block text-blue-500 hover:underline">
          ← Retour aux projets
        </a>
      </Link>
      
      {/* Titre et description */}
      <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
        Application Epicurio
      </h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Projet individuel réalisé en seconde année de BTS SIO. Il s'agit d'une application mobile permettant de rechercher des recettes de cuisines et d'afficher le détail de ces recettes. Ce projet a été présenté pour l'épreuve E5 du BTS.
      </p>

      {/* Objectif */}
      <h2 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
        Objectif
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Créer une application permettant de rechercher des recettes de cuisine.
      </p>

      {/* Tâches */}
      <h2 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
        Tâches
      </h2>
      <ul className="mb-6 list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Listage des recettes</li>
        <li>Obtenir une recette aléatoire</li>
        <li>Page détaillée pour chaque recette</li>
        <li>Recherche avancée avec plusieurs filtres</li>
      </ul>

      {/* Outils */}
      <h2 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
        Outils
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Kotlin</p>

      {/* Slider de captures d'écran */}
      <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
        Captures d'écrans
      </h2>
      <ImageSlider images={sliderImages} />

      {/* Liens vers Documentation et GitHub */}
      <div className="mt-8 flex space-x-4">
        <a
          href="https://documentation-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Documentation
        </a>
        <a
          href="https://github.com/yourusername/epicurio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
