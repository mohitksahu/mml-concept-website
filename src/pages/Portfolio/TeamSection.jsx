import React, { useState, useEffect } from 'react';

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Team members data for MML Concepts
  const teamMembers = [
    {
      id: 1,
      name: "Michael Rodriguez",
      role: "Creative Director & Founder",
      bio: "With over 10 years of experience in video production and creative direction, Michael leads MML Concepts with passion for storytelling and innovative visual solutions.",
      email: "michael@mmlconcepts.com",
      phone: "+1 (555) 123-4567",
      location: "Los Angeles, CA",
      image: "/images/img_rectangle_100.png",
      specialties: ["Creative Direction", "Video Production", "Brand Strategy"]
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Lead Video Editor",
      bio: "Sarah brings technical excellence and artistic vision to every project. Her expertise in post-production and motion graphics helps bring client visions to life.",
      email: "sarah@mmlconcepts.com",
      phone: "+1 (555) 123-4568",
      location: "San Francisco, CA",
      image: "/images/img_rectangle_89.png",
      specialties: ["Video Editing", "Motion Graphics", "Color Grading"]
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Business Development Manager",
      bio: "David connects with clients to understand their unique needs and ensures every project exceeds expectations. His strategic approach drives MML Concepts' growth.",
      email: "david@mmlconcepts.com",
      phone: "+1 (555) 123-4569",
      location: "New York, NY",
      image: "/images/img_rectangle_126.png",
      specialties: ["Client Relations", "Project Management", "Business Strategy"]
    }
  ];

  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  const tabData = {
    about: {
      title: "About MML Concepts",
      content: "MML Concepts is a creative powerhouse specializing in professional video editing and multimedia solutions. Our team combines technical expertise with artistic vision to deliver exceptional results that elevate your brand and engage your audience."
    },
    testimony: {
      title: "Client Testimonials",
      content: "Our clients consistently praise our attention to detail, creative approach, and ability to deliver projects that exceed expectations. We take pride in building long-term partnerships based on trust and exceptional results."
    },
    reviews: {
      title: "What Clients Say",
      content: "⭐⭐⭐⭐⭐ 'MML Concepts transformed our brand with their incredible video work. Professional, creative, and always on time!' - Tech Startup CEO"
    },
    services: {
      title: "Our Services",
      content: "We offer comprehensive video editing, motion graphics, brand development, and multimedia solutions. From concept to completion, we handle every aspect of your creative projects with precision and care."
    }
  };

  return (
    <section id="team-section" className="relative py-16 md:py-24 bg-gradient-to-b from-primary to-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gold rounded-full blur-3xl"></div>
      </div>

      {/* Meet Our Team Banner */}
      <div className={`relative mb-16 md:mb-20 transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-4 tracking-wide">
            MEET OUR TEAM
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-primary/80 mt-6 max-w-2xl mx-auto px-4">
            The creative minds behind MML Concepts' success
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className={`max-w-7xl mx-auto px-4 md:px-6 mb-16 transition-all duration-1200 delay-300 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`relative group cursor-pointer transition-all duration-500 delay-${index * 200} ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => setSelectedMember(member)}
            >
              {/* Team Member Card */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 h-full transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:bg-white/15 border border-white/10">
                {/* Member Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="aspect-square bg-gradient-to-br from-gold/20 to-gold/40 rounded-2xl flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-32 h-32 md:w-40 md:h-40 bg-gold/30 rounded-xl items-center justify-center">
                      <span className="text-2xl md:text-3xl font-bold text-gold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gold/90 rounded-2xl flex items-center justify-center transition-all duration-300 ${hoveredMember === member.id ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary/80 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-primary/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full border border-gold/30"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Selected Indicator */}
                {selectedMember.id === member.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Member Details Section */}
      <div className={`relative bg-black/30 backdrop-blur-sm py-16 transition-all duration-1000 delay-600 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium capitalize ${activeTab === tab
                    ? 'bg-gold text-white shadow-lg scale-105'
                    : 'bg-white/10 text-primary/80 hover:bg-white/20 hover:text-white'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Tab Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gold">
                {tabData[activeTab].title}
              </h3>
              <p className="text-lg text-primary/80 leading-relaxed">
                {tabData[activeTab].content}
              </p>
            </div>

            {/* Right: Selected Member Details */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/30 to-gold/50 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-gold">
                    {selectedMember.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gold">
                    {selectedMember.name}
                  </h4>
                  <p className="text-primary/80">
                    {selectedMember.role}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-5 h-5 text-gold mr-3">📧</span>
                  <div>
                    <p className="text-primary/60 text-sm">Email</p>
                    <p className="text-primary/90">{selectedMember.email}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="w-5 h-5 text-gold mr-3">📱</span>
                  <div>
                    <p className="text-primary/60 text-sm">Phone</p>
                    <p className="text-primary/90">{selectedMember.phone}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="w-5 h-5 text-gold mr-3">📍</span>
                  <div>
                    <p className="text-primary/60 text-sm">Location</p>
                    <p className="text-primary/90">{selectedMember.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;