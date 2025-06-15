import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-secondary shadow-[4px_168px_250px_#0000003f] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Pagination Dots */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-gold rounded-[10px] px-4 py-2">
            <div className="w-[14px] h-[13px] bg-secondary rounded-[7px]"></div>
            <div className="w-[13px] h-[13px] bg-secondary/40 rounded-[6px]"></div>
            <div className="w-[14px] h-[13px] bg-secondary/40 rounded-[7px]"></div>
            <div className="w-[14px] h-[13px] bg-secondary/40 rounded-[7px]"></div>
            <div className="w-[13px] h-[13px] bg-secondary/40 rounded-[6px]"></div>
          </div>
        </div>

        {/* World Map Images */}
        <div className="flex justify-center space-x-20 mb-8">
          <img 
            src="/images/img_rectangle_89.png" 
            alt="World Map 1" 
            className="w-[302px] h-[294px] rounded-[68px] object-cover"
          />
          <img 
            src="/images/img_rectangle_89.png" 
            alt="World Map 2" 
            className="w-[302px] h-[294px] rounded-[68px] object-cover"
          />
          <img 
            src="/images/img_rectangle_89.png" 
            alt="World Map 3" 
            className="w-[302px] h-[294px] rounded-[68px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;