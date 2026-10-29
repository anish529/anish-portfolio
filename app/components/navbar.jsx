// @flow strict
"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { MdDownload } from "react-icons/md";

const navLinks = [
  { label: "ABOUT", href: "/#about" },
  { label: "SKILLS", href: "/#skills" },
  { label: "PROJECTS", href: "/#projects" },
  { label: "EDUCATION", href: "/#education" },
  { label: "ACHIEVEMENTS", href: "/#experience" },
  { label: "CONTACT", href: "/#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] backdrop-blur-md bg-[#0d1224]/85 border-b border-[#1f223c]/50 transition-all duration-300">
      <nav className="mx-auto flex items-center justify-between py-3.5 px-2" role="navigation" aria-label="Main navigation">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold tracking-wider group"
            aria-label="Anish Kumar Prajapati — Home"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-[#16f2b3] flex items-center justify-center text-xs font-mono font-extrabold text-white shadow-[0_0_15px_rgba(22,242,179,0.3)]">
              AP
            </span>
            <span className="text-lg tracking-widest text-[#16f2b3] group-hover:text-white transition-colors duration-300">
              ANISH<span className="text-white">.DEV</span>
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <ul className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="block px-3 py-1.5 text-xs lg:text-sm font-medium text-gray-300 hover:text-[#16f2b3] transition-colors duration-200 rounded-md hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16f2b3]"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-pink-500 to-violet-600 text-white hover:shadow-[0_0_20px_rgba(246,38,175,0.4)] transition-all duration-300 hover:scale-105"
          >
            <span>Resume</span>
            <MdDownload size={14} />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16f2b3]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[#1f223c] bg-[#0d1224]/95 backdrop-blur-xl px-4 py-4 space-y-2 animate-fadeIn"
        >
          <ul className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="block px-3 py-2 text-sm text-gray-200 hover:text-[#16f2b3] hover:bg-white/5 rounded-md transition-colors duration-200"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white text-xs font-semibold uppercase tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              <span>Download Resume</span>
              <MdDownload size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
