// @flow strict

import * as React from 'react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdSchedule } from 'react-icons/md';
import { HiCheckCircle } from 'react-icons/hi';

function ProjectCard({ project }) {
  const isInProgress = project.status === 'In Progress';

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      {/* Top gradient line */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Title bar */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <div className="flex items-center justify-center gap-3 ml-3">
          <p className="text-center text-[#16f2b3] text-base lg:text-xl font-medium">
            {project.name}
          </p>
          {isInProgress ? (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <MdSchedule size={12} />
              In Progress
            </span>
          ) : (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <HiCheckCircle size={12} />
              Completed
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        {/* Period */}
        {project.period && (
          <p className="text-xs text-gray-500 mb-3 font-mono"># {project.period}</p>
        )}

        {/* Tech tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-[#1a1443] text-amber-300 border border-[#2a2860]"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-[#16f2b3] uppercase tracking-wider mb-2">
              {isInProgress ? 'Implemented / Designed' : 'Key Features'}
            </p>
            <ul className="space-y-1">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                  <span className="text-violet-400 mt-0.5">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Planned disclaimer for in-progress projects */}
        {isInProgress && (
          <div className="mt-3 p-3 rounded-md border border-amber-500/30 bg-amber-500/10">
            <p className="text-xs text-amber-400">
              <span className="font-semibold">Note:</span> Features marked &quot;planned&quot; above are under design and not yet implemented. Redis Pub/Sub integration, advanced versioning, and conflict resolution are future development goals.
            </p>
          </div>
        )}

        {/* Links */}
        {(project.code || project.demo) && (
          <div className="mt-4 flex items-center gap-4">
            {project.code && (
              <Link
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white hover:text-[#16f2b3] transition-colors duration-200"
                aria-label={`View source code for ${project.name}`}
              >
                <BsGithub size={16} />
                Source Code
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white hover:text-[#16f2b3] transition-colors duration-200"
                aria-label={`View live demo for ${project.name}`}
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
