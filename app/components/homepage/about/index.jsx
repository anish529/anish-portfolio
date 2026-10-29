// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { BsCheckCircleFill, BsCpu, BsDatabase, BsDiagram3, BsLayers } from "react-icons/bs";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

function AboutSection() {
  const pillars = [
    {
      icon: <BsLayers className="text-[#16f2b3]" size={22} />,
      title: "Core Java & OOP",
      description: "Deep foundation in Object-Oriented Design, Collections Framework, Multithreading, Exception Handling, and JDBC connectivity.",
      tag: "Foundation",
      accent: "hover:border-[#16f2b3]/60",
    },
    {
      icon: <BsDiagram3 className="text-violet-400" size={22} />,
      title: "Spring Boot & REST APIs",
      description: "Building clean, maintainable backend services with layered architecture (Controller, Service, Repository, DTO, Mapper).",
      tag: "Framework",
      accent: "hover:border-violet-500/60",
    },
    {
      icon: <BsDatabase className="text-pink-400" size={22} />,
      title: "MySQL & Persistence",
      description: "Relational database schema design, integrating Spring Data JPA and Hibernate for consistent persistent storage.",
      tag: "Database",
      accent: "hover:border-pink-500/60",
    },
    {
      icon: <BsCpu className="text-amber-400" size={22} />,
      title: "Concurrency & Real-Time",
      description: "Thread synchronization, join() coordination, and ongoing engineering on a WebSocket-based collaborative sync engine.",
      tag: "Systems",
      accent: "hover:border-amber-500/60",
    },
  ];

  return (
    <div id="about" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Top Section Divider Glow Line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Centered Section Header - Clean and Prominent */}
      <div className="flex justify-center my-6 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-6 text-xl sm:text-2xl rounded-md uppercase font-semibold tracking-wider flex items-center gap-2">
            <span className="text-[#16f2b3]">About</span> Me
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Main About Layout: Bio Card on Left (7 cols), Photo on Right (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Bio Card */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="rounded-2xl border border-[#1f223c] bg-[#11152c]/70 backdrop-blur-sm p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#16f2b3] animate-pulse"></span>
              <p className="font-semibold text-[#16f2b3] text-xs sm:text-sm uppercase tracking-widest font-mono">
                Who I Am &amp; What I Build
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-snug">
              Aspiring Java Backend Developer
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>{personalData.description}</p>
              <p>
                I am currently pursuing my B.Tech. in Computer Science Engineering at{" "}
                <span className="text-[#16f2b3] font-medium">Mewar University</span>,
                Chittaurgarh, Rajasthan (Aug 2023 – Expected May 2027) with an active CGPA of{" "}
                <span className="text-amber-300 font-semibold font-mono">8.10 / 10</span>.
              </p>
              <p>
                My current engineering project is building a{" "}
                <span className="text-pink-400 font-medium">Real-Time Collaborative Sync Engine</span>{" "}
                using Java, Spring Boot, WebSockets, and MySQL — tackling state synchronization,
                version validation, and concurrent modification challenges.
              </p>
            </div>

            {/* Quick Info Badges */}
            <div className="mt-6 pt-5 border-t border-[#1f223c] flex flex-wrap gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1224] border border-[#2a2e4e] text-xs text-gray-300">
                <FaMapMarkerAlt className="text-[#16f2b3]" />
                <span>Chittaurgarh, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1224] border border-[#2a2e4e] text-xs text-gray-300">
                <FaGraduationCap className="text-violet-400" />
                <span>B.Tech. CSE (Expected May 2027)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1224] border border-[#2a2e4e] text-xs text-gray-300">
                <BsCheckCircleFill className="text-emerald-400" />
                <span>CGPA: 8.10 / 10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Genuine Profile Photo with Ambient Glow */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
          <div className="relative group max-w-[320px] sm:max-w-[350px] w-full">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-pink-500 to-[#16f2b3] rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700"></div>

            {/* Card Shell */}
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-b from-[#1b2c68a0] via-violet-600/50 to-pink-500/50 shadow-2xl">
              <div className="rounded-2xl overflow-hidden bg-[#0d1224] border border-[#1f223c]">
                {/* Photo Frame */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={personalData.profile}
                    alt={personalData.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 350px"
                    className="object-cover object-top rounded-t-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Technical Caption Box */}
                <div className="p-4 bg-gradient-to-t from-[#0a0d37] to-[#0d1224] border-t border-[#1f223c]">
                  <p className="text-base font-semibold text-white text-center">
                    Anish Kumar Prajapati
                  </p>
                  <p className="text-xs text-[#16f2b3] text-center mt-0.5 font-mono">
                    Aspiring Java Backend Developer
                  </p>
                  <div className="mt-2 flex justify-center gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      Core Java
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#16f2b3]/20 text-[#16f2b3] border border-[#16f2b3]/30">
                      Spring Boot
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-pink-500/20 text-pink-300 border border-pink-500/30">
                      MySQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Backend Pillars Grid */}
      <div className="mt-12 sm:mt-16">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">
          Key Technical Focus Areas
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl border border-[#1f223c] bg-[#11152c]/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${pillar.accent} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-[#0d1224] border border-[#1f223c]">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#1a1443] text-violet-300 border border-[#2a2860]">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
