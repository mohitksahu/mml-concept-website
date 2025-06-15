import React from 'react';

const TeamSection = () => {
  return (
    <section className="relative py-16">
      {/* Meet Our Team Banner */}
      <div className="relative mb-16">
        <div className="mx-auto w-[414px] h-[83px] relative">
          <img 
            src="/images/img_image_5.png" 
            alt="Meet Our Team Background" 
            className="w-full h-full rounded-[25px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl font-quicksand font-normal leading-[60px] text-secondary">
              MEET OUR TEAM
            </h2>
          </div>
        </div>
      </div>

      {/* Team Member Section */}
      <div className="relative w-full h-[747px]" style={{
        backgroundImage: "url('/images/img_image_4.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute top-[161px] left-[58px]">
          <div className="relative w-[388px] h-[425px]">
            <img 
              src="/images/img_rectangle_100.png" 
              alt="Team Member" 
              className="w-full h-full rounded-[41px] object-cover"
            />
            <img 
              src="/images/img_61d446190afc4863a3a6e228820af569jpegremovebgpreview_2.png" 
              alt="Company Logo Overlay" 
              className="absolute top-[104px] left-[254px] w-[130px] h-[130px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start space-x-12">
            {/* About Tab */}
            <div className="relative">
              <img 
                src="/images/img_image_8.png" 
                alt="About Background" 
                className="w-[157px] h-[39px] rounded-[19px] object-cover"
              />
              <div className="absolute inset-0 flex items-center pl-8">
                <span className="text-3xl font-quicksand font-normal leading-[40px] text-white">
                  About
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-8">
              <div className="relative">
                <img 
                  src="/images/img_image_9.png" 
                  alt="Testimony Background" 
                  className="w-[216px] h-[39px] rounded-[19px] object-cover"
                />
                <div className="absolute inset-0 flex items-center pl-8">
                  <span className="text-3xl font-quicksand font-normal leading-[40px] text-white shadow-[0px_4px_3px_#888888ff]">
                    Testimony
                  </span>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/images/img_image_9.png" 
                  alt="Reviews Background" 
                  className="w-[173px] h-[39px] rounded-[19px] object-cover"
                />
                <div className="absolute inset-0 flex items-center pl-8">
                  <span className="text-3xl font-quicksand font-normal leading-[40px] text-white shadow-[0px_4px_3px_#888888ff]">
                    Reviews
                  </span>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/images/img_image_9.png" 
                  alt="Services Background" 
                  className="w-[157px] h-[39px] rounded-[19px] object-cover"
                />
                <div className="absolute inset-0 flex items-center pl-8">
                  <span className="text-3xl font-quicksand font-normal leading-[40px] text-white shadow-[0px_4px_3px_#888888ff]">
                    Services
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* About Description */}
          <div className="mt-12 max-w-4xl">
            <p className="text-3xl font-montserrat font-normal leading-[39px] text-white">
              I am David Matias, I am a Brand & Webflow Designer, Currently residing in the lush Victoria Street London, Matias operates globally and is ready to take on any design challenge.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-balsamiq-sans font-normal leading-[22px] text-white mb-2">
                Email
              </h3>
              <p className="text-2xl font-balsamiq-sans font-normal leading-[29px] text-white">
                sample@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-balsamiq-sans font-normal leading-[22px] text-white mb-2">
                Contact Location
              </h3>
              <p className="text-2xl font-balsamiq-sans font-normal leading-[29px] text-white">
                Sample Location
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-balsamiq-sans font-normal leading-[22px] text-white mb-2">
                Phone
              </h3>
              <p className="text-2xl font-balsamiq-sans font-normal leading-[29px] text-white">
                +91 1234567890
              </p>
            </div>
          </div>
        </div>

        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('/images/img_61d446190afc4863a3a6e228820af569jpeg_1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
    </section>
  );
};

export default TeamSection;