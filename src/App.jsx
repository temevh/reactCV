import "./App.css";
import TopNav from "./components/TopNav";
import AboutMe from "./components/AboutMe";
import SectionHeader from "./components/SectionHeader";

function App() {
  return (
    <>
      <TopNav />
      <SectionHeader title="About me" />
      <AboutMe />
      <SectionHeader title="Skills" />
    </>
  );
}

export default App;
