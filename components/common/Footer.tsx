import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c447b] text-white py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 border-b border-gray-300/10">
          <div className="flex items-center">
            <img src="/logo-white.svg" alt="Logo" className="w-60 h-60" />
          </div>

          <p className="text-lg text-gray-300 max-w-md">
            Subscribe for the latest news. Stay updated on the latest trends.
          </p>
          <div className="relative w-full max-w-lg">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="text-base px-6 py-6 pr-36 rounded-full bg-[#0c3c61]  text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue w-full"
            />
            <button
              className="text-lg absolute top-1/2 right-2 -translate-y-1/2 bg-primary-blue hover:bg-primary-blue-hover px-8 py-4 rounded-full font-semibold transition-colors"
              style={{ minWidth: "110px" }}
            >
              Send Message
            </button>
          </div>
        </div>
        {/* <div className="border-b border-gray-300/10 mb-16"></div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">About Company</h3>
            <p className="text-gray-300 mb-6">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsums.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Terms of use
                </a>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Office Address</h3>
            <address className="text-gray-300 not-italic mb-8">
              42 Mamnoun Street, Saba
              <br />
              Carpet and Antiques Store, UK
            </address>

            <h3 className="text-xl font-semibold mb-6">Email Address</h3>
            <p className="text-gray-300 mb-2">Interested in working with us?</p>
            <a
              href="mailto:kinesis@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              kinesis@gmail.com
            </a>
          </div>

          {/* Phone Number & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Phone Number</h3>
            <div className="space-y-2 mb-8">
              <a
                href="tel:+971551579261"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                +971 551 579 261
              </a>
              <a
                href="tel:+971555961659"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                +97 155 596 1659
              </a>
            </div>

            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary-blue-hover rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary-blue-hover rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary-blue-hover rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary-blue-hover rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2025 Kinesis. Designed by TruedgeDigital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
