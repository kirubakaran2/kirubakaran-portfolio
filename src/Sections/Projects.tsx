import React from 'react'
import SpaceBackground from '../components/SpaceBackground'
import CustomCursor from '../components/CustomCursor';

function Projects() {
  return (
    <section
      id="projects"
      data-section-name="projects"
      className="relative min-h-screen w-full mt-10 px-8 lg:px-24 flex items-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <SpaceBackground />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A showcase of my recent work and creative endeavors
          </p>
        </div>

        <div className="project-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="group bg-white/10 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 text-white"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{project.emoji}</div>
                <span className="px-3 py-1 text-xs font-medium bg-blue-900 text-blue-300 rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-3">{project.domain}</p>
              <p className="text-gray-300 leading-relaxed">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
