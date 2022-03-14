import React from 'react';
import Hamburgerbutton from '../img/hamburger-button.svg';
import CloseButton from '../img/close-button.svg';
import Envelope from '../img/envelope.svg';

const Header = () => (
  <header>
    <a href="/">Carlos Herver</a>
    <nav>
      <img src={Hamburgerbutton} alt="Hamburger button" />
      <ul>
        <li className="close">
          <button type="button">
            <img src={CloseButton} alt="close" />
          </button>
        </li>
        <li><a href="#works-section-id">Portafolio</a></li>
        <li><a href="#about-section-id">About</a></li>
        <li><a href="#contact-section-id">Contact</a></li>
        <li className="envelope">
          <a href="/">
            <img src={Envelope} alt="get my e-mail" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
