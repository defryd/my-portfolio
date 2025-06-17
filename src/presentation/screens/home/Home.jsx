//hooks
import { Typewriter } from 'react-simple-typewriter';
//components
import InfoSection from '../../components/InfoSection.jsx';
import { FormSection } from '../../components/FormSection.jsx';
import Navbar from '../../components/Navbar.jsx';
import { Text } from '../../components/ui/Text.jsx';
//data
import data from '../../../data/data.js';


function Home() {

  const { techStack, experience, projects, education, certifications, Ids, MyPhoto } = data;

  return (
    <main className='min-h-screen w-full bg-black text-matrix-green p-4  space-y-10 overflow-x-hidden'>
      <Navbar sections={Ids} />

      <div className='min-h-screen bg-black text-matrix-green p-2 md:p-8 space-y-5 '>

        <header className='text-center py-15 bg-gradient-to-b from-matrix-darkgreen to-black rounded-xl shadow-xl'>
          <div className="h-50 md:h-30">
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
          </div>
          <Text variant="p" color="secondary" align="center" className="text-xl mx-auto">
            Soy un desarrollador comprometido en la creación de aplicaciones funcionales y visualmente atractivas.
          </Text>
        </header>

        <section id='about' className='scroll-mt-8 pt-6'>
          <Text as="h2" variant="h2" align="center" className='text-matrix-green mb-4'>
            About Me
          </Text>
          <div className='flex flex-col md:flex-8 items-center gap-2 px-4'>
            <img src={MyPhoto} alt="My Photo" className='w-60 h-60 rounded-full object-cover border-4 border-gray-700 shadow-lg' />
            <Text variant="p" color="secondary" align="center" className="text-lg max-w-2xl">
              Soy desarrollador Full Stack con una gran pasión por crear aplicaciones web dinámicas, atractivas y funcionales. Me gusta trabajar tanto en el Front-end como en el Back-end, y disfruto aprendiendo nuevas tecnologías que me permitan seguir mejorando día a día.
            </Text>
          </div>
        </section>

        <section id='skills' className='scroll-mt-8 pt-6'>
          <Text variant='h2' align='center' className='font-semibold mb-4 text-matrix-green'>
            Skills
          </Text>
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
            link: cert.url
          })}
        />

        <FormSection />

        <footer className='text-center py-8 bg-gradient-to-b from-black to-matrix-darkgreen rounded-xl shadow-xl'>
          <Text variant='p' align='center' className='text-gray-400'>
            © 2025 Freddy. All rights reserved.
          </Text>
        </footer>

      </div>
    </main>
  )
}

export default Home
