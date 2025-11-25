import { MoveDownRight } from 'lucide-react';
import image1 from '../assets/Hero/1.jpg';
import image2 from '../assets/Hero/2.jpg';
import image3 from '../assets/Hero/3.jpg';
import image4 from '../assets/Hero/4.jpg';
import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col items-center py-14 px-4'>
      {/* Heading */}
      <header className='font-bold text-4xl md:text-5xl text-center leading-tight'>
        Enjoy Your Favorite Coffee <br />
        With Kanishka's
      </header>

      {/* Subtext */}
      <p className='py-5 max-w-xl text-center text-gray-700'>
        Discover tranquility at Kanishka's — a sanctuary for unwinding, where
        your evenings are perfected with relaxation and rich flavors.
      </p>

      {/* Button */}
      <a
        href='#products'
        className='flex items-center gap-2 bg-amber-900 text-white px-5 py-2 rounded-tr-2xl rounded-bl-2xl hover:bg-amber-800 transition'
      >
        EXPLORE PRODUCTS <MoveDownRight strokeWidth={1.5} size={18} />
      </a>

      {/* Images */}
      <div className='flex py-10 gap-4 flex-wrap justify-center'>
        <img
          src={image1}
          alt='image1'
          className='w-56 md:w-60 rounded-tr-[80px] rounded-bl-[80px] object-cover'
        />
        <img
          src={image2}
          alt='image2'
          className='w-56 md:w-60 rounded-tl-[80px] rounded-br-[80px] object-cover'
        />
        <img
          src={image3}
          alt='image3'
          className='w-56 md:w-60 rounded-tr-[80px] rounded-bl-[80px] object-cover'
        />
        <img
          src={image4}
          alt='image4'
          className='w-56 md:w-60 rounded-tl-[80px] rounded-br-[80px] object-cover'
        />
      </div>

      {/* Stats Section */}
      <div className='flex items-center gap-10 md:gap-16 mt-4 flex-wrap justify-center'>
        {/* Single Stat */}
        <div className='flex flex-col items-center'>
          <div className='font-semibold text-4xl md:text-5xl'>30+</div>
          <div className='text-gray-600'>Coffee variants</div>
        </div>

        {/* Divider */}
        <div className='hidden md:block h-14 w-px bg-black/20'></div>

        <div className='flex flex-col items-center'>
          <div className='font-semibold text-4xl md:text-5xl'>20+</div>
          <div className='text-gray-600'>Tables</div>
        </div>

        <div className='hidden md:block h-14 w-px bg-black/20'></div>

        <div className='flex flex-col items-center'>
          <div className='font-semibold text-4xl md:text-5xl'>5+</div>
          <div className='text-gray-600'>Meeting areas</div>
        </div>

        <div className='hidden md:block h-14 w-px bg-black/20'></div>

        <div className='flex flex-col items-center'>
          <div className='font-semibold text-4xl md:text-5xl'>40+</div>
          <div className='text-gray-600'>Awards</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
