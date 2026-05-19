import { faCheck } from "@fortawesome/free-solid-svg-icons";
import StatCard from "./StatCard";
import WhyChooseItem from "./WhyChooseItem";
import { statsData, whyChooseData } from "../lib/aboutData";
import abouthero from "../assets/images/abouthero1.jpeg";
import hero2 from "../assets/images/abouthero.jpeg";

function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 relative overflow-hidden"
    >
      {/* Background overlays and effects */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={abouthero}
          alt="About background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-accent-500/20 to-transparent rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-tr from-accent-400/15 to-transparent rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-bl from-accent-300/10 to-transparent rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <div className="relative mb-8">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent-500 rounded-full opacity-30 animate-pulse"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight relative">
                About
                <span className="text-accent-400 block">Aciprobe</span>
                <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-300 rounded-full"></div>
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <p className="text-lg text-brand-100 leading-relaxed group-hover:text-white transition-colors">
                  With over a decade of experience in private investigation,
                  Aciprobe has established itself as a trusted partner for
                  individuals, businesses, and legal professionals.
                </p>
              </div>

              <div className="group bg-gradient-to-r from-accent-500/10 to-brand-600/10 backdrop-blur-sm rounded-2xl p-6 border border-accent-500/20 hover:from-accent-500/15 hover:to-brand-600/15 transition-all duration-300 hover:scale-105">
                <p className="text-lg text-brand-100 leading-relaxed group-hover:text-white transition-colors">
                  Our team of licensed investigators combines traditional
                  investigative techniques with cutting-edge technology to
                  deliver comprehensive, accurate, and actionable results.
                </p>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {statsData.map((stat) => (
                <div key={stat.label} className="group relative">
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-accent-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2 group-hover:text-accent-300 transition-colors group-hover:scale-110 transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-brand-200 group-hover:text-white transition-colors font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Image with Floating Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src={hero2}
                alt="Professional investigation team"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-600/60 to-transparent group-hover:from-brand-900/80 transition-all duration-300"></div>
              <div className="absolute inset-0 p-8 flex items-end">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl w-full border border-white/20 transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <svg
                        className="w-6 h-6 text-brand-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 relative">
                        Why Choose Aciprobe?
                        <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {whyChooseData.map((text) => (
                      <div key={text} className="group/item">
                        <WhyChooseItem icon={faCheck} text={text} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent elements around the image */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl opacity-80 animate-pulse shadow-lg"></div>
            <div
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-brand-600 to-brand-700 rounded-full opacity-60 animate-bounce shadow-lg"
              style={{ animationDuration: "3s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
