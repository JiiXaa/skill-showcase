import React from 'react';
import {
  About,
  Footer,
  Header,
  Projects,
  Skills,
  Testimonials,
} from './container';

import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
