import "./Projects.css";
import { ProjectsData } from "../../data/projects";

function Projects() {
    return (
        <div className="Projects">
            <div className="Header">
                <h1>Meus Projetos</h1>
            </div>
            <div className="Projects-Container">
                {ProjectsData.map((project, index) =>{
                        return(
                            <div className="Project-Card" key={index}>
                                <div className="Card-Title">
                                    <h1>{project.title}</h1>
                                </div>
                                <div className="Card-Image">
                                    <img src={project.image} alt="Imagem do projeto" />
                                </div>
                                <div className="Card-Description">
                                    <p>{project.description}</p>
                                </div>
                                <div className="Card-Tools">
                                    <p>{project.tools}</p>
                                </div>
                            </div>
                        );
                    }
                )}  
            </div>
        </div>
    );
}   

export default Projects;