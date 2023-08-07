import "./App.css";
import TopNav from "./components/TopNav";
import Banner from "./components/Banner/Banner";
import Features from "./Features/Features";
import Projects from "./Projects/Projects";
import Timeline from "./components/Timeline/Timeline";

//https://github.com/mihirc0111/Portfolio-Mihir-React-Tailwind/tree/master

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <TopNav />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        {/*Skills */}
        {/*testimonials carousel */}
        {/*Projects */}
        {/*Resume "roadmap"*/}
        <Timeline />
        {/*Contact section*/}
      </div>
    </div>
  );
}

export default App;
