import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Sunset, Sunrise, Calendar } from 'lucide-react';

const FestivalInfo: React.FC = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Festival of Chhath Puja</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A sacred Hindu festival dedicated to the Sun God and Chhathi Maiya
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg relative">
            <img 
              src="https://www.drishtiias.com/images/uploads/1667468445_image1.png" 
              alt="Chhath Puja Celebration" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">A Celebration of Nature & Gratitude</h3>
              <p className="text-white/90">Ancient traditions honoring the sun's life-giving energy</p>
            </div>
          </div>
          
          {/* Info */}
          <div>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Sun className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ancient Worship</h3>
                  <p className="text-gray-600">
                    Chhath is an ancient Hindu festival dedicated to the Sun God (Surya) and Chhathi Maiya (Goddess of Power/Life-Force) that originated in the Indian subcontinent.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Festival Timing</h3>
                  <p className="text-gray-600">
                    Celebrated six days after Diwali, during the Kartik month of the Hindu calendar. It's a four-day festival with rigorous rituals and fasting.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Sunset className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Evening Offerings</h3>
                  <p className="text-gray-600">
                    Devotees offer prayers to the setting sun, standing in water. Traditional prasad including Thekua is prepared with great purity and devotion.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Sunrise className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Morning Arghya</h3>
                  <p className="text-gray-600">
                    The final offering is made to the rising sun on the last day, concluding the festival with prayers for well-being and prosperity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                to="/festival-info" 
                className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
              >
                Learn more about Chhath Puja
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalInfo;