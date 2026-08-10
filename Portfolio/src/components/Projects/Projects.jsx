import "./Projects.css";
import { ProjectsData } from "../../data/projects";

function Projects() {
    return (
        <div className="Projects" id="Projects">
            <div className="Header">
                <h1>Meus Projetos</h1>
            </div>
            <div className="Projects-Container">
                {ProjectsData.map((project, index) =>{
                        return(
                            <div className="Project-Card" key={index}>
                                <div className="Card-Image">
                                    <img src={project.image} alt="imagem do projeto" />
                                </div>
                                <div className="Card-Content">
                                    <div className="Title">
                                        <h1>{project.title}</h1>
                                    </div>
                                    <div className="Description">
                                        <p>{project.description}</p>
                                    </div>
                                    <div className="Tools">
                                       {project.tools.map((tool, index) => (
                                            <div className="Tool" key={index}>
                                                <p>{tool}</p>
                                            </div>
                                       ))}
                                    </div>
                                    <div className="Links">
                                        {project.Links.map((link, index) => {
                                            return (
                                            <div className="Link" key={index}>  
                                                <a href={link.url}>
                                                    {link.name}
                                                </a>
                                            </div>);
                                        })}
                                    </div>
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