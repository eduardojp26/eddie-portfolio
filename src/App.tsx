import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Places } from "./components/Places";
import { Contact } from "./components/Contact";

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Places />
      <Contact />
    </main>
  );
}

export default App;