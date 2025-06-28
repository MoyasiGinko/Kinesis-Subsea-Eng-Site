"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/">
            <img
              src="https://Kinesis Subsea Engineeringplc.com/dist/images/logo-footer.png"
              alt="Kinesis Subsea Engineering Footer Logo"
              className="h-12 w-auto mb-4"
            />
          </Link>
          <p className="text-gray-400 text-sm">The energy within.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/what-we-deliver" className="hover:text-white">
                What We Deliver
              </Link>
            </li>
            <li>
              <Link href="/who-we-are" className="hover:text-white">
                Who We Are
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="hover:text-white">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">
                Join Us
              </Link>
            </li>
            <li>
              <Link href="/news-insights" className="hover:text-white">
                News & Insights
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">
            Office Locator Australia Austria Azerbaijan Bahrain Canada China
            Colombia Egypt Germany Guyana India Indonesia Iraq Ireland
            Kazakhstan Kingdom of Saudi Arabia Kuwait Malaysia Mozambique The
            Netherlands Oman Qatar Senegal Singapore South Korea Trinidad Turkey
            United Arab Emirates United Kingdom United States
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/terms-conditions" className="hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://code.apps.Kinesis Subsea Engineeringplc.com/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link
                href="/safety-sustainability-policy"
                className="hover:text-white"
              >
                Safety & Sustainability Policy
              </Link>
            </li>
            <li>
              <Link
                href="/Kinesis Subsea Engineering-quality-policy"
                className="hover:text-white"
              >
                Quality Policy
              </Link>
            </li>
            <li>
              <Link
                href="/inclusion-belonging-policy"
                className="hover:text-white"
              >
                Inclusion & Belonging Policy
              </Link>
            </li>
            <li>
              <Link
                href="/sustainability/principles/leading-by-example/modern-slavery-statement"
                className="hover:text-white"
              >
                Modern Slavery Statement
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
        <p>
          © {new Date().getFullYear()} Kinesis Subsea Engineering. All rights
          reserved.
        </p>
        <p>
          Website{" "}
          <a
            href="https://madebyshape.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline"
          >
            MadeByShape
          </a>
        </p>
      </div>
    </footer>
  );
}
