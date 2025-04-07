
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const ContactCta = () => {
  return (
    <section className="py-16 bg-security-red text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Ready to Secure Your Property?</h2>
            <p className="text-white/90 max-w-xl">
              Contact us today for a free consultation and quote. Our security experts are ready to develop a tailored security solution for your needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-security-red hover:bg-gray-100 font-medium">
              Get a Free Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-security-red font-medium">
              <PhoneCall size={18} className="mr-2" /> Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
