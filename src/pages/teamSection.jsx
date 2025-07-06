import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  // Using the same theme color as the "Join Us" button (#a28037)
  const themeColor = "#a28037";

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Listen for custom event to switch to testimony tab
  useEffect(() => {
    const handleSwitchToTestimony = () => {
      console.log('Received switchToTestimony event, switching to testimony tab');
      setActiveTab('testimony');
    };

    window.addEventListener('switchToTestimony', handleSwitchToTestimony);
    console.log('Event listener for switchToTestimony added');

    return () => {
      window.removeEventListener('switchToTestimony', handleSwitchToTestimony);
      console.log('Event listener for switchToTestimony removed');
    };
  }, []);

  // Team members data for MML Concepts
  const teamMembers = [
    {
      id: 1,
      name: "Arnesh Chakroborty",
      role: "Creative Director & Founder",
      bio: "Arnesh Chakroborty is the broke co-founder of MML Concepts. Yes, the only reason he pitched this idea was so he could somehow escape the “broke jail.” The sole purpose of this brand, for him, is a get-rich scheme. But every decision he makes for the brand proves exactly why he has been broke for so long. Having a production house to fulfill his random imaginations is something only the rich should consider—but a broke person like him? Truly ambitious.Finally, he is really broke. Please support.",
      image: "/images/arnesh.jpg",
      Instagram: "tobeaddedsoon",
      Linkedin: "tobeaddedsoon",
      specialties: ["Creative Direction", "Video Production", "Brand Strategy"]
    },
    {
      id: 2,
      name: "Ayush Ankit",
      role: "Manager",
      bio: "Ayush is the honorary team member of MML Concepts—brought in not for any particular skill, but mostly out of pity and long-standing friendship with the co-founders. He’s not at the center of anything, really. In fact, no one’s entirely sure why he’s here or what he contributes, including him. Sometimes he shows up with ideas that derail the actual agenda, other times he just vibes in the group chat. But somehow, his presence adds that perfect dose of chaos and comic relief the team didn’t know it needed. He’s not qualified, not responsible, and definitely not necessary—but damn, we’re glad he’s around. Please support. He’s just here for the ride. ",
      Instagram: "tobeaddedsoon",
      Linkedin: "tobeaddedsoon",
      image: "/images/ayush.jpg",
      specialties: ["Video Editing", "Motion Graphics", "Color Grading"]
    },
    {
      id: 3,
      name: "Prajwal Pradipt Behera",
      role: "Founder & Graphic Designer",
      bio: "Prajwal Pradipt Behera is the other half of this beautifully chaotic duo—the co-founder of MML Concepts and the brand’s primary graphic designer. A lazy genius if there ever was one, Prajwal is the kind of guy who'll procrastinate on a poster for days, only to whip up a masterpiece in the final hour like it was nothing. His creative talent is undeniable, his adaptability unmatched, and his work ethic... well, let’s just say it arrives fashionably late. MML Concepts thrives on his designs, even if they sometimes arrive seconds before the deadline. He may not move fast, but when he does, it’s straight-up brilliance. Please support—he’s talented, tired, and probably still asleep.",
      Instagram: "tobeaddedsoon",
      Linkedin: "tobeaddedsoon",
      image: "/images/prajwal.jpg",
      specialties: ["Client Relations", "Project Management", "Business Strategy"]
    }
  ];

  const [selectedMember, setSelectedMember] = useState(teamMembers[currentMemberIndex]);

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentMemberIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % teamMembers.length;
        setSelectedMember(teamMembers[newIndex]);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [teamMembers]);

  const handlePrevious = () => {
    const newIndex = currentMemberIndex === 0 ? teamMembers.length - 1 : currentMemberIndex - 1;
    setCurrentMemberIndex(newIndex);
    setSelectedMember(teamMembers[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentMemberIndex + 1) % teamMembers.length;
    setCurrentMemberIndex(newIndex);
    setSelectedMember(teamMembers[newIndex]);
  };

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

      {/* Team Member Showcase - Full Width Corner to Corner Section */}
      <div className={`w-full transition-all duration-1200 delay-300 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Main Container - Full Width from Corner to Corner with Fixed Large Height */}
        <div
          className="relative backdrop-blur-sm shadow-2xl transition-all duration-500 min-h-screen flex items-center"
          style={{
            backgroundColor: themeColor,
            minHeight: '100vh'
          }}
        >
          {/* Color Indicator in Top Right */}
          <div
            className="absolute top-6 right-6 w-6 h-6 rounded-full transition-all duration-500 shadow-lg"
            style={{ backgroundColor: themeColor }}
          ></div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gold/20 hover:bg-gold/40 rounded-full p-2 transition-all duration-300 border border-gold/30 z-10"
          >
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gold/20 hover:bg-gold/40 rounded-full p-2 transition-all duration-300 border border-gold/30 z-10"
          >
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Content Container with Proper Padding - Centered in Full Height Container */}
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20 lg:py-24 w-full">
            {/* Content Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 min-h-[60vh]" key={currentMemberIndex}>
              {/* Left Side - Photo */}
              <div className="flex-shrink-0 transform transition-all duration-700 hover:scale-105">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-fadeInScale">
                  <img
                    src={teamMembers[currentMemberIndex].image}
                    alt={teamMembers[currentMemberIndex].name}
                    className="w-full h-full object-cover rounded-2xl transition-all duration-500 border-4 shadow-2xl transform hover:rotate-1"
                    style={{ borderColor: themeColor }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full rounded-2xl items-center justify-center border-4 shadow-2xl animate-fadeInScale" style={{ backgroundColor: `${themeColor}60`, borderColor: themeColor }}>
                    <span className="text-4xl md:text-5xl font-bold text-white transform transition-all duration-500 hover:scale-110">
                      {teamMembers[currentMemberIndex].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 text-center lg:text-left max-w-2xl">
                {/* Name */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gold mb-6 transition-all duration-500 transform animate-slideUpFade leading-tight">
                  {teamMembers[currentMemberIndex].name}
                </h3>

                {/* Role */}
                <p className="text-2xl md:text-3xl lg:text-4xl text-primary/80 font-medium mb-8 transition-all duration-500 transform animate-slideUpFade delay-100">
                  {teamMembers[currentMemberIndex].role}
                </p>

                {/* Bio Lines */}
                <div className="space-y-4 mb-8">
                  {teamMembers[currentMemberIndex].bio.split('.').filter(line => line.trim()).map((line, idx) => (
                    <p key={idx} className="text-primary/70 text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-500 transform animate-slideUpFade" style={{ animationDelay: `${200 + idx * 100}ms` }}>
                      {line.trim()}.
                    </p>
                  ))}
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  {teamMembers[currentMemberIndex].specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-6 py-3 rounded-full text-base md:text-lg font-medium border transition-all duration-500 transform animate-slideUpFade hover:scale-105"
                      style={{
                        backgroundColor: `${themeColor}40`,
                        color: 'white',
                        borderColor: `${themeColor}70`,
                        animationDelay: `${400 + idx * 100}ms`
                      }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-12 space-x-3 animate-slideUpFade" style={{ animationDelay: '900ms' }}>
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentMemberIndex(index);
                    setSelectedMember(teamMembers[index]);
                  }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-150 ${index === currentMemberIndex
                    ? 'scale-125 shadow-lg animate-pulse'
                    : 'hover:scale-110 opacity-60'
                    }`}
                  style={{
                    backgroundColor: index === currentMemberIndex
                      ? themeColor
                      : '#666'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section with Watermark Design */}
      <div id="about-section" className={`relative min-h-screen flex items-center transition-all duration-1000 delay-600 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ backgroundColor: '#000000' }}>

        {/* Large Watermark Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Image Logo Watermark */}
            <img
              src="/images/watermarkLogo.png"
              alt="MML Concepts Logo Watermark"
              className="w-auto h-[60vh] md:h-[70vh] lg:h-[80vh] max-w-[80vw] object-contain opacity-60 select-none pointer-events-none transition-all duration-500"
              style={{ filter: `brightness(0.8) contrast(1.1)` }}
              onError={(e) => {
                // Fallback to text if image fails to load
                console.log('Watermark image failed to load, showing fallback text');
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback MML Text Watermark (hidden by default) */}
            <div className="hidden text-9xl md:text-[20rem] lg:text-[25rem] xl:text-[30rem] font-bold opacity-10 select-none pointer-events-none"
              style={{ color: themeColor }}>
              MML
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20 lg:py-24">
          {/* Navigation Tabs */}
          <div id="testimonial-tabs" className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full transition-all duration-300 font-medium capitalize text-sm md:text-base ${activeTab === tab
                  ? 'shadow-lg scale-105'
                  : 'hover:scale-105'
                  }`}
                style={{
                  backgroundColor: activeTab === tab ? themeColor : 'rgba(162, 128, 55, 0.2)',
                  color: 'white',
                  border: `1px solid ${themeColor}`
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left Side - Main Content */}
            <div className="flex-1 space-y-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {tabData[activeTab].title.split(' ').map((word, idx) => (
                  <span key={idx} className={idx === 0 ? 'text-white' : ''} style={{ color: idx > 0 ? themeColor : 'white' }}>
                    {word}{idx < tabData[activeTab].title.split(' ').length - 1 ? ' ' : ''}
                  </span>
                ))}
              </h3>

              <p className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl">
                {tabData[activeTab].content}
              </p>
            </div>

            {/* Right Side - Contact Information Card */}
            <div className="flex-shrink-0 w-full lg:w-96">
              <div className="backdrop-blur-sm rounded-2xl p-6 md:p-8 border shadow-2xl"
                style={{ backgroundColor: `${themeColor}20`, borderColor: `${themeColor}40` }}>

                {/* Current Team Member Info */}
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 transition-all duration-500"
                    style={{ backgroundColor: themeColor }}>
                    <span className="text-xl font-bold text-white">
                      {teamMembers[currentMemberIndex].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {teamMembers[currentMemberIndex].name}
                    </h4>
                    <p className="text-white/70">
                      {teamMembers[currentMemberIndex].role}
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <div>
                    <p className="text-white/60 text-sm font-medium mb-2">LinkedIn</p>
                    <p className="text-white text-base">{teamMembers[currentMemberIndex].Linkedin}</p>
                  </div>

                  <div>
                    <p className="text-white/60 text-sm font-medium mb-2">Instagram</p>
                    <p className="text-white text-base">{teamMembers[currentMemberIndex].Instagram}</p>
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