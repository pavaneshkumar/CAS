import React from "react";
import { Link } from "react-router-dom";

const ServiceCard: React.FC<{
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
  linkTo: string;
}> = ({ icon, title, description, features, linkTo }) => (
  <Link
    to={linkTo}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col group"
  >
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-brand-black">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
    <div className="mt-6 pt-6 border-t border-gray-200 flex-grow">
      <h4 className="text-md font-medium text-brand-black">
        Key Capabilities:
      </h4>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="flex-shrink-0 h-5 w-5 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-6 text-right font-semibold text-brand-blue group-hover:underline">
      Learn More &rarr;
    </div>
  </Link>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "ServiceNow IT Service Management (ITSM)",
      description:
        "Modernize your IT service delivery with best-practice ITSM solutions on the Now Platform.",
      features: [
        "Incident, Problem & Change Management",
        "Service Catalog & Request Management",
        "Configuration Management Database (CMDB)",
        "Asset Management",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      linkTo: "/services/itsm",
    },
    {
      title: "ServiceNow IT Operations Management (ITOM)",
      description:
        "Gain visibility and control over your infrastructure and services with intelligent operations management.",
      features: [
        "Discovery & Service Mapping",
        "Event Management",
        "Orchestration & Automation",
        "Cloud Management",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      linkTo: "/services/itom",
    },
    {
      title: "ServiceNow Customer Service (CSM)",
      description:
        "Connect your customer service from the front to the back office to resolve issues proactively and efficiently.",
      features: [
        "Case & Major Issue Management",
        "Omni-Channel Engagement",
        "Self-Service Portals",
        "Field Service Management",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
          />
        </svg>
      ),
      linkTo: "/services/csm",
    },
    {
      title: "Custom Application Development",
      description:
        "Build powerful, custom business applications on the Now Platform to meet your unique needs and workflows.",
      features: [
        "Scoped Application Development",
        "UI Builder & Workspace Design",
        "Flow Designer & Process Automation",
        "Legacy System Modernization",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      linkTo: "/services/custom-app-development",
    },
    {
      title: "ServiceNow Platform Integration",
      description:
        "Seamlessly connect ServiceNow with other enterprise systems to create a unified and efficient ecosystem.",
      features: [
        "REST/SOAP API Integrations",
        "IntegrationHub Spokes",
        "Third-Party System Connectors",
        "Data Synchronization",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      ),
      linkTo: "/services/integration",
    },
    {
      title: "Managed Services & Support",
      description:
        "Ensure the health, performance, and continuous improvement of your ServiceNow instance with our dedicated support.",
      features: [
        "24/7 Platform Administration",
        "Proactive Health Monitoring",
        "Release & Upgrade Management",
        "Enhancement Development",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      ),
      linkTo: "/services/managed-services",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-black tracking-tight">
            Our ServiceNow Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Comprehensive solutions on the Now Platform designed to meet your
            unique business challenges and drive your success.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
