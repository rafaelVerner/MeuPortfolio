import image from '../assets/Desenvolvendo.png';

export const ProjectsData = [
    {
        title: "Sistema de presença",
        description: "Sistema de gerenciamento de presença de alunos em sala de aula. O sistema permite o cadastro dos alunos e a marcação da presença do aluno na aula. Além disso, o sistema conta com a atualização do cadastro do aluno, a exclusão do cadastro e a exibição dos alunos e presenças registradas.",
        tools: ["JavaScritp", "NodeJs","React"],
        image: image,
        Links: [{name: "GitHub", url: "https://github.com/rafaelVerner/Sistema_Presenca"}]
    },
    {
        title: "Gerenciador de Excel",
        description: "Sistema desenvolvido em Python com o objetivo de gerenciar multiplas planilhas em excel de forma mais prática. O sistema permite a leitura de multiplas planilhas, a atualização de dados, a exclusão de dados e a exportação dos dados para uma nova planilha. Além disso, o sistema permite a criação do PDF com os dados presentes na planilha e com uma logo personalizada.",
        tools: ["Python", "Pandas","Qt", "OpenPyXL"],
        image: image,
        Links: [{name: "GitHub", url: "https://github.com/rafaelVerner/SistemaExcel"}]
    },
];