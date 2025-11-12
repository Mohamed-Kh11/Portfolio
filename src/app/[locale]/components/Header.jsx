"use client";

import Image from "next/image";
import head from "../images/head100.png";
import avatar from "../images/image.png";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { MapPin, Phone, Github } from "lucide-react";
import back from '../images/back.png'

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("header");

  return (
    <div className="w-full mx-auto">
      <div className="absolute z-10 w-full h-full left-0 top-0 opacity-5 dark:opacity-50">
        <Image alt="background" src={back}/>
      </div>
      {/* Cover / Header image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 z-20">
        <Image src={head} alt="Cover" fill priority className="object-cover" />
      </div>

      {/* Avatar + Info */}
      <div className="relative px-6 sm:px-10 z-30">
        {/* Avatar */}
        <div className="absolute -top-20 sm:-top-24 md:-top-28 left-1/2 transform -translate-x-1/2">
          <div
            className="
      w-[150px] h-[150px]
      sm:w-[170px] sm:h-[160px]
      md:w-[180px] md:h-[175px]
      lg:w-[200px] lg:h-[190px]
      xl:w-[210px] xl:h-[200px]
    "
          >
            <Image
              src={avatar}
              alt="User Avatar"
              className="object-cover rounded-md border-4 border-white shadow-lg"
              priority
            />
          </div>
        </div>


        {/* User Info */}
        <div className=" pt-[75px] sm:pt-[80px] lg:pt-[95px] xl:pt-[107px] flex flex-col items-center text-center">
          {/* Name */}
          <h1 className="text-[32px] md:text-4xl font-semibold bg-sky-700 dark:bg-gradient-to-r dark:from-sky-400 dark:to-cyan-300 bg-clip-text text-transparent 
            dark:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
            <span className="text-white">🌀 </span>
            {locale === "en" ? "Mohamed Khaled" : "محمد خالد"}
          </h1>

          {/* Info Row (Location, Phone, GitHub) */}
          <div
            className="flex flex-wrap justify-center items-center gap-5 
            text-gray-700 dark:text-gray-200 text-sm mt-3"
          >
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-sky-700" />
              <span>{t("location")}</span>
            </div>

            <div className="flex items-center gap-1">
              <Phone size={16} className="text-sky-700" />
              <span>{t("phone")}</span>
            </div>

            <div className="flex items-center gap-1">
              <Github size={16} className="text-sky-700" />
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
            className="text-gray-800 dark:text-gray-100 mt-3 mb-20 md:mb-32 max-w-2xl leading-relaxed"
          >
            {t.rich("description", {
              highlightBlue: (chunks) => (
                <span className="text-sky-700 font-semibold dark:bg-gradient-to-r dark:from-sky-400 dark:to-cyan-300 bg-clip-text dark:text-transparent 
                dark:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                  {chunks}
                </span>
              ),
              highlight: (chunks) => <span className="font-semibold">{chunks}</span>,
            })}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
