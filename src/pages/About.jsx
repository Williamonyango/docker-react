import AboutSection from "../components/AboutHero.jsx";
import {
  coreValues,
  licenses,
  leadership,
  clients,
} from "../lib/aboutPageData";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      <AboutSection />

      {/* Mission & Vision section with enhanced styling */}
      <section className="section-padding bg-gradient-to-br from-white via-brand-50/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-100/40 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-100/40 to-transparent rounded-full translate-y-16 -translate-x-16"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Mission, Vision, Values */}
            <div className="space-y-12">
              {/* Mission */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-brand-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-brand-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
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
                    <h3 className="text-2xl font-bold text-brand-800 relative">
                      Mission
                      <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                    To deliver high-quality and professional services in
                    investigations, loss assessment, debt collection,
                    surveillance, and risk management, aligned with global
                    standards.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-brand-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-800 to-accent-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-accent-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-800 to-brand-900 rounded-lg flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-800 relative">
                      Vision
                      <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-brand-800 to-accent-500 rounded-full"></div>
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                    To become a globally recognized leader in the investigation
                    and risk management industry.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="group bg-gradient-to-br from-white to-brand-50/50 rounded-2xl p-8 shadow-lg border border-brand-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-brand-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-800 relative">
                      Core Values
                      <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-green-500 to-brand-700 rounded-full"></div>
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {coreValues.map((value) => (
                      <div
                        key={value}
                        className="flex items-center space-x-3 group/item"
                      >
                        <div className="w-6 h-6 bg-accent-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-accent-500 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                        </div>
                        <span className="text-gray-700 group-hover/item:text-brand-800 transition-colors">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                    Our personnel adhere to a strict code of ethics emphasizing
                    legality, morality, privacy, and transparency.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Licenses & Methodology */}
            <div className="space-y-12">
              {/* Licenses & Compliance */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-brand-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-brand-800"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-brand-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
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
                    <h3 className="text-2xl font-bold text-brand-800 relative">
                      Licenses & Compliance
                      <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-brand-700 rounded-full"></div>
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {licenses.map((license) => (
                      <div
                        key={license}
                        className="flex items-start space-x-3 group/item"
                      >
                        <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 group-hover/item:text-brand-800 transition-colors">
                          {license}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Methodology & Operations */}
              <div className="group bg-gradient-to-br from-white to-accent-50/50 rounded-2xl p-8 shadow-lg border border-brand-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-brand-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
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
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-800 relative">
                      Methodology & Operations
                      <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-brand-700 rounded-full"></div>
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                    We blend traditional field investigation techniques with
                    modern surveillance tools, tailoring our approach to the
                    unique context of each assignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership section with enhanced design */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-brand-50/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-20 w-3 h-3 bg-brand-800 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/2 left-1/4 w-1 h-1 bg-accent-400 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4 relative">
                Leadership Team
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
              </h3>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              Meet the experienced professionals leading our investigation
              services with expertise and integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="group bg-white rounded-2xl p-6 border border-brand-100 shadow-lg text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-brand-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="relative inline-block mb-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h4 className="text-xl font-semibold text-brand-800 group-hover:text-brand-900 transition-colors mb-2">
                    {leader.name}
                  </h4>

                  <div className="inline-block bg-gradient-to-r from-accent-500/10 to-brand-800/10 px-4 py-2 rounded-full mb-4">
                    <p className="text-sm text-brand-700 font-medium">
                      {leader.title}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {leader.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start space-x-2 text-left"
                      >
                        <div className="w-4 h-4 bg-accent-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients section with enhanced design */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-accent-100/30 to-transparent rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-bl from-brand-100/30 to-transparent rounded-full"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4 relative">
                Trusted by Leading Organizations
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
              </h3>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              We proudly serve reputable insurance and assurance companies
              across Kenya and beyond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group bg-gradient-to-br from-white to-brand-50/50 rounded-xl p-6 text-center border border-brand-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-500 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="font-medium text-brand-800 group-hover:text-brand-900 transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
