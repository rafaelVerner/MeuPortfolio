import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import { profileData } from './data/profile';
import './App.css';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Hero Nome={profileData.nome} Profissao={profileData.profissao} Descricao={profileData.descricao} />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
