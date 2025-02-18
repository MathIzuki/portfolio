"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaUser,
  FaBook,
  FaBriefcase,
  FaComment,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";
import Link from "next/link";

export default function Home() {
  // Par défaut, mode sombre activé (true = dark mode)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Synchronisation du mode sombre avec l'élément racine
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Suivi du curseur
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation pour "CARCENAC Mathis"
  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.8 } },
  };
  const textVariants = {
    initial: { opacity: 0, y: -50, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1 } },
  };

  return (
    <div className="relative min-h-screen">
      {/* Ombre colorée diluée en haut */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: "55%",
          height: "50px",
          background: isDarkMode
            ? "rgba(138,43,226,0.05)"
            : "rgba(255,160,0,0.30)",
          filter: "blur(80px)",
        }}
      />

      {/* WRAPPER pour centrer le grid */}
      <div className="grid-wrapper">
        <motion.div
          className="grid-container"
          style={{
            // Le grid suit légèrement le curseur (facteur 0.05)
            x: mousePos.x * 0.05,
            y: mousePos.y * 0.05,
          }}
        >
          <div className="overlay-grid"></div>
          <div className="blue-gradient"></div>
          <div className="grid-overlay"></div>
        </motion.div>
      </div>

      {/* Overlay pour faire disparaître le grid vers le bas */}
      <div className="grid-fade" />

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* NAVIGATION */}
        <nav
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-8 py-4 rounded-full flex items-center gap-6 shadow-lg backdrop-blur-sm ${
            isDarkMode ? "bg-neutral-800/60 transition" : "bg-gray-200/40 transition"
          }`}
        >
          <div className="flex items-center gap-6">
            <FaHome
              className={`text-xl cursor-pointer transition ${
                isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"
              }`}
            />
            <FaUser
              className={`text-xl cursor-pointer transition ${
                isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"
              }`}
            />
            <FaBook
              className={`text-xl cursor-pointer transition ${
                isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"
              }`}
            />
            <FaBriefcase
              className={`text-xl cursor-pointer transition ${
                isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"
              }`}
            />
            <FaComment
              className={`text-xl cursor-pointer transition ${
                isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"
              }`}
            />
          </div>
          {/* Séparateur vertical */}
          <div className="h-6 border-l border-gray-500/35 mx-2" />
          <button
            onClick={toggleTheme}
            className={`text-xl p-2 rounded-full transition-colors duration-500 hover:bg-gray-300/10 ${
              !isDarkMode ? "hover:bg-neutral-900/10" : ""
            }`}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* CONTENU - centré verticalement */}
        <main className="flex flex-1 items-center justify-center">
          <section className="container mx-auto px-4 flex flex-col sm:flex-row items-center gap-8 py-20">
            {/* COLONNE TEXTE */}
            <div className="flex-1 flex flex-col items-center sm:items-start">
              <motion.div
                className="flex flex-wrap text-5xl sm:text-6xl font-extrabold text-center sm:text-left transition"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                <motion.span variants={textVariants} className="mr-4">
                  CARCENAC
                </motion.span>
                <motion.span variants={textVariants}>Mathis</motion.span>
              </motion.div>

              {/* "Étudiant en Informatique" avec highlight */}
              <div className="relative mt-4">
                <h2 className="font-semibold text-2xl sm:text-4xl relative z-10">
                  Étudiant en Informatique
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5 }}
                  className={`absolute -bottom-1 left-[5%] h-5 transition ${
                    isDarkMode ? "bg-violet-500" : "bg-yellow-500"
                  } z-0`}
                />
              </div>

              {/* LOCALISATION */}
              <div className="flex items-center gap-2 mt-6 text-lg sm:text-xl transition">
                <PiMapPinFill />
                <p>France, Toulouse | Albi</p>
              </div>

              {/* RÉSEAUX SOCIAUX */}
              <div className="flex gap-4 mt-6 text-2xl">
                <Link href="https://linkedin.com" target="_blank">
                  <FaLinkedin
                    className={`transition-colors duration-500 ${
                      isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"
                    }`}
                  />
                </Link>
                <Link href="https://github.com" target="_blank">
                  <FaGithub
                    className={`transition-colors duration-500 ${
                      isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"
                    }`}
                  />
                </Link>
                <Link href="#contact">
                  <FaEnvelope
                    className={`transition-colors duration-500 ${
                      isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"
                    }`}
                  />
                </Link>
              </div>
            </div>

            {/* COLONNE IMAGE */}
            <div className="flex-1 flex justify-center sm:justify-end">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/images/photo.png"
                  alt="Photo de profil"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
