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
      thumbnail: "/images/img_rectangle_126.png",
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
      thumbnail: "/images/img_rectangle_126.png",
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
      thumbnail: "/images/img_rectangle_126.png",
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
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/img_image_18.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">

          {/* Project 1 - Advanced Video Editing */}
          <div
            className="relative group"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="100"
            onMouseEnter={() => setHoveredProject(1)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="border-2 rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:shadow-2xl backdrop-blur-sm"
              style={{ borderColor: themeColor, backgroundColor: themeColor }}>

              {/* Project Number and Title */}
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl md:text-5xl font-bold text-white/50">{projects[0].number}</span>
                <div>
                  <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-3 text-white"
                    style={{ backgroundColor: themeColor }}>
                    {projects[0].tag}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{projects[0].title}</h3>
                </div>
              </div>

              {/* Content and Video Side by Side */}
              <div className="flex gap-6">
                {/* Left Side - Content */}
                <div className="flex-1">
                  <ul className="space-y-3 text-base text-white/90">
                    {projects[0].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: themeColor }}></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side - Video and Software Icons */}
                <div className="flex-shrink-0">
                  <div className="relative group-hover:scale-105 transition-transform duration-300">
                    <div className="w-32 h-20 rounded-xl overflow-hidden border-2"
                      style={{ borderColor: `${themeColor}40` }}>
                      <img
                        src={projects[0].thumbnail}
                        alt="Video Editing"
                        className="w-full h-full object-cover"
                      />

                      {/* Play Button Overlay */}
                      <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === 1 ? 'opacity-100' : 'opacity-70'}`}>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: themeColor }}>
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Software Icons */}
                  <div className="flex gap-2 mt-4 justify-center">
                    {projects[0].software.map((software, idx) => (
                      <div key={idx} className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: '#9999FF' }}>
                        {software}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Social Media Growth */}
          <div
            className="relative group"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="200"
            onMouseEnter={() => setHoveredProject(2)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="border-2 rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:shadow-2xl backdrop-blur-sm"
              style={{ borderColor: themeColor, backgroundColor: themeColor }}>

              {/* Project Number and Title */}
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl md:text-5xl font-bold text-white/50">{projects[1].number}</span>
                <div>
                  <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-3 text-white"
                    style={{ backgroundColor: themeColor }}>
                    {projects[1].tag}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{projects[1].title}</h3>
                </div>
              </div>

              {/* Content and Video Layout */}
              <div className="flex gap-6">
                {/* Left Side - Portrait Video and Social Icons */}
                <div className="flex-shrink-0">
                  <div className="relative group-hover:scale-105 transition-transform duration-300">
                    <div className="w-20 h-32 rounded-xl overflow-hidden border-2"
                      style={{ borderColor: `${themeColor}40` }}>
                      <img
                        src={projects[1].thumbnail}
                        alt="Social Media Growth"
                        className="w-full h-full object-cover"
                      />

                      {/* Play Button Overlay */}
                      <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === 2 ? 'opacity-100' : 'opacity-70'}`}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: themeColor }}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex gap-2 mt-4 justify-center">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: '#FF0000' }}>
                      <span className="text-white text-xs font-bold">YT</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: '#E4405F' }}>
                      <span className="text-white text-xs font-bold">IG</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1">
                  <ul className="space-y-3 text-base text-white/90">
                    {projects[1].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: themeColor }}></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Not Available Note */}
                  <p className="text-sm text-white/60 mt-4 text-right">{projects[1].note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 - Freelancing & Agency Building (Full Width) */}
        <div
          className="relative group mb-16"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="300"
          onMouseEnter={() => setHoveredProject(3)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="border-2 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm"
            style={{ borderColor: themeColor, backgroundColor: themeColor }}>

            {/* Project Number and Title */}
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl md:text-5xl font-bold text-white/50">{projects[2].number}</span>
              <div>
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-3 text-white"
                  style={{ backgroundColor: themeColor }}>
                  {projects[2].tag}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white inline">{projects[2].title}</h3>
              </div>
            </div>

            {/* Content Layout */}
            <div className="flex gap-8">
              {/* Left Side - Content */}
              <div className="flex-1">
                <ul className="space-y-3 text-base text-white/90">
                  {projects[2].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: themeColor }}></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Not Available Note */}
                <p className="text-sm text-white/60 mt-6">{projects[2].note}</p>
              </div>

              {/* Right Side - Video */}
              <div className="flex-shrink-0">
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <div className="w-48 h-28 rounded-xl overflow-hidden border-2"
                    style={{ borderColor: `${themeColor}40` }}>
                    <img
                      src={projects[2].thumbnail}
                      alt="Freelancing & Agency Building"
                      className="w-full h-full object-cover"
                    />

                    {/* Play Button Overlay */}
                    <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === 3 ? 'opacity-100' : 'opacity-70'}`}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: themeColor }}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
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
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;