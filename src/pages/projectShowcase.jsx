import React, { useState } from 'react';

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Using the same theme color as other components
  const themeColor = "#a28037";

  const projects = [
    {
      id: 1,
      number: "1.",
      tag: "Advanced",
      title: "Video Editing",
      type: "landscape",
      thumbnail: "/images/thumbnail_1.webp",
      software: ["Ae", "Pr"],
      features: [
        "A to Z of Video Editing",
        "Advanced Motion Graphics in Adobe After Effects",
        "Advanced color grading in DaVinci Resolve"
      ]
    },
    {
      id: 2,
      number: "2.",
      tag: "Social Media",
      title: "Growth",
      type: "portrait",
      thumbnail: "/images/thumbnail_2.png",
      socialPlatforms: ["YT", "IG"],
      features: [
        "Content planning and packaging",
        "Scripting",
        "Storytelling",
        "SEO",
        "Basics of cinematography"
      ],
      note: "*not available in essential pack"
    },
    {
      id: 3,
      number: "3.",
      tag: "Freelancing",
      title: "& Agency building",
      type: "landscape",
      thumbnail: "/images/thumbnail_3.jpg",
      features: [
        "How, where & when to reach out to clients?",
        "Basics of Marketing.",
        "How to negotiate prices?",
        "How to scale an agency?"
      ],
      note: "*not available in essential pack"
    }
  ];

  return (
    <section
      id="project-showcase"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/img_image_18.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-6">

        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="600">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
            OUR PROJECTS
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: themeColor }}></div>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Discover what you'll learn in this cohort
          </p>
        </div>

        {/* Main Projects Grid - Matching Reference Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">

          {/* Project 1 - Advanced Video Editing */}
          <div
            className="relative group h-64 md:h-72 lg:h-80"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="100"
            onMouseEnter={() => setHoveredProject(1)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl h-full">
              <a href="https://youtu.be/fgBHV1AfYYg?si=j3XZXTAKt0qjfwUz" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img
                  src={projects[0].thumbnail}
                  alt="Video Editing"
                  className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === 1 ? 'opacity-100' : 'opacity-70'}`}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: themeColor }}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Project 2 - Social Media Growth */}
          <div
            className="relative group h-64 md:h-72 lg:h-80"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="200"
            onMouseEnter={() => setHoveredProject(2)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl h-full">
              <a href="https://youtu.be/nUHWnpr94Qo?si=pxVNEAyv0rxc47G7" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img
                  src={projects[1].thumbnail}
                  alt="Social Media Growth"
                  className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === 2 ? 'opacity-100' : 'opacity-70'}`}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: themeColor }}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 - Freelancing & Agency Building (Full Width) */}
        <div
          className="relative group h-72 md:h-80 lg:h-96 mb-16"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="300"
          onMouseEnter={() => setHoveredProject(3)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl h-full">
            <a href="https://youtu.be/izFbsyZkiBM?si=ZcB_F5WVsM0AC5_h" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img
                src={projects[2].thumbnail}
                alt="Freelancing & Agency Building"
                className="w-full h-full object-cover"
              />

              {/* Play Button Overlay */}
              <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === 3 ? 'opacity-100' : 'opacity-70'}`}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: themeColor }}>
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
          <a 
            href="https://www.youtube.com/@mml.concepts" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button
              className="px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm text-white border-2 hover:shadow-xl"
              style={{
                backgroundColor: `${themeColor}20`,
                borderColor: themeColor,
                ':hover': { backgroundColor: `${themeColor}30` }
              }}
            >
              View All Projects
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;