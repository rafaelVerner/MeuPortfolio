import "./Navbar.css";

function Navbar() {
    return(
        <nav className="Navbar">
            <div className="Logo">
                <h2>Logo Aqui</h2>
            </div>
            <div className="Links">
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </div>
        </nav>
    );
}

export default Navbar;