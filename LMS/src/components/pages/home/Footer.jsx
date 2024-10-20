import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">QuranConnect</h2>
            <p className="text-green-200">Empowering Muslims worldwide with authentic Islamic education and Quranic studies.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-green-200 hover:text-white">Islamic Courses</Link></li>
              <li><Link to="/scholars" className="text-green-200 hover:text-white">Our Scholars</Link></li>
              <li><Link to="/students" className="text-green-200 hover:text-white">For Students</Link></li>
              <li><Link to="/about" className="text-green-200 hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-green-200 hover:text-white">Help Center</Link></li>
              <li><Link to="/faq" className="text-green-200 hover:text-white">FAQs</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-green-200 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-green-200 mb-4">Subscribe to our newsletter for Islamic insights and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 bg-green-800 text-white rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-green-200 hover:text-white"><Facebook size={24} /></a>
            <a href="#" className="text-green-200 hover:text-white"><Twitter size={24} /></a>
            <a href="#" className="text-green-200 hover:text-white"><Instagram size={24} /></a>
            <a href="#" className="text-green-200 hover:text-white"><Youtube size={24} /></a>
          </div>
          <div className="text-green-200 text-sm">
            © {new Date().getFullYear()} QuranConnect. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;