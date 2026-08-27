import './About.css';
import catImage from '../../assets/cat.png';
import { profileData } from '../../data/profile.js';

function About() {
    return(
        <div className="About" id="About">
            <div className="Card-Content">
                <h1>Quem sou eu</h1>
                <div className="infoBlock">
                    <h3>{profileData.sobre.title}</h3>
                    <p>{profileData.sobre.content}</p>
                </div>
            </div>
            <div className="Card-Image">
                <img src={catImage} alt="Imagem de um gato" />
            </div>
        </div>
    );

}

export default About;