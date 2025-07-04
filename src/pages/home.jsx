import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [videoLoadErrors, setVideoLoadErrors] = useState({});
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchEnd(0); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % portfolioVideos.length);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + portfolioVideos.length) % portfolioVideos.length);
    }
  };

  // Handle video loading errors
  const handleVideoError = (index, error) => {
    console.error(`Video ${index + 1} loading error:`, error);
    setVideoLoadErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleVideoLoad = (index) => {
    console.log(`Video ${index + 1} loaded successfully`);
    setVideoLoadErrors(prev => ({ ...prev, [index]: false }));
  };

  // Portfolio videos for the sliding carousel
  const portfolioVideos = [
    "/MML/clip1_home.mp4",
    "/MML/clip2_home.mp4",
    "/MML/clip3_home.mp4",
    "/MML/clip4_home.mp4",
    "/MML/clip5_home.mp4"
  ];

  // Auto-slide every 4 seconds (pause on hover, wait for initial animation)
  useEffect(() => {
    let slideInterval;

    if (!isHovered && hasAnimated) {
      slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % portfolioVideos.length;
          console.log(`Auto-sliding from video ${prevIndex + 1} to video ${nextIndex + 1}`);
          return nextIndex;
        });
      }, 4000); // Increased to 4 seconds for better UX
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [portfolioVideos.length, isHovered, hasAnimated]);

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + portfolioVideos.length) % portfolioVideos.length);
      } else if (event.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % portfolioVideos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [portfolioVideos.length]);

  return (<section className="relative bg-secondary shadow-[4px_168px_250px_#0000003f] py-24 md:py-32 lg:py-36 min-h-[85vh] flex items-center">
    <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">      {/* Header Tagline */}
      <div className={`text-center mb-12 md:mb-16 transition-opacity duration-1500 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
        <p className={`text-primary/80 text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 transition-opacity duration-1800 delay-200 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
          Professional Solutions by <span className="text-gold font-semibold">MML Concepts</span>
        </p>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gold leading-tight transition-opacity duration-2000 delay-400 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
          Not Just a Business Solution!
        </h1>
      </div>      {/* Carousel Section - Sliding video carousel */}
      <div
        className={`relative mb-12 md:mb-16 w-full`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`w-full px-4 md:px-8 ${hasAnimated ? 'animate-slowPopUp' : 'opacity-0'}`} style={{ animationDuration: '1.4s', animationDelay: '500ms', animationFillMode: 'both' }}>
          {/* Carousel Container - Shows 3 videos, slides one at a time */}
          <div className="relative overflow-hidden max-w-6xl mx-auto">
            {/* Carousel Track */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${portfolioVideos.length * (100 / 3)}%`
              }}
            >
              {portfolioVideos.map((video, index) => (
                <div
                  key={index}
                  className="carousel-video-item flex-shrink-0"
                  style={{ width: `${100 / portfolioVideos.length}%` }}
                >
                  <div className="w-full px-2 md:px-3">
                    <div className="w-full aspect-video overflow-hidden shadow-xl rounded-lg bg-gray-900 transition-all duration-300 hover:shadow-2xl relative">
                      <video
                        src={video}
                        className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        onError={(e) => handleVideoError(index, e)}
                        onLoadedData={() => handleVideoLoad(index)}
                        style={{ backgroundColor: '#1c1c1c' }}
                      />
                      {videoLoadErrors[index] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
                          <div className="text-center">
                            <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm">Video unavailable</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + portfolioVideos.length) % portfolioVideos.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous video"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % portfolioVideos.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next video"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>        {/* Carousel Indicators */}
        <div className={`flex justify-center mt-6 space-x-2 transition-opacity duration-1500 delay-1200 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
          {portfolioVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-gold shadow-lg scale-110'
                : 'bg-primary/30 hover:bg-primary/50 hover:scale-105'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>      {/* Description */}
      <div className={`text-center transition-opacity duration-2500 delay-1400 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
        <p className={`text-primary/70 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-10 md:mb-12 leading-relaxed transition-opacity duration-1800 delay-1600 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
          The ultimate video editing services provider to kickstart your business growth.
        </p>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;