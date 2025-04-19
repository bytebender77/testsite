import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Calendar, Sun, Sunset, Sunrise, Info } from 'lucide-react';

const FestivalInfoPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-amber-50 to-white py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="mb-12 relative">
            <div className="absolute inset-0 bg-amber-600 rounded-lg opacity-80"></div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2334182/pexels-photo-2334182.jpeg" 
                alt="Chhath Puja celebration" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <h1 className="text-4xl font-bold text-white mb-4">Chhath Puja Festival</h1>
                <p className="text-white text-lg max-w-2xl">
                  An ancient Hindu festival dedicated to the Sun God (Surya) and Chhathi Maiya (Goddess of Power/Life-Force)
                </p>
              </div>
            </div>
          </section>
          
          {/* About the Festival */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="h-6 w-6 text-amber-500 mr-2" />
              About Chhath Puja
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                Chhath Puja is one of the most ancient and important festivals in India, particularly celebrated in Bihar, Jharkhand, Eastern Uttar Pradesh, and parts of Nepal. The word 'Chhath' refers to the sixth day of the month of Kartik in the Hindu calendar.
              </p>
              
              <p className="text-gray-700">
                Unlike many other festivals, Chhath Puja is dedicated to the Sun God and his wife Usha (also known as Chhathi Maiya). It's a festival of gratitude to the Sun for sustaining life on earth and seeking the divine couple's blessings for well-being, prosperity, and progress.
              </p>
              
              <p className="text-gray-700">
                What makes Chhath unique is its emphasis on cleanliness, purity, and discipline. The devotees who observe the fast (called Vratis) maintain rigorous purity during the four days of the festival, including sleeping on the floor, eating only specially prepared satvik food, and avoiding certain items.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                <p className="italic text-amber-800">
                  "Chhath is not just a festival, it's a way of expressing gratitude to nature and the divine powers that sustain life. It teaches discipline, patience, and the importance of giving thanks."
                </p>
              </div>
            </div>
          </section>
          
          {/* Festival Rituals */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Four-Day Rituals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <RitualCard 
                day="Day 1"
                title="Nahay Khay"
                icon={<Calendar className="h-8 w-8 text-amber-500" />}
                description="The devotees take a holy dip in a water body, preferably the Ganges, and bring water home for preparation. The house is thoroughly cleaned and the devotee eats only one meal, typically made of rice and bottle gourd."
              />
              
              <RitualCard 
                day="Day 2"
                title="Kharna"
                icon={<Sun className="h-8 w-8 text-amber-500" />}
                description="Devotees observe a full-day fast without water and end it in the evening after sunset. They then prepare offerings including Kheer, Chapatis, and fruits, which are first offered to the deity and then shared among family members."
              />
              
              <RitualCard 
                day="Day 3"
                title="Evening Arghya"
                icon={<Sunset className="h-8 w-8 text-amber-500" />}
                description="This is the main day of Chhath Puja. Devotees, along with family and friends, go to a river bank or any water body to offer Arghya (prayers and offerings) to the setting sun. The offerings include Thekua, fruits, and other items in a bamboo basket."
              />
              
              <RitualCard 
                day="Day 4"
                title="Morning Arghya"
                icon={<Sunrise className="h-8 w-8 text-amber-500" />}
                description="Before sunrise, devotees return to the same water body to offer Arghya to the rising sun. This concludes the festival. After this, devotees break their fast and seek blessings from elders."
              />
            </div>
          </section>
          
          {/* Prasad and Offerings */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Traditional Prasad and Offerings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-amber-600 mb-4">Thekua</h3>
                <img 
                  src="https://images.pexels.com/photos/7449189/pexels-photo-7449189.jpeg" 
                  alt="Traditional Thekua" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">
                  Thekua is the most important prasad for Chhath Puja. It's a sweet, wheat-based cookie made with ghee, jaggery, and dry fruits. The dough is shaped using traditional wooden molds to create beautiful patterns. Thekua is known for its long shelf life and is offered to both the setting and rising sun.
                </p>
                <Link to="/shop?category=thekua" className="inline-block mt-4 text-amber-600 hover:text-amber-700">
                  Shop for Thekua →
                </Link>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-amber-600 mb-4">Laddoo and Other Offerings</h3>
                <img 
                  src="https://images.pexels.com/photos/14707297/pexels-photo-14707297.jpeg" 
                  alt="Traditional Laddoo" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">
                  Along with Thekua, various types of laddoos, fruits (especially sugarcane, banana, and coconut), and rice-based dishes are offered. The offerings are placed in special bamboo baskets called 'Daala' or 'Soop', which are decorated with fruits, flowers, and incense sticks.
                </p>
                <Link to="/shop?category=laddoo" className="inline-block mt-4 text-amber-600 hover:text-amber-700">
                  Shop for Laddoo →
                </Link>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="text-center bg-amber-100 rounded-lg p-8 shadow-inner">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Celebrate Chhath Puja with Authentic Offerings
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We offer traditionally prepared Thekua, Laddoo, and other essential items for your Chhath Puja celebration. Made with pure ingredients and following authentic recipes.
            </p>
            <Link to="/shop">
              <Button size="lg">
                Shop Festival Collection
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </Layout>
  );
};

interface RitualCardProps {
  day: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const RitualCard: React.FC<RitualCardProps> = ({ day, title, icon, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-amber-100 rounded-full p-3 mr-3">
          {icon}
        </div>
        <div>
          <div className="text-amber-600 font-medium">{day}</div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      </div>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default FestivalInfoPage;