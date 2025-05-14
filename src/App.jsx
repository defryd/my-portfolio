// import { useState, useEffect, useRef } from 'react'
import './App.css'
import { useTypewriter } from '../src/hooks/useTypewriter'

function App() {
  // const [typedText, setTypedText] = useState("");
  // const fullText = "Hi, I'm Freddy, a Full Stack Developer";
  // const isDeletingRef = useRef(false);
  // const indexRef = useRef(0);

  const projects = [
    { title: "Project 1", tech: "Description of project 1", link: "#" },
    { title: "Project 2", tech: "Description of project 2", link: "#" },
    { title: "Project 3", tech: "Description of project 3", link: "#" },
    { title: "Project 4", tech: "Description of project 4", link: "#" },
  ];

  const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML"];

  const experences = [
    { company: "Experience 1", role: "Company 1", duration: "Duration 1" },
    { company: "Experience 2", role: "Company 2", duration: "Duration 2" },
    { company: "Experience 3", role: "Company 3", duration: "Duration 3" },
  ];

  const typedText = useTypewriter({
    text: "Hi, I'm Freddy, a Full Stack Developer",
    speed: 100,
    pause: 10000,
  });

  

  // useEffect(() => {
  //   const type = () => {
  //     const currentIndex = indexRef.current;
  //     const isDeleting = isDeletingRef.current;

  //     if (!isDeleting) {
  //       setTypedText(fullText.substring(0, currentIndex + 1));
  //       indexRef.current += 1;
  //       if (indexRef.current === fullText.length) {
  //         isDeletingRef.current = true;
  //       }
  //     } else {
  //       setTypedText(fullText.substring(0, currentIndex - 1));
  //       indexRef.current -= 1;
  //       if (indexRef.current === 0) {
  //         isDeletingRef.current = false;
  //       }
  //     }
  //   }

  //   const typingInterval = setInterval(() => {
  //     type();
  //   }, 100);

  //   return () => {
  //     clearInterval(typingInterval);
  //   }
  // }, [])


  return (
    <div className='min-h-screen bg-black text-matrix-green p-8 space-y-16 '>
      <header className='text-center py-20 bg-gradient-to-b from-matrix-darkgreen to-black rounded-xl shadow-xl'>
        <h1 className='text-6xl font-extrabold mb-6 bg-gradient-to-r from-matrix-green via-matrix-neon to-matrix-other text-transparent bg-clip-text'>
          {typedText}
          <span className='border-r-4 border-white ml-1 animate-pulse'>&nbsp;</span>
        </h1>
        <p className='text-xl text-gray-300 max-wxl mx-auto'>I am a passionate developer with a love for creating beautiful and functional web applications.</p>
      </header>

      <section id='about'>
        <h2 className='text-3xl font-semibold mb-4 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-8 items-center gap-2 mx-w-4xl'>
          <img src="../src/assets/MyPhoto.jpeg" alt="My Photo" className='w-60 h-60 rounded-full object-cover border-4 border-gray-700 shadow-lg'/>
          <p className='text-lg text-gray-300 max-w-2xl text-center'>
            I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I love to learn new technologies and improve my skills.
          </p>
        </div>
      </section>

      <section id='experience'>
        <h2 className='text-3xl font-semibold mb-6 text-center'>Experience</h2>
        <div className='space-y-4'>
          {
            experences.map((experience, index) => (
              <div key={index} className='bg-gray-700 p-4 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold'>{experience.company}</h3>
                <p className='text-gray-400'>{experience.role}</p>
                <p className='text-gray-300'>{experience.duration}</p>
              </div>
            ))
          }
        </div>
      </section>

      <section id='skills'>
        <h2 className='text-3xl font-semibold mb-6 text-center'>Skills</h2>
        <div className='flex flex-wrap gap-4 justify-center'>
          {
            skills.map((skill, index) => (
              <span key={index} className='bg-gray-800 text-gray-300 px-4 py-2 rounded-full shadow-md'>
                {skill}
              </span>
            ))
          }
        </div>
      </section>

      <section id='projects'>
        <h2 className='text-3xl font-semibold mb-6 text-center'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            projects.map((project, index) => (
              <div key={index} className='bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-400 mb-4'>{project.tech}</p>
                <a href={project.link} className='text-blue-400 hover:underline'>View Project</a>
              </div>
            ))
          }
        </div>
      </section>

      <footer className='text-center py-8'>
        <p className='text-gray-400'>© 2023 Freddy. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App
