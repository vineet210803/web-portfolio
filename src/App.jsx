import React, { useEffect, useState } from "react";
import logo from "/vite.svg";
import Lanyard from "./components/Lanyard";
import Intro from "./components/Intro";
// import SpotlightCard from "./components/SpotlightCard";
import GooeyNav from "./components/GooeyNav";
import Particles from "./components/Particles";
import LogoLoop from "./components/LogoLoop";
import CardSwap, { Card } from "./components/CardSwap";
import InfiniteScroll from "./components/InfiniteScroll";
// import InfiniteMenu from "./components/InfiniteMenu";
import Project from "./components/Project";
import Carousel from "./components/Carousel";
import RotatingText from "./components/RotatingText";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiLinkedin,
  SiGithub,
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";
import { FaFileAlt } from "react-icons/fa";

export default function App() {
  const items = [
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/11yi1CkReRi-GD-A2tQvrewbq45rjWioT/view?usp=sharing",
      icon: <FaFileAlt />,
    },
    {
      label: "Mail",
      href: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=vineet210803@gmail.com",
      display: "hidden",
      icon: <MdEmail />,
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/vineet-singh021/",
      icon: <SiLinkedin />,
    },
    {
      label: "Github",
      href: "https://github.com/vineet210803",
      icon: <SiGithub />,
    },
    {
      label: "Leetcode",
      href: "https://leetcode.com/u/vineet_79",
      icon: <SiLeetcode />,
    },
    {
      label: "CodeForces",
      href: "https://codeforces.com/profile/vineet_79",
      icon: <SiCodeforces />,
    },
    {
      label: "Codechef",
      href: "https://www.codechef.com/users/vineet_2000",
      icon: <SiCodechef />,
    },
  ];

  const techLogos = [
    {
      node: <SiReact color="#fff" size={48} />,
      title: "React",
    },
    {
      node: <SiNextdotjs color="#fff" size={48} />,
      title: "Next.js",
    },
    {
      node: <SiJavascript color="#fff" size={48} />,
      title: "JavaScript",
    },
    {
      node: <SiTailwindcss color="#fff" size={48} />,
      title: "Tailwind CSS",
    },
    {
      node: <SiMongodb color="#fff" size={48} />,
      title: "MongoDB",
    },
    {
      node: <SiExpress color="#fff" size={48} />,
      title: "Express.js",
    },
    {
      node: <SiNodedotjs color="#fff" size={48} />,
      title: "Node.js",
    },
    {
      node: <SiGit color="#fff" size={48} />,
      title: "Git",
    },
  ];

  const infiniteScrollItems = techLogos.map((logo) => ({
    content: (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          textDecoration: "none",
        }}
      >
        {logo.node}
        <span
          style={{
            color: "#fff",
            fontFamily: "'Audiowide', cursive",
            fontSize: "1.2rem",
          }}
        >
          {logo.title}
        </span>
      </a>
    ),
  }));

  return (
    <div
      className="relative min-h-screen w-full font-audiowide"
      style={{ overflow: "hidden" }}
    >
      {/* Particle background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={900}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Navbar */}
      <div
        style={{
          margin: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          top: 2,
          height: "50px",
          zIndex: 50,
          alignItems: "center",
        }}
        className="font-audiowide"
      >
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* Hero Section (h1 + Lanyard) */}
      <div className="relative w-full h-[400px] flex justify-center pt-48 ">
        {/* h1 text */}
        <h1 className="flex text-9xl text-white z-10 gap-38">
          <span>Vineet</span>
          <span className="text-[#0f3e8a]">Singh</span>
        </h1>

        {/* Lanyard overlay (centered on top of h1) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-full">
          <div style={{ transform: "scale(1.05)" }}>
            <Lanyard position={[0, 0, 20]} gravity={[0, -35, 0]} />
          </div>
        </div>
      </div>

      {/* Acheivement section */}
      <div className="w-full flex justify-center mt-38 mb-20 z-10">
        {/* This inner div contains both text elements and applies the background/padding */}
        <div className="flex items-center space-x-3  py-3 px-5 ">
          {/* New "I am" text */}
          <span className="text-xl  text-white">I am</span>
          {/* Rotating Text Component: Updated mainClassName */}
          <RotatingText
            texts={[
              "MERN Stack Developer",
              "Next.js Developer",
              "Specialist on CodeForces",
              "3⭐ on Codechef",
              "in top 11% at Leetcode",
              "3⭐ on GeeksForGeeks",
            ]}
            // Changed bg-cyan-300 to bg-[#5227ff] (new color) and reduced px/py values for tighter spacing
            mainClassName="px-1 sm:px-2 md:px-3 bg-[#001b56] text-white overflow-hidden py-0 sm:py-0.5 md:py-1 rounded-lg text-xl"
            staggerFrom={"first"}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            animatePresenceMode="wait"
            animatePresenceInitial={false}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            // loop (Default: true)
            loop={true}
            // auto (Default: true)
            auto={true}
            // splitby (Default: "characters")
            splitby="characters"
            // onNext (Default: undefined - added a placeholder function)

            // elementLevelClassName (Default: ..) - Placeholder class added
            elementLevelClassName="inline-block"
          />
        </div>
      </div>

      {/* Projects heading */}
      <div className="flex flex-col items-center mt-40 gap-5">
        <h2
          className="w-full text-center font-audiowide text-3xl text-white"
          style={{ fontFamily: "'Audiowide', cursive" }}
        >
          Projects
        </h2>
      </div>

      {/* Project + CardSwap */}
      <div className="flex">
        <div className="w-full min-h-screen flex items-center justify-evenly ">
            <Project />
        </div>

        <div
          className="mb-60 w-1/2"
          style={{ height: "600px", position: "relative" }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={3000}
            pauseOnHover={false}
          >
            <Card style={{ overflow: "hidden" }}>
              <a
                className="text-white p-6"
                href="https://ecommerce-frontend-two-phi.vercel.app/"
              >
                Forever-Shopping [Live]
              </a>
              <a href="https://ecommerce-frontend-two-phi.vercel.app/">
                <img className="w-200" src="/forever.jpg" alt="" />
              </a>
            </Card>
            <Card style={{ overflow: "hidden" }}>
              <a
                className="text-white p-6"
                href="https://employee-management-system-nine-tau.vercel.app/"
              >
                Employee Managment System [Live]
              </a>
              <a href="https://employee-management-system-nine-tau.vercel.app/">
                <img src="/ems.jpg" alt="" />
              </a>
            </Card>
            <Card style={{ overflow: "hidden" }}>
              <a
                className="text-white p-6"
                href="https://github.com/vineet210803 "
              >
                Protfolio [Live]
              </a>
              <a href="https://github.com/vineet210803 ">
                <img src="/portfolio.png" alt="" />
              </a>
            </Card>
          </CardSwap>
        </div>
      </div>

      {/* Tech stack section */}
      <div
        className="pt-20 flex flex-col items-center gap-5"
        style={{
          minHeight: "120px",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <h2
          className="w-full text-center font-audiowide text-3xl mb-10 text-white"
          style={{ fontFamily: "'Audiowide', cursive" }}
        >
          Tech Stacks
        </h2>
        <div className="gap-5 mt-5  flex flex-col items-center w-full h-[75vh]">
          <InfiniteScroll
            items={infiniteScrollItems}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={1}
            autoplayDirection="down"
            pauseOnHover={false}
          />
        </div>
      </div>
    </div>
  );
}
