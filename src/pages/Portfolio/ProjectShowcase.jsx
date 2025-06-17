import React, { useState } from 'react';

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    { id: 1, name: 'Creative Design', image: '/images/img_rectangle_126.png', category: 'Branding' },
    { id: 2, name: 'Web Experience', image: '/images/img_rectangle_126.png', category: 'Development' },
    { id: 3, name: 'Visual Identity', image: '/images/img_rectangle_126.png', category: 'Design' }
  ];

  return (
    <section
      className="relative py-4 sm:py-6 lg:py-8 overflow-hidden"
      style={{
        backgroundImage: "url('/images/img_image_18.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">

        {/* Section Title */}
        <div
          className="text-center mb-4 sm:mb-6 lg:mb-8"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <h2 className="inline-block text-lg sm:text-xl lg:text-2xl font-quicksand font-semibold text-white bg-primary/90 rounded-lg px-4 sm:px-5 py-2 sm:py-3 shadow-lg">
            Our Projects
          </h2>
          <p className="mt-2 text-white/80 text-xs sm:text-sm lg:text-base max-w-xl mx-auto">
            Discover our latest creative works and digital experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-102">

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-32 sm:h-36 lg:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="inline-block bg-gold text-primary px-2 py-0.5 rounded-full text-xs font-semibold mb-1">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base lg:text-lg font-k2d font-semibold text-white group-hover:text-gold transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">
                    Click to view details
                  </p>

                  {/* View Project Button */}
                  <div className={`mt-2 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <button className="bg-gold hover:bg-gold/90 text-primary px-3 py-1 rounded-md text-xs font-semibold transition-all duration-300 hover:scale-105">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-4 sm:mt-6 lg:mt-8"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;