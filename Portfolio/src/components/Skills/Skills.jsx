import './Skills.css';
import { skillsData } from "../../data/skills";


function Skills() {
    return (
        <div className="Skills" id="Skills">
            <div className="Header">
                <h1>Habilidades</h1>
            </div>
            <div className="Skills-Container">
                {skillsData.map((skillData, index)=>{
                    return (
                    <div className="Skills-List" key={index}>
                        <div className= "list-Header">
                            <h1>{skillData.type}</h1>
                        </div>
                        <div className="Card-Content">
                                {skillData.list.map((skill, index)=>{
                                    const IconComponent = skill.icon;
                                    return (
                                        <div className="Skill-Card" key={index}>
                                            <div className="Skill-Icon">{IconComponent && <IconComponent />}</div>
                                            <div className="Skill-Name">{skill.name}</div>
                                            <div className="Skill-Level">{skill.nivel}</div>
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