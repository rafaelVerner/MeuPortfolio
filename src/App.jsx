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
    if(valorY < 933){
      setIsSelected("Hero");
    }else if(valorY >= 933 && valorY < 1866){
      setIsSelected("About");
    }else if(valorY >= 1866 && valorY < 2799){
      setIsSelected("Skills");
    }else if(valorY >= 2799){
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
