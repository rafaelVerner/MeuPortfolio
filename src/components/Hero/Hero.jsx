import './Hero.css';

function Hero({Profile}) {
    return (
        <div className="Hero" id="Hero">
            <div className="Overlay"></div>
            <div className="Content">
                <div className="Description">
                    <h1>{Profile.nome}</h1>
                    <h3>{Profile.descricao}</h3>
                </div>
                <div className="Buttons">
                    <a href="https://github.com/rafaelVerner" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/verner-rafael-rios-ferreira-762485239" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://drive.google.com/file/d/1Pwxllr2U_E0Nms8_BAjUVmcFb5O_UCtD/view?usp=sharing" target="_blank" rel="noopener noreferrer">Baixar Currículo</a>
                </div>
            </div>
        </div>
    );
}

export default Hero;