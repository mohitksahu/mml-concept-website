import React from 'react';

const PricingSection = () => {
  const pricingPlans = [
    { id: 1, price: 'Rs 999', image: '/images/img_rectangle_126.png', popular: false },
    { id: 2, price: 'Rs 9999', image: '/images/img_rectangle_126.png', popular: true },
    { id: 3, price: 'Rs 19999', image: '/images/img_rectangle_126.png', popular: false }
  ];

  return (
    <section
      className="relative py-4 sm:py-6 lg:py-8 overflow-hidden"
      style={{
        backgroundImage: "url('/images/img_image_17.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Title */}
        <div
          className="text-center mb-4 sm:mb-6 lg:mb-8"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <h2 className="inline-block text-lg sm:text-xl lg:text-2xl font-quicksand font-semibold text-white bg-primary/90 rounded-lg px-4 sm:px-5 py-2 sm:py-3 shadow-lg">
            Pricing Plans
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative group ${plan.popular ? 'lg:scale-102' : ''}`}
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gold text-primary px-3 py-0.5 rounded-full text-xs font-semibold">
                    Popular
                  </span>
                </div>
              )}

              {/* Card Container */}
              <div className={`relative bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border ${plan.popular ? 'border-gold shadow-gold/20' : 'border-white/20'} shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-102`}>

                {/* Plan Image */}
                <div className="mb-3 sm:mb-4">
                  <img
                    src={plan.image}
                    alt={`Plan ${plan.id}`}
                    className="w-full h-32 sm:h-36 lg:h-40 object-cover rounded-md shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  />
                </div>

                {/* Price Button */}
                <div className="relative mx-auto w-fit">
                  {/* Shadow Layer */}
                  <div className={`absolute top-0.5 left-0.5 w-full h-full ${plan.popular ? 'bg-gold/30' : 'bg-gray-600/30'} rounded-md`}></div>

                  {/* Main Button */}
                  <button className={`relative ${plan.popular ? 'bg-gold hover:bg-gold/90 text-primary' : 'bg-primary hover:bg-primary/90 text-white'} border ${plan.popular ? 'border-gold' : 'border-primary'} rounded-md px-4 sm:px-5 py-2 sm:py-2.5 font-quicksand text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 hover:transform hover:translate-y-[-1px] hover:shadow-md min-w-[100px] sm:min-w-[120px]`}>
                    {plan.price}
                  </button>
                </div>

                {/* Features or Description */}
                <div className="mt-2 sm:mt-3 text-center">
                  <p className="text-white/80 text-xs sm:text-sm">
                    {plan.id === 1 && 'Basic Plan'}
                    {plan.id === 2 && 'Professional Plan'}
                    {plan.id === 3 && 'Enterprise Plan'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-4 sm:mt-6 lg:mt-8"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <p className="text-white/90 text-xs sm:text-sm lg:text-base mb-2 sm:mb-3">
            Choose the perfect plan for your needs
          </p>
          <button className="bg-gold hover:bg-gold/90 text-primary px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;