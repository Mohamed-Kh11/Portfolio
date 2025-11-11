import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import getMessages from "../../../i18n/request";
import { routing } from "../../../i18n/routing";
import { Toaster } from "react-hot-toast";

import "../../app/globals.css";
import Providers from "./components/providers";
import NavBar from "./components/NavBar";

export const metadata = {
  title: {
    default: "Mohamed's Portfolio",
  },
  description:
    "Mohamed Khaled — Frontend Developer creating fast, responsive, and accessible web applications using React, Next.js, and Tailwind CSS. Passionate about design, performance, and user experiences.",
  metadataBase: new URL("https://mohamed-kh.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohamed Khaled — Frontend Developer",
    description:
      "Creating fast, responsive, and accessible web applications using React, Next.js, and Tailwind CSS. Passionate about design, performance, and user experiences.",
    url: "https://mohamed-kh.netlify.app/",
    siteName: "Mohamed Khaled Portfolio",
    images: [
      {
        url: "/images/link.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Khaled — Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Khaled — Frontend Developer",
    description:
      "Frontend Developer building fast, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
    images: ["/images/link.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const { messages } = await getMessages({ requestLocale: locale });

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <head>
        {/* ✅ Pre-hydration script for theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    const theme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (!theme && systemDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (_) {}
})();
            `,
          }}
        />

        {/* ✅ JSON-LD Structured Data for Personal Portfolio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohamed Khaled",
              url: "https://megamart-orcin.vercel.app",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://github.com/",
                "https://linkedin.com/",
                "https://twitter.com/",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`min-h-screen transition-colors duration-300 
        bg-white dark:bg-[#0b0e30] 
        ${locale === "en" ? "font-[Poppins]" : "font-[Alex]"}`}
      >
        <Providers locale={locale} messages={messages}>
          <NavBar />
          <main>{children}</main>
          <Toaster position="top-center" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}
