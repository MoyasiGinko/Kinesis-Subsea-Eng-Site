"use client";

import { useState } from "react";

interface ContactFormData {
  fullName: string;
  email: string;
  inquiry: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    inquiry: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="relative bg-primary-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute left-2 -top-2 w-1/2 h-full">
          <div className="absolute left-0 top-8 w-64 h-64 opacity-10">
            <div className="grid grid-cols-8 gap-1 w-full h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="text-white flex-1 lg:flex-[1.5]">
            <div className="mb-8">
              <p className="text-sm font-semibold tracking-wider uppercase mb-4 opacity-90">
                CONTACT
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Have a project in mind?
                <br />
                Contact with us
              </h2>
              <p className="text-lg opacity-90 leading-relaxed">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form by
                injected humour.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid sm:grid-cols-2 gap-12">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12   flex items-center justify-center">
                  <svg
                    className="w-12 h-12"
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
                  <h3 className="text-xl font-semibold mb-2">United Kingdom</h3>
                  <p className="opacity-90">42 Abardeen Street, UK</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <svg
                    className="w-12 h-12"
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
                  <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                  <p className="opacity-90">+971 551 579 261</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12  flex items-center justify-center">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Address</h3>

                  <p className="opacity-90">support.kinesis@gmail.com</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12  flex items-center justify-center">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Opening Hour</h3>
                  <p className="opacity-90">Mon - Fri: 09am - 07pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className="bg-[#04539d] backdrop-blur-sm p-8 relative flex-1 lg:flex-[1]"
            style={{
              backgroundImage: "url('/images/contact-bg-03.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-white opacity-90 mb-8">
              The point of using Lorem Ipsum is that it has more-or-less normal
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20  text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20  text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  placeholder="Your Inquiry"
                  className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20  text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write Your Message"
                  rows={5}
                  className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20  text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-primary-blue font-semibold py-4 px-8  hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transform "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
