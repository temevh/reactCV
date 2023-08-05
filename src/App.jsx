import "./App.css";
import TopNav from "./components/TopNav";
import Banner from "./components/Banner/Banner";
import Features from "./Features/Features";

//https://github.com/mihirc0111/Portfolio-Mihir-React-Tailwind/tree/master

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <TopNav />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        {/*What I Do */}
        {/*Skills */}
        {/*testimonials carousel */}
        {/*Projects */}
        {/*Resume "roadmap"*/}
        {/*Contact section*/}
      </div>
    </div>
  );
}

export default App;
