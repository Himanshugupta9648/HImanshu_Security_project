
import { Shield, Users, Building, Briefcase, Building2, FileCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    title: "Security Guards",
    description: "Professional security personnel trained to protect your premises, assets, and people.",
    icon: <Shield className="h-10 w-10 text-security-red" />
  },
  {
    title: "Event Security",
    description: "Specialized security services for events, conferences, and gatherings of all sizes.",
    icon: <Users className="h-10 w-10 text-security-red" />
  },
  {
    title: "Residential Security",
    description: "Comprehensive security solutions tailored for residential complexes and societies.",
    icon: <Building className="h-10 w-10 text-security-red" />
  },
  {
    title: "Corporate Security",
    description: "Advanced security protocols designed for corporate environments and offices.",
    icon: <Briefcase className="h-10 w-10 text-security-red" />
  },
  {
    title: "Industrial Security",
    description: "Robust security measures for factories, warehouses, and industrial complexes.",
    icon: <Building2 className="h-10 w-10 text-security-red" />
  },
  {
    title: "Security Audit",
    description: "Thorough assessment of your existing security arrangements to identify vulnerabilities.",
    icon: <FileCheck className="h-10 w-10 text-security-red" />
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-security-dark-blue mb-3">Our Services</h2>
          <div className="w-20 h-1 bg-security-red mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PowerShield Security offers a comprehensive range of security services tailored to meet various security needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg border-t-4 border-t-security-red">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl text-security-dark-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-security-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Button } from "@/components/ui/button";
