"use client";

import Image from "next/image";
import head from "../images/head100.png";
import avatar from "../images/avatar101.png";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { MapPin, Briefcase, Mail, Github } from "lucide-react";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("header");

  return (
    <div className="w-full mx-auto">
      {/* Cover / Header image */}
      <div className="relative w-full h-48 sm:h-56">
        <Image src={head} alt="Cover" fill priority className="object-cover" />
      </div>

      {/* Avatar + Info */}
      <div className="relative px-8 sm:px-28">
        {/* Avatar */}
        <div
          className={`absolute -top-14 sm:-top-20 ${
            locale === "en" ? "left-8 sm:left-28" : "right-8 sm:right-28"
          }`}
        >
          <div className="w-[135px] h-[165px] sm:w-[160px] sm:h-[180px]">
            <Image
              src={avatar}
              alt="User Avatar"
              fill
              className="object-cover rounded-md border-4 border-white shadow-lg object-top translate-y-[1%]"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="pt-[122px] sm:pt-[108px] flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            {/* Name */}
            <h1 className="text-2xl font-semibold bg-sky-700 dark:bg-gradient-to-r dark:from-sky-400 dark:to-cyan-300 bg-clip-text text-transparent 
              dark:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
              {locale === "en" ? "Mohamed Khaled" : "محمد خالد"}
            </h1>

            {/* Info Row (Location, Role, Email, GitHub) */}
            <div className="flex items-center gap-5 text-gray-700 dark:text-gray-200 text-sm mt-2 flex-wrap">
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-sky-700" />
                <span>{t("location")}</span>
              </div>

              <div className="flex items-center gap-1">
                <Briefcase size={16} className="text-sky-700" />
                <span>{t("role")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Github size={16} className="text-sky-700 " />
                <a
                  href="https://github.com/Mohamed-Kh11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Mohamed-Kh11
                </a>
              </div>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-800 dark:text-gray-100 mt-3 max-w-2xl leading-relaxed"
            >
              {t.rich("description", {
                highlightBlue: (chunks) => (
                  <span className="text-sky-700 font-semibold dark:bg-gradient-to-r dark:from-sky-400 dark:to-cyan-300 bg-clip-text text-transparent 
              dark:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">{chunks}</span>
                ),
                highlight: (chunks) => (
                  <span className="font-semibold">{chunks}</span>
                ),
              })}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
