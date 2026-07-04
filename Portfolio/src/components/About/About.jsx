import './About.css';
import catImage from '../../assets/cat.png';

function About() {
    return(
        <div className="About">
            <div className="Card-Content">
                <div className="Content">
                    <h1>Quem sou eu?</h1>
                    <p>Sou um desenvolvedor full-stack com experiência em JavaScript, React ee Node.js.</p>
                </div>
            </div>
            <div className="Card-Image">
                <img src={catImage} alt="Imagem de um gato" />
            </div>
        </div>
    );

}

export default About;