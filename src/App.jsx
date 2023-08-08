import "./App.css";
import TopNav from "./components/TopNav";
import Banner from "./components/Banner/Banner";
import Features from "./Features/Features";
import Projects from "./Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Testimonials from "./components/Testimonials/Testimonials";
import Skills from "./components/Skills/Skills";

//https://github.com/mihirc0111/Portfolio-Mihir-React-Tailwind/tree/master

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <TopNav />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Skills />
        <Testimonials />
        {/*testimonials carousel */}
        {/*Projects */}
        <Timeline />
        {/*Contact section*/}
      </div>
    </div>
  );
}

export default App;
