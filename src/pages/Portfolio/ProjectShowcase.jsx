import React from 'react';

const ProjectShowcase = () => {
  const projects = [
    { id: 1, name: 'test 1', image: '/images/img_rectangle_126.png' },
    { id: 2, name: 'test 2', image: '/images/img_rectangle_126.png' },
    { id: 3, name: 'test 3', image: '/images/img_rectangle_126.png' }
  ];

  return (
    <section className="relative py-16" style={{
      backgroundImage: "url('/images/img_image_18.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-5xl font-quicksand font-normal leading-[60px] text-white bg-primary rounded-[14px] px-8 py-2">
            Projects
          </h2>
        </div>

        {/* Project Images */}
        <div className="flex justify-center space-x-20 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="text-center">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-[248px] h-[247px] object-cover mb-4"
              />
            </div>
          ))}
        </div>

        {/* Project Names */}
        <div className="flex justify-center space-x-20">
          {projects.map((project) => (
            <div key={project.id} className="text-center">
              <h3 className="text-3xl font-k2d font-normal leading-[42px] text-white">
                {project.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;