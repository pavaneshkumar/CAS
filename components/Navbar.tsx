import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const serviceLinks = [
    { name: 'ITSM', path: '/services/itsm' },
    { name: 'ITOM', path: '/services/itom' },
    { name: 'CSM', path: '/services/csm' },
    { name: 'Custom App Development', path: '/services/custom-app-development' },
    { name: 'Integration', path: '/services/integration' },
    { name: 'Managed Services', path: '/services/managed-services' },
];

const CustomNavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void; }> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
        isActive
          ? 'text-brand-blue'
          : 'text-gray-600 hover:text-brand-blue'
      }`
    }
  >
    {children}
  </NavLink>
);


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isMobileServicesMenuOpen, setMobileServicesMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <CustomNavLink to="/">Home</CustomNavLink>
              <CustomNavLink to="/about">About Us</CustomNavLink>
              
              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setServicesMenuOpen(true)} onMouseLeave={() => setServicesMenuOpen(false)}>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${
                      isActive
                        ? 'text-brand-blue'
                        : 'text-gray-600 hover:text-brand-blue'
                    }`
                  }
                  aria-haspopup="true"
                  aria-expanded={isServicesMenuOpen}
                >
                  Services
                  <svg className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${isServicesMenuOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </NavLink>
                {isServicesMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 bg-white rounded-md shadow-lg py-1 z-20 ring-1 ring-black ring-opacity-5">
                    {serviceLinks.map(link => (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setServicesMenuOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <CustomNavLink to="/contact">Contact</CustomNavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
                to="/contact"
                className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300"
            >
                Get a Quote
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-brand-blue hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-brand-blue"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <CustomNavLink to="/" onClick={() => setIsOpen(false)}>Home</CustomNavLink>
            <CustomNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</CustomNavLink>
            
            {/* Mobile Services Accordion */}
            <div>
              <NavLink 
                to="/services"
                onClick={(e) => {
                    // Prevent navigation on accordion toggle, only toggle
                    e.preventDefault();
                    setMobileServicesMenuOpen(prev => !prev);
                }}
                className={({isActive}) => `w-full flex justify-between items-center text-left px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-brand-blue bg-blue-50' : 'text-gray-600 hover:text-brand-blue hover:bg-gray-50'}`}
                aria-expanded={isMobileServicesMenuOpen}
              >
                <span>Services</span>
                <svg className={`w-5 h-5 transform transition-transform duration-200 ${isMobileServicesMenuOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </NavLink>
              {isMobileServicesMenuOpen && (
                <div className="pl-7 mt-1 space-y-1">
                  {serviceLinks.map(link => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-left w-full px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-brand-blue hover:bg-gray-50"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <CustomNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</CustomNavLink>
          </div>
           <div className="px-5 pb-4">
                <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center block bg-brand-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300"
                >
                    Get a Quote
                </Link>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;