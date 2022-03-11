import React from 'react';
import {
  About,
  Footer,
  Header,
  Projects,
  Skills,
  Testimonials,
} from './container';
import './App.scss';

import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
