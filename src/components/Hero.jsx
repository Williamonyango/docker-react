import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.avif";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="pt-10 pb-16 bg-brand-900 relative overflow-hidden text-white"
    >
      <div className="absolute inset-0 opacity-10">
        <img
          src={hero1}
          alt="Investigation background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professional
              <span className="text-accent-500 block">
                Investigation Services
              </span>
            </h1>
            <p className="text-xl text-brand-200 mb-8 leading-relaxed">
              Aciprobe delivers comprehensive investigation solutions with
              integrity, discretion, and proven results. Trust our expertise for
              your most sensitive cases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="btn-primary"
              >
                Get In Touch
              </button>
              <button
                onClick={() => navigate("/about")}
                className="btn-secondary"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={hero2}
                alt="Professional investigator"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-700/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-white"
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
                    <h3 className="font-semibold text-white">Case Status</h3>
                    <p className="text-sm text-brand-200">
                      Active Investigation
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-brand-200">Progress</span>
                    <span className="font-semibold text-white">90%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
