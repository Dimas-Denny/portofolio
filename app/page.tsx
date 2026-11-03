import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Comparison from "@/components/sections/Comparison";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Comparison />
      </main>
    </>
  );
}
