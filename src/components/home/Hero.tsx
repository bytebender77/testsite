import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-orange-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-yellow-300 opacity-20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4 animate-pulse">
              Chhath Puja Special
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Authentic <span className="text-amber-600">Thekua</span> & <span className="text-orange-600">Laddoo</span> for Your Chhath Celebrations
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-lg">
              Handcrafted with pure desi ghee and traditional recipes passed down through generations. Perfect prasad for your Chhath Puja rituals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link to="/shop">
                <Button size="lg">
                  Shop Now
                </Button>
              </Link>
              <Link to="/festival-info">
                <Button variant="outline" size="lg">
                  Learn About Chhath
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-xl opacity-40"></div>
              <img 
                src="/chhatpuja.PNG" 
                alt="Traditional Thekua for Chhath Puja" 
                className="relative rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105 z-10 w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-3 z-20 transform rotate-6 animate-bounce-slow">
                <div className="text-amber-500 font-bold">Limited Time</div>
                <div className="text-gray-800 font-medium">Free Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;