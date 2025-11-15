import React, { useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { Link } from "react-router-dom";

const FeatureCard: React.FC<{
  icon: React.ReactElement;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-brand-blue mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-brand-black mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServiceHighlightCard: React.FC<{
  icon: React.ReactElement;
  title: string;
  description: string;
  to: string;
}> = ({ icon, title, description, to }) => (
  <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl flex flex-col">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-brand-black">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
    <div className="flex-grow flex items-end">
      <Link
        to={to}
        className="mt-4 font-semibold text-brand-blue hover:text-blue-700 transition-colors"
      >
        Learn More &rarr;
      </Link>
    </div>
  </div>
);

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}> = ({ quote, name, title, imageUrl }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center">
    <p className="text-gray-600 italic">"{quote}"</p>
    <div className="mt-6 flex items-center justify-center">
      <img
        className="h-14 w-14 rounded-full object-cover"
        src={imageUrl}
        alt={`Testimonial from ${name}, ${title}`}
      />
      <div className="ml-4 text-left">
        <p className="font-semibold text-brand-black">{name}</p>
        <p className="text-gray-500">{title}</p>
      </div>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
    "idle"
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("submitted");
    }, 1500);
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-black tracking-tight leading-tight">
              Mastering the{" "}
              <span className="text-brand-blue">ServiceNow Platform</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
              CloudAdept Systems delivers expert ServiceNow implementation,
              development, and managed services to streamline your enterprise
              workflows and drive digital transformation.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/services"
                className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black">
              Why Partner with CloudAdept?
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              We provide the ServiceNow expertise to elevate your business
              operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<HiOutlineBriefcase size={32} />}
              title="Strategic ServiceNow Roadmaps"
              description="Tailored ServiceNow strategies that align with your business goals for maximum ROI."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              }
              title="Secure & Compliant Platform"
              description="Implementing best practices to ensure your ServiceNow instance is secure and compliant."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              }
              title="Optimized Platform Performance"
              description="Fine-tuning your ServiceNow environment for speed, scalability, and reliability."
            />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black">
              Our Core ServiceNow Services
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Tailored solutions for your digital transformation on the Now
              Platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceHighlightCard
              icon={
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
              }
              title="ServiceNow ITSM"
              description="Streamline your IT services with expert implementation of Incident, Problem, and Change Management."
              to="/services/itsm"
            />
            <ServiceHighlightCard
              icon={
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
              }
              title="Managed Platform Services"
              description="Offload the day-to-day administration and support of your ServiceNow instance to our certified experts."
              to="/services/managed-services"
            />
            <ServiceHighlightCard
              icon={
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
              }
              title="Custom App Development"
              description="Build powerful, custom business applications on the Now Platform to meet your unique needs."
              to="/services/custom-app-development"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-black">Trusted by Innovators</h2>
                        <p className="mt-2 text-lg text-gray-600">Here's what our clients say about our ServiceNow expertise.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TestimonialCard
                            quote="CloudAdept's ServiceNow implementation was a game-changer for our IT department. Their expertise was evident from day one, and the project was flawless. Highly recommended!"
                            name="Sarah Johnson"
                            title="CTO, Innovate Inc."
                            imageUrl="https://picsum.photos/200/200?random=6"
                        />
                        <TestimonialCard
                            quote="The managed services team is phenomenal. Our ServiceNow platform has never been more stable, and their proactive support gives us complete peace of mind. A true partner in our success."
                            name="Mark Davis"
                            title="Head of IT, Tech Solutions LLC"
                            imageUrl="https://picsum.photos/200/200?random=7"
                        />
                    </div>
                </div>
            </section> */}

      {/* Partners Section */}
      {/* <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-600">
                        Your Premier ServiceNow Partner
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-gray-500">
                        As dedicated ServiceNow specialists, we leverage deep platform expertise and a commitment to best practices to deliver solutions that provide real, measurable value to your organization.
                    </p>
                </div>
            </section> */}

      {/* Get in Touch Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black">
              Get In Touch
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              We’re here to help and answer any question you might have. We look
              forward to hearing from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              {status === "submitted" ? (
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-16 w-16 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-4 text-2xl font-semibold text-brand-black">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Your message has been sent. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="home-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="home-name"
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="home-email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="home-email"
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="home-message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="home-message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:bg-gray-400"
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="space-y-8 pt-4">
              <div>
                <h3 className="text-lg font-semibold text-brand-black flex items-center">
                  <svg
                    className="h-6 w-6 text-brand-blue mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
                  Our Office
                </h3>
                <p className="mt-1 text-gray-600">
                  Infantry Rd, Shivaji Nagar
                  <br />
                  Bengaluru, Karnataka 560001
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-black flex items-center">
                  <svg
                    className="h-6 w-6 text-brand-blue mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Us
                </h3>
                <p className="mt-1 text-gray-600">
                  cloudadeptsystems@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-black flex items-center">
                  <svg
                    className="h-6 w-6 text-brand-blue mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Us
                </h3>
                <p className="mt-1 text-gray-600">(+91) 703-256-5006</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
