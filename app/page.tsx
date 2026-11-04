import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Comparison from "@/components/sections/Comparison";
import Portfolio from "@/components/sections/Portofolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Comparison />
        <Portfolio />
      </main>
    </>
  );
}
