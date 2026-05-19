import { useEffect } from "react";
import { initLenis } from "./lib/lenis";
import { SideNav } from "./components/SideNav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Places } from "./components/Places";
import { Contact } from "./components/Contact";
import { ScrollProgress } from "./components/ui/ScrollProgress";

function App() {
  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <ScrollProgress />
      <SideNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Places />
        <Contact />
      </main>
    </>
  );
}

export default App;