"use client";

import Head from 'next/head';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoColorPaletteOutline } from "react-icons/io5";
import {
  FaReact,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaUser,
  FaBook,
  FaBriefcase,
  FaComment,
  FaSun,
  FaMoon,
  FaUserTie,
  FaSyncAlt,
  FaGraduationCap,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaWordpressSimple,
  FaDatabase,
  FaPhp,
  FaJava,
  FaPython,
  FaGithub,
  FaUbuntu,
  FaWindows,
  FaWhatsapp,
} from "react-icons/fa";
import { 
  SiAdobephotoshop,
  SiAdobeillustrator, 
  SiBlender, 
  SiAdobepremierepro, 
  SiCinema4D,
  SiKalilinux,
  SiArduino,
  SiDebian,
  SiEclipseide,
  SiAndroidstudio,
  SiKotlin,
  SiDavinciresolve,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { PiMapPinFill } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";
import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";

export default function Home() {
  // Mode sombre activé par défaut
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    entreprise: "",
    message: "",
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        alert("Votre message a été envoyé !");
        setFormData({ name: "", email: "", entreprise: "", message: "" });
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };
  

  // Pour les champs obligatoires : rouge si vide, vert si rempli.
  // Pour "entreprise" (facultatif) : gris si vide, vert si rempli.
  const getBorderClass = (field: string) => {
    if (field === "entreprise") {
      return formData.entreprise.trim() ? "border-green-500" : "border-gray-300";
    }
    return formData[field as keyof typeof formData].trim()
      ? "border-green-500"
      : "border-red-500";
  };
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Suivi du curseur pour l'effet grid
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Variants pour l'animation du titre "CARCENAC Mathis"
  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.8 } },
  };
  const textVariants = {
    initial: { opacity: 0, y: -50, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1 },
    },
  };

  // Timeline events
  const timelineEvents = [
    {
      id: 1,
      date: "2019",
      title: "Stage chez Docteur Ordinateur",
      location: "Carmaux",
      description: `Stage d'observation :
- Initiation au matériel informatique.
- Découverte de l'environnement professionnel.
- Première expérience du contact client.`,
      logo: "/images/docteur_ordinateur.png",
    },
    {
      id: 2,
      date: "2019 - 2022",
      title: "Formation Baccalauréat STI2D (option SIN)",
      location: "Lycée Jean Jaurès, Carmaux",
      description: `Baccalauréat STI2D obtenu avec mention bien.
Le STI2D option SIN se concentre sur le numérique, la programmation et les systèmes embarqués. Il permet d’acquérir des compétences en informatique, réseaux et électronique, ouvrant la voie à des études en ingénierie, cybersécurité et développement.`,
      logo: "/images/sti2d_logo.png",
    },
    {
      id: 3,
      date: "2022 - 2024",
      title: "Formation BTS SIO (option SLAM)",
      location: "Lycée Théodore Ozenne, Toulouse",
      description: `BTS SIO option SLAM obtenu.`,
      logo: "/images/logo-btssio.png",
    },
    {
      id: 4,
      date: "29/05/2023 - 30/06/2023",
      title: "Stage chez Captusite",
      location: "Fonsorbes",
      description: `Stage pratique :
- Rétablissement d'un site WordPress après une cyberattaque.
- Coordination avec le chef de projet.
- Personnalisation du site selon les spécifications clients.`,
      logo: "/images/captusite_logo.png",
    },
    {
      id: 5,
      date: "Été 2023 & 2024",
      title: "Travail d'été dans une Aire de Service",
      location: "Pampelonne",
      description: `Travail d'été :
- Barman : Service rapide, gestion d'un flux élevé de commandes, maintien d'un espace propre.
- Serveur : Accueil et service à la clientèle, traitement efficace des paiements.`,
      logo: "/images/logo_croixdemille.png",
    },
    {
      id: 6,
      date: "Été 2023",
      title: "Travail d'été en milieu agricole",
      location: "Castrage du maïs, Cordes-sur-ciel",
      description: `Travail en milieu agricole :
- Participation active au castrage du maïs, démonstration de persévérance.
- Collaboration pour optimiser les méthodes de travail.
- Adaptation rapide aux différentes tâches.`,
    },
    {
      id: 7,
      date: "26/02/2024 - 05/02/2024",
      title: "Stage chez AbLink",
      location: "Gaillac",
      description: `Stage pratique dans le développement :
- Développement technique par l'intégration d'APIs pour optimiser les fonctionnalités d'un site web existant.
- Conception et déploiement d'interfaces utilisateur pour faciliter l'interaction avec des services cloud.
- Gestion de projets en autonomie, avec initiative et résolution de problèmes complexes.`,
      logo: "/images/logo_ablink.png",
    },
  ];

  const sortedEvents = timelineEvents.sort((a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const getIconForEvent = (event: typeof timelineEvents[0]) => {
    const title = event.title.toLowerCase();
    const desc = event.description.toLowerCase();
    if (title.includes("formation")) {
      return <FaGraduationCap className="inline-block m-auto text-white dark:text-black" />;
    } else if (
      title.includes("captusite") ||
      title.includes("ablink") ||
      desc.includes("développement") ||
      title.includes("ordinateur")
    ) {
      return <FaCode className="inline-block m-auto text-white dark:text-black" />;
    } else if (title.includes("travail d'été") || title.includes("milieu agricole")) {
      return <FaUserTie className="inline-block m-auto text-white dark:text-black" />;
    }
    return null;
  };

  // Compétences
  const webDevSkills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML", level: "Avancé" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS", level: "Confirmé" },
    { icon: <FaJsSquare className="text-yellow-400" />, name: "JavaScript", level: "Intermédiaire" },
    { icon: <FaDatabase className="text-green-600" />, name: "MySQL", level: "Confirmé" },
    { icon: <FaPhp className="text-purple-700" />, name: "PHP", level: "Confirmé" },
    { icon: <FaWordpressSimple className="text-blue-600" />, name: "WordPress", level: "Intermédiaire" },
    { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS", level: "Intermédiaire" },
    { icon: <FaReact className="text-blue-400" />, name: "React", level: "Les bases" },
    { icon: <RiNextjsFill className="text-neutral-900" />, name: "NextJS", level: "Les bases" },
  ];

  const devObjetSkills = [
    { icon: <FaJava className="text-red-600" />, name: "Java", level: "Intermédiaire" },
    { icon: <SiKotlin className="text-purple-500" />, name: "Kotlin", level: "Intermédiaire" },
    { icon: <FaCode className="text-gray-600" />, name: "C", level: "Les bases" },
    { icon: <FaCode className="text-blue-600" />, name: "C#", level: "Les bases" },
    { icon: <FaPython className="text-blue-400" />, name: "Python", level: "Intermédiaire" },
    { icon: <SiArduino className="text-green-500" />, name: "Arduino", level: "Intermédiaire" },
  ];

  const designSkills = [
    { icon: <SiAdobephotoshop className="text-blue-400" />, name: "Photoshop", level: "Avancé" },
    { icon: <SiAdobepremierepro className="text-pink-500" />, name: "Premiere Pro", level: "Confirmé" },
    { icon: <SiCinema4D className="text-purple-500" />, name: "Cinema 4D", level: "Intermédiaire" },
    { icon: <SiBlender className="text-orange-400" />, name: "Blender", level: "Débutant" },
    { icon: <SiAdobeillustrator className="text-orange-500" />, name: "Illustrator", level: "Les bases" },
    { icon: <SiDavinciresolve className="text-purple-400" />, name: "DaVinci Resolve", level: "Intermédiaire" },
  ];

  const osSkills = [
    { icon: <FaWindows className="text-blue-500" />, name: "Windows", level: "Expert" },
    { icon: <FaUbuntu className="text-orange-600" />, name: "Ubuntu", level: "Avancé" },
    { icon: <SiKalilinux className="text-gray-500" />, name: "Kali Linux", level: "Intermédiaire" },
    { icon: <SiDebian className="text-red-500" />, name: "Debian", level: "Les bases" },
  ];

  const outilsSkills = [
    { icon: <FaGithub className="text-black dark:text-white" />, name: "Git / GitHub", level: "Confirmé" },
    { icon: <VscVscode className="text-blue-500" />, name: "VSCode", level: "Avancé" },
    { icon: <SiEclipseide className="text-blue-900" />, name: "Eclipse", level: "Intermédiaire" },
    { icon: <SiAndroidstudio className="text-green-600" />, name: "Android Studio", level: "Intermédiaire" },
  ];

  return (
    <>
      <Head>
        <title>Mathis Carcenac - Portfolio & Expériences</title>
        <meta name="description" content="Découvrez le portfolio de Mathis Carcenac, étudiant en informatique passionné par le développement web, design, audiovisuel et cybersécurité." />
        <meta name="keywords" content="Mathis Carcenac, Portfolio, Développeur Web, Design, Cybersécurité, Informatique, Étudiant" />
        <meta name="author" content="Mathis Carcenac" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.mathiscarcenac.com" />
        <meta property="og:title" content="Mathis Carcenac - Portfolio & Expériences" />
        <meta property="og:description" content="Découvrez le portfolio de Mathis Carcenac, étudiant en informatique passionné par le développement web, design, audiovisuel et cybersécurité." />
        <meta property="og:url" content="https://www.mathiscarcenac.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/photopurple.png" />
      </Head>
      <main className="relative w-full">
        <div id="top"></div>
        {/* HERO SECTION */}
        <header className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden ">
  {/* Fond GRID */}
  <div className="absolute inset-0 pointer-events-none">
    <motion.div
      className="grid-container w-full h-full"
      style={{ x: mousePos.x * 0.05, y: mousePos.y * 0.05 }}
    >
      <div className="overlay-grid" />
      <div className="blue-gradient" />
      <div className="grid-overlay" />
    </motion.div>
    <div className="grid-fade absolute bottom-0 left-0 w-full h-1/3" />
  </div>

  {/* Ombre en haut */}
  <div 
    className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none"
    style={{
      width: "55%",
      height: "50px",
      background: isDarkMode ? "rgba(138,43,226,0.08)" : "rgba(255,160,0,0.50)",
      filter: "blur(80px)",
    }}
  />

  {/* Navigation */}
  <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-8 py-4 rounded-full flex items-center gap-6 shadow-lg backdrop-blur-sm z-40 ${isDarkMode ? "bg-neutral-900/70" : "bg-gray-200/50"} transition`}>
    <div className="flex items-center gap-6">
      <Link href="#top">
        <FaHome className={`text-xl cursor-pointer transition ${isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"}`} />
      </Link>
      <Link href="#apropos">
        <FaUser className={`text-xl cursor-pointer transition ${isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"}`} />
      </Link>
      <Link href="#competences">
        <FaBook className={`text-xl cursor-pointer transition ${isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"}`} />
      </Link>
      <Link href="#projets">
        <FaBriefcase className={`text-xl cursor-pointer transition ${isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"}`} />
      </Link>
      <Link href="#contact">
        <FaComment className={`text-xl cursor-pointer transition ${isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"}`} />
      </Link>
    </div>
    <div className="h-6 border-l border-gray-500/35 mx-2" />
    <button onClick={toggleTheme} className={`text-xl p-2 rounded-full transition-colors duration-500 hover:bg-gray-300/10 ${!isDarkMode ? "hover:bg-neutral-900/10" : ""}`}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  </nav>

  {/* Contenu HERO */}
  <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 px-4">
    {/* Texte */}
    <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
      <motion.div 
        className="flex flex-wrap justify-center sm:justify-start text-5xl sm:text-6xl font-extrabold transition-colors duration-500 text-center md:text-left"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span variants={textVariants} className="mb-2 sm:mb-0 sm:mr-4">CARCENAC</motion.span>
        <motion.span variants={textVariants}>Mathis</motion.span>
      </motion.div>
      <div className="relative mt-4">
        <h2 className="font-semibold text-2xl sm:text-4xl relative z-10">Étudiant en Informatique</h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5 }}
          className="absolute -bottom-1 left-[5%] h-5 transition-colors duration-500 bg-yellow-500 dark:bg-violet-500 z-0"
        />
      </div>
      <div className="flex items-center gap-2 mt-6 text-lg sm:text-xl transition-colors duration-500">
        <PiMapPinFill />
        <p>France, Toulouse | Albi</p>
      </div>
      <div className="flex gap-4 mt-6 text-2xl">
        <Link href="https://www.linkedin.com/in/mathis-carcenac-846414252/" target="_blank">
          <FaLinkedin className={`transition-colors duration-500 ${isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"}`} />
        </Link>
        <Link href="https://github.com/mathizuki" target="_blank">
          <FaGithub className={`transition-colors duration-500 ${isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"}`} />
        </Link>
        <Link href="#contact">
          <FaEnvelope className={`transition-colors duration-500 ${isDarkMode ? "hover:text-purple-500" : "hover:text-yellow-500"}`} />
        </Link>
      </div>
    </div>

    {/* Image */}
    <div className="flex-1 flex justify-center sm:justify-center overflow-visible p-4 relative">
      <div className="relative w-64 h-64 md:w-[500px] md:h-[500px] overflow-visible">
        <div className="relative w-full h-full overflow-hidden blob-anim transition-colors duration-500 rounded-full" style={{ backgroundColor: isDarkMode ? "#7230cf" : "#facc15" }}>
          <motion.div className="w-full h-full" initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}>
            <Image
              src={isDarkMode ? "/images/photopurple.png" : "/images/photoyellow.png"}
              alt="Photo de profil"
              fill
              style={{ objectFit: "contain", objectPosition: "center bottom" }}
            />
          </motion.div>
        </div>
        <div className="absolute inset-4 pointer-events-none">
          <div className="blob-outline" />
        </div>
      </div>
    </div>
  </div>

  {/* Flèche "La suite" (affichée uniquement sur desktop) */}
  <motion.div className="hidden sm:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center z-20" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
    <Link href="#apropos">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </Link>
    <motion.span className="mt-2 text-sm text-gray-500" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}>
      La suite
    </motion.span>
  </motion.div>
</header>


        {/* SECTION À PROPOS */}
        <section id="apropos" className="mt-10 md:mt-20 mb-48 px-4 w-full relative">
          <motion.div
            className="absolute pointer-events-none w-[90vw] max-w-[900px] h-[60vw] max-h-[600px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "15px 15px",
              maskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
            }}
          />

          <div className="container mx-auto relative z-10">
            <div className="relative mb-20">
              <div className="relative inline-block">
                <h2 className="font-semibold text-4xl sm:text-4xl relative z-10">À propos de moi</h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                  className="absolute bottom-0 left-6 h-4 transition-colors duration-500 z-0 bg-yellow-500 dark:bg-violet-500"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="w-full sm:w-1/2 flex justify-center relative m-auto">
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "400px",
                    height: "533px",
                    transform: "scale(0.9)",
                    transformOrigin: "top",
                  }}
                >
                  <Image src="/images/working.jpg" alt="À propos" fill className="object-cover rounded-2xl shadow-lg" />
                </div>
              </div>

              <div className="hidden sm:flex items-stretch">
                <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ duration: 1, ease: "easeInOut" }} className="w-px bg-gray-400 mx-4" viewport={{ once: true }} />
              </div>

              <div className="w-full sm:w-1/2 flex flex-col gap-6">
                <div className="flex w-full gap-4 mb-4">
                  <motion.div className="flex-1 h-20 flex flex-col items-center justify-center rounded-lg shadow bg-gray-100/50 dark:bg-neutral-900/30 backdrop-blur-sm text-base font-semibold" initial={{ scale: 0, x: -30, opacity: 0 }} whileInView={{ scale: 1, x: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1], delay: 0.2 }} viewport={{ once: true }}>
                    <IoColorPaletteOutline size={24} className="mb-1" />
                    <span>Créatif</span>
                  </motion.div>

                  <motion.div className="flex-1 h-20 flex flex-col items-center justify-center rounded-lg shadow bg-gray-100/50 dark:bg-neutral-900/30 backdrop-blur-sm text-base font-semibold" initial={{ scale: 0, x: -30, opacity: 0 }} whileInView={{ scale: 1, x: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1], delay: 0.4 }} viewport={{ once: true }}>
                    <FaSyncAlt size={24} className="mb-1" />
                    <span>Adaptable</span>
                  </motion.div>

                  <motion.div className="flex-1 h-20 flex flex-col items-center justify-center rounded-lg shadow bg-gray-100/50 dark:bg-neutral-900/30 backdrop-blur-sm text-base font-semibold" initial={{ scale: 0, x: -30, opacity: 0 }} whileInView={{ scale: 1, x: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1], delay: 0.6 }} viewport={{ once: true }}>
                    <FaUserTie size={24} className="mb-1" />
                    <span>Autonome</span>
                  </motion.div>
                </div>

                <div className="mb-8 text-justify">
                  <p className="text-base leading-relaxed transition">
                    Salut, moi c&apos;est Mathis ✌️, titulaire d&apos;un BTS SIO et passionné par l&apos;univers du numérique depuis toujours. Mon univers créatif s&apos;articule autour du{" "}
                    <span className={isDarkMode ? "text-violet-500 font-bold" : "text-yellow-500 font-bold"}>développement web</span>, se nourrit d&apos;
                    <span className={isDarkMode ? "text-violet-500 font-bold" : "text-yellow-500 font-bold"}>audiovisuel</span>, s&apos;exprime à travers le{" "}
                    <span className={isDarkMode ? "text-violet-500 font-bold" : "text-yellow-500 font-bold"}>graphisme</span>, et s&apos;enrichit constamment au contact de l&apos;
                    <span className={isDarkMode ? "text-violet-500 font-bold" : "text-yellow-500 font-bold"}>UI/UX</span>, du{" "}
                    <span className={isDarkMode ? "text-violet-500 font-bold" : "text-yellow-500 font-bold"}>design</span>, du{" "}
                    <span className={isDarkMode ? "text-violet-500 font-bold" : "text-yellow-500 font-bold"}>montage vidéo</span>, du{" "}
                    <span className={isDarkMode ? "text-violet-500 font-bold" : "text-yellow-500 font-bold"}>game design</span> et même à la{" "}
                    <span className={isDarkMode ? "text-violet-500 font-bold" : "text-yellow-500 font-bold"}>cybersécurité</span>.
                    <br /><br />
                    Cette curiosité multidisciplinaire m&apos;a permis de mener divers projets : conception d&apos;applications et sites dynamiques durant mes stages, réalisation d&apos;un jeu vidéo en autodidacte, et résolution de challenges techniques sur des plateformes comme RootMe. J&apos;ai également perfectionné mes compétences en design grâce à des outils professionnels (<span className={isDarkMode ? "text-violet-500 font-bold" : "text-yellow-500 font-bold"}>Photoshop, Figma, etc.</span>) et en post-production avec <span className={isDarkMode ? "text-violet-500 font-bold" : "text-yellow-500 font-bold"}>Premiere Pro & Davinci Resolve</span>.
                    <br />
                    Passionné par la transmission, je combine aujourd&apos;hui mes compétences techniques et créatives pour produire des <span className={isDarkMode ? "text-violet-500 font-bold" : "text-yellow-500 font-bold"}>contenus pédagogiques</span> en cybersécurité. Une manière d&apos;allier méthodiquement mes deux domaines de prédilection : la tech et l&apos;audiovisuel.
                    <br /><br />
                    Chaque projet représente pour moi un terrain d&apos;expérimentation où j&apos;aime repousser les limites techniques tout en cultivant mon approche artistique - une fusion qui donne vie à des solutions à la fois fonctionnelles et esthétiques.
                  </p>
                </div>

                <div className="text-center">
                  <Link href="#contact">
                    <button className={`px-6 py-3 rounded-lg shadow font-semibold transition-colors duration-300 ${isDarkMode ? "bg-violet-600 text-white hover:bg-violet-700" : "bg-yellow-500 text-black hover:bg-yellow-600"}`}>
                      Contactez-moi
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION TIMELINE */}
        <section id="timeline" className="my-32 px-4 w-full relative">
          <div className="container mx-auto relative">
            {/* Titre de la section */}
            <div className="relative inline-block mb-12">
              <h2 className="font-semibold text-4xl sm:text-4xl relative">Expériences</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                className="absolute bottom-0 left-6 h-4 transition-colors duration-500 bg-yellow-500 dark:bg-violet-500 -z-10"
              />
            </div>

            {/* Affichage desktop : Timeline horizontale (inchangée) */}
            <div className="hidden md:block relative" style={{ height: "300px" }}>
              <motion.div
                className="absolute pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{
                  width: "100%",
                  height: "300px",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "25px 25px",
                  maskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
                }}
              />
              <motion.div
                className="absolute w-full bg-gray-400"
                style={{ height: "1px", top: "80%", transform: "translateY(-50%)" }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <motion.div
                className="absolute left-0 right-0 flex justify-between items-center"
                style={{ top: "80%", transform: "translateY(-50%)" }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3, delayChildren: 1 } } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {sortedEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    className="relative cursor-pointer"
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div className="relative" whileHover="hover" initial="rest" animate="rest" viewport={{ once: true }}>
                      <motion.div
                        variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                          isDarkMode ? "bg-white border-white" : "bg-black border-black"
                        }`}
                      >
                        {getIconForEvent(event)}
                      </motion.div>
                      <motion.div
                        variants={{ rest: { opacity: 0, scale: 0.8 }, hover: { opacity: 1, scale: 1 } }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full mb-2 left-[-110px] transform -translate-x-1/2 pointer-events-none z-40"
                        style={{ zIndex: 9999 }}
                      >
                        <div className="p-3 bg-gray-100 dark:bg-neutral-900 rounded-lg shadow-lg text-xs w-64">
                          {event.logo && (
                            <div className="m-auto mb-2">
                              <Image
                                src={event.logo}
                                alt={`${event.title} logo`}
                                width={200}
                                height={200}
                                className="object-contain m-auto"
                              />
                            </div>
                          )}
                          <h3 className="font-bold mb-1 text-center">{event.title}</h3>
                          <div className="flex items-center justify-center mb-1">
                            <PiMapPinFill className="mr-1" />
                            <p className="text-xs">{event.location}</p>
                          </div>
                          <p className="whitespace-pre-line text-xs">{event.description}</p>
                          <br />
                          <p className="mt-1 text-xs text-gray-500 text-center">{event.date}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Affichage mobile : Timeline verticale avec "cases" (cards) */}
            <div className="block md:hidden relative">
              {/* Barre verticale à gauche */}
              <div className="absolute left-4 top-0 bottom-0 border-l-2 border-gray-300"></div>
              <div className="space-y-8 ml-12">
                {sortedEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white/50 dark:bg-neutral-900/30 p-4 rounded-lg backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/30 shadow-md"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 rounded-full border-2 border-black dark:border-white dark:bg-white bg-neutral-900 flex items-center justify-center mr-2">
                        {getIconForEvent(event)}
                      </div>
                      <h3 className="font-bold text-sm">{event.title}</h3>
                    </div>
                    <div className="flex items-center text-xs mb-1">
                      <PiMapPinFill className="mr-1" />
                      <span>{event.location}</span>
                    </div>
                    <p className="whitespace-pre-line text-xs">{event.description}</p>
                    <br/>
                    <p className="mt-1 text-xs text-gray-500">{event.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="competences" className="my-32 px-4 w-full relative py-4">
        <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                currentColor 0,
                currentColor 1px,
                transparent 1px,
                transparent 40px
              )`
            }}
          />

          <div id="competences" className="container mx-auto relative z-10 ">
                  <div className="relative inline-block mb-12">
                    <h2 className="font-semibold text-4xl sm:text-4xl relative z-10">
                      Compétences
                    </h2>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                      className="absolute bottom-0 left-6 h-4 transition-colors duration-500 z-0 bg-yellow-500 dark:bg-violet-500"
                    />
                  </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8">
              {/* Première ligne */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="p-6 bg-white/50 dark:bg-neutral-900/30 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/30 shadow-sm shadow-gray-200/30 dark:shadow-neutral-700/20 hover:border-yellow-400/30 dark:hover:border-violet-400/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <FaCode className="text-2xl text-yellow-500 dark:text-violet-500" />
                    <h3 className="text-xl font-medium">Web</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {webDevSkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                        <span className="text-2xl text-gray-600 dark:text-gray-300">{skill.icon}</span>
                        <div>
                          <p className="font-medium text-sm">{skill.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.level}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="p-6 bg-white/50 dark:bg-neutral-900/30 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/30 shadow-sm shadow-gray-200/30 dark:shadow-neutral-700/20 hover:border-yellow-400/30 dark:hover:border-violet-400/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <IoColorPaletteOutline className="text-2xl text-yellow-500 dark:text-violet-500" />
                    <h3 className="text-xl font-medium">Design</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {designSkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                        <span className="text-2xl text-gray-600 dark:text-gray-300">{skill.icon}</span>
                        <div>
                          <p className="font-medium text-sm">{skill.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.level}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Deuxième ligne */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-6 bg-white/50 dark:bg-neutral-900/30 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/30 shadow-sm shadow-gray-200/30 dark:shadow-neutral-700/20 hover:border-yellow-400/30 dark:hover:border-violet-400/30 transition-all"
                >
                    <div className="flex flex-col items-center gap-3 mb-6 text-center m-auto">
                    <FaJava className="text-2xl text-yellow-500 dark:text-violet-500" />
                    <h3 className="text-xl font-medium">Orienté Objet</h3>
                    </div>
                  <div className="grid grid-cols-2 gap-3">
                    {devObjetSkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                        <span className="text-2xl text-gray-600 dark:text-gray-300">{skill.icon}</span>
                        <div>
                          <p className="font-medium text-sm">{skill.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.level}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-6 bg-white/50 dark:bg-neutral-900/30 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/30 shadow-sm shadow-gray-200/30 dark:shadow-neutral-700/20 hover:border-yellow-400/30 dark:hover:border-violet-400/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <FaUbuntu className="text-2xl text-yellow-500 dark:text-violet-500" />
                    <h3 className="text-xl font-medium">Systèmes</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[...osSkills, ...outilsSkills].map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                        <span className="text-2xl text-gray-600 dark:text-gray-300">{skill.icon}</span>
                        <div>
                          <p className="font-medium text-sm">{skill.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.level}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION PROJETS */}
        <section id="projets" className="my-20 px-4 w-full">
          <div className="container mx-auto">
          <div className="relative inline-block mb-12">
            <h2 className="font-semibold text-4xl sm:text-3xl relative z-10">
              Projets <br className="sm:hidden" />Selectionnés
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
              className="absolute bottom-0 left-6 h-4 transition-colors duration-500 z-0 bg-yellow-500 dark:bg-violet-500"
            />
          </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Link href="/projets/projet-1">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="p-6 bg-white/50 dark:bg-neutral-900/30 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/30 shadow-sm hover:border-yellow-400/30 dark:hover:border-violet-400/30 transition-all cursor-pointer">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Portfolio</h3>
                  <br/>
                  <div className="flex space-x-4 mb-4">
                    <div className="flex flex-col items-center">
                      <SiTypescript className="text-blue-500 text-2xl" />
                    </div>
                    <div className="flex flex-col items-center">
                      <FaReact className="text-blue-400 text-2xl" />
                    </div>
                    <div className="flex flex-col items-center">
                      <SiTailwindcss className="text-teal-400 text-2xl" />
                    </div>
                    <div className="flex flex-col items-center">
                      <RiNextjsFill className="text-neutral-900 text-2xl" />
                    </div>
                    <div className="flex flex-col items-center">
                      <FaCss3Alt className="text-blue-500 text-2xl" />
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm text-justify">
                    Mon portfolio est un site interactif et moderne mettant en avant mes compétences en développement web, design, cybersécurité et audiovisuel. Il présente mon parcours, mes projets et mon expertise à travers une interface dynamique et immersive.
                  </p>
                  <p className="text-yellow-500 dark:text-violet-500 font-medium">En savoir plus &rarr;</p>
                </motion.div>
              </Link>

              <Link href="/projets/projet-2">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }} className="p-6 bg-white/50 dark:bg-neutral-900/30 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/30 shadow-sm hover:border-yellow-400/30 dark:hover:border-violet-400/30 transition-all cursor-pointer">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Le Labyrinthe des Pierres Oubliées</h3>
                  <br/>
                  <div className="flex space-x-4 mb-4">
                    <div className="flex flex-col items-center">
                      <FaHtml5 className="text-orange-500 text-2xl" />
                    </div>
                    <div className="flex flex-col items-center">
                      <FaCss3Alt className="text-blue-500 text-2xl" />
                    </div>
                    <div className="flex flex-col items-center">
                      <FaJsSquare className="text-yellow-400 text-2xl" />
                    </div>
                    <div className="flex flex-col items-center">
                      <TbBrandThreejs className="text-white text-2xl" />
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm text-justify">
                    Un jeu d&apos;horreur en 3D où le joueur doit s&apos;échapper d&apos;un labyrinthe généré aléatoirement, tout en étant poursuivi par une créature terrifiante. L&apos;ambiance est renforcée par des effets visuels glitchés et une bande-son immersive.
                  </p>
                  <p className="text-yellow-500 dark:text-violet-500 font-medium">En savoir plus &rarr;</p>
                </motion.div>
              </Link>

              <Link href="/projets/projet-3">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }} className="p-6 bg-white/50 dark:bg-neutral-900/30 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/30 shadow-sm hover:border-yellow-400/30 dark:hover:border-violet-400/30 transition-all cursor-pointer">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Epicurio</h3>
                  <br/>
                  <div className="flex space-x-4 mb-4">
                    <div className="flex flex-col items-center">
                      <SiKotlin className="text-purple-500 text-2xl" />
                    </div>
                    <div className="flex flex-col items-center">
                      <FaJava className="text-red-500 text-3xl" />
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm text-justify">
                    Projet individuel réalisé en seconde année de BTS SIO. Il s&apos;agit d&apos;une application mobile qui permet de rechercher des recettes de cuisine et d&apos;en afficher le détail.
                  </p>
                  <p className="text-yellow-500 dark:text-violet-500 font-medium">En savoir plus &rarr;</p>
                </motion.div>
              </Link>
            </div>

            <div className="flex justify-center mt-12">
              <Link href="/projets">
                <button className="flex items-center px-8 py-4 bg-yellow-500 dark:bg-violet-600 text-white font-semibold rounded-full shadow transition-colors hover:bg-yellow-600 dark:hover:bg-violet-700">
                  Voir tous les projets
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section id="contact" className="relative my-32 px-4 w-full">
      <div className="container mx-auto relative z-10">
        <div className="relative inline-block mb-12">
          <h2 className="font-semibold text-4xl sm:text-4xl relative z-10">
            Contactez-moi
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            className="absolute bottom-0 left-6 h-4 transition-colors duration-500 z-0 bg-yellow-500 dark:bg-violet-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[auto,auto,1fr] gap-4">
          {/* Bulles de contact */}
          <div className="flex flex-col space-y-6">
            <motion.a
              href="mailto:carcenacmathis81@gmail.com"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center p-4 pr-72 mr-20 border border-gray-300 dark:border-neutral-600 rounded-2xl shadow hover:shadow-lg transition-colors"
            >
              <FaEnvelope className="text-4xl mr-4 text-yellow-500 dark:text-violet-500" />
              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-base text-yellow-500 dark:text-violet-500">
                  Un mail par ici &rarr;
                </p>
              </div>
            </motion.a>
            <motion.a
              href="https://api.whatsapp.com/send?phone=0629447601&text=Hello%20%F0%9F%91%8B"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center p-4 pr-72 mr-20 border border-gray-300 dark:border-neutral-600 rounded-2xl shadow hover:shadow-lg transition-colors"
            >
              <FaWhatsapp className="text-4xl mr-4 text-yellow-500 dark:text-violet-500" />
              <div>
                <h3 className="font-semibold text-xl">WhatsApp</h3>
                <p className="text-base text-yellow-500 dark:text-violet-500">
                  Ou un SMS par là &rarr;
                </p>
              </div>
            </motion.a>
          </div>

          {/* Divider vertical animé */}
          <div className="hidden sm:flex items-stretch">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-px bg-gray-400 mx-2"
            />
          </div>

          {/* Formulaire */}
          <div>
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Champ Nom & Prénom */}
                <div className="relative">
                  <div
                    className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-no-repeat"
                    style={{ backgroundSize: "15px 15px" }}
                  />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    required
                    pattern=".*\S.*"
                    className={`peer relative block w-full p-3 bg-transparent rounded-md focus:outline-none border ${getBorderClass(
                      "name"
                    )}`}
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-3 transition-all duration-200 px-1 py-[2px] bg-white dark:bg-neutral-950  text-gray-500 dark:text-gray-400 ${
                      formData.name.trim()
                        ? "top-[-10px] text-xs"
                        : "top-3 text-base"
                    }`}
                  >
                    Nom &amp; Prénom
                  </label>
                </div>
                {/* Champ Email */}
                <div className="relative">
                  <div
                    className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-no-repeat"
                    style={{ backgroundSize: "15px 15px" }}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`peer relative block w-full p-3 bg-transparent rounded-md focus:outline-none border ${getBorderClass(
                      "email"
                    )}`}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-3 transition-all duration-200 px-1 py-[2px] bg-white dark:bg-neutral-950 text-gray-500 dark:text-gray-400 ${
                      formData.email.trim()
                        ? "top-[-10px] text-xs"
                        : "top-3 text-base"
                    }`}
                  >
                    Email
                  </label>
                </div>
                {/* Champ Entreprise (facultatif) */}
                <div className="relative md:col-span-2">
                  <div
                    className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-no-repeat"
                    style={{ backgroundSize: "15px 15px" }}
                  />
                  <input
                    type="text"
                    name="entreprise"
                    id="entreprise"
                    placeholder=" "
                    value={formData.entreprise}
                    onChange={handleChange}
                    className={`peer relative block w-full p-3 bg-transparent rounded-md focus:outline-none border ${getBorderClass(
                      "entreprise"
                    )}`}
                  />
                  <label
                    htmlFor="entreprise"
                    className={`absolute left-3 transition-all duration-200 px-1 py-[2px] bg-white dark:bg-neutral-950 text-gray-500 dark:text-gray-400 ${
                      formData.entreprise.trim()
                        ? "top-[-10px] text-xs"
                        : "top-3 text-base"
                    }`}
                  >
                    {formData.entreprise.trim()
                      ? "Entreprise"
                      : "Entreprise (facultatif)"}
                  </label>
                </div>
                {/* Champ Message */}
                <div className="relative md:col-span-2">
                  <div
                    className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-no-repeat"
                    style={{ backgroundSize: "15px 15px" }}
                  />
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`peer relative block w-full p-3 bg-transparent rounded-md focus:outline-none border ${getBorderClass(
                      "message"
                    )}`}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className={`absolute left-3 transition-all duration-200 px-1 py-[2px] bg-white dark:bg-neutral-950 text-gray-500 dark:text-gray-400 ${
                      formData.message.trim()
                        ? "top-[-10px] text-xs"
                        : "top-3 text-base"
                    }`}
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg shadow font-semibold transition-colors duration-300 bg-yellow-500 dark:bg-violet-600 text-white hover:bg-yellow-600 dark:hover:bg-violet-700"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
      </main>
    </>
  );
}
