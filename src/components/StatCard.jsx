function StatCard({ value, label }) {
  return (
    <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/20 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-accent-300"></div>

      {/* Hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2 group-hover:text-accent-300 transition-colors group-hover:scale-110 transform duration-300">
          {value}
        </div>
        <div className="text-brand-200 group-hover:text-white transition-colors font-medium">
          {label}
        </div>
      </div>

      {/* Floating decoration */}
      <div className="absolute top-2 right-2 w-4 h-4 bg-accent-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
    </div>
  );
}

export default StatCard;
