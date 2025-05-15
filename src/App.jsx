import { Typewriter } from 'react-simple-typewriter';
import './App.css'

function App() {
  const projects = [
    { title: "Project 1", tech: "Description of project 1", link: "https://github.com/defryd/catsApp.git", img: "/src/assets/cats.png" },
    { title: "Project 2", tech: "Description of project 2", link: "#" },
    { title: "Project 3", tech: "Description of project 3", link: "#" },
    { title: "Project 4", tech: "Description of project 4", link: "#" },
  ];

  const techStack = {
    title: "Tecnologías",
    items: [
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
    ]
  }

  const experences = [
    { company: "WIEDII SAS", role: "Analista de desarrollo", duration: "feb. 2024 - actualidad · 1 año 4 meses" },
    { company: "Autónomo", role: "Freelance Programmer", duration: "feb. 2022 - ene. 2024 · 2 años" },
    { company: "Alcaldía de Cúcuta · Contrato temporal", role: "Desarrollador de front-end", duration: "nov. 2021 - ene. 2022 · 3 meses" },
  ];

  const education = [
    { institution: "Universidad Francisco de Paula Santander", degree: "Grado en Ingeniería", duration: "ene. 2016 - dic. 2023" },
    { institution: "Institution 2", degree: "Degree 2", duration: "Duration 2" },
    { institution: "Institution 3", degree: "Degree 3", duration: "Duration 3" },
  ];

  const certifications = [
    { name: "React Native CLI: Aplicaciones nativas para IOS y Android", institution: "DevTalles", date: "feb. 2025", url: "https://cursos.devtalles.com/certificates/ogrxcs26gv", aptitudes: "React Native · TypeScript" },
    { name: "Bootcamp Programación", institution: "Asoandes", date: "dic. 2024", url: "https://cursos.devtalles.com/certificates/ogrxcs26gv", aptitudes: "" },
    { name: "TypeScript: Tu completa guía y manual de mano.", institution: "DevTalles", date: "sept. 2024", url: "https://cursos.devtalles.com/certificates/egwo9zrmga", aptitudes: "" },
    { name: "Introduction to JavaScript", institution: "Sololearn", date: "ene. 2024", url: "https://www.sololearn.com/certificates/CC-7VO07T8K", aptitudes: "" },
    { name: "Universidad JavaScript - De Cero a Experto JavaScript!", institution: "Udemy", date: "ene. 2024", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0d4161ee-b3e3-4ddb-9f7c-bdf3b94c62cf.pdf", aptitudes: "" },
    { name: "Curso de Google Hacking || Dorks Comandos para Hackear", institution: "Udemy", date: "dic. 2023", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9eb69ff3-262a-4629-beb0-53de8da057f7.pdf", aptitudes: "" },

    { name: "CCNA", institution: "Cisco", date: "Expedición sept. 2023 · Vencimiento: sept. 2026", url: "https://www.credly.com/badges/1f8a1f7c-6998-4adc-82bc-00a3def64b25/linked_in_profile", aptitudes: "" },
    { name: "CCNA: Enterprise Networking, Security, and Automation", institution: "Cisco", date: "ago. 2023", url: "https://www.credly.com/badges/490be8d3-7288-41c4-8999-9aed41c2ab13/linked_in_profile", aptitudes: "" },
    { name: "CCNA: Switching, Routing, and Wireless Essentials", institution: "Cisco", date: "jun. 2023", url: "https://www.credly.com/badges/57cc174c-83eb-478a-a6a3-f90b479b1b80/linked_in_profile", aptitudes: "" },
    { name: "CCNA: Introduction to Networks", institution: "Cisco", date: "feb. 2023", url: "https://www.credly.com/badges/b1934a16-ca97-4969-971f-3066b6d71d0c/linked_in_profile", aptitudes: "" },


    { name: "Curso de Responsive Design: Maquetación Mobile First", institution: "Platzi", date: "sept. 2022", url: "https://platzi.com/p/Defryd/curso/2030-mobile-first/diploma/detalle/", aptitudes: "" },
    { name: "Curso Gratuito Ethical Hacking | Red Team", institution: "HACKERMENTOR CIBERSEGURIDAD S.A.S.", date: "jun. 2022", url: "", aptitudes: "" },
    { name: "Curso de Inglés Básico A1: Tus Primeras Conversaciones", institution: "Platzi", date: "feb. 2022", url: "https://platzi.com/p/Defryd/curso/1945-ingles-principiantes/diploma/detalle/", aptitudes: "" },
    { name: "Curso Definitivo de HTML y CSS", institution: "Platzi", date: "ene. 2022", url: "https://platzi.com/p/Defryd/curso/2008-html-css/diploma/detalle/", aptitudes: "" },
    { name: "Curso Práctico de HTML y CSS", institution: "Platzi", date: "ene. 2022", url: "https://platzi.com/p/Defryd/curso/1758-html-practico/diploma/detalle/", aptitudes: "" },
    { name: "Curso de Computación Básica", institution: "Platzi", date: "dic. 2021", url: "https://platzi.com/p/Defryd/curso/1741-computacion-basica-2019/diploma/detalle/", aptitudes: "" },
    { name: "[Appsco] Curso profesional de Git y GitHub 2017", institution: "Platzi", date: "sept. 2020", url: "https://platzi.com/p/freddysebastianchiavera/curso/1194-git-appsco-2017/diploma/detalle/", aptitudes: "" },
  ];


  return (
    <>
      <nav className='bg-black fixed top-0 left-0 w-full flex justify-end items-center px-8 shadow-lg z-50'>
        <ul className='flex space-x-4'>
          <li><a href="#about" className='text-matrix-green hover:text-matrix-other'>About</a></li>
          <li><a href="#experience" className='text-matrix-green hover:text-matrix-other'>Experience</a></li>
          <li><a href="#skills" className='text-matrix-green hover:text-matrix-other'>Skills</a></li>
          <li><a href="#projects" className='text-matrix-green hover:text-matrix-other'>Projects</a></li>
          <li><a href="#education" className='text-matrix-green hover:text-matrix-other'>Education</a></li>
          <li><a href="#contact" className='text-matrix-green hover:text-matrix-other'>Contact</a></li>
        </ul>
      </nav>

      <div className='min-h-screen bg-black text-matrix-green p-8 space-y-10 '>
        <header className='text-center py-20 bg-gradient-to-b from-matrix-darkgreen to-black rounded-xl shadow-xl'>
          <h1 className='text-6xl font-extrabold mb-6 pb-2 bg-gradient-to-r from-matrix-green via-matrix-neon to-matrix-other text-transparent bg-clip-text'>
            <Typewriter words={["Hi, I'm Freddy Chia",
              "Systems Engineer",
              "Full Stack Developer"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={1}
            />
            <span className='border-r-4 border-matrix-other ml-1 animate-pulse'>&nbsp;</span>
          </h1>
          <p className='text-xl text-gray-300 mx-auto'>
            I am a passionate developer with a love for creating beautiful and functional web applications.
          </p>
        </header>

        <section id='about' className='pt-6'>
          <h2 className='text-3xl font-semibold mb-4 text-center'>About Me</h2>
          <div className='flex flex-col md:flex-8 items-center gap-2 px-4'>
            <img src="../src/assets/MyPhoto.jpeg" alt="My Photo" className='w-60 h-60 rounded-full object-cover border-4 border-gray-700 shadow-lg' />
            <p className='text-lg text-gray-300 max-w-2xl text-center'>
              I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I love to learn new technologies and improve my skills.
            </p>
          </div>
        </section>

        <section id='skills' className='pt-6'>
          <h2 className='text-3xl font-semibold mb-6 text-center'>Skills</h2>
          <div className='flex flex-wrap gap-1 justify-center'>
            {
              techStack.items.map((tech, index) => (
                <img className='h-7 m-1' key={index} src={tech.url} alt={tech.name} />
              ))
            }
          </div>
        </section>

        <section id='experience' className='pt-6'>
          <h2 className='text-3xl font-semibold mb-6 text-center'>Experience</h2>
          <div className='space-y-4'>
            {
              experences.map((experience, index) => (
                <div key={index} className='bg-gray-800 p-4 rounded-lg shadow-md'>
                  <h3 className='text-xl font-semibold'>{experience.company}</h3>
                  <p className='text-gray-400'>{experience.role}</p>
                  <p className='text-gray-300'>{experience.duration}</p>
                </div>
              ))
            }
          </div>
        </section>



        <section id='projects' className='pt-6'>
          <h2 className='text-3xl font-semibold mb-6 text-center'>Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              projects.map((project, index) => (
                <div key={index} className='bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
                  <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                  <img src={project.img} alt={project.title} className='w-full h-40 object-cover rounded-lg mb-4' />
                  <p className='text-gray-400 mb-4'>{project.tech}</p>
                  <a href={project.link} className='text-blue-400 hover:underline'>View Project</a>
                </div>
              ))
            }
          </div>
        </section>

        <section id='education' className='pt-6'>
          <h2 className='text-3xl font-semibold mb-6 text-center'>Education</h2>
          <div className='space-y-4'>
            {
              education.map((education, index) => (
                <div key={index} className='bg-gray-800 p-4 rounded-lg shadow-md'>
                  <h3 className='text-xl font-semibold'>{education.institution}</h3>
                  <p className='text-gray-400'>{education.degree}</p>
                  <p className='text-gray-300'>{education.duration}</p>
                </div>
              ))
            }
          </div>
        </section>

        <section id='certifications' className='pt-6'>
          <h2 className='text-3xl font-semibold mb-6 text-center'>Certifications</h2>
          <div className='space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              certifications.map((certification, index) => (
                <div key={index} className='bg-gray-800 p-4 rounded-lg shadow-md'>
                  <h3 className='text-xl font-semibold'>{certification.name}</h3>
                  <p className='text-gray-400'>{certification.institution}</p>
                  <p className='text-gray-300'>{certification.date}</p>
                  <p className='text-gray-300'>{certification.aptitudes}</p>
                  <a href={certification.url} className='text-blue-400 hover:underline'>View Certification</a>
                </div>
              ))
            }
          </div>
        </section>

        <section id='contact' className='pt-6'>
          <h2 className='text-3xl font-semibold mb-6 text-center'>Contact Me</h2>
          <p className='text-lg text-gray-300 text-center mb-4'>Feel free to reach out to me on my social media:</p>
          <div className='flex justify-center space-x-4'>
            <a href="" className='text-blue-400 hover:underline'>LinkedIn</a>
            <a href="" className='text-blue-400 hover:underline'>GitHub</a>
          </div>
          {/* <form className='mt-6 max-w-md mx-auto'>
          <input type="text" placeholder="Your Name" className='w-full p-2 mb-4 bg-gray-800 rounded-lg' />
          <input type="email" placeholder="Your Email" className='w-full p-2 mb-4 bg-gray-800 rounded-lg' />
          <textarea placeholder="Your Message" className='w-full p-2 mb-4 bg-gray-800 rounded-lg' rows="4"></textarea>
          <button type="submit" className='bg-matrix-green text-black py-2 px-4 rounded-lg hover:bg-matrix-other transition duration-300'>Send Message</button>
        </form> */}
        </section>

        <footer className='text-center py-8 bg-gradient-to-b from-black to-matrix-darkgreen rounded-xl shadow-xl'>
          <p className='text-gray-400'>© 2025 Freddy. All rights reserved.</p>
        </footer>

      </div>
    </>
  )
}

export default App
