import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-brand-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/">
                <Logo />
            </Link>
            <p className="text-gray-600 text-base">
              Your trusted partner in ServiceNow transformation and innovation.
            </p>
            <div className="flex space-x-6">
              {/* Social links can be added here */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/services/itsm" className="text-base text-gray-600 hover:text-brand-blue">ITSM Solutions</Link></li>
                  <li><Link to="/services/itom" className="text-base text-gray-600 hover:text-brand-blue">ITOM & CSM</Link></li>
                  <li><Link to="/services/managed-services" className="text-base text-gray-600 hover:text-brand-blue">Managed Services</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/about" className="text-base text-gray-600 hover:text-brand-blue">About</Link></li>
                  <li><Link to="/contact" className="text-base text-gray-600 hover:text-brand-blue">Contact</Link></li>
                  <li><Link to="/services" className="text-base text-gray-600 hover:text-brand-blue">Services</Link></li>
                </ul>
              </div>
            </div>
             <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Us</h3>
                   <ul className="mt-4 space-y-4 text-base text-gray-600">
                      <li>Infantry Rd, Shivaji Nagar,<br/>Bengaluru, Karnataka 560001</li>
                      <li>(+91) 456-7890</li>
                      <li>contact@cloudadept.com</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-400 pt-8">
          <p className="text-base text-gray-500 xl:text-center">&copy; {new Date().getFullYear()} CloudAdept Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;