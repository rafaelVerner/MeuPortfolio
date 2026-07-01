import './Hero.css';
import Button from '../Buttons/Button';

function Hero({Nome, Profissao, Descricao}) {
    return (
        <div className="Hero">
            <div className="Overlay"></div>
            <div className="Content">
                <div className="Description">
                    <h1>{Nome}</h1>
                    <h3>{Profissao}</h3>
                    <h4>{Descricao }</h4>
                </div>
                <div className="Buttons">
                    <a href="">GitHub</a>
                    <a href="">LinkedIn</a>
                    <Button text="Baixar Currículo" onClick={() => {}} />
                </div>
            </div>
        </div>
    );
}

export default Hero;