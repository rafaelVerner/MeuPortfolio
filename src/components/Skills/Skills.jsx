import './Skills.css';
import { skillsData } from "../../data/skills";
import { FaStar, FaRegStar } from "react-icons/fa";

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
                        <div className= "List-Header">
                            <h1>{skillData.type}</h1>
                        </div>
                        <div className="Card-Content">
                                {skillData.list.map((skill, index)=>{
                                    const IconComponent = skill.icon;
                                    const stars = [];
                                    for (let i =0; i < 5; i++){
                                        if (i < skill.nivel) {
                                            stars.push(<FaStar key={i} className="filled-star" />);
                                        }else{
                                            stars.push(<FaRegStar key={i} className="empty-star" />);
                                            console.log("nivel", skill.nivel)
                                        }
                                    }
                                    return (
                                        <div className="Skill-Card" key={index}>
                                            <div className="Card-Header">
                                                <div className="Skill-Icon">{IconComponent && <IconComponent />}</div>
                                                <div className="Skill-Name">{skill.name}</div>
                                            </div>
                                            <div className="Skill-Level">
                                                {stars.map((star, index) => (
                                                    <span key={index}>{star}</span>
                                                ))}
                                            </div>
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