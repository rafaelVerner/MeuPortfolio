import "./Navbar.css";
// import { useState } from "react";

function Navbar({isSelected}) {
    // const [isSelected, setIsSelected] = useState({isActive});
    console.log(isSelected);
    return(
        <nav className="Navbar">
            <div className="Links">
                <a href="#Hero"  style={isSelected === "Hero" ? { backgroundColor: "#DEAB3C" } : {}}>Início</a>
                <a href="#About"  style={isSelected === "About" ? { backgroundColor: "#DEAB3C" } : {}}>Sobre</a>
                <a href="#Skills"  style={isSelected === "Skills" ? { backgroundColor: "#DEAB3C" } : {}}>Habilidades</a>
                <a href="#Projects"  style={isSelected === "Projects" ? { backgroundColor: "#DEAB3C" } : {}}>Projetos</a>
            </div>
        </nav>
    );
}

export default Navbar;