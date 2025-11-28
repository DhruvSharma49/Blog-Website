import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  const footerLinks = {
    company: [
      { name: "Features", slug: "/features" },
      { name: "Pricing", slug: "/pricing" },
      { name: "Affiliate Program", slug: "/affiliate" },
    ],
    support: [
      { name: "Help", slug: "/help" },
      { name: "Contact Us", slug: "/contact" },
      { name: "Customer Support", slug: "/support" },
    ],
    legals: [
      { name: "Terms & Conditions", slug: "/terms" },
      { name: "Privacy Policy", slug: "/privacy" },
      { name: "Licensing", slug: "/license" },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-gray-300 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + copyright */}
        <div>
          {/* <div className="flex items-center mb-4">
            <Logo width="10px" />
          </div> */}

          <Link to="/">
            <div className="flex items-center h-12 py4 mb-9">
              <Logo width="100px" />
            </div>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            © {new Date().getFullYear()} Dhruv Sharma. All rights reserved.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.slug}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Support
          </h3>
          <ul className="space-y-2">
            {footerLinks.support.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.slug}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legals */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Legals
          </h3>
          <ul className="space-y-2">
            {footerLinks.legals.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.slug}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom small line */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        Built with ❤️ by Dhruv Sharma
      </div>
    </footer>
  );
}

export default Footer;
