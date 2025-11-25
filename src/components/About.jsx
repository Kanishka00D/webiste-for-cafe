import React from 'react';
import image3 from '../assets/Hero/3.jpg';
import image4 from '../assets/Hero/4.jpg';

const About = () => {
  return (
    <div className='flex flex-col items-center mt-16 px-4'>
      <div className='max-w-6xl w-full'>
        {/* Divider */}
        <hr className='border-t border-gray-300 my-8' />

        {/* Header */}
        <div className='text-center mb-10'>
          <p className='text-gray-500'>About Us</p>
          <h2 className='font-semibold text-3xl'>We are the best</h2>
        </div>

        {/* Content Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Text Section */}
          <div className='text-gray-700 leading-relaxed text-[15px]'>
            In Kanishka’s Cafe, every cup of coffee is crafted with passion and
            care. We believe in creating a warm, inviting space where friends,
            family, and coffee lovers can come together to enjoy the perfect
            brew.
            <br />
            <br />
            From rich, velvety lattes to bold, aromatic espressos, our menu
            offers something for every taste. At Kanishka’s Cafe, quality
            ingredients, artisanal techniques, and a love for coffee combine to
            deliver a delightful experience in every sip.
            <br />
            <br />
            Whether you’re here to relax, work, or catch up with friends, we
            promise a cozy atmosphere and a cup that keeps you coming back for
            more.
          </div>

          {/* Images Section */}
          <div className='flex gap-4 justify-center'>
            <img
              src={image3}
              alt='Coffee image 1'
              className='w-56 md:w-64 rounded-tr-[80px] rounded-bl-[80px] object-cover mt-6'
            />
            <img
              src={image4}
              alt='Coffee image 2'
              className='w-56 md:w-64 rounded-tl-[80px] rounded-br-[80px] object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
