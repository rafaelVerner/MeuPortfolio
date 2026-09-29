import './Skills.css';
import { skillsData } from "../../data/skills";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from 'react';

function Skills() {
    const [isSelected, setIsSelected] =  useState("");
    const lista = skillsData.find((skills) => skills.type === isSelected)
    return (
        <div className="Skills" id="Skills">
            <div className="Header">
                <h1>Habilidades</h1>
            </div>
            <div className='Containers'>
                <div className="Skills-Container">
                    {skillsData.map((skillData, index) => {
                        return (
                            <button className='Skill-Button' key={index} onClick={()=>{setIsSelected(skillData.type)}} style={isSelected === skillData.type ?  { backgroundColor: "#DEAB3C" } : {}}>
                                <h1>{skillData.type}</h1>
                            </button>
                        )
                    })}
                </div>
                <div className="List-Container">
                    {lista  && 
                        <div className='Item-List'>
                            {
                                lista.list.map((item, index) =>{
                                    const ItemIcon = item.icon
                                    const stars = [];
                                    const delay = (index * 0.3) + "s";
                                    for (let i =0; i < 5; i++){
                                        if (i < item.nivel) {
                                            stars.push(<FaStar key={i} className="filled-star" />);
                                        }else{
                                            stars.push(<FaRegStar key={i} className="empty-star" />);
                                        }
                                    }
                                    return(
                                        <div className='Item-Card' key={item.name} style={{animationDelay: delay}}>
                                            <div className='Card-Row'>
                                                <h3>{item.name}  {ItemIcon && <ItemIcon/>}</h3>
                                                <h4>{stars}</h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                   
                </div>
            </div>
        </div>
    );
}

export default Skills;