import React from 'react';

import { navItems } from '../constants/items';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {navItems.map((item, i) => (
        <a
          href={`#${item}`}
          key={item + i}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#30b193' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
