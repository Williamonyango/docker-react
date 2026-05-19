import React from "react";
import hero from "../assets/images/serviceHero.jpg";

const ServicesHero = () => {
  return (
    <div className=" bg-brand-900 relative min-h-screen flex items-center justify-center overflow-hidden mb-16">
      <div className="absolute inset-0 opacity-10">
        <img
          src={hero}
          alt="Investigation background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Our Investigation Services
        </h2>
        <p className="text-xl text-brand-200 max-w-3xl mx-auto drop-shadow">
          Comprehensive investigation solutions tailored to meet your specific
          needs with professional expertise and cutting-edge technology.
        </p>
      </div>
    </div>
  );
};

export default ServicesHero;
