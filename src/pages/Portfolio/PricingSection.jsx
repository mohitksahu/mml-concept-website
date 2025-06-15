import React from 'react';

const PricingSection = () => {
  const pricingPlans = [
    { id: 1, price: 'Rs 999', image: '/images/img_rectangle_126.png' },
    { id: 2, price: 'Rs 9999', image: '/images/img_rectangle_126.png' },
    { id: 3, price: 'Rs 19999', image: '/images/img_rectangle_126.png' }
  ];

  return (
    <section className="relative py-16" style={{
      backgroundImage: "url('/images/img_image_17.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-5xl font-quicksand font-normal leading-[60px] text-white bg-primary rounded-[14px] px-8 py-2">
            Pricing
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="flex justify-center space-x-20 mb-12">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="text-center">
              <img 
                src={plan.image} 
                alt={`Pricing Plan ${plan.id}`} 
                className="w-[248px] h-[247px] object-cover mb-8"
              />
            </div>
          ))}
        </div>

        {/* Price Buttons */}
        <div className="flex justify-center space-x-20">
          {pricingPlans.map((plan, index) => (
            <div key={plan.id} className="relative">
              <div className="w-[117px] h-[58px] bg-card-hover border border-black/60 rounded-md shadow-[0px_4px_4px_#888888ff]"></div>
              <button className="absolute top-[6px] left-[6px] w-[117px] h-[58px] bg-card border border-black rounded-md text-white font-quicksand text-2xl font-normal leading-[30px] hover:bg-card-hover transition-colors">
                {plan.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;