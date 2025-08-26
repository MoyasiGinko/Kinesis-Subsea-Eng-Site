import React, { useState } from "react";

const ProjectProcess: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const processSteps = [
    {
      step: "01",
      title: "Design and Planning",
      description:
        "Including standard dummy text took since the when an unknown printer took a galley type scrambled.",
    },
    {
      step: "02",
      title: "Component Sourcing",
      description:
        "Including standard dummy text took since the when an unknown printer took a galley type scrambled.",
    },
    {
      step: "03",
      title: "Testing and Quality",
      description:
        "Including standard dummy text took since the when an unknown printer took a galley type scrambled.",
    },
    {
      step: "04",
      title: "Final Assembly",
      description:
        "Including standard dummy text took since the when an unknown printer took a galley type scrambled.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Section - Process Steps */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-5xl font-bold text-primary-blue mt-2">
                Project implementation process
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                A clear, step-by-step approach from design through final
                assembly to ensure quality and on-time delivery.
              </p>
            </div>

            {/* Process Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-none shadow-sm border border-gray-100"
                >
                  {/* Step Number */}
                  <div className="group">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary-blue rounded-none flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {step.step}
                        </span>
                      </div>

                      {/* Decorative design filling the remaining space */}
                      <div className="flex-1 ml-4 flex items-center">
                        {/* dotted line - fills when the card (group) is hovered */}
                        <div className="flex-1 h-px w-full border-t border-dotted border-primary-blue/30 transition-colors duration-300 ease-in-out group-hover:border-primary-blue" />

                        {/* small accent dots to the right */}
                        <div className="ml-3 flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary-blue/30 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-primary-blue" />
                          <span className="w-2 h-2 bg-primary-blue/20 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-primary-blue/80" />
                          <span className="w-2 h-2 bg-primary-blue/10 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-primary-blue/60" />
                        </div>
                      </div>
                    </div>

                    {/* Move title + description inside the same group so hovering anywhere on the card triggers the fill */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-none shadow-sm border border-gray-100 sticky top-8">
              {/* Form Header */}
              <div className="mb-8">
                <div className="w-full h-1 bg-primary-blue mb-6"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Have any Question?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The point of using Lorem Ipsum is that it has more-or-less
                  packages normal point of using.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-none text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />

                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-none text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />

                <input
                  type="text"
                  name="inquiry"
                  placeholder="Your Inquiry"
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-none text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />

                <textarea
                  name="message"
                  placeholder="Write Here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-none text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-primary-blue text-white py-3 px-6 rounded-none font-medium hover:bg-primary-blue-hover transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProcess;
