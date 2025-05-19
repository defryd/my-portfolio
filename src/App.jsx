//hooks
import { Typewriter } from 'react-simple-typewriter';
//components
import InfoSection from './presentation/components/InfoSection';
//data
import data from './data/data.js';

function App() {

  const { projects, techStack, experience, education, certifications, Ids } = data;

  return (
    <>
      <nav className='bg-black fixed top-0 left-0 w-full flex justify-end items-center px-8 shadow-lg z-50'>
        <ul className='flex space-x-4'>
          {
            Ids.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className='text-matrix-green hover:text-matrix-other'>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
              </li>)
            )}
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
          <h2 className='text-2xl font-semibold mb-4 text-center'>Skills</h2>
          <div className='flex flex-wrap gap-1 justify-center'>
            {
              techStack.items.map((tech, index) => (
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
            extra: exp.duration
          })}
        />
        <InfoSection
          id="projects"
          title="Projects"
          items={projects}
          getProps={(project) => ({
            title: project.title,
            image: project.img,
            tech: project.tech,
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
