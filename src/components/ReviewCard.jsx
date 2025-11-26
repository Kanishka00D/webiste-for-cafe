import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const ReviewCard = ({ personImage, name, review }) => {
  return (
    <motion.div
      variants={cardVariants}
      className='bg-white shadow-md p-5 rounded-xl border border-gray-100'
      whileHover={{ scale: 1.03, boxShadow: '0px 10px 25px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3 }}
    >
      <div className='flex gap-3 items-center'>
        <motion.img
          src={personImage}
          alt={name}
          className='w-12 h-12 rounded-full object-cover'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />

        <div>
          <div className='font-semibold'>{name}</div>

          <div className='flex'>
            <Star color='#fcba03' fill='#fcba03' size={18} />
            <Star color='#fcba03' fill='#fcba03' size={18} />
            <Star color='#fcba03' fill='#fcba03' size={18} />
            <Star color='#fcba03' fill='#fcba03' size={18} />
            <Star color='#fcba03' fill='#fcba03' size={18} />
          </div>
        </div>
      </div>

      <p className='text-sm mt-3 text-gray-600 leading-relaxed'>{review}</p>
    </motion.div>
  );
};

export default ReviewCard;
