// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] text-white">
      {/* Top Section Divider Glow Line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Centered Section Header */}
      <div className="flex justify-center my-6 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-6 text-xl sm:text-2xl rounded-md uppercase font-semibold tracking-wider flex items-center gap-2">
            <span className="text-[#16f2b3]">Contact</span> Me
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mt-6">
        <ContactForm />
        <div className="lg:w-full">
          <div className="rounded-2xl border border-[#1f223c] bg-[#11152c]/70 backdrop-blur-sm p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Let&apos;s Connect
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              I am actively looking for opportunities as an entry-level or junior Java Backend Developer.
              Feel free to reach out directly via email, phone, or the contact form.
            </p>

            <div className="flex flex-col gap-5 pt-2">
              <a
                href={`mailto:${personalData.email}`}
                className="group flex items-center gap-4 p-3 rounded-xl bg-[#0d1224] border border-[#1f223c] hover:border-[#16f2b3]/60 transition-all duration-300"
                aria-label={`Email ${personalData.email}`}
              >
                <div className="p-2.5 rounded-lg bg-[#16f2b3]/10 text-[#16f2b3] group-hover:scale-110 transition-transform">
                  <MdAlternateEmail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono">Email Address</p>
                  <p className="text-sm sm:text-base font-medium text-white group-hover:text-[#16f2b3] transition-colors break-all">
                    {personalData.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalData.phone.replace(/\s/g, '')}`}
                className="group flex items-center gap-4 p-3 rounded-xl bg-[#0d1224] border border-[#1f223c] hover:border-[#16f2b3]/60 transition-all duration-300"
                aria-label={`Phone ${personalData.phone}`}
              >
                <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 group-hover:scale-110 transition-transform">
                  <IoMdCall size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono">Phone Number</p>
                  <p className="text-sm sm:text-base font-medium text-white group-hover:text-violet-400 transition-colors">
                    {personalData.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-[#0d1224] border border-[#1f223c]">
                <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400">
                  <CiLocationOn size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono">Location</p>
                  <p className="text-sm sm:text-base font-medium text-white">
                    {personalData.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links — shown when configured */}
            {(personalData.github || personalData.linkedIn) && (
              <div className="pt-4 border-t border-[#1f223c] flex items-center gap-4">
                {personalData.github && (
                  <Link
                    target="_blank"
                    href={personalData.github}
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-3 rounded-full bg-[#0d1224] border border-[#1f223c] text-gray-300 hover:text-[#16f2b3] hover:border-[#16f2b3] hover:scale-110 transition-all duration-300"
                  >
                    <IoLogoGithub size={24} />
                  </Link>
                )}
                {personalData.linkedIn && (
                  <Link
                    target="_blank"
                    href={personalData.linkedIn}
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-3 rounded-full bg-[#0d1224] border border-[#1f223c] text-gray-300 hover:text-violet-400 hover:border-violet-400 hover:scale-110 transition-all duration-300"
                  >
                    <BiLogoLinkedin size={24} />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
