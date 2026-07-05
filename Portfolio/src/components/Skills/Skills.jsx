import './Skills.css';
import { skillsData } from "../../data/skills";

function Skills() {
    const skillsList = [];

    for (let i = 0; i < skillsData.length; i++) {
        skillsList.push(
            <div className="skills-card" key={i}>
                <h1>{skillsData[i].type}</h1>
                <ul>
                    {skillsData[i].list.map((skill, index) => (
                        <li key={index}>{skill} </li>

                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div className="Skills">
            {skillsList}
        </div>
    );
}   

export default Skills;