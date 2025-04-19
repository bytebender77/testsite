import React from 'react';
import { CheckCircle2, TruckIcon, UserCheck, Leaf } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Prepare & Deliver</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality, tradition, and customer satisfaction in every step of the process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Leaf className="h-7 w-7 text-amber-500" />}
            title="Traditional Recipes"
            description="Our products are made following authentic recipes passed down through generations from Bihar and Jharkhand."
          />
          
          <FeatureCard 
            icon={<CheckCircle2 className="h-7 w-7 text-amber-500" />}
            title="Quality Ingredients"
            description="We use only premium ingredients - pure desi ghee, organic jaggery, and highest quality flour and nuts."
          />
          
          <FeatureCard 
            icon={<UserCheck className="h-7 w-7 text-amber-500" />}
            title="Hygienically Prepared"
            description="Prepared in a clean environment with strict adherence to food safety standards and traditional purity."
          />
          
          <FeatureCard 
            icon={<TruckIcon className="h-7 w-7 text-amber-500" />}
            title="Fast Delivery"
            description="Carefully packaged to maintain freshness and delivered to your doorstep in time for your celebrations."
          />
        </div>
        
        <div className="mt-16 bg-amber-50 rounded-2xl overflow-hidden shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Made with Devotion & Care</h3>
              <p className="text-gray-700 mb-6">
                At ChhathDelights, we understand the significance of prasad in Chhath Puja. Every item is prepared with devotion, following the traditional methods and purity standards required for this sacred occasion.
              </p>
              <ul className="space-y-3">
                {[
                  'Prepared by experienced craftspeople from Bihar',
                  'No preservatives or artificial ingredients',
                  'Made fresh for every order',
                  'Traditional wooden molds for authentic Thekua patterns'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://c.ndtvimg.com/2024-11/apai0te_chhath-puja_625x300_04_November_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738" 
                alt="Traditional cooking process" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-amber-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center rounded-full bg-white w-16 h-16 mb-4 shadow-sm">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HowItWorks;