
const InfoCard = ({ title, subtitle, extra, description, link, image, sectionId }) => {

    if (sectionId === 'certifications') {
        return (
            <div className='bg-gray-800 p-4 rounded-md shadow-sm text-sm hover:shadow-md transition duration-300'>
                <h3 className='text-lg font-semibold mb-2 text-matrix-green'>{title}</h3>
                <div className='flex flex-wrap justify-between gap-2'>
                    {subtitle && <p className='text-gray-400 font-semibold'>{subtitle}</p>}
                    {description && <p className='text-gray-300'>{description}</p>}
                    {extra && <p className='text-gray-300'>{extra}</p>}
                    {link && (
                        <a href={link} className='text-blue-400 hover:underline'>
                            View
                        </a>
                    )}
                </div>
            </div>
        );
    }

    if (sectionId === 'projects') {
        return (
            <div className='bg-gray-800 p-4 rounded-md shadow-sm text-sm hover:shadow-md transition duration-300'>
                <h3 className='text-lg font-semibold mb-1'>{title}</h3>
                {image && <img src={image} alt={title} className='w-full h-32 object-cover rounded-md mb-2' />}
                {extra && <p className='text-gray-300 mb-0.5'>{extra}</p>}
                {link && (
                    <a href={link} className='text-blue-400 hover:underline'>
                        View Project
                    </a>
                )}
            </div>
        );
    }

    // Default
    return (
        <div className='bg-gray-800 p-3 rounded-md shadow-sm text-sm hover:shadow-md transition duration-300'>
            {title && <h3 className='text-lg font-semibold mb-1'>{title}</h3>}
            {subtitle && <p className='text-gray-300 mb-0.5 font-semibold'>{subtitle}</p>}
            {description && <p className='text-gray-400 mb-1'>{description}</p>}
            {image && <img src={image} alt={title} className='w-full h-32 object-cover rounded-md mb-2' />}
            {extra && <p className='text-gray-300 mb-0.5'>{extra}</p>}
            {link && <a href={link} className='text-blue-400 hover:underline'>View</a>}
        </div>
    );
};

export default InfoCard;