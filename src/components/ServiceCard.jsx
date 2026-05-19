import React from "react";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceCard({ imgSrc, alt, title, description, icon }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-100 overflow-hidden group">
      <div className="relative mb-6">
        <img
          src={imgSrc}
          alt={alt}
          className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className="text-brand-600 w-8 h-8" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-brand-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
    </div>
  );
}

export default ServiceCard;
