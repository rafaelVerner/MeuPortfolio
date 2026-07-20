import "./Footer.css"

function Footer(){
    return(
        <footer className="Footer">
            <div className="Contatos">
                <p>Email:<a href="#">vernerrrferreira@gmail.com</a></p>
            </div>
            <div className="Redes">
                <p>GitHub: <a href="#">link do git aqui</a></p>
                <p>Linkedin: <a href="#">link do Linkedin aqui</a></p>
                <p>Lattes: <a href="#">link do Lattes aqui</a></p>
            </div>
        </footer>
    );
}

export default Footer;