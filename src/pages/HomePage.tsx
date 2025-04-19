import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FestivalInfo from '../components/home/FestivalInfo';
import HowItWorks from '../components/home/HowItWorks';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <FestivalInfo />
      <HowItWorks />
      <TestimonialsSection />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;