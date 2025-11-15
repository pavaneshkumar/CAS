import React, { useState } from "react";
import { CheckCircle2, MapPin, Mail, Phone } from "lucide-react";

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
                <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" strokeWidth={1.5} />
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
                <MapPin className="h-6 w-6 text-brand-blue mr-3" />
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
                <Mail className="h-6 w-6 text-brand-blue mr-3" />
                Email Us
              </h3>
              <p className="mt-1 text-gray-600">contact@cloudadept.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-black flex items-center">
                <Phone className="h-6 w-6 text-brand-blue mr-3" />
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
