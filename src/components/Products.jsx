import React, { useState } from 'react';
import CoffeeCard from './CoffeeCard';
import image1 from '../assets/Products/3.png';
import image2 from '../assets/Products/4.png';
import image3 from '../assets/Products/5.png';
import image4 from '../assets/Products/6.png';
import { motion, AnimatePresence } from 'framer-motion';

const productsData = [
  { id: 1, name: 'Chocolate Latte', image: image1, category: 'Latte' },
  { id: 2, name: 'Mocha Latte', image: image2, category: 'Latte' },
  { id: 3, name: 'Coffee Latte', image: image3, category: 'Latte' },
  { id: 4, name: 'Hazelnut Latte', image: image4, category: 'Latte' },
  { id: 5, name: 'Chocolate Robusta', image: image4, category: 'Robusta' },
  { id: 6, name: 'Mocha Robusta', image: image3, category: 'Robusta' },
  { id: 7, name: 'Coffee Robusta', image: image1, category: 'Robusta' },
  { id: 8, name: 'Hazelnut Robusta', image: image2, category: 'Robusta' },
  { id: 9, name: 'Chocolate Arabica', image: image4, category: 'Arabica' },
  { id: 10, name: 'Mocha Arabica', image: image3, category: 'Arabica' },
  { id: 11, name: 'Coffee Arabica', image: image2, category: 'Arabica' },
  { id: 12, name: 'Hazelnut Arabica', image: image1, category: 'Arabica' },
];

const categories = ['Latte', 'Robusta', 'Arabica'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Latte');

  const filteredProducts = productsData.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className='mt-16 px-4 flex flex-col justify-center items-center'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className='text-center mb-8'
      >
        <p className='text-gray-500'>Our Products</p>
        <h2 className='font-semibold text-3xl'>From Top Quality Materials</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='flex justify-center mb-10'
      >
        <div className='flex gap-4 bg-gray-100 px-4 py-2 rounded-full'>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-full font-medium transition cursor-pointer ${
                selectedCategory === category
                  ? 'bg-amber-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        layout
        className='grid grid-cols-1 max-w-6xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-7 justify-items-center'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        <AnimatePresence mode='popLayout'>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <CoffeeCard name={product.name} image={product.image} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Products;
