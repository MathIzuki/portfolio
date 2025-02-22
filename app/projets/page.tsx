"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaArrowLeft,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaPhp,
  FaWordpress,
  FaGithub,
  FaClock,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiKotlin,
  SiMysql,
  SiJquery,
  SiTrello,

} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";

// Composant pour le grid animé qui suit le curseur
const MovingGrid = ({ gridColor }: { gridColor: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const bgPosition = useTransform(
    [smoothX, smoothY],
    ([latestX, latestY]) => `${latestX}px ${latestY}px`
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Facteur réduit pour un effet "sur roulettes"
      mouseX.set(e.clientX * 0.05);
      mouseY.set(e.clientY * 0.05);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        backgroundPosition: bgPosition,
      }}
      transition={{ ease: "easeOut", duration: 0.1 }}
    />
  );
};

// Composant pour la grosse lumière animée en bas à gauche avec décalage
const AnimatedBigLight = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const lightColor = isDarkMode
    ? "rgba(138,43,226,0.2)" // violet en mode sombre
    : "rgba(255,160,0,0.4)"; // jaune en mode clair

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: "900px",
        height: "900px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${lightColor}, transparent 70%)`,
        bottom: "-40%",
        left: "-8%",
      }}
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default function ProjectsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  if (!mounted) return null;

  // Couleur du grid selon le thème
  const gridColor = isDarkMode
    ? "rgba(255,255,255,0.1)"
    : "rgba(0,0,0,0.1)";
  // Overlays latéraux et en bas pour un fade plus prononcé
  const leftGradient = isDarkMode
    ? "linear-gradient(to right, #111, transparent)"
    : "linear-gradient(to right, white, transparent)";
  const rightGradient = isDarkMode
    ? "linear-gradient(to left, #111, transparent)"
    : "linear-gradient(to left, white, transparent)";
  const bottomGradient = isDarkMode
    ? "linear-gradient(to top, #111, transparent)"
    : "linear-gradient(to top, white, transparent)";

    const projects = [
      {
        id: 1,
        title: "Portfolio",
        technologies: [
          <SiTypescript className="text-blue-500 text-2xl" key="typescript" />,
          <FaReact className="text-blue-400 text-2xl" key="react" />,
          <SiTailwindcss className="text-teal-400 text-2xl" key="tailwind" />,
          <RiNextjsFill className="text-neutral-900 text-2xl" key="nextjs" />,
          <FaCss3Alt className="text-blue-500 text-2xl" key="css" />,
        ],
        description:
          "Mon portfolio est un site interactif et moderne mettant en avant mes compétences en développement web, design, cybersécurité et audiovisuel. Il présente mon parcours, mes projets et mon expertise à travers une interface dynamique et immersive.",
        link: "/projets/projet-1",
      },
      {
        id: 2,
        title: "Le Labyrinthe des Pierres Oubliées",
        technologies: [
          <FaHtml5 className="text-orange-500 text-2xl" key="html" />,
          <FaCss3Alt className="text-blue-500 text-2xl" key="css" />,
          <FaJsSquare className="text-yellow-400 text-2xl" key="js" />,
          <TbBrandThreejs className="text-white text-2xl" key="threejs" />,
        ],
        description:
          "Un jeu d'horreur en 3D où le joueur doit suvivre d’un labyrinthe généré aléatoirement, tout en étant poursuivi par une créature terrifiante. L'ambiance est renforcée par des effets visuels glitchés et une bande-son immersive.",
        link: "/projets/projet-2",
      },
      {
        id: 3,
        title: "Epicurio",
        technologies: [
          <SiKotlin className="text-purple-500 text-2xl" key="kotlin" />,
        ],
        description:
          "Projet individuel réalisé en seconde année de BTS SIO. Il s'agit d'une application mobile qui permet de rechercher des recettes de cuisine et d'en afficher le détail.",
        link: "/projets/projet-3",
      },
      {
        id: 4,
        title: "Site intranet Ablink",
        technologies: [
          <FaPhp className="text-purple-500 text-2xl" key="php" />,
          <SiMysql className="text-blue-500 text-2xl" key="mysql" />,
        ],
        description:
          "Projet réalisé durant mon stage de deuxième année en BTS SIO à AbLink, visant à moderniser l'intranet de l'entreprise. Ce projet propose une interface fluide et intuitive pour gérer factures, devis et l'intégration de nouveaux clients, optimisant ainsi les processus internes.",
        link: "/projets/projet-4",
      },
      {
        id: 5,
        title: "Delabonne",
        technologies: [
          <FaWordpress className="text-blue-500 text-2xl" key="wordpress" />,
          <SiJquery className="text-indigo-500 text-2xl" key="jquery" />,
        ],
        description:
          "Projet réalisé durant mon stage de première année en BTS SIO à Captusite, qui met en avant l'image de marque de l'entreprise à travers un site dynamique et attractif. L'interface conviviale et moderne offre une expérience engageante et professionnelle.",
        link: "/projets/projet-5",
      },
      {
        id: 6,
        title: "Atmos Plastics",
        technologies: [
          <FaWordpress className="text-blue-500 text-2xl" key="wordpress" />,
          <SiJquery className="text-indigo-500 text-2xl" key="jquery" />,
        ],
        description:
          "Projet réalisé durant mon stage de première année en BTS SIO à Captusite, consistant en la création d'une vitrine web statique. Le design épuré et la navigation intuitive renforcent l'image et la visibilité de l'entreprise.",
        link: "/projets/projet-6",
      },
      {
        id: 7,
        title: "Site web Valres",
        technologies: [
          <FaHtml5 className="text-orange-500 text-2xl" key="html" />,
          <FaCss3Alt className="text-blue-500 text-2xl" key="css" />,
          <FaJsSquare className="text-yellow-400 text-2xl" key="js" />,
          <FaPhp className="text-purple-500 text-2xl" key="php" />,
          <FaGithub className="text-gray-700 text-2xl" key="github" />,
          <FaClock className="text-red-500 text-2xl" key="clock" />,
        ],
        description:
          "Projet en groupe de deux réalisé dans le cadre de ma formation BTS SIO en deuxième année au Lycée Ozenne. Ce site web dynamique se distingue par son interface moderne et ses fonctionnalités interactives, offrant une expérience utilisateur professionnelle et optimisée.",
        link: "/projets/projet-7",
      },
      {
        id: 8,
        title: "Site web MyCoach",
        technologies: [
          <FaHtml5 className="text-orange-500 text-2xl" key="html" />,
          <FaCss3Alt className="text-blue-500 text-2xl" key="css" />,
          <FaJsSquare className="text-yellow-400 text-2xl" key="js" />,
          <FaPhp className="text-purple-500 text-2xl" key="php" />,
          <SiTrello className="text-blue-500 text-2xl" key="trello" />,
          <FaGithub className="text-gray-700 text-2xl" key="github" />,
        ],
        description:
          "Projet individuel réalisé durant ma deuxième année en BTS SIO au Lycée Ozenne, proposant une solution web complète et innovante. L'interface moderne et performante assure une navigation fluide et une expérience utilisateur remarquable.",
        link: "/projets/projet-8",
      },
      {
        id: 9,
        title: "Site web GSB",
        technologies: [
          <FaHtml5 className="text-orange-500 text-2xl" key="html" />,
          <FaCss3Alt className="text-blue-500 text-2xl" key="css" />,
          <FaJsSquare className="text-yellow-400 text-2xl" key="js" />,
          <FaPhp className="text-purple-500 text-2xl" key="php" />,
          <FaGithub className="text-gray-700 text-2xl" key="github" />,
        ],
        description:
          "Projet en groupe de trois, mené durant ma première année de BTS SIO au Lycée Ozenne. Ce site web interactif offre une plateforme ergonomique qui facilite l'accès à des informations essentielles et valorise l'image de l'entreprise.",
        link: "/projets/projet-9",
      },
      {
        id: 10,
        title: "Site web Let's Be Friends",
        technologies: [
          <FaHtml5 className="text-orange-500 text-2xl" key="html" />,
          <FaCss3Alt className="text-blue-500 text-2xl" key="css" />,
          <FaJsSquare className="text-yellow-400 text-2xl" key="js" />,
          <FaGithub className="text-gray-700 text-2xl" key="github" />,
        ],
        description:
          "Projet en groupe de trois réalisé durant ma première année en BTS SIO au Lycée Ozenne. Ce site vitrine se distingue par son design attractif et sa simplicité d'utilisation, offrant une présentation moderne et engageante de l'entreprise.",
        link: "/projets/projet-10",
      },
    ];
    

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        isDarkMode ? "bg-neutral-950" : "bg-gray-100"
      }`}
    >
      {/* Grid animé visible dans tous les thèmes */}
      <MovingGrid gridColor={gridColor} />

      {/* Overlays latéraux et en bas pour un fade plus prononcé */}
      <div
        className="absolute top-0 left-0 h-full w-2/3 pointer-events-none"
        style={{ background: leftGradient }}
      />
      <div
        className="absolute top-0 right-0 h-full w-2/3 pointer-events-none"
        style={{ background: rightGradient }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-20 pointer-events-none"
        style={{ background: bottomGradient }}
      />

      {/* Grosse lumière animée en bas à gauche */}
      <AnimatedBigLight isDarkMode={isDarkMode} />

      {/* Flèche de retour en haut à gauche */}
      <Link
        href="./"
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-white dark:bg-neutral-800 shadow hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
      >
        <FaArrowLeft size={24} className="text-gray-800 dark:text-gray-200" />
      </Link>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto p-8 mt-12">
        <div className="relative inline-block mb-12">
                    <h2 className="font-semibold text-4xl sm:text-4xl relative z-10">
                      Tous mes projets
                    </h2>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                      className="absolute bottom-0 left-6 h-4 transition-colors duration-500 z-0 bg-yellow-500 dark:bg-violet-500"
                    />
                  </div>
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          {projects.map((project) => (
            <Link key={project.id} href={project.link}>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  borderColor: gridColor,
                }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  y: -5,
                  borderColor: isDarkMode
                    ? "rgba(139,92,246,0.3)"
                    : "rgba(250,204,21,0.3)",
                }}
                transition={{
                  y: { type: "tween", duration: 0.15 },
                  borderColor: { type: "tween", duration: 0.15 },
                  opacity: { type: "spring", stiffness: 200, damping: 20 },
                  scale: { type: "spring", stiffness: 200, damping: 20 },
                }}
                className="p-6 bg-white/50 dark:bg-neutral-900/10 rounded-2xl backdrop-blur-sm 
                           border shadow-lg transition-all cursor-pointer"
              >
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  {project.title}
                </h3>
                <div className="flex space-x-4 mb-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {tech}
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm text-justify">
                  {project.description}
                </p>
                <p className="text-yellow-500 dark:text-violet-500 font-medium">
                  Plus de détails
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
