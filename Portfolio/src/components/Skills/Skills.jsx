import './Skills.css';
import { skillsData } from "../../data/skills";


function Skills() {
    return (
        <div className="Skills">
            <div className="Header">
                <h1>Habilidades</h1>
            </div>
            <div className="Skills-container">
                {skillsData.map((skillData, index)=>{
                    return (
                    <div className="skills-card" key={index}>
                        <div className= "card-header">
                            <h1>{skillData.type}</h1>
                        </div>
                        <div className="card-content">
                                {skillData.list.map((skill, index)=>{
                                    const IconComponent = skill.icon;
                                    return (
                                        <div className="skills-row" key={index}>
                                            <div className="skill-icon">{IconComponent && <IconComponent />}</div>
                                            <div className="skill-name">{skill.name}</div>
                                            <div className="skill-level">{skill.nivel}</div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
}   

export default Skills;