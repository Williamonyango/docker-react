import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ServicesHero from "../components/ServicesHero.jsx";
import { servicesData } from "../lib/servicesData.jsx";

function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServicesHero />
      <section id="services" className=" bg-gray-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-brand-800 mb-4">
                Key Services Overview
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">Motor Accident Claims:</span>{" "}
                  Investigating details, verifying documentation, and collecting
                  evidence (photos, videos, statements).
                </li>
                <li>
                  <span className="font-semibold">Theft Investigations:</span>{" "}
                  Handling vehicle theft, burglary, and fidelity breach cases.
                </li>
                <li>
                  <span className="font-semibold">Tracing:</span> Locating
                  individuals, vehicles, assets, or third parties for debt or
                  legal obligations.
                </li>
                <li>
                  <span className="font-semibold">Litigation Support:</span>{" "}
                  Witness interviews, process serving, and expert court
                  testimony.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-800 mb-4">
                Specialized Services
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">
                    Consultancy & Risk Management:
                  </span>{" "}
                  Security audits, threat analysis, and implementation of
                  protective measures.
                </li>
                <li>
                  <span className="font-semibold">
                    Personal Background Checks:
                  </span>{" "}
                  Employment history, criminal records, and identity
                  verification.
                </li>
                <li>
                  <span className="font-semibold">
                    Business Background Checks:
                  </span>{" "}
                  Ownership, liabilities, financial strength, and credibility
                  evaluation.
                </li>
                <li>
                  <span className="font-semibold">Debt Collection:</span>{" "}
                  Timely, professional recovery with legal escalation when
                  necessary.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
