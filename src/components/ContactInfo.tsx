
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-security-dark-blue mb-3">Contact Information</h2>
          <div className="w-20 h-1 bg-security-red mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need a security consultation? Reach out to our team through any of the following channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-t-4 border-t-security-red">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-security-red/10 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-security-red" />
              </div>
              <h3 className="text-lg font-semibold text-security-dark-blue mb-2">Phone</h3>
              <p className="text-gray-600">Call us for immediate assistance</p>
              <a href="tel:+919971219059" className="text-security-blue font-medium mt-2 hover:text-security-red">
                +91 9971219059
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-security-red">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-security-red/10 p-4 rounded-full mb-4">
                <Mail className="h-8 w-8 text-security-red" />
              </div>
              <h3 className="text-lg font-semibold text-security-dark-blue mb-2">Email</h3>
              <p className="text-gray-600">Write to us for quotes and inquiries</p>
              <a href="mailto:sarvasecure0707@gmail.com" className="text-security-blue font-medium mt-2 hover:text-security-red">
                sarvasecure0707@gmail.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-security-red">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-security-red/10 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-security-red" />
              </div>
              <h3 className="text-lg font-semibold text-security-dark-blue mb-2">Address</h3>
              <p className="text-gray-600">Visit our office</p>
              <address className="not-italic text-security-blue font-medium mt-2 hover:text-security-red">
                MLU 37 First Floor, DDA Flat Bindapur<br />
                B Block Pocket 3, Dwarka<br />
                New Delhi 110059
              </address>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-security-red">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-security-red/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-security-red" />
              </div>
              <h3 className="text-lg font-semibold text-security-dark-blue mb-2">Working Hours</h3>
              <p className="text-gray-600">We are available</p>
              <div className="text-security-blue font-medium mt-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Emergency Services: 24/7</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.826557959992!2d77.04517011506833!3d28.579691582437617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b4d2e27e2eb%3A0xf09b1d841d3c8d17!2sDwarka%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1649855532105!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              title="Office Location"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
