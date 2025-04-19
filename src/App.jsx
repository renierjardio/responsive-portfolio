import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
