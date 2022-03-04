import React from 'react';

import { navItems } from '../constants/items';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {navItems.map((item, i) => {
        return (
          <li key={item}>
            <a href={`#${item}`} onClick={() => setToggleHamburger(false)}>
              {item}
            </a>
          </li>
        );
      })}
    </div>
  );
};

export default NavigationDots;
