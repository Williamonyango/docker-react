import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-brand-900 text-white py-8">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 mb-8 md:mb-0">
            <img
              src="/logo.svg"
              alt="Aciprobe Logo"
              className="w-20 h-20 m-0"
            />
            <p className="text-brand-200 mb-6 max-w-md">
              ACIPROBE Investigation Services is a fully registered
              investigative firm offering professional private and commercial
              investigations, risk management, litigation support, and debt
              recovery.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:0723883314"
                className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-brand-900 transition-colors"
              >
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
              </a>
              <a
                href="https://wa.me/254741597819"
                className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-brand-900 transition-colors"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="WhatsApp"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.99.52 3.853 1.42 5.48L2 22l4.62-1.34A9.95 9.95 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM17.2 15.7c-.2.55-1.18 1.06-1.64 1.13-.44.07-1.04.09-1.88-.19-.84-.28-2.01-.86-3.2-2.04-1.18-1.18-1.76-2.36-2.04-3.2-.27-.84-.26-1.44-.19-1.88.06-.46.58-1.44 1.13-1.64.53-.19.98-.02 1.32.18.35.2.9.65 1.03.7.13.06.23.09.36-.02.12-.11.44-.37.6-.5.16-.12.33-.11.55.04.21.15 1.27.88 1.48 1.02.22.14.36.11.52-.03.16-.14.66-.69.84-.93.18-.24.34-.2.58-.08.23.12 1.4.67 1.72.8.33.14.55.26.63.4.08.14.08.83-.14 1.57z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-500">
              Services
            </h4>
            <ul className="space-y-2 text-brand-200">
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-accent-500 transition-colors"
                >
                  Background Investigations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-accent-500 transition-colors"
                >
                  Fraud Investigations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-accent-500 transition-colors"
                >
                  Surveillance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-accent-500 transition-colors"
                >
                  Corporate Investigations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-accent-500 transition-colors"
                >
                  Digital Forensics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-accent-500 transition-colors"
                >
                  Risk Management
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-accent-500 transition-colors"
                >
                  Debt Recovery
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-500">
              Contact Info
            </h4>
            <div className="space-y-3 text-brand-200">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 mr-3 text-accent-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm">
                    Nairobi, City Square
                    <br />
                    P.O. Box 54241
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-accent-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm">
                    0723 883 314
                    <br />
                    0741 597 819
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-accent-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">Aciprobeinvestigation@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-300 text-sm">
            &copy; 2025 Aciprobe Investigation Services. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="flex items-center bg-brand-800 rounded-full px-4 py-2">
              <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-brand-900 font-bold text-sm">20</span>
              </div>
              <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                <span className="text-brand-900 font-bold text-sm">25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
