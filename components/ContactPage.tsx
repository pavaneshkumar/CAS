import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("submitted");
    }, 1500);
  };

  return (
    <div className="bg-white py-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-black tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Have a ServiceNow project in mind or want to learn how the Now
            Platform can transform your business? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
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
                  Your message has been sent. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
                    placeholder="Tell us about your ServiceNow needs..."
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

          {/* Contact Info */}
          <div className="space-y-8">
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
                123 Cloud Way, Suite 500
                <br />
                Tech City, TX 75001
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
              <p className="mt-1 text-gray-600">contact@cloudadept.com</p>
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
              <p className="mt-1 text-gray-600">(123) 456-7890</p>
            </div>
            {/* <div className="rounded-lg overflow-hidden h-64 shadow-md">
                            <img src="https://picsum.photos/800/400?random=map" alt="Map showing the location of the CloudAdept Systems office" className="w-full h-full object-cover" />
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
