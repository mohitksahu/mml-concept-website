import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    // Portfolio videos for the sliding carousel
    const portfolioVideos = [
        "/MML/clip1_home.mp4",
        "/MML/clip2_home.mp4",
        "/MML/clip3_home.mp4",
        "/MML/clip4_home.mp4",
        "/MML/clip5_home.mp4"
    ];

    // Auto-slide to the left every 3 seconds (pause on hover, wait for initial animation)
    useEffect(() => {
        if (isHovered) return;

        // Wait for initial pop-up animation to complete (500ms delay + 1400ms duration = 1900ms) + 3 seconds
        const initialDelay = hasAnimated ? 0 : 4900; // 1900ms for animation + 3000ms wait

        const startSliding = () => {
            const slideInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioVideos.length);
            }, 3000);
            return slideInterval;
        };

        const timer = setTimeout(() => {
            const interval = startSliding();
            return () => clearInterval(interval);
        }, initialDelay);

        return () => clearTimeout(timer);
    }, [portfolioVideos.length, isHovered, hasAnimated]);

    // Trigger animations on component mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimated(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Get 3 consecutive videos to display
    const getVisibleVideos = () => {
        const videos = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % portfolioVideos.length;
            videos.push({
                src: portfolioVideos[index],
                alt: `MML Concepts Portfolio Video ${index + 1}`,
                key: `${index}-${currentIndex}-${i}` // Unique key for React re-rendering
            });
        }
        return videos;
    };

    return (
        <section className="relative bg-secondary shadow-[4px_168px_250px_#0000003f] py-24 md:py-32 lg:py-36 min-h-[85vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
                {/* Header Tagline */}
                <div className={`text-center mb-12 md:mb-16 transition-opacity duration-1500 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
                    <p className={`text-primary/80 text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 transition-opacity duration-1800 delay-200 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
                        Professional Solutions by <span className="text-gold font-semibold">MML Concepts</span>
                    </p>
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gold leading-tight transition-opacity duration-2000 delay-400 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
                        Not Just a Business Solution!
                    </h1>
                </div>

                {/* Carousel Section - Always shows 3 images with pop-up effect */}
                <div
                    className={`relative mb-12 md:mb-16 w-full`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className={`w-full px-4 md:px-8 ${hasAnimated ? 'animate-slowPopUp' : 'opacity-0'}`} style={{ animationDuration: '1.4s', animationDelay: '500ms', animationFillMode: 'both' }}>
                        <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
                            {getVisibleVideos().map((video, index) => (
                                <div key={video.key} className="relative flex-shrink-0 carousel-video-wrapper">
                                    <div className="w-[280px] h-[180px] sm:w-[320px] sm:h-[200px] md:w-[360px] md:h-[225px] lg:w-[400px] lg:h-[250px] xl:w-[420px] xl:h-[260px] overflow-hidden shadow-xl rounded-lg">
                                        <video
                                            src={video.src}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            preload="metadata"
                                            onError={(e) => console.error('Video loading error:', e)}
                                            onLoadedData={() => console.log('Video loaded successfully')}
                                            style={{ backgroundColor: '#1c1c1c' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Indicators */}
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
                </div>

                {/* Description */}
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
