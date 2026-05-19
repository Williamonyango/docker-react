import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhyChooseItem({ icon, text }) {
  return (
    <div className="flex items-start space-x-3 group/item hover:bg-gradient-to-r hover:from-accent-50/50 hover:to-transparent rounded-lg p-2 -m-2 transition-all duration-300">
      <div className="w-6 h-6 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:bg-gradient-to-br group-hover/item:from-accent-500/30 group-hover/item:to-accent-600/30 group-hover/item:scale-110 transition-all duration-300 border border-accent-500/30">
        <FontAwesomeIcon
          icon={icon}
          className="text-accent-600 w-3 h-3 group-hover/item:text-accent-700 transition-colors duration-300"
        />
      </div>
      <p className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export default WhyChooseItem;
