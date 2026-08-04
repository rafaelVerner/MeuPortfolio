import "./Footer.css"

function Footer(){
    return(
        <footer className="Footer">
            <div className="Info-Rows">
                <div className="Brand">
                    <h3>Verner Rafael</h3>
                    <p>Desenvolvedor Front-end focado em criar experiências digitais incríveis.</p>
                </div>
                <div className="Navgagtion">
                    <h3>Navegação</h3>
                    <a href="">Inicio</a>
                    <a href="">Sobre</a>
                    <a href="">Habilidades</a>
                    <a href="">Projetos</a>
                </div>
                <div className="Contatos">
                    <h3>Contatos: </h3>
                    <p>Email:<a href="#">vernerrrferreira@gmail.com</a></p>
                    <p>GitHub: <a href="#">link do git aqui</a></p>
                    <p>Linkedin: <a href="#">link do Linkedin aqui</a></p>
                </div>
            </div>
            <div className="Copyright">
                <p>&copy; 2026 Verner Rafael. Criado com HTML & CSS.</p>
            </div>
        </footer>
        // <footer class="portfolio-footer-grid">
        //     <div class="footer-grid-container">
        //         <div class="footer-brand">
        //             <h3>SeuNome.dev</h3>
        //             <p>Desenvolvedor Front-end focado em criar experiências digitais incríveis.</p>
        //         </div>
        //         <div class="footer-links">
        //             <h4>Navegação</h4>
        //             <a href="#sobre">Sobre</a>
        //             <a href="#projetos">Projetos</a>
        //             <a href="#contato">Contato</a>
        //         </div>
        //         <div class="footer-social">
        //             <h4>Conecte-se</h4>
        //             <a href="#">GitHub</a>
        //             <a href="#">LinkedIn</a>
        //             <a href="#">Instagram</a>
        //         </div>
        //     </div>
        //     <div class="footer-copyright">
        //         <p>&copy; 2026 SeuNome. Criado com HTML & CSS.</p>
        //     </div>
        // </footer>
    );
}

export default Footer;