import "./App.css";
import TopNav from "./components/TopNav";
import Banner from "./components/Banner/Banner";
import Features from "./Features/Features";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Testimonials from "./components/Testimonials/Testimonials";
import Skills from "./components/Skills/Skills";
import Accolades from "./components/Accolades/Accolades";
import Contact from "./components/Contact/Contact";

//https://github.com/mihirc0111/Portfolio-Mihir-React-Tailwind/tree/master

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <TopNav />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Skills />
        <Projects />
        <Testimonials />
        <Timeline />
        <Accolades />
        <Contact />
      </div>
    </div>
  );
}

export default App;
