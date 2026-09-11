import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import { profileData } from './data/profile';
import './App.css';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [isSelected, setIsSelected] = useState("");

  const scrollHandle = () => {
    const valorY = window.scrollY;
    let heroTop = document.getElementById("Hero").getBoundingClientRect().top;
    let aboutTop = document.getElementById("About").getBoundingClientRect().top;
    let skillsTop = document.getElementById("Skills").getBoundingClientRect().top;
    let projectsTop = document.getElementById("Projects").getBoundingClientRect().top;
    if(Math.ceil(valorY)  <= Math.ceil(valorY + heroTop)){
      setIsSelected("Hero");
    }else if(Math.ceil(valorY) <= Math.ceil(aboutTop + valorY)){
      setIsSelected("About");
    }else if(Math.ceil(valorY ) <= Math.ceil(skillsTop + valorY)){
      setIsSelected("Skills");
    }else if(Math.ceil(valorY ) <= Math.ceil(projectsTop + valorY)){
      setIsSelected("Projects");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
    
    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
    <div className="App">
      <Navbar isSelected={isSelected} />
      <Hero  Profile={profileData} />
      <About />
      <Skills  />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
