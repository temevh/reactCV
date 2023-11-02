import "./App.css";
import TopNav from "./components/TopNav";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Testimonials from "./components/Testimonials/Testimonials";
import Skills from "./components/Skills/Skills";
import Accolades from "./components/Accolades/Accolades";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
        <Footer />
      </div>
    </div>
  );
}

export default App;
