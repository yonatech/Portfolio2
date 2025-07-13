import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                John Doe
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Full-Stack Developer passionate about creating exceptional digital experiences 
                with modern technologies. Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200 group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-gray-300">
                <p>Addis Ababa, Ethiopia</p>
                <p>Yonnyhailu@gamil.com</p>
                <p>+251943886707</p>
              </div>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="mt-6 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
                Back to Top
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>© {currentYear} YONATAN HAILU. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and lots of coffee.</span>
              </div>
              <div className="text-gray-400 text-sm">
                Built with React, TypeScript & Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;