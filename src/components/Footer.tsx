
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-security-dark-blue text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-security-red mr-2" />
              <h3 className="text-2xl font-bold">PowerShield</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Providing top-tier security services with trained professionals to ensure your safety and peace of mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-security-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-security-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-security-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-security-red transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-security-red transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-security-red transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-security-red transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-security-red transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-security-red transition-colors">Careers</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-security-red transition-colors">Security Guards</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-security-red transition-colors">Event Security</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-security-red transition-colors">Residential Security</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-security-red transition-colors">Corporate Security</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-security-red transition-colors">Industrial Security</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="text-security-red mr-2">Address:</span>
                <span className="text-gray-300">MLU 37 First Floor, DDA Flat Bindapur, B Block Pocket 3, Dwarka, New Delhi 110059</span>
              </li>
              <li className="flex">
                <span className="text-security-red mr-2">Phone:</span>
                <a href="tel:+919971219059" className="text-gray-300 hover:text-security-red">+91 9971219059</a>
              </li>
              <li className="flex">
                <span className="text-security-red mr-2">Email:</span>
                <a href="mailto:sarvasecure0707@gmail.com" className="text-gray-300 hover:text-security-red">sarvasecure0707@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} PowerShield Security. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-security-red transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-security-red transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
