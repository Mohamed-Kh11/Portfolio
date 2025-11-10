"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-10 py-16
      "
    >
      {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[55px] font-bold text-sky-900 dark:text-white mb-12">
            {t("title")}{" "}
            <span className="font-bold py-7 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-400 dark:from-sky-400 dark:to-cyan-300">
              {t("title2")}
            </span>
          </h2>
        </div>

      {/* Contact Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-8 mb-12 text-center"
      >
        <div className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-300">
          <Mail className="text-sky-500" size={22} />
          <p className="font-medium">mkhaled11@outlook.com</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-300">
          <Phone className="text-sky-500" size={22} />
          <p className="font-medium">{t("phone")}</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-300">
          <MapPin className="text-sky-500" size={22} />
          <p className="font-medium">{t("location")}</p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-lg bg-white/30 dark:bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10"
      >
        <div className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
              {t("email")}
            </label>
            <input
              type="email"
              required
              placeholder={t("emailPlaceholder")}
              className="w-full p-3 rounded-lg bg-white/50 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
              {t("subject")}
            </label>
            <input
              type="text"
              required
              placeholder={t("subjectPlaceholder")}
              className="w-full p-3 rounded-lg bg-white/50 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
              {t("message")}
            </label>
            <textarea
              required
              placeholder={t("messagePlaceholder")}
              rows="5"
              className="w-full p-3 rounded-lg bg-white/50 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            ></textarea>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-400 
            text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            <Send size={18} /> {t("send")}
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}
