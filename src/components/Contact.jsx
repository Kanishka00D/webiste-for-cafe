import React from 'react';
import logo from '../assets/logo.png';

const Contact = () => {
  return (
    <div className='flex justify-center mt-10' id='contact'>
      <footer className='max-w-6xl w-full bg-amber-900 text-white px-10 py-10 rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          <div>
            <div className='flex items-center gap-4'>
              <img src={logo} alt='logo' className='w-10' />
              <h2 className='font-semibold text-lg'>Cafe by Kanishka</h2>
            </div>

            <p className='text-sm mt-4 leading-relaxed opacity-80'>
              Where every cup of coffee is crafted with passion and care. We
              create a warm, inviting space for friends, family, and coffee
              lovers to enjoy the perfect brew.
            </p>

            <p className='text-sm mt-4 opacity-80'>
              <a
                href='mailto:kanishkacafe@gmail.com'
                className='hover:text-amber-200'
              >
                kanishkacafe@gmail.com
              </a>
              <br />
              <a href='tel:+94781254874' className='hover:text-amber-200'>
                Phone: +94 78 125 4874
              </a>
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-lg'>Quick Links</h3>
            <nav className='flex flex-col mt-4 text-sm gap-2'>
              <a href='#hero' className='hover:text-amber-200'>
                Home
              </a>
              <a href='#products' className='hover:text-amber-200'>
                Products
              </a>
              <a href='#about' className='hover:text-amber-200'>
                About Us
              </a>
              <a href='#reviews' className='hover:text-amber-200'>
                Reviews
              </a>
              <a href='#contact' className='hover:text-amber-200'>
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className='font-semibold text-lg'>Resources</h3>
            <div className='text-sm mt-4 flex flex-col gap-2'>
              <a href='#' className='hover:text-amber-200'>
                Support
              </a>
              <a href='#' className='hover:text-amber-200'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-amber-200'>
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
        <div className='mt-10 border-t border-white/20 pt-5 text-sm text-center opacity-70'>
          © {new Date().getFullYear()} Kanishka’s Cafe — All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
