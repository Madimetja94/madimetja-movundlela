import Navbar from "./components/navbar";
import About from "./sections/about";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <main >
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
    </main>
  );
}
