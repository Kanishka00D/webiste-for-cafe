import React from 'react';
import ReviewCard from './ReviewCard';
import Person1 from '../assets/Reviews/3.png';
import Person2 from '../assets/Reviews/4.png';
import Person3 from '../assets/Reviews/5.png';
import Person4 from '../assets/Reviews/6.png';
import { motion } from 'framer-motion';

const Reviews = () => {
  return (
    <motion.div
      className='flex flex-col items-center mt-16 px-4'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className='max-w-6xl w-full'>
        <hr className='border-t border-gray-300 my-8' />

        <motion.div
          className='text-center mb-10'
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className='text-gray-500'>Reviews</p>
          <h2 className='font-semibold text-3xl'>What our customers say</h2>
        </motion.div>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'
          initial='hidden'
          whileInView='show'
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <ReviewCard
            personImage={Person1}
            name='Chris Bryan'
            review='I stopped by Kanishka’s Cafe for a quick latte and ended up staying because the place felt so cozy. The coffee was rich, smooth, and perfectly balanced. Staff were super friendly!'
          />
          <ReviewCard
            personImage={Person2}
            name='Sydney Clare'
            review='Kanishka’s Cafe has such a calming vibe! Soft music, comfy seats, and beautiful interiors. Their chocolate latte was heavenly!'
          />
          <ReviewCard
            personImage={Person3}
            name='Maya Flora'
            review='If you love quality coffee, you must try this cafe. My cappuccino was perfect, and the pastries were fresh and delicious. Amazing service!'
          />
          <ReviewCard
            personImage={Person4}
            name='Alan Mayer'
            review='Visited with friends and we all loved it. Delicious drinks, generous portions, and a warm atmosphere. One of the best cafes around.'
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Reviews;
