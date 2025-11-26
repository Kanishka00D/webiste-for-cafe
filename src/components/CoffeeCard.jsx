import React from 'react';
import { Plus, Star } from 'lucide-react';
import { motion } from 'framer-motion';

function CoffeeCard({ image, name }) {
  return (
    <motion.div
      className='ml-3'
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 8px 25px rgba(0,0,0,0.15)',
      }}
    >
      <motion.div
        className='w-60 overflow-hidden rounded-tr-4xl rounded-bl-4xl'
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={image}
          alt='coffee'
          className='rounded-tr-4xl rounded-bl-4xl'
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
      <div className='px-2 py-2'>
        <div className='mt-2 py-1 font-semibold text-lg'>{name}</div>

        <div>
          <div className='flex items-center gap-1 mb-2'>
            <Star color='fcba03' fill='#fcba03' size={20} />
            <div>
              <span className='font-semibold'>4.9</span> (248 Reviews)
            </div>
          </div>
          <div className='w-60 text-gray-700'>
            A creamy blend of espresso and rich chocolate, topped with frothy
            milk for a sweet, comforting treat.
          </div>

          <div className='mt-2 mr-2 flex justify-between items-center'>
            <div className='font-semibold'>$2.95</div>

            <motion.div
              className='bg-amber-900 px-5 py-1 rounded-lg flex items-center justify-center cursor-pointer'
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.1 }}
            >
              <Plus strokeWidth={2} color='#ffffff' />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CoffeeCard;
