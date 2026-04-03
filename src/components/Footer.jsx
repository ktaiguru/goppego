import { Mail, Globe, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#060e1d' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-500"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/education"
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-500"
                >
                  Education Consulting
                </a>
              </li>
              <li>
                <a
                  href="/ai-services"
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-500"
                >
                  AI Services
                </a>
              </li>
              <li>
                <a
                  href="/ai-services"
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-500"
                >
                  Implementation
                </a>
              </li>
              <li>
                <a
                  href="/ai-services"
                  className="text-gray-300 transition-colors duration-200 hover:text-yellow-500"
                >
                  Training
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <p className="text-gray-300 mb-4 flex items-center gap-2">
              <Mail size={18} style={{ color: '#D4A017' }} />
              <a
                href="mailto:info@goppego.com"
                className="hover:text-yellow-500 transition-colors duration-200"
              >
                info@goppego.com
              </a>
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-300 transition-colors duration-200 hover:text-yellow-500"
              >
                <Globe size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="text-gray-300 transition-colors duration-200 hover:text-yellow-500"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t" style={{ borderColor: '#0f2244' }} />

        {/* Copyright */}
        <div className="mt-8">
          <p className="text-gray-400 text-sm text-center">
            Copyright © 2024 G.O.P.P.E. Go! All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
