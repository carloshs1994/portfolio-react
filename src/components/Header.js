import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hamburgerbutton from '../img/hamburger-button.svg';
import CloseButton from '../img/close-button.svg';
import Envelope from '../img/envelope.svg';
import { openMobileMenu, closeMobileMenu } from '../redux/home/home';

const Header = () => {
  const dispatch = useDispatch();
  const statusMobileMenu = useSelector((state) => state.homeReducer.displayMobileMenu);
  const styleMobileMenu = (statusMobileMenu) ? '0' : '-150%';
  return (
    <header>
      <a href="/">Carlos Herver</a>
      <nav>
        <button onClick={() => dispatch(openMobileMenu())} type="button">
          <img src={Hamburgerbutton} alt="Hamburger button" />
        </button>
        <ul style={{ left: styleMobileMenu }}>
          <li className="close">
            <button onClick={() => dispatch(closeMobileMenu())} type="button">
              <img src={CloseButton} alt="close" />
            </button>
          </li>
          <li><a onClick={() => dispatch(closeMobileMenu())} href="#projects">Portafolio</a></li>
          <li><a onClick={() => dispatch(closeMobileMenu())} href="#about">About</a></li>
          <li><a onClick={() => dispatch(closeMobileMenu())} href="#contact">Contact</a></li>
          <li className="envelope">
            <a href="/">
              <img src={Envelope} alt="get my e-mail" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
