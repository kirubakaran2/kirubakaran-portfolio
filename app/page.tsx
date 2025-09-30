'use client';

import { useState, useEffect } from 'react';
import Intro from "./intro";

export default function Page() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="scroll-smooth">
            {loading && <Intro />}

            {/* Navigation */}
            <nav className={`fixed top-0 w-full h-16 bg-white/90 backdrop-blur-xl z-50 flex items-center px-8 lg:px-24 border-b border-gray-200/50 ${loading ? 'hidden' : ''}`}>
                <div className="w-full max-w-7xl mx-auto flex justify-center">
                    <ul className="flex space-x-8 text-sm font-medium text-gray-700">
                        {[
                            { name: 'Home', id: 'home' },
                            { name: 'About', id: 'about' },
                            { name: 'Projects', id: 'projects' },
                            { name: 'Expertise', id: 'expertise' },
                            { name: 'Contact', id: 'contact' }
                        ].map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="hover:text-blue-600 transition-colors font-semibold"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

{/* Hero Section */}
<section
    id="home"
    data-section-name="home"
    data-scroll
    className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${loading ? 'hidden' : ''}`}
>
    {/* Animated Gradient Background */}
    <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
                <div className="space-y-6">
                    {/* Badge */}
                    <div
                        data-scroll
                        data-scroll-speed="1.2"
                        data-scroll-delay="0.1"
                        className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full shadow-lg"
                    >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700">Available</span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1
                            data-scroll
                            data-scroll-speed="1"
                            data-scroll-delay="0.2"
                            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
                        >
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                                Kirubakaran
                            </span>
                        </h1>
                        
                        {/* Animated Subtitle */}
                        <div
                            data-scroll
                            data-scroll-speed="0.9"
                            data-scroll-delay="0.3"
                            className="flex items-center space-x-4"
                        >
                            <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                            <p className="text-2xl lg:text-3xl text-gray-700 font-light">
                                Full-Stack Developer
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <p
                        data-scroll
                        data-scroll-speed="0.8"
                        data-scroll-delay="0.4"
                        className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
                    >
                        Crafting <span className="text-blue-600 font-semibold">digital experiences</span> that blend 
                        innovation with <span className="text-purple-600 font-semibold">elegant solutions</span>. 
                        Turning complex ideas into seamless reality.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div 
                    data-scroll
                    data-scroll-speed="0.6"
                    data-scroll-delay="0.5"
                    className="flex flex-wrap gap-4"
                >
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center">
                            View My Work
                            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </button>
                    
                    <a
                        href="/kirubakarandev-resume.pdf"
                        download="kirubakarandev-resume.pdf"
                        className="group inline-block px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-gray-300 no-underline"
                    >
                        <span className="flex items-center">
                            Download CV
                            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </span>
                    </a>
                </div>

                {/* Stats */}
                <div 
                    data-scroll
                    data-scroll-speed="0.5"
                    data-scroll-delay="0.6"
                    className="flex flex-wrap gap-8 pt-8"
                >
                    {[
                        { number: '20+', label: 'Projects' },
                        { number: '3+', label: 'Years Experience' },
                        { number: '10+', label: 'Tech Stacks' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Content - Tech Showcase */}
            <div className="relative w-full max-w-md mx-auto">
                {/* Main Card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { tech: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: 'from-blue-400 to-cyan-400' },
                            { tech: 'NextJS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', color: 'from-gray-700 to-gray-900' },
                            { tech: 'Node', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: 'from-green-500 to-green-600' },
                            { tech: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: 'from-green-400 to-green-500' }
                        ].map((item, i) => (
                            <div
                                key={item.tech}
                                className="group text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                <img src={item.src} alt={item.tech} className="w-8 h-8 mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                                <div className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                    {item.tech}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
                    <span className="text-sm font-medium text-gray-700">Full-Stack</span>
                </div>
                <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
                    <span className="text-sm font-medium text-gray-700">DevOps</span>
                </div>
            </div>
        </div>
    </div>

    <style jsx>{`
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 6s ease infinite;
        }
    `}</style>
</section>

            {/* About Section */}
            <section
                id="about"
                data-section-name="about"
                data-scroll
                className="relative min-h-screen w-full px-8 lg:px-24 flex items-center bg-white"
            >
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2
                                data-scroll
                                data-scroll-speed="1"
                                className="text-5xl md:text-7xl font-bold mb-8"
                            >
                                <span className="text-black">
                                    About Me
                                </span>
                            </h2>

                            <div className="space-y-6">
                                <p
                                    data-scroll
                                    data-scroll-speed="0.8"
                                    className="text-2xl md:text-3xl text-gray-700 leading-relaxed"
                                >
                                    Hello, I'm <span className="font-semibold">Kirubakaran</span> 👋 
                                    a passionate developer who loves turning ideas into reality through code.
                                </p>

                                <div className="space-y-4 text-gray-600">
                                    {[
                                        "🚀 Building SaaS products, web apps, and software solutions using modern frameworks.",
                                        "🔍 Exploring cybersecurity and emerging technologies for secure applications.",
                                        "💡 Passionate about creative problem-solving and exceptional user experiences."
                                    ].map((text, index) => (
                                        <p
                                            key={index}
                                            data-scroll
                                            data-scroll-speed="0.6"
                                            data-scroll-delay={0.1 * index}
                                            className="bg-gray-50 rounded-2xl p-4 border border-gray-200"
                                        >
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-scroll
                                data-scroll-speed="0.5"
                                className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
                            >
                                <img
                                    src="https://avatars.githubusercontent.com/u/72642390"
                                    className="w-full h-full object-cover"
                                    alt="Kirubakaran"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                data-section-name="projects"
                data-scroll
                className="relative min-h-screen w-full px-8 lg:px-24 flex items-center bg-gray-50"
            >
                <div className="w-full max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2
                            data-scroll
                            data-scroll-speed="1"
                            className="text-5xl md:text-7xl font-bold mb-4"
                        >
                            <span className="text-black">
                                Projects
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            A showcase of my recent work and creative endeavors
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                url: 'https://ragulconstructions.com',
                                title: 'Ragul Constructions',
                                domain: 'ragulconstructions.com',
                                desc: 'Complete landing page and admin panel with project showcases.',
                                emoji: '🏗️',
                                category: 'Full Stack'
                            },
                            {
                                url: 'https://www.newphoenixboating.in/',
                                title: 'New Phoenix Boating',
                                domain: 'newphoenixboating.in',
                                desc: 'Tourism website featuring booking and service details.',
                                emoji: '⛵',
                                category: 'Frontend'
                            },
                            {
                                url: 'https://www.keysfintech.com/',
                                title: 'Keys Fintech',
                                domain: 'keysfintech.com',
                                desc: 'Financial services platform with modern UI.',
                                emoji: '💰',
                                category: 'Full Stack'
                            },
                            {
                                url: 'https://task-manager-new-mauve.vercel.app/',
                                title: 'Task Manager',
                                domain: 'task-manager-new-mauve.vercel.app',
                                desc: 'Productivity application for organization.',
                                emoji: '📋',
                                category: 'Full Stack'
                            },
                            {
                                url: 'https://cad-frontend.vercel.app',
                                title: 'CAD Interface',
                                domain: 'cad-frontend.vercel.app',
                                desc: 'Modern CAD interface.',
                                emoji: '🖥️',
                                category: 'Frontend'
                            },
                            {
                                url: 'https://thetitanfitnessstudio.com/',
                                title: 'Titan Fitness',
                                domain: 'thetitanfitnessstudio.com',
                                desc: 'Fitness studio website.',
                                emoji: '💪',
                                category: 'Full Stack'
                            }
                        ].map((project, index) => (
                            <a
                                key={index}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-4xl">{project.emoji}</div>
                                    <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-3">
                                    {project.domain}
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    {project.desc}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section
                id="expertise"
                data-section-name="expertise"
                data-scroll
                className="relative min-h-screen w-full px-8 lg:px-24 flex items-center bg-white"
            >
                <div className="w-full max-w-7xl mx-auto">
                    <div className="text-left mb-16">
                        <h2
                            data-scroll
                            data-scroll-speed="1"
                            className="text-5xl md:text-7xl font-bold mb-4"
                        >
                            <span className="text-black">
                                Expertise
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            Technologies and skills I work with
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                number: '01',
                                title: 'Full-Stack Development',
                                desc: 'Building complete web applications from frontend to backend.',
                                tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL']
                            },
                            {
                                number: '02',
                                title: 'DevOps & Deployment',
                                desc: 'Tools and platforms for efficient deployment and monitoring.',
                                tech: ['Ubuntu', 'Docker', 'AWS', 'CI/CD']
                            },
                            {
                                number: '03',
                                title: 'Security Focus',
                                desc: 'Integrating secure coding and exploring cybersecurity.',
                                tech: ['Penetration Testing', 'Vulnerability Analysis']
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-sm text-blue-600 font-medium mb-2">
                                    {service.number}
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {service.desc}
                                </p>
                                <div className="space-y-2">
                                    {service.tech.map((tech, techIndex) => (
                                        <div key={techIndex} className="flex items-center space-x-2 text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            <span className="text-sm font-medium">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                data-section-name="contact"
                data-scroll
                className="relative min-h-screen w-full px-8 lg:px-24 flex items-center bg-gray-50"
            >
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-left mb-16">
                        <h2
                            data-scroll
                            data-scroll-speed="1"
                            className="text-5xl md:text-7xl font-bold mb-4"
                        >
                            <span className="text-black">
                                Let's Connect
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            Ready to bring your ideas to life? Let's create something amazing together.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                                    Get In Touch
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    I'm always interested in new opportunities and collaborations.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
                                        label: 'Email',
                                        value: 'kirubakaran003k2@gmail.com'
                                    },
                                    {
                                        src: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
                                        label: 'LinkedIn',
                                        value: 'linkedin.com/in/kirubakarann'
                                    },
                                    {
                                        src: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
                                        label: 'GitHub',
                                        value: 'github.com/kirubakaran2'
                                    }
                                ].map((contact, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                                    >
                                        <img src={contact.src} alt={contact.label} className="w-6 h-6" />
                                        <div>
                                            <p className="text-gray-500 text-sm">{contact.label}</p>
                                            <p className="text-gray-900 font-medium">{contact.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
