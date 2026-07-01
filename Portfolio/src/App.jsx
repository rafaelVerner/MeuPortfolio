import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { profileData } from './data/profile';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Hero Nome={profileData.nome} Profissao={profileData.profissao} Descricao={profileData.descricao} />

    </div>
  )
}

export default App
