"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MobileNavDrawer({ links }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const t = useTranslations("navbar");
  const locale = useLocale();
  const pathname = usePathname();

  const isArabic = locale === "ar";
  const slideDirection = isArabic ? "translate-x-full" : "-translate-x-full";
  const alignSide = isArabic ? "right-0" : "left-0";

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  // ✅ Close drawer when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  // ✅ Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const closeDrawer = () => setOpen(false);

  // ✅ Smooth scroll handler (same as Navbar)
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setOpen(false), 400);
    }
  };

  return (
    <>
      {/* Burger Icon */}
      <button
        onClick={() => setOpen(true)}
        aria-label={t("menu")}
        className="md:hidden text-white p-2 rounded-full hover:bg-white/20 transition"
      >
        <Menu size={26} />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 ${alignSide} w-1/2 max-w-sm h-[100dvh] bg-sky-800 dark:bg-black z-50 transform ${
          open ? "translate-x-0" : slideDirection
        } transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/20">
          <span className="text-white font-semibold text-lg">My Portfolio</span>
          <button onClick={closeDrawer} className="text-white">
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col my-6 px-6 space-y-4 text-white text-base">
          {links.map((link) => {
            const isSkills = link.label === t("skills");
            const sectionId = link.href.split("#")[1] || "skills";

            // ✅ If on home page and section exists, use scroll
            if (isSkills && pathname === `/${locale}`) {
              return (
                <a
                  key={link.href}
                  href={`#${sectionId}`}
                  onClick={(e) => handleScroll(e, sectionId)}
                  className="hover:underline hover:opacity-90 transition"
                >
                  {link.label}
                </a>
              );
            }

            // ✅ Otherwise, navigate normally
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeDrawer}
                className="hover:underline hover:opacity-90 transition"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-white/20 px-6 py-6 flex flex-col gap-5 text-white mt-auto">
          {mounted && (
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                closeDrawer();
              }}
              className="flex items-center gap-3 hover:opacity-90 transition"
            >
              {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
              <span>
                {theme === "dark" ? t("darkMode") : t("lightMode")}
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
