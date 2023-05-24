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
      <Hero />
      <Intro />
      <Work />
      <SideProjects />
      <Por />
      <Footer />
    </div>
  );
}

export default App;
