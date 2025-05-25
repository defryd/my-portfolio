import InfoCard from './InfoCard';

const InfoSection = ({ id, title, items, getProps }) => {
    
    return (
        <section id={id} className='scroll-mt-8 pt-6'>
            <h2 className='text-3xl font-semibold mb-4 text-center'>{title}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {items.map((item, index) => (
                    <InfoCard key={index} {...getProps(item)} />
                ))}
            </div>
        </section>
    );
};

export default InfoSection;