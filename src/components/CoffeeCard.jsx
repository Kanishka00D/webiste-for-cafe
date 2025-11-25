import React from 'react';
import { Plus, Star } from 'lucide-react';

function CoffeeCard({ image, name }) {
  return (
    <div className='ml-3'>
      <div className='w-60'>
        <img
          src={image}
          alt='coffee'
          className='rounded-tr-4xl rounded-bl-4xl'
        />
      </div>
      <div className='px-2'>
        <div className='mt-2 py-1 font-semibold text-lg'>{name}</div>
        <div>
          <div className='flex items-center gap-1 mb-2'>
            <Star color='fcba03' fill='#fcba03' size={20} />
            <div>
              <span className='font-semibold'>4.9</span> (248 Reviews)
            </div>
          </div>
          <div className='w-60'>
            A creamy blend of espresso and rich chocolate, topped with frothy
            milk for a sweet, comforting treat.
          </div>
          <div className='mt-2 mr-2 flex justify-between items-center'>
            <div className='font-semibold'>$2.95</div>
            <div className='bg-amber-900 px-5 py-1 rounded-lg'>
              <Plus strokeWidth={2} color='#ffffff' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
