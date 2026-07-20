import "./Navbar.css";

function Navbar() {
    return(
        <nav className="Navbar">
            <div className="Links">
                <a href="#About">Sobre</a>
                <a href="#Skills">Habilidades</a>
                <a href="#Projects">Projetos</a>
                <a href="#Contact">Contato</a>
            </div>
        </nav>
    );
}

export default Navbar;