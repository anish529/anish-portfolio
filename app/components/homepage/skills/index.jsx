// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Java", "SQL", "C", "C++", "Python (Basics)", "HTML", "CSS"],
    accent: "text-amber-400"
  },
  {
    title: "Core Java Expertise",
    skills: ["Object-Oriented Programming", "Collections Framework", "Exception Handling", "Multithreading", "File Handling", "JDBC"],
    accent: "text-[#16f2b3]"
  },
  {
    title: "Frameworks & Build Tools",
    skills: ["Spring Core", "Spring Boot", "REST APIs", "Maven"],
    accent: "text-violet-400"
  },
  {
    title: "Database & Persistence",
    skills: ["MySQL", "Spring Data JPA", "Hibernate"],
    accent: "text-pink-400"
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
    accent: "text-orange-400"
  },
  {
    title: "Development Tools",
    skills: ["IntelliJ IDEA", "Eclipse", "VS Code", "Postman"],
    accent: "text-cyan-400"
  }
];

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-6 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-6 text-xl sm:text-2xl rounded-md uppercase font-semibold tracking-wider flex items-center gap-2">
            Technical <span className="text-[#16f2b3]">Skills</span>
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Icon marquee for skills that have SVG icons */}
      <div className="w-full my-8">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const img = skillsImage(skill);
            if (!img) return null;
            return (
              <div
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Image
                        src={img.src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain rounded-lg"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>

      {/* Grouped skill badges */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, gi) => (
          <div
            key={gi}
            className="rounded-lg border border-[#1f223c] bg-[#11152c] p-5 hover:border-violet-500 transition-all duration-300"
          >
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${group.accent}`}>
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <span
                  key={si}
                  className="px-3 py-1 text-xs rounded-full bg-[#1a1443] text-gray-200 border border-[#2a2860] hover:border-violet-500 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
