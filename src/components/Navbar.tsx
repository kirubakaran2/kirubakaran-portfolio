import React, { useState } from 'react'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='absolute inset-0 z-50 w-full'>
            <div className="container flex justify-between items-center py-8 px-4 md:px-8 lg:px-16">
                <a href="/" className="font-semibold font-heading text-3xl text-white">👾</a>

                {/* Hamburger Menu Button for Mobile */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 items-center font-body text-white text-lg">
                    <li > <a href="#about">About</a></li>
                    <li > <a href="#projects">Projects</a></li>
                    <li> <a href="#expertise">Expertise</a></li>
                    <li>
                        <a
                            href="#contact"
                            className="text-orange px-10 py-2 border-2 bg-transparent rounded-full font-semibold hover:bg-black hover:text-white transition flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-2xl">comic_bubble</span>
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="md:hidden fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40">
                        <div className="absolute top-8 right-8">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white text-3xl focus:outline-none"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
                            <a href="#about" className="text-white text-2xl font-body hover:text-orange transition" onClick={() => setIsOpen(false)}>About</a>
                            <a href="#projects" className="text-white text-2xl font-body hover:text-orange transition" onClick={() => setIsOpen(false)}>Projects</a>
                            <a href="#expertise" className="text-white text-2xl font-body hover:text-orange transition" onClick={() => setIsOpen(false)}>Expertise</a>
                            <a
                                href="#contact"
                                className="text-orange px-6 py-3 border-2 bg-transparent rounded-full font-semibold hover:bg-black hover:text-white transition flex items-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="material-symbols-outlined text-2xl">comic_bubble</span>
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
