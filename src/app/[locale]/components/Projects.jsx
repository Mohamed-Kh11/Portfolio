"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import mega from "../images/mega.png";
import zamalek from "../images/zamalek.png";
import akhdar from "../images/akhdar.png";
import egyptExplorer from "../images/egypt.webp";

export default function Projects() {
  const t = useTranslations("projects");

  const projects = [
    {
      id: 1,
      title: t("akhdar.title"),
      description: t("akhdar.description"),
      image: akhdar,
      tech: ["Next.js", "Tailwind CSS", "Javascript"],
      demo: "https://akhdar.vercel.app/",
      github: "#",
      accent: "from-green-500 to-emerald-400",
    },
    {
      id: 2,
      title: t("megaMart.title"),
      description: t("megaMart.description"),
      image: mega,
      tech: ["Next.js", "Tailwind CSS", "Javascript"],
      demo: "https://megamart-orcin.vercel.app/",
      github: "#",
      accent: "from-MegaLight to-MegaLight2",
    },
    {
      id: 3,
      title: t("zamalek.title"),
      description: t("zamalek.description"),
      image: zamalek,
      tech: ["React.js", "Tailwind CSS", "Javascript"],
      demo: "https://zamalek-insider.vercel.app/",
      github: "#",
      accent: "from-red-700 to-red-600",
    },
    {
      id: 4,
      title: t("egyptExplorer.title"),
      description: t("egyptExplorer.description"),
      image: egyptExplorer,
      tech: ["Next.js", "Tailwind CSS", "Javascript"],
      demo: "https://egypt-explorer.vercel.app/",
      github: "#",
      accent: "from-yellow-500 to-orange-400",
    },
  ];

  return (
    <section id="projects" className="w-full py-16 px-6 sm:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-900 dark:text-white">
            {t("title1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-400 dark:from-sky-400 dark:to-cyan-300">
              {t("title2")}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6">{t("subtitle")}</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`relative w-full flex flex-col sm:flex-row items-center gap-6`}
              >
                {/* Card */}
                <div className="relative w-full bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-2xl flex flex-col sm:flex-row sm:items-center gap-4 overflow-hidden">
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between order-2 sm:order-1">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-sky-600 dark:text-sky-400">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-sm bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-200 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4 mt-4 flex-wrap">
                      <Link
                        href={project.demo}
                        target="_blank"
                        className={`px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r ${project.accent} hover:opacity-90 transition`}
                      >
                        {t("visit")}
                      </Link>
                      <Link
                        href={project.github}
                        target="_blank"
                        className="px-4 py-2 text-sm font-medium rounded-lg border bg-sky-600 border-zinc-300 dark:border-zinc-700 text-gray-100 hover:bg-sky-800 transition"
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>

                  {/* Floating Image */}
                  <div className="relative w-full overflow-hidden sm:w-1/3 h-48 sm:h-48 flex-shrink-0 order-1 sm:order-2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
