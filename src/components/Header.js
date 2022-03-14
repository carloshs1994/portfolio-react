import React from 'react';
import Hamburgerbutton from '../img/hamburger-button.svg';

const Header = () => (
  <header>
    <a href="/">Carlos Herver</a>
    <nav>
      <img src={Hamburgerbutton} alt="Hamburger button" />
    </nav>
  </header>
);

export default Header;
