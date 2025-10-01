import React, { useEffect, useState } from "react";

const introText =
  "A Computer Science student and MERN/Next.js developer, proficient in building scalable full-stack applications, validated by solving 600+ algorithmic problems, with a passion for mentorship and delivering user-focused solutions.";

export default function Intro() {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const speed = 18; // ms per character
    const type = () => {
      if (i <= introText.length) {
        setDisplayed(introText.slice(0, i));
        i++;
        setTimeout(type, speed);
      }
    };
    type();
    // Cleanup on unmount
    return () => {};
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-start px-8 py-6 w-full mr-10"
      style={{
        width: "30%",
        // borderRadius: "1.5rem",
        // backdropFilter: "blur(6px)",
        minHeight: "220px",
      }}
    >
      <h1 className="text-5xl text-left text-white font-audiowide mb-2">
        Vineet Singh
      </h1>
      <p className="pt-2 text-left text-[#1d3461] font-audiowide font-semibold pl-3">
        <span>{displayed}</span>
        <span className="animate-pulse text-[#1d3461]">|</span>
      </p>
    </div>
  );
}