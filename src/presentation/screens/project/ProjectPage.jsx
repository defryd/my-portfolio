import { useParams } from 'react-router-dom';
import data from '../../../data/data.js';
import { useState } from 'react';

const ProjectPage = () => {
    const { id } = useParams();
    const { projects } = data;
    const project = projects.find(p => p.id === id);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!project) {
        return <p className="text-center text-white mt-10">Proyecto no encontrado.</p>;
    }

    const images = project.imgs;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="min-h-screen bg-black text-matrix-green p-5">
            <div className="p-6 text-white max-w-4xl mx-auto">
                <h1 className="text-matrix-green text-3xl font-bold mb-4">{project.title}</h1>

                {/* Carrusel */}
                <div className="bg-gray-800 relative w-full max-h-[70vh] flex justify-center items-center overflow-hidden rounded-md shadow-md mb-6">
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 text-white bg-black bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full z-10"
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    <img
                        src={images[currentIndex]}
                        alt={`project-${currentIndex}`}
                        className="object-contain w-full max-h-[70vh] transition-all duration-500"
                    />

                    <button
                        onClick={handleNext}
                        className="absolute right-2 text-white bg-black bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full z-10"
                        aria-label="Next image"
                    >
                        ›
                    </button>
                </div>

                {/* Indicadores */}
                <div className="flex justify-center space-x-2 mb-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-matrix-green' : 'bg-gray-600'}`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>

                <p className="mb-2">{project.tech}</p>
                <p className="mb-4 text-gray-300">{project.description}</p>

                <a href={project.link} className="text-blue-400 hover:underline">
                    View Project in GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectPage;
