import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import HeroSection from "./Herosection";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Links from "./Links";

createRoot(document.getElementById("root")).render(
  <div className="App">
    <Header />
    <HeroSection />
    <Skills/>
    <Projects/>
    <Footer/>
    <Links/>
  </div>
);
