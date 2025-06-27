import React from 'react';

const HeroSection = () => {
  return (<section className="relative bg-secondary shadow-[4px_168px_250px_#0000003f] py-24 md:py-32 lg:py-36 min-h-[85vh] flex items-center">
    <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
      {/* Header Tagline */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-primary/80 text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
          Professional Solutions by <span className="text-gold font-semibold">MML Concepts</span>
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gold leading-tight">
          Not Just a Business Solution!
        </h1>
      </div>        {/* Video Container Section - 16:9 Aspect Ratio */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 xl:space-x-12 space-y-8 lg:space-y-0 mb-12 md:mb-16">
        <div className="group relative">
          <div className="w-[300px] h-[169px] md:w-[360px] md:h-[203px] lg:w-[420px] lg:h-[236px] xl:w-[460px] xl:h-[259px] rounded-[18px] overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-gold/20">
            <img
              src="/images/img_rectangle_89.png"
              alt="MML Concepts Portfolio 1"
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-18 h-18 bg-gold/90 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-9 h-9 text-secondary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="w-[300px] h-[169px] md:w-[360px] md:h-[203px] lg:w-[420px] lg:h-[236px] xl:w-[460px] xl:h-[259px] rounded-[18px] overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-gold/20">
            <img
              src="/images/img_rectangle_89.png"
              alt="MML Concepts Portfolio 2"
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-18 h-18 bg-gold/90 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-9 h-9 text-secondary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="w-[300px] h-[169px] md:w-[360px] md:h-[203px] lg:w-[420px] lg:h-[236px] xl:w-[460px] xl:h-[259px] rounded-[18px] overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-gold/20">
            <img
              src="/images/img_rectangle_89.png"
              alt="MML Concepts Portfolio 3"
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-18 h-18 bg-gold/90 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-9 h-9 text-secondary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>        {/* Description and CTA */}
      <div className="text-center">
        <p className="text-primary/70 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-10 md:mb-12 leading-relaxed">
          The ultimate video editing services provider to kickstart your business growth and achieve exceptional results.
        </p>
        <button className="bg-gold hover:bg-gold/90 text-secondary font-bold text-lg md:text-xl px-14 py-5 md:px-16 md:py-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase tracking-wide">
          Learn More
        </button>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;