
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "PowerShield Security has provided excellent security services for our residential complex. Their professional guards and attention to detail give us complete peace of mind.",
    author: "Rajiv Kumar",
    title: "Resident Welfare Association President"
  },
  {
    quote: "We hired PowerShield for our corporate event and were impressed by their professionalism and efficiency. They managed security seamlessly while being courteous to our guests.",
    author: "Priya Sharma",
    title: "Event Manager, Corporate Solutions"
  },
  {
    quote: "Our factory operates 24/7, and PowerShield's security team has been exceptional in maintaining vigilance and following all protocols. Highly recommended!",
    author: "Sanjay Patel",
    title: "Operations Head, Manufacturing Industries"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-security-dark-blue mb-3">Client Testimonials</h2>
          <div className="w-20 h-1 bg-security-red mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8">
              <div className="text-security-red mb-4">
                <Quote size={48} />
              </div>
              <p className="text-lg text-gray-700 italic mb-6">
                {testimonials[currentIndex].quote}
              </p>
              <div>
                <p className="font-bold text-security-dark-blue">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].title}</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-security-dark-blue text-white hover:bg-security-red transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-security-dark-blue text-white hover:bg-security-red transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-security-red' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
