import React from 'react';
import { testimonials } from '../../data/testimonials';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience with our traditional Chhath Puja delicacies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md p-6 relative hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-4 -right-4">
                <div className="bg-amber-500 text-white p-2 rounded-full">
                  <Quote className="h-5 w-5" />
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : 'stroke-current fill-none'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;