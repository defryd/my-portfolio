import { useParams } from 'react-router-dom';
import data from './../../data/data.js';


const ProjectPage = () => {
    const { id } = useParams();
    const { projects } = data;
    const project = projects.find(p => p.id === id);
    console.log(project)
    // if (!project) {
    //     return <p className="text-center text-white mt-10">Proyecto no encontrado.</p>;
    // }

    return (
        <div className="min-h-screen bg-black text-matrix-green p-5">
            <div className="p-6 text-white max-w-6xl">
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

                <div className="w-full mb-4">
                    <img
                        src={project.img}
                        alt={project.title}
                        className="w-3xl  h-auto rounded-md max-h-[80vh] object-contain"
                    />
                </div>
            
                <p className="mb-2">{project.tech}</p>
                <a href={project.link} className='text-blue-400 hover:underline'>View Project in GitHub</a>
            </div>
        </div>
    );
};

export default ProjectPage;
