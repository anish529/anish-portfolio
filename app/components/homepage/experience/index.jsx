// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

const typeConfig = {
  certification: {
    icon: MdVerified,
    color: "text-violet-500",
    badge: "Certification",
    badgeStyle: "bg-violet-500/20 text-violet-300 border-violet-500/30"
  },
  achievement: {
    icon: FaTrophy,
    color: "text-amber-400",
    badge: "Achievement",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40"
  },
  learning: {
    icon: BsCodeSquare,
    color: "text-[#16f2b3]",
    badge: "Learning Journey",
    badgeStyle: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
  }
};

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Section background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-6 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-6 text-xl sm:text-2xl rounded-md uppercase font-semibold tracking-wider flex items-center gap-2">
            <span className="text-[#16f2b3]">Certifications</span> &amp; Achievements
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map(experience => {
                const config = typeConfig[experience.type] || typeConfig.learning;
                const IconComponent = config.icon;
                return (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt=""
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                        aria-hidden="true"
                      />
                      <div className="flex justify-between items-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${config.badgeStyle}`}>
                          {config.badge}
                        </span>
                      </div>
                      <div className="flex items-start gap-x-6 px-3 py-5">
                        <div className={`${config.color} transition-all duration-300 hover:scale-125 mt-1 flex-shrink-0`}>
                          <IconComponent size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase text-white">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base text-[#16f2b3] font-medium">
                            {experience.company}
                          </p>
                          {experience.description && (
                            <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                              {experience.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
