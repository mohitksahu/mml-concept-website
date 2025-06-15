import React from 'react';

const Header = () => {
  return (
    <header className="relative w-full h-[137px] bg-primary" style={{
      backgroundImage: "url('/images/img_image_3.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="flex items-center justify-between h-full px-4">
        {/* Logo */}
        <div className="ml-[10px] mt-[7px]">
          <img 
            src="/images/img_61d446190afc4863a3a6e228820af569jpegremovebgpreview_2.png" 
            alt="Company Logo" 
            className="w-[130px] h-[130px] object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-card-hover border border-black/60 rounded-md text-white font-quicksand text-xl font-normal leading-[25px] shadow-[0px_4px_4px_#888888ff] hover:bg-card transition-colors">
            Testimonial
          </button>
          <button className="px-4 py-2 bg-card-hover border border-black/60 rounded-md text-white font-quicksand text-xl font-normal leading-[25px] shadow-[0px_4px_4px_#888888ff] hover:bg-card transition-colors">
            Services
          </button>
          <button className="px-4 py-2 bg-card-hover border border-black/60 rounded-md text-white font-quicksand text-xl font-normal leading-[25px] shadow-[0px_4px_4px_#888888ff] hover:bg-card transition-colors">
            Pricing
          </button>
          <div className="relative">
            <div className="w-[109px] h-[58px] bg-card-hover border border-black/60 rounded-md shadow-[0px_4px_4px_#888888ff]"></div>
            <button className="absolute top-[6px] left-[5px] w-[109px] h-[58px] bg-card border border-black rounded-md text-white font-quicksand text-2xl font-normal leading-[30px] hover:bg-card-hover transition-colors">
              Join Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;