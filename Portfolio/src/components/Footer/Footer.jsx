import "./Footer.css"

function Footer(){
    return(
        <footer className="Footer">
            <div className="Info-Row">
                <div className="Brand">
                    <h3>Verner Rafael</h3>
                    <p>Desenvolvedor Full-Stack focado em criar experiências digitais únicas.</p>
                </div>
                <div className="Navigation">
                    <h3>Navegação</h3>
                    <a href="">Inicio</a>
                    <a href="">Sobre</a>
                    <a href="">Habilidades</a>
                    <a href="">Projetos</a>
                </div>
                <div className="Contacts">
                    <h3>Contatos</h3>
                    <a href="#">Gmail</a>
                    <a href="#">GitHub</a>
                    <a href="#">Linkedin</a>
                </div>
            </div>
            <div className="Copyright">
                <p>&copy; 2026 Verner Rafael. Criado com HTML, CSS & JavaScript.</p>
            </div>
        </footer>
    );
}

export default Footer;