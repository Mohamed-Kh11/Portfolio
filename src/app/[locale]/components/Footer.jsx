"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Twitter, Mail, Sun, Moon } from "lucide-react";
import back from "../images/back3.png";

/* ---------------------- Social Icon ---------------------- */
const SocialIconButton = ({ href, label, icon }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-200 shadow-lg shadow-indigo-100/50 dark:shadow-slate-900/50"
  >
    {icon}
  </Link>
);

/* ---------------------- Theme Toggle ---------------------- */
const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Schedule after React finishes current render cycle
    queueMicrotask(() => setMounted(true));
  }, []);


  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="p-3 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-200 shadow-lg shadow-indigo-100/50 dark:shadow-slate-900/50"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

/* ---------------------- Main Footer ---------------------- */
export default function Footer() {
  const t = useTranslations("footer");

  const socials = [
    { href: "https://github.com/Mohamed-Kh11", label: "GitHub", icon: <Github size={20} /> },
    { href: "www.linkedin.com/in/mohamed-khaled-011a1334a", label: "LinkedIn", icon: <Linkedin size={20} /> },
    { href: "https://twitter.com/", label: "X (Twitter)", icon: <Twitter size={20} /> },
  ];

  const navLinks = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about_page") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <footer className="relative w-full border-t border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-black/30 backdrop-blur-xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute z-10 w-full h-full left-0 top-0 opacity-10 dark:opacity-100">
        <Image alt="background" src={back} fill className="object-cover" />
      </div>

      {/* Footer Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-slate-800 dark:text-slate-200">
          {/* Branding */}
          <div className="lg:col-span-2 space-y-5 pr-0 lg:pr-12">
            <h3 className="text-4xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
              {t("name")}
            </h3>
            <p className="text-base font-semibold text-sky-600 dark:text-sky-500">
              {t("role")}
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-lg">
              {t("about")}
            </p>

            <div className="flex items-center gap-3 pt-4">
              {socials.map((s) => (
                <SocialIconButton key={s.href} {...s} />
              ))}
              <ThemeToggleButton />
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-slate-900 dark:text-slate-100 border-b-2 border-indigo-500/30 pb-2">
              {t("navigate")}
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:ml-1 transition-all duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100 mb-6 border-b-2 border-indigo-500/30 pb-2">
              {t("contact_section")}
            </h4>
            <Link
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 text-base font-semibold text-sky-700 dark:text-sky-300 hover:text-indigo-600 dark:hover:text-indigo-400 group"
            >
              <Mail size={18} className="text-sky-500 group-hover:scale-110 transition-transform" />
              Mkhaled11@outlook.com
            </Link>

            <div className="pt-4">
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-xl text-white bg-sky-600 hover:bg-sky-700 transition-all duration-300 transform hover:shadow-indigo-500/50"
              >
                {t("hire")}
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {t("name")} — {t("built")}
        </div>
      </div>
    </footer>
  );
}
