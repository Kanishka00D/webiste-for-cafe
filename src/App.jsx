import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />

      <section id='hero'>
        <Hero />
      </section>

      <section id='products'>
        <Products />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='reviews'>
        <Reviews />
      </section>

      <section id='contact'>
        <Contact />
      </section>
    </>
  );
}

export default App;
