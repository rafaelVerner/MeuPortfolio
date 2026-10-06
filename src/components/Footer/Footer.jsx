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
                    <a href="#Hero">Inicio</a>
                    <a href="#About">Sobre</a>
                    <a href="#Skills">Habilidades</a>
                    <a href="#Projects">Projetos</a>
                </div>
                <div className="Contacts">
                    <h3>Contatos</h3>
                    <a href="mailto:vernerrrferreira@gmail.com">Gmail</a>
                    <a href="https://github.com/rafaelVerner" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/verner-rafael-rios-ferreira-762485239" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </div>
            </div>
            <div className="Copyright">
                <p>&copy; 2026 Verner Rafael. Criado com HTML, CSS & JavaScript.</p>
            </div>
        </footer>
    );
}

export default Footer;