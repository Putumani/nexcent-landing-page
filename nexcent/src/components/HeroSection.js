import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between px-[6.265rem] py-[4.176rem]"> 
      <div className="w-[28.5825rem] h-[12.056rem] flex flex-col justify-center"> {/* Width: 457.32px, Height: 192.9px */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Platform</h1>
        <p className="text-lg text-gray-600">
          Discover a world of features, join our community, and experience seamless connectivity.
        </p>
      </div>

      <div className="w-[17.01rem] h-[17.706rem] flex items-center justify-center"> {/* Width: 272.16px, Height: 283.3px */}
        <img src="Illustration.png" alt="Hero" className="object-cover w-full h-full" />
      </div>
    </section>
  );
};

export default HeroSection;
