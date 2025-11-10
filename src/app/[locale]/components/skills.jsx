"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PiMagicWandFill } from "react-icons/pi";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiGoogletranslate,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub
} from "react-icons/si";

// ===== Animation Variants =====
const gridVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, staggerChildren: 0.08, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// ===== Icon and Label Arrays =====
const icons = [
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  PiMagicWandFill ,
  SiGoogletranslate ,
  SiGithub,
];

const techNames = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "Redux Toolkit",
  "Framer Motion",
  "i18n",
  "Github",
];

export default function SkillsSection() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="w-full py-16 px-6 sm:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* ==== Title ==== */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[55px] font-bold text-sky-900 dark:text-white">
            {t("title1")}{" "}
            <span className=" font-bold py-7
        text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-400 dark:from-sky-400 dark:to-cyan-300">{t("title2")}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-8">
            {t("subtitle")}
          </p>
        </div>

        {/* ==== Core Expertise ==== */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Frontend */}
          <div className="p-6 rounded-2xl backdrop-blur-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-white/5 shadow-lg hover:shadow-sky-200/40 transition">
            <h3 className="text-xl font-semibold mb-3 text-sky-700 dark:text-sky-400">
              {t("frontend.title")}
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              {t("frontend.desc")}
            </p>
            <div className="flex flex-wrap gap-3 text-3xl text-sky-600 dark:text-sky-400">
              <SiReact />
              <SiNextdotjs />
              <SiTailwindcss />
              <SiJavascript />
              <SiRedux />
              <PiMagicWandFill  />
              <SiGoogletranslate  />
            </div>
          </div>

          {/* Backend */}
          <div className="p-6 rounded-2xl backdrop-blur-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-white/5 shadow-lg hover:shadow-cyan-200/40 transition">
            <h3 className="text-xl font-semibold mb-3 text-cyan-700 dark:text-cyan-400">
              {t("backend.title")}
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              {t("backend.desc")}
            </p>
            <div className="flex flex-wrap gap-3 text-3xl text-cyan-600 dark:text-cyan-400">
              <SiNodedotjs />
              <SiExpress />
              <SiMongodb />
            </div>
          </div>
        </div>

        {/* ==== Tech Grid with Animation ==== */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-8"
        >
          {icons.map((Icon, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { duration: 0.15, ease: "linear" },
              }}
              className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-white/5 hover:shadow-lg transition cursor-default"
            >
              <div className="text-4xl text-sky-600 dark:text-sky-400 mb-2">
                <Icon />
              </div>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                {techNames[i]}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ==== Current Focus ==== */}
        <div className="text-center mt-10">
          <h3 className="text-lg text-gray-700 dark:text-gray-300">
            {t("focus.prefix")}{" "}
            <span className="font-semibold text-sky-600 dark:text-sky-400">
              {t("focus.highlight")}
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
