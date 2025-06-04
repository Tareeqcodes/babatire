'use client'
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Statistic from './components/Statistic';
import About from './components/About';
import Categories from './components/Categories';
import Featured from './components/Featured';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
          <Hero />
          <Statistic />
          <About />
          <Categories />
          <Featured />
          <WhyUs />
          <Testimonials />
          <Contact />
        <Footer />
      </motion.div>
    </>
  );
}