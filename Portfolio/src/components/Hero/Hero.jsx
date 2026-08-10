import './Hero.css';

function Hero({Profile}) {
    return (
        <div className="Hero" id="Hero">
            <div className="Overlay"></div>
            <div className="Content">
                <div className="Description">
                    <h1>{Profile.nome}</h1>
                    <h3>{Profile.profissao}</h3>
                    <h4>{Profile.descricao}</h4>
                </div>
                <div className="Buttons">
                    <a href="">GitHub</a>
                    <a href="">LinkedIn</a>
                    <a href="">Baixar Currículo</a>
                </div>
            </div>
        </div>
    );
}

export default Hero;