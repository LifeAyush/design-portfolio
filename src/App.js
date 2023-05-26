import { useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Intro from "./Components/Intro/Intro";
import Por from "./Components/Por/Por";
import SideProjects from "./Components/SideProjects/SideProjects";
import Work from "./Components/Work/Work";

function App() {
  useEffect(() => {
    const container = document.querySelector(".App");
    const horizontalScroll = document.querySelector(".work");
    container.addEventListener("scroll", function () {
      const containerHeight = container.offsetHeight;
      const verticalScrollHeight = containerHeight * 2;
      if (container.scrollTop >= verticalScrollHeight) {
        container.style.overflow = "hidden";
        horizontalScroll.style.overflowX = "scroll";
      } else {
        container.style.overflow = "hidden";
        horizontalScroll.style.overflowX = "hidden";
      }
    });
  }, []);
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
