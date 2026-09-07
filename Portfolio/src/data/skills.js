import {FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaNodeJs, FaServer, FaPython, FaMobileAlt } from "react-icons/fa";

export const skillsData = [
    {   type: "Web", 
        list: [
            {name: "HTML", icon: FaHtml5, nivel: 5},
            {name: "CSS", icon: FaCss3, nivel: 5}, 
            {name: "JavaScript", icon: FaJs, nivel: 5}, 
            {name: "PHP", icon: FaPhp, nivel: 4}, 
            {name: "React", icon: FaReact, nivel: 4}, 
            {name: "Node.js", icon: FaNodeJs, nivel: 4}, 
        ]
    },
    {   type: "Data Science", 
        list: [
            {name: "Python", icon: FaPython, nivel: 4},
            {name: "Pandas", icon: FaPython, nivel: 3},
            {name: "NumPy", icon: FaPython, nivel: 3}
        ]
    },
    {   type: "Database", 
        list: [
            {name: "MongoDB", icon: FaServer, nivel: 4},
            {name: "MySQL", icon: FaServer, nivel: 4}
        ]
    },
    {   type: "Mobile", 
        list: [
            {name: "Dart", icon: FaMobileAlt, nivel: 4},
            {name: "Flutter", icon: FaMobileAlt, nivel: 4}
        ]
    },
]