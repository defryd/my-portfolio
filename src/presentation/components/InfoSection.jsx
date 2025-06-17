//libraries
import { useState } from 'react';
//components
import InfoCard from './InfoCard';
import { Text } from './ui/Text.jsx';

const InfoSection = ({ id, title, items, getProps }) => {
    const [showAll, setShowAll] = useState(false);

    const getGridClass = () => {
        switch (id) {
            case 'education':
                return 'grid grid-cols-1 md:grid-cols-2 gap-4';
            default:
                return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
        }
    };

    const visibleItems = showAll ? items : items.slice(0, 6);
    const hasMore = items.length > 6;

    return (
        <section id={id} className="scroll-mt-8 pt-6">
            <Text variant='h2' align='center' className='font-semibold mb-4 text-matrix-green'>
                {title}
            </Text>

            <div className={getGridClass()}>
                {visibleItems.map((item, index) => (
                    <InfoCard key={index} {...getProps(item)} sectionId={id} />
                ))}
            </div>

            {hasMore && (
                <div className="mt-4 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-indigo-400 hover:underline font-medium transition-colors"
                    >
                        {showAll ? 'Ver menos...' : 'Ver más...'}
                    </button>
                </div>
            )}
        </section>
    );
};

export default InfoSection;
