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
import PixelTransition from "./components/PixelCard";
import TargetCursor from "./components/TargetCursor";
import FlowingMenu from "./components/Achivement";
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
  const demoItems = [
    {
      text: "Global Rank 2146 in CodeVita 2025 Round 1",
    },
    {
      text: "Global Rank 426 in CodeVita 2025 Round 2",
    },
    {
      text: " Global rank 1004 in Codeforces Round 1049",
    },
    {
      text: "Solved 700+ DSA Problems",
    },
  ];

  const items = [
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1WsNZAAB_U3XF6R21Gsvny3oTZCbctkpp/view?usp=drivesdk&usp=embed_facebook&usp=embed_facebook",
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
      className="relative min-h-screen w-full font-audiowide cursor-none"
      style={{ overflow: "hidden" }}
    >
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      {/* Particle background */}
      <div className="absolute inset-0 -z-10 ">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={800}
          particleSpread={7}
          speed={0.04}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          opacity={0.5}
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
        className="font-audiowide cursor-target"
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
      <div className="relative w-full h-[400px] flex justify-center pt-48 .cursor ">
        {/* h1 text */}
        <h1 className="flex text-9xl text-white z-10 gap-38">
          <div>

            <button className="text-white cursor-target">Vineet</button>
          </div>
          <span className="text-[#0f3e8a]">Singh</span>
        </h1>

        {/* Lanyard overlay (centered on top of h1) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-full">
          <div style={{ transform: "scale(1.05)" }}>
            <Lanyard position={[-1, 0, 20]} gravity={[0, -35, 0]} />
          </div>
        </div>
      </div>

      {/* Acheivement section */}
      <div className="w-full flex justify-center mt-38 mb-20 z-10 ">
        {/* This inner div contains both text elements and applies the background/padding */}
        <div className="flex items-center space-x-3  py-3 px-5">
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
            mainClassName=" sm:px-2 md:px-3 bg-[#001b56] text-white overflow-hidden py-0 sm:py-0.5 md:py-1 rounded-lg text-xl cursor-target "
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
            loop={true}
            auto={true}
            splitby="characters"
            elementLevelClassName="inline-block"
          />
        </div>
      </div>

      {/* Projects heading */}
      <div className=" flex flex-col items-center mt-40 gap-5">
        <h2
          className="w-auto text-center font-audiowide text-3xl text-white cursor-target"
          style={{ fontFamily: "'Audiowide', cursive" }}
        >
          Projects
        </h2>
      </div>

      <div
        style={{
          margin: "10px",
          marginLeft: "35px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
          padding: "20px",
        }}
      >
        {/* ---------- CARD 1: Forever Shopping ---------- */}
        <div
          className="cursor-target"
          style={{
            width: "90%",
            maxWidth: "300px", // adjustable
            height: "300px", // must define this
            borderRadius: "12px",
            overflow: "hidden", // prevents any spill
          }}
        >
          <PixelTransition
            firstContent={
              <img
                src="shopping.jpg"
                alt="Forever Shopping Cover"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(20,20,20,0.95))",
                  borderRadius: "12px",
                  padding: "20px",
                  gap: "20px",
                  pointerEvents: "auto",
                }}
              >
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "2.4rem",
                    color: "#ffffff",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    textShadow: "0 4px 15px rgba(0,0,0,0.6)",
                  }}
                >
                  Forever Shopping
                </p>

                <div style={{ display: "flex", gap: "16px" }}>
                  <a
                    href="https://github.com/vineet210803/Ecommerce.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "10px 18px",
                      background: "#ffffff",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>

                  <a
                    href="https://ecommerce-frontend-two-phi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "10px 18px",
                      background: "#4ADE80",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    Live
                  </a>
                </div>
              </div>
            }
            gridSize={4}
            pixelColor="#001b56"
            once={false}
            animationStepDuration={0.2}
            className="custom-pixel-card"
          />
        </div>

        {/* ---------- CARD 2 ---------- */}
        <div
          className="cursor-target"
          style={{
            width: "90%",
            maxWidth: "300px", // adjustable
            height: "300px", // must define this
            borderRadius: "12px",
            overflow: "hidden", // prevents any spill
          }}
        >
          <PixelTransition
            firstContent={
              <img
                src="chat.jpg"
                alt="Project 2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(20,20,20,0.95))",
                  borderRadius: "12px",
                  padding: "20px",
                  gap: "20px",
                  pointerEvents: "auto",
                }}
              >
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "#ffffff",
                    textTransform: "uppercase",
                  }}
                >
                  Chat-App
                </p>

                <div style={{ display: "flex", gap: "16px" }}>
                  <a
                    href="https://github.com/vineet210803/Realtime_Chat_App-main"
                    target="_blank"
                    style={{
                      padding: "10px 18px",
                      background: "#ffffff",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://chat-frontend-beta-two.vercel.app/"
                    target="_blank"
                    style={{
                      padding: "10px 18px",
                      background: "#4ADE80",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    Live
                  </a>
                </div>
              </div>
            }
            gridSize={4}
            pixelColor="#001b56"
            once={false}
            animationStepDuration={0.2}
            className="custom-pixel-card"
          />
        </div>

        {/* ---------- CARD 3 ---------- */}
        <div
          className="cursor-target"
          style={{
            width: "90%",
            maxWidth: "300px", // adjustable
            height: "300px", // must define this
            borderRadius: "12px",
            overflow: "hidden", // prevents any spill
          }}
        >
          <PixelTransition
            firstContent={
              <img
                src="bot.jpg"
                alt="Project 3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(20,20,20,0.95))",
                  borderRadius: "12px",
                  padding: "20px",
                  gap: "20px",
                  pointerEvents: "auto",
                }}
              >
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "#ffffff",
                    textTransform: "uppercase",
                  }}
                >
                  AI ChatBot
                </p>

                <div style={{ display: "flex", gap: "16px" }}>
                  <a
                    href="https://github.com/vineet210803/MERN-AI-ChatBot-final"
                    target="_blank"
                    style={{
                      padding: "10px 18px",
                      background: "#ffffff",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>

                  <a
                    href="https://ai-chat-bot-eta-ruddy.vercel.app/"
                    target="_blank"
                    style={{
                      padding: "10px 18px",
                      background: "#4ADE80",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    Live
                  </a>
                </div>
              </div>
            }
            gridSize={4}
            pixelColor="#001b56"
            once={false}
            animationStepDuration={0.2}
            className="custom-pixel-card"
          />
        </div>

        {/* ---------- CARD 4 ---------- */}
        <div
          className="cursor-target"
          style={{
            width: "90%",
            maxWidth: "300px", // adjustable
            height: "300px", // must define this
            borderRadius: "12px",
            overflow: "hidden", // prevents any spill
          }}
        >
          <PixelTransition
            firstContent={
              <img
                src="ems.jpg"
                alt="Project 4"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(20,20,20,0.95))",
                  borderRadius: "12px",
                  padding: "20px",
                  gap: "20px",
                  pointerEvents: "auto",
                }}
              >
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "#ffffff",
                    textTransform: "uppercase",
                  }}
                >
                  Employee Management System
                </p>

                <div style={{ display: "flex", gap: "16px" }}>
                  <a
                    href="https://github.com/vineet210803/Employee_Management_System-React.js"
                    target="_blank"
                    style={{
                      padding: "10px 18px",
                      background: "#ffffff",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>

                  <a
                    href="https://employee-management-system-nine-tau.vercel.app/"
                    target="_blank"
                    style={{
                      padding: "10px 18px",
                      background: "#4ADE80",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    Live
                  </a>
                </div>
              </div>
            }
            gridSize={4}
            pixelColor="#001b56"
            once={false}
            animationStepDuration={0.2}
            className="custom-pixel-card"
          />
        </div>

        {/* ---------- CARD 5 ---------- */}
        <div
          className="cursor-target"
          style={{
            width: "90%",
            maxWidth: "300px", // adjustable
            height: "300px", // must define this
            borderRadius: "12px",
            overflow: "hidden", // prevents any spill
          }}
        >
          <PixelTransition
            firstContent={
              <img
                src="passkey.jpg"
                alt="Passkey: Password Manager"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(20,20,20,0.95))",
                  borderRadius: "12px",
                  padding: "20px",
                  gap: "20px",
                  pointerEvents: "auto",
                }}
              >
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "#ffffff",
                    textTransform: "uppercase",
                  }}
                >
                  Passkey: Password Manager
                </p>

                <div style={{ display: "flex", gap: "16px" }}>
                  <a
                    href="https://github.com/vineet210803/Passkey-MERN"
                    target="_blank"
                    style={{
                      padding: "10px 18px",
                      background: "#ffffff",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    style={{
                      padding: "10px 18px",
                      background: "#4ADE80",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    Live
                  </a>
                </div>
              </div>
            }
            gridSize={4}
            pixelColor="#001b56"
            once={false}
            animationStepDuration={0.2}
            className="custom-pixel-card"
          />
        </div>

        {/* ---------- CARD 6 ---------- */}
        <div
          className="cursor-target"
          style={{
            width: "90%",
            maxWidth: "300px", // adjustable
            height: "300px", // must define this
            borderRadius: "12px",
            overflow: "hidden", // prevents any spill
          }}
        >
          <PixelTransition
            firstContent={
              <img
                src="portfolio.jpg"
                alt="Project 6"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(20,20,20,0.95))",
                  borderRadius: "12px",
                  padding: "20px",
                  gap: "20px",
                  pointerEvents: "auto",
                }}
              >
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "#ffffff",
                    textTransform: "uppercase",
                  }}
                >
                  Portfolio
                </p>

                <div style={{ display: "flex", gap: "16px" }}>
                  <a
                    href="https://github.com/vineet210803/web-portfolio"
                    target="_blank"
                    style={{
                      padding: "10px 18px",
                      background: "#ffffff",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    style={{
                      padding: "10px 18px",
                      background: "#4ADE80",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    Live
                  </a>
                </div>
              </div>
            }
            gridSize={4}
            pixelColor="#001b56"
            once={false}
            animationStepDuration={0.2}
            className="custom-pixel-card"
          />
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
          className="w-auto text-center font-audiowide text-3xl mb-10 text-white cursor-target"
          style={{ fontFamily: "'Audiowide', cursive" }}
        >
          Tech Stacks
        </h2>
        <div className="gap-5 flex flex-col items-center w-full h-[75vh]">
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
      {/* ------Achievment------- */}
      <div className=" flex flex-col items-center mt-30 gap-5">
        <h2
          className="w-auto text-center font-audiowide text-3xl mb-5 text-white cursor-target"
          style={{ fontFamily: "'Audiowide', cursive" }}
        >
          Projects
        </h2>
      </div>
        <div className="cursor-target" style={{ height: "550px", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>

      
    </div>
  );
}
