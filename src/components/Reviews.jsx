import React from 'react';
import ReviewCard from './ReviewCard';
import Person1 from '../assets/Reviews/3.png';
import Person2 from '../assets/Reviews/4.png';
import Person3 from '../assets/Reviews/5.png';
import Person4 from '../assets/Reviews/6.png';

const Reviews = () => {
  return (
    <div className='flex flex-col items-center mt-16 px-4'>
      <div className='max-w-6xl w-full'>
        {/* Header */}
        <hr className='border-t border-gray-300 my-8' />

        <div className='text-center mb-10'>
          <p className='text-gray-500'>Reviews</p>
          <h2 className='font-semibold text-3xl'>What our customers say</h2>
        </div>

        {/* Reviews Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
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
        </div>
      </div>
    </div>
  );
};

export default Reviews;
