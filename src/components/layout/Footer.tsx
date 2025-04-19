import React from 'react';
import { Facebook, Instagram, Twitter, Send, Sun, PhoneCall, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-50 text-gray-700 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="text-amber-500 h-8 w-8" />
              <span className="text-xl font-bold text-amber-700">ChhathDelights</span>
            </div>
            <p className="mb-6">
              Bringing authentic Chhath Puja offerings to your doorstep. Made with love, tradition, and the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-amber-700">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/shop" label="Shop" />
              <FooterLink to="/festival-info" label="Festival Info" />
              <FooterLink to="/contact" label="Contact" />
              <FooterLink to="/terms" label="Terms & Conditions" />
              <FooterLink to="/privacy" label="Privacy Policy" />
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-amber-700">Categories</h3>
            <ul className="space-y-2">
              <FooterLink to="/shop?category=thekua" label="Thekua Collection" />
              <FooterLink to="/shop?category=laddoo" label="Laddoo Varieties" />
              <FooterLink to="/shop?popular=true" label="Popular Items" />
              <FooterLink to="/shop?new=true" label="New Arrivals" />
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-amber-700">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <PhoneCall className="h-5 w-5 text-amber-500 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-500 mt-0.5" />
                <span>info@chhathdelights.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                <span>123 Festive Street, Patna, Bihar, India</span>
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mb-3 text-amber-700">Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-2 rounded-l-md border-gray-300 border flex-grow focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button 
                className="bg-amber-500 text-white p-2 rounded-r-md hover:bg-amber-600 transition-colors"
                aria-label="Subscribe"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-200 mt-10 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} ChhathDelights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  Icon: React.FC<{ className?: string }>;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="bg-amber-100 p-2 rounded-full text-amber-600 hover:bg-amber-500 hover:text-white transition-colors"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="hover:text-amber-600 transition-colors"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;