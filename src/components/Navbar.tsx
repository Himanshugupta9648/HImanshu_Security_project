
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-security-dark-blue text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-1" />
              <span>+91 9971219059</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-1" />
              <span>sarvasecure0707@gmail.com</span>
            </div>
          </div>
          <div>
            <Button variant="outline" className="text-white border-white hover:bg-security-red hover:text-white">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <div className="font-bold text-2xl text-security-dark-blue">
                PowerShield <span className="text-security-red">Security</span>
              </div>
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-security-dark-blue p-2 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-security-dark-blue hover:text-security-red font-medium">
                Home
              </Link>
              <Link to="/about" className="text-security-dark-blue hover:text-security-red font-medium">
                About Us
              </Link>
              <Link to="/services" className="text-security-dark-blue hover:text-security-red font-medium">
                Services
              </Link>
              <Link to="/contact" className="text-security-dark-blue hover:text-security-red font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <Link to="/" className="text-security-dark-blue hover:text-security-red font-medium py-2 border-b">
                Home
              </Link>
              <Link to="/about" className="text-security-dark-blue hover:text-security-red font-medium py-2 border-b">
                About Us
              </Link>
              <Link to="/services" className="text-security-dark-blue hover:text-security-red font-medium py-2 border-b">
                Services
              </Link>
              <Link to="/contact" className="text-security-dark-blue hover:text-security-red font-medium py-2 border-b">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 py-2">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-security-blue" />
                  <span>+91 9971219059</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-security-blue" />
                  <span>sarvasecure0707@gmail.com</span>
                </div>
                <Button variant="default" className="bg-security-red hover:bg-security-dark-blue mt-2">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
