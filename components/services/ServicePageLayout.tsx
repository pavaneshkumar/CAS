import React from 'react';
import { Link } from 'react-router-dom';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  imageUrl: string;
  children: React.ReactNode;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-24 md:py-32">
        <div className="absolute inset-0">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">{description}</p>
        </div>
      </section>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {children}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-black sm:text-4xl">
            <span className="block">Ready to Transform Your Operations?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Let's discuss how our {title.replace('ServiceNow', '')} expertise can drive success for your business.
          </p>
          <Link
            to="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-blue hover:bg-opacity-90 sm:w-auto"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
