import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Intro from "./Components/Intro/Intro";
import Por from "./Components/Por/Por";
import SideProjects from "./Components/SideProjects/SideProjects";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="App">
      <div className="slide">
        <Hero />
      </div>
      <div className="slide">
        <Intro />
      </div>
      <div className="slide">
        <Work />
      </div>
      <div className="slide">
        <SideProjects />
      </div>
      <div className="slide">
        <Por />
      </div>
      <div className="slide">
        <Footer />
      </div>
    </div>
  );
}

export default App;
