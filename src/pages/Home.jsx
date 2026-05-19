import Hero from "../components/Hero.jsx";
import { clients } from "../lib/aboutPageData";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      {/* Intro summary with enhanced styling */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-50/30 to-accent-50/30"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-accent-500 rounded-full opacity-20 animate-pulse"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4 relative">
                  Trusted Investigation Partners in Kenya
                  <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                ACIPROBE Investigation Services is a fully registered
                investigative firm offering professional private and commercial
                investigations, risk management, litigation support, and debt
                recovery. We serve clients in the insurance, legal, financial,
                corporate, and public sectors both locally and internationally.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-5 text-center border border-brand-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl font-bold text-brand-800 mb-1">
                  10+ yrs
                </div>
                <div className="text-brand-600 text-sm">
                  Industry Experience
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-5 text-center border border-accent-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl font-bold text-brand-800 mb-1">
                  500+
                </div>
                <div className="text-brand-600 text-sm">Cases Completed</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 text-center border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl font-bold text-brand-800 mb-1">
                  98%
                </div>
                <div className="text-brand-600 text-sm">Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 text-center border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl font-bold text-brand-800 mb-1">
                  24/7
                </div>
                <div className="text-brand-600 text-sm">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do section with enhanced cards */}
      <section className="section-padding bg-gradient-to-br from-white via-brand-50/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-100/40 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-100/40 to-transparent rounded-full translate-y-16 -translate-x-16"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4 relative">
                What We Do
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              Explore our investigation services, company background, and how to
              reach us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white to-brand-50/50 rounded-2xl p-8 shadow-lg border border-brand-100 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-brand-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-800 to-brand-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="text-xl font-semibold text-brand-800 mb-3 group-hover:text-brand-900 transition-colors">
                  Services
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors">
                  See our core and specialized offerings.
                </p>
                <NavLink
                  to="/services"
                  className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-brand-900 font-semibold px-6 py-2 rounded-full transition-all duration-300 inline-block shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  View services
                </NavLink>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-brand-50/50 rounded-2xl p-8 shadow-lg border border-brand-100 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-brand-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-800 to-brand-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-800 mb-3 group-hover:text-brand-900 transition-colors">
                  About Us
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors">
                  Learn about our mission, team, and credentials.
                </p>
                <NavLink
                  to="/about"
                  className="bg-transparent border-2 border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 inline-block hover:shadow-lg transform hover:scale-105"
                >
                  About the company
                </NavLink>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-brand-50/50 rounded-2xl p-8 shadow-lg border border-brand-100 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-brand-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-800 to-brand-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-800 mb-3 group-hover:text-brand-900 transition-colors">
                  Contact
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors">
                  Get in touch for a confidential consultation.
                </p>
                <NavLink
                  to="/contact"
                  className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-brand-900 font-semibold px-6 py-2 rounded-full transition-all duration-300 inline-block shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Contact us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured service highlights with enhanced design */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4 relative">
                Featured Capabilities
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              Brief snapshots of high-impact work streams. Full details on the
              Services page.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-6 shadow-xl border border-brand-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-800 group-hover:text-brand-900 transition-colors">
                Motor Accident Claims
              </h3>
              <p className="text-gray-600 mt-2 group-hover:text-gray-700 transition-colors">
                Scene verification, statement gathering, and evidence
                documentation for defensible outcomes.
              </p>
              <NavLink
                to="/services"
                className="text-brand-700 font-semibold inline-block mt-4 hover:text-accent-500 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                Learn more →
              </NavLink>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-xl border border-brand-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-800 group-hover:text-brand-900 transition-colors">
                Theft & Fraud Investigations
              </h3>
              <p className="text-gray-600 mt-2 group-hover:text-gray-700 transition-colors">
                Vehicle theft, burglary, fidelity breaches—handled with
                discreet, methodical rigor.
              </p>
              <NavLink
                to="/services"
                className="text-brand-700 font-semibold inline-block mt-4 hover:text-accent-500 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                Learn more →
              </NavLink>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-xl border border-brand-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-800 group-hover:text-brand-900 transition-colors">
                Tracing & Litigation Support
              </h3>
              <p className="text-gray-600 mt-2 group-hover:text-gray-700 transition-colors">
                Locating assets and parties; process serving and expert
                testimony support.
              </p>
              <NavLink
                to="/services"
                className="text-brand-700 font-semibold inline-block mt-4 hover:text-accent-500 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                Learn more →
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us with enhanced styling */}
      <section className="section-padding bg-gradient-to-br from-white to-brand-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-accent-100/20 to-transparent rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-brand-100/20 to-transparent rounded-full"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-6 relative">
                  Why Choose Aciprobe
                  <div className="absolute -bottom-3 left-0 w-20 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="group text-center bg-gradient-to-br from-white to-brand-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-brand-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-brand-900"
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
                  <h3 className="text-lg font-semibold text-brand-800 mb-2 group-hover:text-brand-900 transition-colors">
                    Licensed
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    We are licensed by the highest governing body in insurance,
                    IRA as well as hold membership with National Association of
                    Kenya Investigators (NAKI) Membership.
                  </p>
                </div>

                <div className="group text-center bg-gradient-to-br from-white to-brand-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-brand-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-brand-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-800 mb-2 group-hover:text-brand-900 transition-colors">
                    Expert Guidance
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    Our experienced professionals are here to help you make
                    informed decisions, ensuring you get the best services to
                    secure your claims.
                  </p>
                </div>

                <div className="group text-center bg-gradient-to-br from-white to-brand-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-brand-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-brand-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5-6l-7 7-3-3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-800 mb-2 group-hover:text-brand-900 transition-colors">
                    Reliable Protection
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    We partner with 8 top-rated insurers, guaranteeing
                    dependable coverage you can trust in times of need.
                  </p>
                </div>

                <div className="group text-center bg-gradient-to-br from-white to-brand-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-brand-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-brand-900"
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
                  <h3 className="text-lg font-semibold text-brand-800 mb-2 group-hover:text-brand-900 transition-colors">
                    Customized Solutions
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    Our tailored investigative plans ensure you get the right
                    support for your unique situation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-accent-50/50 rounded-2xl p-6 border border-brand-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>
              <h3 className="text-lg font-semibold text-brand-800 mb-4">
                Our 4-Step Approach
              </h3>
              <ol className="mt-4 grid sm:grid-cols-2 gap-4 text-gray-700">
                <li className="group bg-white rounded-xl p-4 border border-brand-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="text-brand-900 font-bold text-sm">1</span>
                  </div>
                  <span className="font-semibold text-brand-800">Intake</span>
                  <br />
                  <span className="text-sm text-gray-600">
                    Scope and objectives clarified
                  </span>
                </li>
                <li className="group bg-white rounded-xl p-4 border border-brand-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="text-brand-900 font-bold text-sm">2</span>
                  </div>
                  <span className="font-semibold text-brand-800">Plan</span>
                  <br />
                  <span className="text-sm text-gray-600">
                    Case strategy and resources assigned
                  </span>
                </li>
                <li className="group bg-white rounded-xl p-4 border border-brand-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="text-brand-900 font-bold text-sm">3</span>
                  </div>
                  <span className="font-semibold text-brand-800">Execute</span>
                  <br />
                  <span className="text-sm text-gray-600">
                    Fieldwork, surveillance, and analysis
                  </span>
                </li>
                <li className="group bg-white rounded-xl p-4 border border-brand-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="text-brand-900 font-bold text-sm">4</span>
                  </div>
                  <span className="font-semibold text-brand-800">Report</span>
                  <br />
                  <span className="text-sm text-gray-600">
                    Actionable, court-ready documentation
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & testimonials with enhanced design */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-brand-50/40 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-accent-100/30 to-transparent rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-bl from-brand-100/30 to-transparent rounded-full"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-800 mb-4 relative">
                  Clients
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
                </h2>
              </div>
              <p className="text-gray-700 mb-6">
                Trusted by leading insurers and assurance companies.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-700">
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

            <div>
              <div className="relative mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-800 mb-4 relative">
                  Testimonials
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
                </h2>
              </div>
              <div className="space-y-6">
                <div className="group bg-white border border-brand-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>
                  <div className="flex items-center mb-4">
                    <div className="flex text-accent-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors leading-relaxed">
                    "Discreet surveillance and thorough documentation—exactly
                    what our case required. Professional and reliable service."
                  </p>
                  <div className="text-sm text-gray-500 mt-3 font-medium">
                    Senior Associate, Law Firm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with enhanced styling */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-50/30 to-accent-50/20"></div>
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-bl from-accent-100/20 to-transparent rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-tr from-brand-100/20 to-transparent rounded-full"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-800 via-brand-900 to-brand-800 p-8 md:p-12 text-white text-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-accent-400"></div>

            <div className="relative z-10">
              <div className="inline-block mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-brand-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need clarity on a case?
              </h2>
              <p className="text-brand-200 mb-8 max-w-2xl mx-auto text-lg">
                Speak with an investigator today for a confidential
                consultation. We're ready to help with professional expertise
                you can trust.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <NavLink
                  to="/contact"
                  className="group bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-brand-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
                >
                  <span className="flex items-center justify-center">
                    Request consultation
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </NavLink>
                <NavLink
                  to="/services"
                  className="group bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-brand-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 inline-block"
                >
                  <span className="flex items-center justify-center">
                    Explore services
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
