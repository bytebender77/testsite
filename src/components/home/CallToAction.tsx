import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-amber-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Celebrate Chhath Puja with Authentic Offerings
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Order now to receive freshly prepared Thekua, Laddoo and other traditional prasad in time for your Chhath Puja celebration. Limited batches available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/shop">
              <Button 
                className="bg-amber-700 text-white hover:bg-amber-800"
                size="lg"
              >
                Shop Festival Collection
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600"
                size="lg"
              >
                Contact for Bulk Orders
              </Button>
            </Link>
          </div>
          <p className="text-amber-200 mt-6 text-sm">
            * Free delivery on orders above ₹1000. Order at least 3 days before your Chhath Puja celebration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;