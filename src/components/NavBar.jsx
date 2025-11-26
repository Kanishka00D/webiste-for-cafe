import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className='w-full bg-white   top-0 left-0 z-50'>
      <div className='max-w-6xl mx-auto px-5 py-4 flex items-center justify-between'>
        <div>
          <img src={logo} alt='logo' className='w-10 md:w-12' />
        </div>

        <nav className='hidden md:flex gap-8 font-medium text-gray-700'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='hover:text-amber-900 transition'
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-4'>
          <ShoppingBag strokeWidth={1} size={24} className='text-gray-700' />

          <button
            className='md:hidden p-2 focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className='md:hidden bg-white shadow-md'>
          <div className='flex flex-col gap-4 px-5 py-4 text-gray-700 font-medium'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='hover:text-amber-900 transition'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Hero;
