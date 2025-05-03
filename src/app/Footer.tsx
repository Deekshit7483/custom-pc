'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          {/* Logo / Title */}
          <h2 className="text-2xl font-bold tracking-wide">🚀 PC Builder</h2>

          {/* Tagline */}
          <p className="text-sm text-gray-400">
            Build your dream PC with ease and confidence.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:scale-125"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-transform transform hover:scale-125"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-transform transform hover:scale-125"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-transform transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Bottom Line */}
          <div className="pt-4 border-t border-gray-700 w-full mt-6">
            <p className="text-sm text-white-500 mt-4">
              © {new Date().getFullYear()} PC Builder. All rights reserved.
            </p>
            <p className="text-xs text-white-600">Made with 💻 by Deekshith</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
