
import { Shield, Clock, Award, UserCheck } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-12 w-12 text-security-red" />,
    title: "Professional Security",
    description: "Our team consists of well-trained security professionals who follow strict protocols to ensure maximum security."
  },
  {
    icon: <Clock className="h-12 w-12 text-security-red" />,
    title: "24/7 Availability",
    description: "We provide round-the-clock security services, ensuring that your property is protected at all times."
  },
  {
    icon: <Award className="h-12 w-12 text-security-red" />,
    title: "Trusted Experience",
    description: "With years of experience in the industry, we have the expertise to handle various security challenges."
  },
  {
    icon: <UserCheck className="h-12 w-12 text-security-red" />,
    title: "Verified Personnel",
    description: "All our security staff undergo thorough background checks and regular training to maintain high standards."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-security-dark-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose PowerShield Security</h2>
          <div className="w-20 h-1 bg-security-red mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            When it comes to security, you deserve the best. Here's why clients trust us with their security needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-security-blue/20 rounded-lg p-6 backdrop-blur-sm transition-transform duration-300 hover:scale-105">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
