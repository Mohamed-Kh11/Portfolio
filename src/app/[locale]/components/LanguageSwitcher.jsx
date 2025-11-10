"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2 } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 🧠 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLang = (lang) => {
    setOpen(false);
    const cleanedPath = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
    router.replace(`/${lang}${cleanedPath}`, { scroll: false });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Globe toggle */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ rotate: 180 }}
        className="flex items-center gap-2 px-3 py-2 rounded-full 
                   bg-white/10 hover:bg-white/20 
                   border border-white/20 text-white
                   shadow-md backdrop-blur-md 
                   transition-all"
        aria-label="Language selector"
      >
        <Globe2 className="w-5 h-5" />
        <span className="font-semibold text-sm">{locale.toUpperCase()}</span>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-28 rounded-lg 
                       overflow-hidden shadow-lg z-50
                       bg-sky-600 dark:bg-[#0b1639] border border-white/10"
          >
            <button
              onClick={() => changeLang("en")}
              className={`w-full px-4 py-2 text-left text-sm 
                         ${locale === "en" ? "bg-white/20" : ""}
                         text-white hover:bg-white/20 transition`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => changeLang("ar")}
              className={`w-full px-4 py-2 text-left text-sm 
                         ${locale === "ar" ? "bg-white/20" : ""}
                         text-white hover:bg-white/20 transition`}
            >
              🇪🇬 العربية
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
