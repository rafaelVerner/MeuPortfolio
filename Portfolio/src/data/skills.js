import {FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaNodeJs, FaServer, FaPython } from "react-icons/fa";

export const skillsData = [
    {   type: "Web Development", 
        list: [
            {name: "HTML", icon: FaHtml5, nivel: 5},
            {name: "CSS", icon: FaCss3, nivel: 5}, 
            {name: "JavaScript", icon: FaJs, nivel: 5}, 
            {name: "PHP", icon: FaPhp, nivel: 4}, 
            {name: "React", icon: FaReact, nivel: 3}, 
            {name: "Node.js", icon: FaNodeJs, nivel: 3}, 
            {name: "Express.js", icon: FaServer, nivel: 3}
        ]
    },
    {   type: "Data Science", 
        list: [
            {name: "Python", icon: FaPython, nivel: 4},
            {name: "Pandas", icon: null, nivel: 3},
            {name: "NumPy", icon: null, nivel: 3}
        ]
    },
    {   type: "Database", 
        list: [
            {name: "MongoDB", icon: null, nivel: 5},
            {name: "MySQL", icon: null, nivel: 5}
        ]
    },
    {   type: "Mobile Development", 
        list: [
            {name: "Dart", icon: null, nivel: 4},
            {name: "Flutter", icon: null, nivel: 4}
        ]
    },
]