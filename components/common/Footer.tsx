import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#0c447b] text-white py-16 px-4 relative z-10"
      style={{
        backgroundImage: "url('/images/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#0c447b] opacity-95 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-[1400px] mx-auto">
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
            <motion.h3
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              About Company
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsums.
            </motion.p>
          </div>

          {/* Useful Links */}
          <div>
            <motion.h3
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Useful Links
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <motion.a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  About Us
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                >
                  Careers
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                >
                  Pricing
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  Contact
                </motion.a>
              </div>
              <div className="space-y-3">
                <motion.a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Projects
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                >
                  Blog
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                  Services
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                >
                  Team
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  Terms of use
                </motion.a>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div>
            <motion.h3
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Office Address
            </motion.h3>
            <motion.address
              className="text-gray-300 not-italic mb-8"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              42 Mamnoun Street, Saba
              <br />
              Carpet and Antiques Store, UK
            </motion.address>

            <motion.h3
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              Email Address
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-2"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            >
              Interested in working with us?
            </motion.p>
            <motion.a
              href="mailto:kinesis@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              kinesis@gmail.com
            </motion.a>
          </div>

          {/* Phone Number & Social */}
          <div>
            <motion.h3
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Phone Number
            </motion.h3>
            <div className="space-y-2 mb-8">
              <motion.a
                href="tel:+971551579261"
                className="block text-gray-300 hover:text-white transition-colors"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                +971 551 579 261
              </motion.a>
              <motion.a
                href="tel:+971555961659"
                className="block text-gray-300 hover:text-white transition-colors"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              >
                +97 155 596 1659
              </motion.a>
            </div>

            <motion.h3
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              Follow Us
            </motion.h3>
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
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            © 2025 Kinesis. Designed by TruedgeDigital
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
