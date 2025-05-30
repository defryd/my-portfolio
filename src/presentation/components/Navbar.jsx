import { useState } from 'react';

const Navbar = ({ sections }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-black fixed top-0 left-0 w-full z-50 shadow-lg">
            <div className="flex justify-end items-center px-6 py-2 md:px-8">

                <button
                    onClick={toggleMenu}
                    className="text-matrix-green text-3xl md:hidden"
                    aria-label="Toggle menu"
                >
                    <ion-icon name="menu-outline"></ion-icon>
                </button>

                <ul className="hidden md:flex space-x-6">
                    {sections.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className="text-matrix-green capitalize transition-colors duration-300 hover:text-matrix-other"
                            >
                                {id}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {isOpen && (
                <ul className="flex flex-col md:hidden bg-black px-6 pb-4 space-y-4">
                    {sections.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className="block text-matrix-green capitalize transition-colors duration-300 hover:text-matrix-other"
                                onClick={() => setIsOpen(false)}
                            >
                                {id}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
