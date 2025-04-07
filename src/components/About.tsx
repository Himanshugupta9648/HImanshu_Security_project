
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const About = () => {
  const benefits = [
    "Professionally trained security personnel",
    "24/7 monitoring and rapid response",
    "Customized security solutions",
    "Background verified staff",
    "State-of-the-art equipment",
    "Continuous training and development"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-security-dark-blue mb-3">About PowerShield Security</h2>
            <div className="w-20 h-1 bg-security-red mb-6"></div>
            <p className="text-gray-700 mb-6">
              PowerShield Security is a premier security service provider committed to delivering top-notch security solutions for homes, businesses, and events. With years of industry experience, we have established ourselves as a trusted name in security services.
            </p>
            <p className="text-gray-700 mb-6">
              Our team consists of highly trained professionals who undergo rigorous selection and training to ensure they meet our stringent standards. We believe in providing peace of mind through reliable, efficient, and effective security services tailored to your specific needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-security-red mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-security-dark-blue hover:bg-security-red text-white">
              Learn More About Us
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611222566295-885a2c99153a?q=80&w=1887&auto=format&fit=crop" 
                alt="Security professional" 
                className="rounded-lg shadow-xl object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-8 -left-8 bg-security-red p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="text-sm uppercase tracking-wider">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
