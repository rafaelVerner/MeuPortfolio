import './About.css';
import myImage from '../../assets/Verner2.jpeg';
import { profileData } from '../../data/profile.js';

function About() {
    return(
        <div className="About" id="About">
            <div className="Card-Image">
                <img src={myImage} alt="Minha imagem segurando um robozinho." />
            </div>
            <div className="Card-Content">
                <div className="Card-Header">
                     <h1>Quem sou eu</h1>
                </div>
                <div className="Sobre">
                    <p>{profileData.sobre.content}</p>
                </div>
                <div className="Experiencias">
                    <h3>{profileData.experiencia.title}</h3>
                    <div className="Exp-Cards">
                        {profileData.experiencia.content.map((exp, index)=>{
                                return(
                                    <div className='Exp-Content'  key={index}>
                                        <p><b>Empresa: </b>{exp.empresa}</p>
                                        <p><b>Cargo: </b>{exp.cargo}</p>
                                        <p><b>Período: </b>{exp.periodo}</p>
                                    </div>
                                );

                                }
                            )
                        }
                    </div>

                </div>
                <div className="Formacao">
                    <h3>{profileData.formacao.title}</h3>
                    <div className="For-Cards">
                        {profileData.formacao.content.map((item, index)=>{
                                    return(
                                        <div className='For-Content'  key={index}>
                                            <p><b>Instituição: </b>{item.intituicao}</p>
                                            <p><b>Curso: </b>{item.curso}</p>
                                            <p><b>Período: </b>{item.periodo}</p>
                                        </div>
                                    );
                                }
                            )
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );

}

export default About;