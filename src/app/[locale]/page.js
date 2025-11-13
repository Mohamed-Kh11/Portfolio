import Image from "next/image";
import Header from "./components/Header";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Projects from "./components/Projects";



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
