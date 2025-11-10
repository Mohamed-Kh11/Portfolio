"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Sun, Moon, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNavDrawer from "./MobileNavDrawer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const t = useTranslations("navbar");
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { id: "skills", label: t("skills") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <header
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl
      bg-gradient-to-r from-sky-700 via-sky-800/80 to-sky-900 dark:from-black/80 dark:via-gray-900/70 dark:to-black/80
      shadow-[0_0_25px_rgba(56,189,248,0.2)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
        {/* Left — Logo + Mobile Menu */}
        <div className="flex items-center gap-3">
          <MobileNavDrawer links={links.map(link => ({
            href: `#${link.id}`,
            label: link.label
          }))} />

          <Link href={`/${locale}`} className="flex items-center gap-2">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-bold text-[18px] sm:text-xl md:text-2xl tracking-wide font-[Fugaz] bg-white
              dark:bg-gradient-to-r dark:from-sky-400 dark:to-cyan-300 bg-clip-text text-transparent 
              drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            >
              Mohamed Khaled
            </motion.span>
          </Link>
        </div>

        {/* Center — Links */}
        <nav className="hidden md:flex justify-center gap-8 text-white font-medium">
          {links.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {pathname === `/${locale}` ? (
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="relative group hover:text-sky-300 transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
              ) : (
                <Link
                  href={`/${locale}/#${link.id}`}
                  className="relative group hover:text-sky-300 transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Right — Language + Theme + Social */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher variant="pill" />
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-full hover:bg-white/20 transition duration-300"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === "dark" ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {theme === "dark" ? (
                  <Sun size={20} className="text-sky-300" />
                ) : (
                  <Moon size={20} className="text-yellow-300" />
                )}
              </motion.div>
            </button>
          )}

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-2 text-white">
            <Link
              href="https://github.com/Mohamed-Kh11"
              target="_blank"
              className="p-2 hover:text-sky-300 transition"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohamed-khaled-011a1334a"
              target="_blank"
              className="p-2 hover:text-sky-300 transition"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
