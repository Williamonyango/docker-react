import React, { useState } from "react";
import axios from "axios";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    axios
      .post("https://aciprobeinvestigation.co.ke/contact.php", formData)
      .then(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setSuccess("Your message has been sent successfully!");
        setLoading(false);
      })
      .catch(() => {
        setError(
          "There was an error submitting your message. Please try again."
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      {/* Hero Section for Contact */}
      <section className="section-padding bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-accent-500/30 to-transparent rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-accent-400/20 to-transparent rounded-full"></div>
          <div className="absolute top-10 left-10 w-2 h-2 bg-accent-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-accent-300 rounded-full animate-pulse"></div>
        </div>

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-brand-900"
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
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get In Touch
              <span className="text-accent-500 block mt-2">
                Start Your Investigation Today
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-200 leading-relaxed max-w-2xl mx-auto px-4">
              Ready to discuss your case? Contact our professional investigation
              team for a confidential consultation. We're here to help with
              expertise you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="section-padding bg-gradient-to-br from-white via-brand-50/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-100/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-100/30 to-transparent rounded-full translate-y-16 -translate-x-16"></div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="relative mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-800 mb-4 relative">
                  Send Us a Message
                  <div className="absolute -bottom-3 left-0 w-16 sm:w-20 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mt-6">
                  Fill out the form below and we'll get back to you within 24
                  hours for urgent matters, or the next business day for general
                  inquiries.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-brand-50/50 p-4 sm:p-6 lg:p-8 rounded-3xl border border-brand-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>

                <form
                  className="space-y-4 sm:space-y-6"
                  onSubmit={handleFormSubmit}
                >
                  {success && (
                    <div className="mb-4 text-green-600 font-semibold bg-green-100 border border-green-300 rounded-lg p-3 text-center text-sm sm:text-base">
                      {success}
                    </div>
                  )}
                  {error && (
                    <div className="mb-4 text-red-600 font-semibold bg-red-100 border border-red-300 rounded-lg p-3 text-center text-sm sm:text-base">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-brand-800 mb-2 sm:mb-3">
                        First Name
                      </label>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        type="text"
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm group-hover:shadow-md text-sm sm:text-base"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-brand-800 mb-2 sm:mb-3">
                        Last Name
                      </label>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        type="text"
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm group-hover:shadow-md text-sm sm:text-base"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-brand-800 mb-2 sm:mb-3">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm group-hover:shadow-md text-sm sm:text-base"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-brand-800 mb-2 sm:mb-3">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm group-hover:shadow-md text-sm sm:text-base"
                      placeholder="(0723) 000-000"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-brand-800 mb-2 sm:mb-3">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm group-hover:shadow-md text-sm sm:text-base"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Background Investigation">
                        Background Investigation
                      </option>
                      <option value="Fraud Investigation">
                        Fraud Investigation
                      </option>
                      <option value="Surveillance">Surveillance</option>
                      <option value="Corporate Investigation">
                        Corporate Investigation
                      </option>
                      <option value="Digital Forensics">
                        Digital Forensics
                      </option>
                      <option value="Legal Support">Legal Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-brand-800 mb-2 sm:mb-3">
                      Tell Us About Your Case
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm group-hover:shadow-md resize-none text-sm sm:text-base"
                      placeholder="Please describe your investigation needs, timeline, and any specific requirements..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-brand-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center space-x-3 min-h-[48px] sm:min-h-[56px] ${
                      loading ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="flex items-center space-x-2">
                          <svg
                            className="animate-spin h-5 w-5 text-brand-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span className="text-sm sm:text-base">
                            Sending Message...
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="text-sm sm:text-base">
                          Send Message
                        </span>
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Why Contact Us Card */}
            <div className="order-1 lg:order-2 hidden lg:block">
              <div className="bg-gradient-to-br from-white to-accent-50/30 rounded-3xl p-4 sm:p-6 lg:p-8 border border-brand-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>

                <div className="relative mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-800 mb-4 relative">
                    Why Contact Us?
                    <div className="absolute -bottom-2 left-0 w-12 sm:w-16 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-2xl border border-brand-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-brand-900"
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
                    <div>
                      <h4 className="font-semibold text-brand-800 mb-2 group-hover:text-brand-900 transition-colors text-sm sm:text-base">
                        Confidential Consultations
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors text-sm">
                        Strict confidentiality protocols ensure your case
                        details remain secure and protected.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-2xl border border-brand-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-brand-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-800 mb-2 group-hover:text-brand-900 transition-colors text-sm sm:text-base">
                        Rapid Response
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors text-sm">
                        24/7 availability for urgent matters with immediate
                        mobilization when time is critical.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-2xl border border-brand-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-brand-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-800 mb-2 group-hover:text-brand-900 transition-colors text-sm sm:text-base">
                        Nationwide Coverage
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors text-sm">
                        Comprehensive investigation services across all regions
                        of Kenya with local expertise.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-3 sm:p-4 text-center border border-brand-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="text-lg sm:text-2xl font-bold text-brand-800 mb-1">
                      &lt; 24hrs
                    </div>
                    <div className="text-brand-600 text-xs sm:text-sm">
                      Response Time
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-3 sm:p-4 text-center border border-accent-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="text-lg sm:text-2xl font-bold text-brand-800 mb-1">
                      24/7
                    </div>
                    <div className="text-brand-600 text-xs sm:text-sm">
                      Availability
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <section className="hidden lg:block py-4">
                <div className="bg-gradient-to-br from-brand-800 via-brand-900 to-brand-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-accent-400"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold">Operating Hours</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                        <span className="text-brand-200 font-medium">
                          Monday - Friday:
                        </span>
                        <span className="text-accent-400 font-bold">
                          8:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                        <span className="text-brand-200 font-medium">
                          Saturday:
                        </span>
                        <span className="text-accent-400 font-bold">
                          9:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-xl backdrop-blur-sm border border-accent-400/30 hover:from-accent-500/30 hover:to-accent-600/30 transition-all duration-300">
                        <span className="text-white font-medium flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-accent-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          Emergency cases:
                        </span>
                        <span className="text-accent-400 font-bold">
                          24/7 Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Business Profile */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-brand-50/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-20 w-3 h-3 bg-brand-800 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/2 left-1/4 w-1 h-1 bg-accent-400 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start justify-center">
            <div className="space-y-6 sm:space-y-8">
              {/* Head Office */}
              <div className="flex flex-col justify-center">
                <div className="relative mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-800 mb-4 relative">
                    Head Office
                    <div className="absolute -bottom-3 left-0 w-16 sm:w-20 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-white to-brand-50/50 rounded-3xl p-4 sm:p-6 lg:p-8 border border-brand-100 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-brand-800"></div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="group flex items-start p-3 sm:p-4 bg-white rounded-2xl border border-brand-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-brand-900"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-brand-800 mb-2 sm:mb-3 group-hover:text-brand-900 transition-colors">
                          Physical Address
                        </h4>
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors text-sm sm:text-base">
                          Nairobi, City Square
                          <br />
                          P.O. Box 54241
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start p-3 sm:p-4 bg-white rounded-2xl border border-brand-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-brand-900"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-brand-800 mb-2 sm:mb-3 group-hover:text-brand-900 transition-colors">
                          Phone Numbers
                        </h4>
                        <div className="space-y-2 text-gray-700 group-hover:text-gray-800 transition-colors text-sm sm:text-base">
                          <p className="font-medium">
                            Primary:{" "}
                            <span className="font-normal">0723 883 314</span>
                          </p>
                          <p className="font-medium">
                            Secondary:{" "}
                            <span className="font-normal">0741 597 819</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group flex items-start p-3 sm:p-4 bg-white rounded-2xl border border-brand-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-brand-900"
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
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-brand-800 mb-2 sm:mb-3 group-hover:text-brand-900 transition-colors">
                          Email Address
                        </h4>
                        <p className="text-gray-700 font-medium group-hover:text-gray-800 transition-colors text-sm sm:text-base">
                          Aciprobeinvestigation@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Profile */}
              <div>
                <div className="relative mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-800 mb-4 relative">
                    Business Profile
                    <div className="absolute -bottom-3 left-0 w-16 sm:w-20 h-1 bg-gradient-to-r from-accent-500 to-brand-700 rounded-full"></div>
                  </h2>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="group bg-gradient-to-br from-white to-brand-50/50 border border-brand-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-500 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-brand-900"
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
                      <span className="font-bold text-base sm:text-lg text-brand-800 group-hover:text-brand-900 transition-colors">
                        Registered Kenyan Firm
                      </span>
                    </div>
                    <p className="text-gray-600 ml-11 sm:ml-14 group-hover:text-gray-700 transition-colors text-sm">
                      Fully licensed and compliant with all regulatory
                      requirements
                    </p>
                  </div>

                  <div className="group bg-gradient-to-br from-white to-brand-50/50 border border-brand-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-500 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-brand-900"
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
                      <span className="font-bold text-base sm:text-lg text-brand-800 group-hover:text-brand-900 transition-colors">
                        Multi-Sector Expertise
                      </span>
                    </div>
                    <p className="text-gray-600 ml-11 sm:ml-14 group-hover:text-gray-700 transition-colors text-sm">
                      Serving legal, insurance, financial, public, and corporate
                      sectors
                    </p>
                  </div>

                  <div className="group bg-gradient-to-br from-white to-brand-50/50 border border-brand-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-500 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-brand-900"
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
                      <span className="font-bold text-base sm:text-lg text-brand-800 group-hover:text-brand-900 transition-colors">
                        Professional Standards
                      </span>
                    </div>
                    <p className="text-gray-600 ml-11 sm:ml-14 group-hover:text-gray-700 transition-colors text-sm">
                      Known for efficiency, integrity, and discretion in all
                      operations
                    </p>
                  </div>

                  <div className="group bg-gradient-to-br from-white to-brand-50/50 border border-brand-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-500 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-brand-900"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                      <span className="font-bold text-base sm:text-lg text-brand-800 group-hover:text-brand-900 transition-colors">
                        Ethical Compliance
                      </span>
                    </div>
                    <p className="text-gray-600 ml-11 sm:ml-14 group-hover:text-gray-700 transition-colors text-sm">
                      Ethical and legal standards upheld in every assignment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours Section */}
      <section className="section-padding bg-gradient-to-br from-white via-brand-50/30 to-white relative overflow-hidden block lg:hidden">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-800 via-brand-900 to-brand-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-accent-400"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-brand-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Operating Hours
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <span className="text-brand-200 font-medium text-sm sm:text-base">
                    Monday - Friday:
                  </span>
                  <span className="text-accent-400 font-bold text-sm sm:text-base">
                    8:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <span className="text-brand-200 font-medium text-sm sm:text-base">
                    Saturday:
                  </span>
                  <span className="text-accent-400 font-bold text-sm sm:text-base">
                    9:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 sm:p-4 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-xl backdrop-blur-sm border border-accent-400/30 hover:from-accent-500/30 hover:to-accent-600/30 transition-all duration-300">
                  <span className="text-white font-medium flex items-center text-sm sm:text-base">
                    <svg
                      className="w-4 h-4 mr-2 text-accent-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Emergency cases:
                  </span>
                  <span className="text-accent-400 font-bold text-sm sm:text-base">
                    24/7 Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-white to-brand-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-bl from-accent-100/20 to-transparent rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-tr from-brand-100/20 to-transparent rounded-full"></div>
        </div>

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-800 via-brand-900 to-brand-800 rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-accent-400"></div>

            <div className="relative z-10">
              <div className="inline-block mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-brand-900"
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

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-brand-200 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg">
                Don't wait when you need answers. Contact our professional
                investigation team today and take the first step toward
                resolving your case with confidence.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a
                  href="tel:0723883314"
                  className="group bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-brand-900 font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
                >
                  <span className="flex items-center justify-center text-sm sm:text-base">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Now: 0723 883 314
                  </span>
                </a>
                <a
                  href="https://wa.me/254741597819"
                  className="group bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-brand-900 font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 inline-block"
                >
                  <span className="flex items-center justify-center text-sm sm:text-base">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="WhatsApp"
                    >
                      <title>WhatsApp</title>
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.99.52 3.853 1.42 5.48L2 22l4.62-1.34A9.95 9.95 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM17.2 15.7c-.2.55-1.18 1.06-1.64 1.13-.44.07-1.04.09-1.88-.19-.84-.28-2.01-.86-3.2-2.04-1.18-1.18-1.76-2.36-2.04-3.2-.27-.84-.26-1.44-.19-1.88.06-.46.58-1.44 1.13-1.64.53-.19.98-.02 1.32.18.35.2.9.65 1.03.7.13.06.23.09.36-.02.12-.11.44-.37.6-.5.16-.12.33-.11.55.04.21.15 1.27.88 1.48 1.02.22.14.36.11.52-.03.16-.14.66-.69.84-.93.18-.24.34-.2.58-.08.23.12 1.4.67 1.72.8.33.14.55.26.63.4.08.14.08.83-.14 1.57z" />
                    </svg>
                    WhatsApp
                  </span>
                </a>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-brand-700/50">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-brand-200 text-xs sm:text-sm">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent-400"
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
                    100% Confidential
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Rapid Response
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent-400"
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
                    Licensed Professionals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
