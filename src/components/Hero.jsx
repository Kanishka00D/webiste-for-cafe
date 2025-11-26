import { MoveDownRight } from 'lucide-react';
import image1 from '../assets/Hero/1.jpg';
import image2 from '../assets/Hero/2.jpg';
import image3 from '../assets/Hero/3.jpg';
import image4 from '../assets/Hero/4.jpg';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='flex flex-col items-center py-14 px-4'>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='font-bold text-4xl md:text-5xl text-center leading-tight'
      >
        Enjoy Your Favorite Coffee <br />
        With Kanishka's
      </motion.header>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className='py-5 max-w-xl text-center text-gray-700'
      >
        Discover tranquility at Kanishka's — a sanctuary for unwinding, where
        your evenings are perfected with relaxation and rich flavors.
      </motion.p>
      <motion.a
        href='#products'
        className='flex items-center gap-2 bg-amber-900 text-white px-5 py-2 rounded-tr-2xl rounded-bl-2xl hover:bg-amber-800 transition'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        EXPLORE PRODUCTS <MoveDownRight strokeWidth={1.5} size={18} />
      </motion.a>

      <motion.div
        className='flex py-10 gap-4 flex-wrap justify-center'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {[image1, image2, image3, image4].map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`hero${idx}`}
            className={`w-56 md:w-60 object-cover ${
              idx % 2 === 0
                ? 'rounded-tr-[80px] rounded-bl-[80px]'
                : 'rounded-tl-[80px] rounded-br-[80px]'
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </motion.div>

      <motion.div
        className='flex items-center gap-10 md:gap-16 mt-4 flex-wrap justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        {[
          { num: '30+', label: 'Coffee variants' },
          { num: '20+', label: 'Tables' },
          { num: '5+', label: 'Meeting areas' },
          { num: '40+', label: 'Awards' },
        ].map((item, i) => (
          <div key={i} className='flex flex-col items-center'>
            <div className='font-semibold text-4xl md:text-5xl'>{item.num}</div>
            <div className='text-gray-600'>{item.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
