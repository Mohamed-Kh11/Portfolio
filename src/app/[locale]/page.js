import Image from "next/image";
import Header from "./components/Header";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Projects from "./components/Projects";

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
      "creating fast, responsive, and accessible web applications using React, Next.js, and Tailwind CSS. Passionate about design, performance, and user experiences.",
    url: "https://mohamed-kh.netlify.app/",
    siteName: "Mohamed Khaled",
    images: [
      {
        url: "../images/link.png",
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
    title: "Mohamed Khaled",
    description:
      "Frontend Developer, Passionate about design, performance, and user experiences. ",
    images: ["../images/link.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen pt-[70px]">
      <Header />
      <Skills />
      <Projects/>
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
