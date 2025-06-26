import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins">Sahayam</h3>
                <p className="text-gray-400 text-sm">Caring hands for ageing hearts</p>
              </div>
            </div>
            <p className="text-gray-300 font-lato leading-relaxed">
              Professional elder care services in Hyderabad for families living abroad. 
              We provide compassionate, reliable care that gives you peace of mind while ensuring 
              your parents' comfort and dignity.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 font-lato"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 font-lato"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 font-lato"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#pricing')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 font-lato"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#discovery-call')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 font-lato"
                >
                  Book a Call
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 font-lato">24/7 Companionship</li>
              <li className="text-gray-300 font-lato">Healthcare Services</li>
              <li className="text-gray-300 font-lato">Grooming & Personal Care</li>
              <li className="text-gray-300 font-lato">Dietary Meals & Nutrition</li>
              <li className="text-gray-300 font-lato">Cleaning Services</li>
              <li className="text-gray-300 font-lato">Customized Care Plans</li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 font-lato">Hyderabad, Telangana</p>
                  <p className="text-gray-300 font-lato">India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a
                  href="tel:+918328635419"
                  className="text-gray-300 hover:text-teal-400 transition-colors font-lato"
                >
                  +91 8328635419
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:sahayamcare@gmail.com"
                  className="text-gray-300 hover:text-teal-400 transition-colors font-lato"
                >
                  sahayamcare@gmail.com
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-lato text-sm">
              © 2025 Sahayam Elder Care. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors font-lato">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors font-lato">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors font-lato">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;