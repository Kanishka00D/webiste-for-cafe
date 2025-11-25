import React from 'react';

import { Star } from 'lucide-react';

const ReviewCard = ({ personImage, name, review }) => {
  return (
    <div className='bg-white shadow-md p-5 rounded-xl border border-gray-100'>
      <div className='flex gap-3 items-center'>
        <img
          src={personImage}
          alt={name}
          className='w-12 h-12 rounded-full object-cover'
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
    </div>
  );
};

export default ReviewCard;
