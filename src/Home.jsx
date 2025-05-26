//hooks
import { Typewriter } from 'react-simple-typewriter';
//components
import InfoSection from './presentation/components/InfoSection.jsx';
import { FormSection } from './presentation/components/FormSection.jsx';
//data
import data from './data/data.js';

function App() {

  const { techStack, experience, projects, education, certifications, Ids } = data;

  return (
    <>
      <nav
        className="bg-black fixed top-0 left-0 w-full flex justify-end items-center px-8 py-4 shadow-lg z-50"
        role="navigation"
        aria-label="Main Navigation"
      >
        <ul className="flex space-x-6">
          {Ids.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="text-matrix-green capitalize transition-colors duration-300 hover:text-matrix-other">
                {id}
              </a>
            </li>
          ))}
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
            I am a passionate developer with a love for creating beautiful and functional applications.
          </p>
        </header>

        <section  id='about' className='scroll-mt-8 pt-6'>
          <h2 className='text-3xl font-semibold mb-4 text-center'>About Me</h2>
          <div className='flex flex-col md:flex-8 items-center gap-2 px-4'>
            <img src="../src/assets/MyPhoto.jpeg" alt="My Photo" className='w-60 h-60 rounded-full object-cover border-4 border-gray-700 shadow-lg' />
            <p className='text-lg text-gray-300 max-w-2xl text-center'>
              I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I love to learn new technologies and improve my skills.
            </p>
          </div>
        </section>

        <section id='skills' className='scroll-mt-8 pt-6'>
          <h2 className='text-3xl font-semibold mb-4 text-center'>Skills</h2>
          <div className='flex flex-wrap gap-1 justify-center'>
            {
              techStack.map((tech, index) => (
                <img className='h-7 m-1' key={index} src={tech.url} alt={tech.name} />
              ))
            }
          </div>
        </section>

        <InfoSection
          id="experience"
          title="Experience"
          items={experience}
          getProps={(exp) => ({
            title: exp.company,
            subtitle: exp.role,
            extra: exp.duration,
            description: exp.description,
          })}
        />

        <InfoSection
          id="projects"
          title="Projects"
          items={projects}
          getProps={(project) => ({
            idProject: project.id,
            title: project.title,
            image: project.img,
            extra: project.tech,
            link: project.link
          })}
        />

        <InfoSection
          id={'education'}
          title={'Education'}
          items={education}
          getProps={(edu) => ({
            title: edu.institution,
            subtitle: edu.degree,
            extra: edu.duration
          })}
        />

        <InfoSection
          id={'certifications'}
          title={'Certifications'}
          items={certifications}
          getProps={(cert) => ({
            title: cert.name,
            subtitle: cert.institution,
            extra: cert.date,
            description: cert.aptitudes,
            link: cert.url
          })}
        />

        <FormSection />

        <footer className='text-center py-8 bg-gradient-to-b from-black to-matrix-darkgreen rounded-xl shadow-xl'>
          <p className='text-gray-400'>© 2025 Freddy. All rights reserved.</p>
        </footer>

      </div>
    </>
  )
}

export default App
