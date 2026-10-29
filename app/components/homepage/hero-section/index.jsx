// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaCode, FaJava } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-6 lg:py-16">
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-10 w-full">
        {/* Left: Text content */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-12 lg:pb-0">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11152c] border border-[#1f223c] mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#16f2b3] animate-pulse"></span>
            <span className="text-xs font-mono text-gray-300">
              Open to Java Backend Roles · India
            </span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.8rem] lg:leading-[3.6rem]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-400 to-[#16f2b3] bg-clip-text text-transparent">
              Anish Kumar Prajapati
            </span>
          </h1>

          <h2 className="mt-2 text-xl font-semibold text-[#16f2b3] sm:text-2xl font-mono">
            Aspiring Java Backend Developer
          </h2>

          <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
            Building practical Java applications with clean backend architecture, database integration, and problem-solving at the core.
          </p>

          {/* Social links — shown when configured */}
          {(personalData.github || personalData.linkedIn) && (
            <div className="my-6 flex items-center gap-4">
              {personalData.github && (
                <Link
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#11152c] border border-[#1f223c] text-pink-500 hover:text-white hover:border-pink-500 hover:scale-110 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <BsGithub size={22} />
                </Link>
              )}
              {personalData.linkedIn && (
                <Link
                  href={personalData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#11152c] border border-[#1f223c] text-[#16f2b3] hover:text-white hover:border-[#16f2b3] hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <BsLinkedin size={22} />
                </Link>
              )}
            </div>
          )}

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 hover:shadow-[0_0_20px_rgba(130,40,236,0.4)]"
            >
              <button className="px-4 text-xs sm:px-6 py-3 sm:py-3.5 bg-[#0d1224] rounded-full border-none text-center sm:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out sm:font-semibold flex items-center gap-2 hover:gap-3">
                <span>Explore My Projects</span>
                <FaCode size={15} />
              </button>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 sm:px-6 py-3 sm:py-3.5 text-center text-xs sm:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:shadow-[0_0_20px_rgba(246,38,175,0.4)] sm:font-semibold"
              role="button"
            >
              <span>Download Resume</span>
              <MdDownload size={16} />
            </Link>

            <Link
              href="/#contact"
              className="flex items-center gap-2 hover:gap-3 rounded-full border border-[#16f2b3] px-4 sm:px-6 py-3 sm:py-3.5 text-center text-xs sm:text-sm font-medium uppercase tracking-wider text-[#16f2b3] no-underline transition-all duration-200 ease-out hover:bg-[#16f2b3] hover:text-[#0d1224] sm:font-semibold"
              role="button"
            >
              <span>Contact Me</span>
              <RiContactsFill size={15} />
            </Link>
          </div>
        </div>

        {/* Right: Code snippet card */}
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37] shadow-2xl">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>

          {/* IDE Window Title Bar */}
          <div className="px-4 lg:px-6 py-3 flex items-center justify-between border-b border-[#1b2c68a0] bg-[#090d1f]">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400/90"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400/90"></div>
              <div className="h-3 w-3 rounded-full bg-green-400/90"></div>
            </div>
            {/* Editor tab label */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#10172d] border border-[#1f223c] text-xs font-mono text-gray-300">
              <FaJava className="text-orange-400" size={13} />
              <span>BackendDeveloper.java</span>
            </div>
            <div className="w-12"></div>
          </div>

          <div className="overflow-x-auto p-4 lg:p-6 font-mono text-xs sm:text-sm leading-relaxed">
            <code>
              <div>
                <span className="text-pink-500">public class </span>
                <span className="text-amber-300 font-semibold">BackendDeveloper </span>
                <span className="text-gray-400">&#123;</span>
              </div>
              <div className="mt-1 pl-4">
                <span className="text-violet-400">String </span>
                <span className="text-[#16f2b3]">name </span>
                <span className="text-pink-500">= </span>
                <span className="text-amber-300">&quot;Anish Kumar Prajapati&quot;</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="pl-4">
                <span className="text-violet-400">String </span>
                <span className="text-[#16f2b3]">role </span>
                <span className="text-pink-500">= </span>
                <span className="text-amber-300">&quot;Aspiring Java Backend Developer&quot;</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="mt-1 pl-4">
                <span className="text-violet-400">String[] </span>
                <span className="text-[#16f2b3]">coreSkills </span>
                <span className="text-pink-500">= </span>
                <span className="text-gray-400">&#123; </span>
                <span className="text-amber-300">&quot;Core Java&quot;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&quot;Spring Boot&quot;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&quot;REST APIs&quot;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&quot;MySQL&quot;</span>
                <span className="text-gray-400"> &#125;;</span>
              </div>
              <div className="pl-4">
                <span className="text-violet-400">String[] </span>
                <span className="text-[#16f2b3]">concepts </span>
                <span className="text-pink-500">= </span>
                <span className="text-gray-400">&#123; </span>
                <span className="text-amber-300">&quot;OOP&quot;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&quot;Multithreading&quot;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&quot;JDBC&quot;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&quot;Hibernate&quot;</span>
                <span className="text-gray-400"> &#125;;</span>
              </div>
              <div className="mt-1 pl-4">
                <span className="text-orange-400">boolean </span>
                <span className="text-[#16f2b3]">openToRoles </span>
                <span className="text-pink-500">= </span>
                <span className="text-orange-400 font-bold">true</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="mt-2 pl-4">
                <span className="text-violet-400">String </span>
                <span className="text-[#16f2b3]">getCurrentProject</span>
                <span className="text-pink-500">() </span>
                <span className="text-gray-400">&#123;</span>
              </div>
              <div className="pl-8">
                <span className="text-orange-400">return </span>
                <span className="text-amber-300">&quot;Real-Time Collaborative Sync Engine&quot;</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="pl-4">
                <span className="text-gray-400">&#125;</span>
              </div>
              <div>
                <span className="text-gray-400">&#125;</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
