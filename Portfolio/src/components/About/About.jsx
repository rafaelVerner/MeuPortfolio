import './About.css';
import myImage from '../../assets/Verner.jpeg';
import { profileData } from '../../data/profile.js';

function About() {
    return(
        <div className="About" id="About">
            <div className="Card-Content">
                <h1>Quem sou eu</h1>
                <div className="Info-Block">
                    <h3>{profileData.sobre.title}</h3>
                    <p>{profileData.sobre.content}</p>
                </div>
                <div className="Info-Block">
                    <h3>{profileData.experiencia.title}</h3>
                    <p>{profileData.experiencia.content.map((exp, index)=>{
                                return(
                                    <div  key={index}>
                                        <h4>{exp.empresa}</h4>
                                        <h4>{exp.cargo}</h4>
                                        <h4>{exp.periodo}</h4>
                                    </div>

                                );

                                }
                            )
                        }
                    </p>
                </div>
            </div>
            <div className="Card-Image">
                <img src={myImage} alt="Imagem de um gato" />
            </div>
        </div>
    );

}

export default About;