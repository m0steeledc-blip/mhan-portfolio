import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import CaseStudyEO from "./components/CaseStudyEO";
import Reels from "./components/Reels";
import CaseStudyLED from "./components/CaseStudyLED";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <CaseStudyEO />
        <Reels />
        <CaseStudyLED />
        <About />
        <Capabilities />
        <Contact />
      </main>
    </>
  );
}
