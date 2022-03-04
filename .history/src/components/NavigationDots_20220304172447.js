import React from 'react';

import { navItems } from '../constants/items';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {navItems.map((item, i) => {
        return (
          <a
            href={`#${item}`}
            key={item + i}
            onClick={() => setToggleHamburger(false)}
          >
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default NavigationDots;
