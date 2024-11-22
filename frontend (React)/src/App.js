import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Project/Project";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Skill from "./components/Skill";
import Home from "./components/Home/Home";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home" style={{ backgroundImage: 'url("image/computer.jpg")' }}>
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="project">
        <Projects />
      </section>

      <section id="timeline">
        <Timeline />
      </section>

      <section id="contact">
        <Contact/>
      </section>

      <footer>
            COPYRIGHT © Kornkamol 2024 ALL Right Reserved
        </footer>
    </div>
  );
}

export default App;
