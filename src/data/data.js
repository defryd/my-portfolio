import catsImage from '../assets/cats.png';
import cat01 from '../assets/catsProject/cats-01.png';
import cat02 from '../assets/catsProject/cats-02.png';
import cat03 from '../assets/catsProject/cats-03.png';
import cat04 from '../assets/catsProject/cats-04.png';
import cat05 from '../assets/catsProject/cats-05.png';

import Perfil from '../assets/MyPhoto.jpeg';

const MyPhoto = Perfil;

const Ids = [ 'about', 'skills','experience', 'projects', 'education', 'certifications', 'contact' ];

const projects = [
    {
        id: "cats-app",
        title: "Cats App",
        tech: "Proyecto de React Native con CLI para visualizar razas de gatos aleatorios.",
        description: "Desarrollado con React Native CLI, este proyecto permite a los usuarios explorar diferentes razas de gatos, mostrando su información correspondiente. Utiliza la API de TheCatAPI para obtener datos sobre las razas y sus imágenes.",
        link: "https://github.com/defryd/catsApp.git",
        img: catsImage,
        imgs:[cat01, cat02, cat03, cat04, cat05],
    },
    // { title: "Project 2", tech: "Description of project 2", link: "#" },
    // { title: "Project 3", tech: "Description of project 3", link: "#" },
    // { title: "Project 4", tech: "Description of project 4", link: "#" },
];

const techStack = [
        { name: "React", url: "https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" },
        { name: "React Native", url: "https://img.shields.io/badge/-React Native-319ff0?style=flat-square&logo=react&logoColor=white" },
        { name: "Redux", url: "https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white" },
        { name: "Zustand", url: "https://img.shields.io/badge/-Zustand-752714?style=flat-square" },
        { name: "NPM", url: "https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" },
        { name: "Tailwind CSS", url: "https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white" },
        { name: "GitHub Actions", url: "https://img.shields.io/badge/-Github_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white" },
        { name: "Git", url: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" },
        { name: "Gitflow", url: "https://img.shields.io/badge/-Gitflow-F05032?style=flat-square&logo=git&logoColor=white" },
        { name: "HTML5", url: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" },
        { name: "CSS", url: "https://img.shields.io/badge/-CSS-663399?style=flat-square&logo=css&logoColor=white" },
        { name: "Bootstrap", url: "https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white" },
        { name: "JavaScript", url: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" },
        { name: "TypeScript", url: "https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" },
        { name: "Go", url: "https://img.shields.io/badge/-Go-00ADD8?style=flat-square&logo=go&logoColor=white" },
        { name: "PHP", url: "https://img.shields.io/badge/-php-777BB4?style=flat-square&logo=php&logoColor=white" },
        { name: "Java", url: "https://img.shields.io/badge/-Java-e91d1d?style=flat-square" },
        { name: "Node.js", url: "https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" },
        { name: "MongoDB", url: "https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" },
        { name: "SQLite", url: "https://img.shields.io/badge/-SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white" },
        { name: "MySQL", url: "https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" },
    ];

const experience = [
    { company: "WIEDII US", role: "Full Stack Developer", duration: "feb. 2024 - actualidad · 1 año 5 meses", description: "Participación activa en el desarrollo de aplicaciones web y móviles, incluyendo la implementación de nuevas funcionalidades, soporte y mantenimiento de proyectos existentes. Trabajo en el frontend utilizando React y React Native, y en el backend con tecnologías como Node.js, Go y PHP." },
    { company: "Autónomo", role: "Freelance Programmer", duration: "feb. 2022 - ene. 2024 · 2 años", description: "Mientras finalizaba la carrera de Ingeniería de Sistemas, trabajé como desarrollador freelance, colaborando en proyectos para clientes locales. Me enfoqué principalmente en el desarrollo frontend con React, realizando correcciones y desarrollando funcionalidades básicas en aplicaciones web." },
    { company: "Alcaldía de Cúcuta · Contrato temporal", role: "Front-end Developer", duration: "nov. 2021 - ene. 2022 · 3 meses", description: "Participé en el desarrollo del módulo de gestión de procesos para atención al cliente dentro de una aplicación web, enfocándome en el frontend con HTML, CSS y JavaScript. También realicé la integración del módulo en una plataforma basada en WordPress, asegurando compatibilidad y diseño responsivo." },
];

const education = [
    { institution: "Universidad Francisco de Paula Santander", degree: "Grado en Ingeniería de Sistemas", duration: "dic. 2023" },
    { institution: "CISCO", degree: "Cisco Certified Network Associate", duration: "dic. 2023" },
    { institution: "Colegio Nuesra Señora de Fatima", degree: "Bachiller Tecnico en ", duration: "dic. 2015" },
    { institution: "SENA", degree: "Técnico en Mantenimiento de Equipos de Computo ", duration: "dic. 2015" },
];

const certifications = [
    { name: "React Native CLI: Aplicaciones nativas para IOS y Android", institution: "DevTalles", date: "feb. 2025", url: "https://cursos.devtalles.com/certificates/ogrxcs26gv"},
    { name: "Bootcamp Programación", institution: "Asoandes", date: "dic. 2024", url: "https://cursos.devtalles.com/certificates/ogrxcs26gv" },
    { name: "TypeScript: Tu completa guía y manual de mano.", institution: "DevTalles", date: "sept. 2024", url: "https://cursos.devtalles.com/certificates/egwo9zrmga"},
    { name: "Introduction to JavaScript", institution: "SoloLearn", date: "ene. 2024", url: "https://www.sololearn.com/certificates/CC-7VO07T8K" },
    { name: "Universidad JavaScript - De Cero a Experto JavaScript!", institution: "Udemy", date: "ene. 2024", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0d4161ee-b3e3-4ddb-9f7c-bdf3b94c62cf.pdf" },
    { name: "Curso de Google Hacking || Dorks Comandos para Hackear", institution: "Udemy", date: "dic. 2023", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9eb69ff3-262a-4629-beb0-53de8da057f7.pdf" },

    { name: "CCNA", institution: "Cisco", date: "Exp sept. 2023 · Ven: sept. 2026", url: "https://www.credly.com/badges/1f8a1f7c-6998-4adc-82bc-00a3def64b25/linked_in_profile" },
    { name: "CCNA: Enterprise Networking, Security, and Automation", institution: "Cisco", date: "ago. 2023", url: "https://www.credly.com/badges/490be8d3-7288-41c4-8999-9aed41c2ab13/linked_in_profile" },
    { name: "CCNA: Switching, Routing, and Wireless Essentials", institution: "Cisco", date: "jun. 2023", url: "https://www.credly.com/badges/57cc174c-83eb-478a-a6a3-f90b479b1b80/linked_in_profile" },
    { name: "CCNA: Introduction to Networks", institution: "Cisco", date: "feb. 2023", url: "https://www.credly.com/badges/b1934a16-ca97-4969-971f-3066b6d71d0c/linked_in_profile" },

    { name: "Curso de Responsive Design: Maquetación Mobile First", institution: "Platzi", date: "sept. 2022", url: "https://platzi.com/p/Defryd/curso/2030-mobile-first/diploma/detalle/"  },
    { name: "Curso Gratuito Ethical Hacking | Red Team", institution: "HACKERMENTOR CIBERSEGURIDAD S.A.S.", date: "jun. 2022", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9eb69ff3-262a-4629-beb0-53de8da057f7.pdf" },
    { name: "Curso de Inglés Básico A1: Tus Primeras Conversaciones", institution: "Platzi", date: "feb. 2022", url: "https://platzi.com/p/Defryd/curso/1945-ingles-principiantes/diploma/detalle/" },
    { name: "Curso Definitivo de HTML y CSS", institution: "Platzi", date: "ene. 2022", url: "https://platzi.com/p/Defryd/curso/2008-html-css/diploma/detalle/" },
    { name: "Curso Práctico de HTML y CSS", institution: "Platzi", date: "ene. 2022", url: "https://platzi.com/p/Defryd/curso/1758-html-practico/diploma/detalle/" },
    { name: "Curso de Computación Básica", institution: "Platzi", date: "dic. 2021", url: "https://platzi.com/p/Defryd/curso/1741-computacion-basica-2019/diploma/detalle/" },
    { name: "[Appsco] Curso profesional de Git y GitHub 2017", institution: "Platzi", date: "sept. 2020", url: "https://platzi.com/p/freddysebastianchiavera/curso/1194-git-appsco-2017/diploma/detalle/" },
];

export default {
    Ids,
    projects,
    techStack,
    experience,
    education,
    certifications,
    MyPhoto
}