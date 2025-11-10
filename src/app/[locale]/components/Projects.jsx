"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import mega from "../images/mega.png";
import zamalek from "../images/zamalek.png";
import akhdar from "../images/akhdar.png";

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
  ];

  return (
    <section id="projects" className="w-full py-16 px-6 sm:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* ==== Title ==== */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[55px] font-bold text-sky-900 dark:text-white">
            {t("title1")}{" "}
            <span className="font-bold py-7 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-400 dark:from-sky-400 dark:to-cyan-300">
              {t("title2")}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6">
            {t("subtitle")}
          </p>
        </div>

        {/* ==== Projects Grid ==== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full rounded-md backdrop-blur-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-white/5 shadow-lg hover:shadow-sky-200/40 dark:hover:shadow-cyan-200/30 transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:rotate-2 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-200 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons - stay at bottom */}
                <div className="mt-auto flex gap-3">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
