import "./App.css";
import TopNav from "./components/TopNav";
import Banner from "./components/Banner/Banner";

//https://www.ojieame.design/
//https://reactjsexample.com/a-professionally-designed-portfolio-website-using-reactjs/

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <TopNav />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
      </div>
    </div>
  );
}

export default App;
