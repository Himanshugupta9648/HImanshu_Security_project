
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-security-dark-blue text-white">
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div 
        className="bg-[url('https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2070&auto=format&fit=crop')] 
        bg-cover bg-center min-h-[600px] flex items-center"
      >
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-2xl overflow-hidden">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              Your Safety is Our <span className="text-security-red">Priority</span>
            </h1>
            <p 
              className={`text-lg md:text-xl mb-8 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '0.4s' }}
            >
              PowerShield Security provides comprehensive security solutions tailored to your needs.
              With our professional security services, you can have peace of mind knowing that your safety is in good hands.
            </p>
            <div className={`space-x-4 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.6s' }}>
              <Button className="bg-security-red hover:bg-red-700 text-white px-6 py-2">
                Our Services
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-security-dark-blue">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
