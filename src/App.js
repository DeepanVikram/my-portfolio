import Navbar from "./components/navigation/navbar"; 
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import './App.css'

function App() {
  return (
    <div className="App">
     <Navbar />
     <About />
     <Skills />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
