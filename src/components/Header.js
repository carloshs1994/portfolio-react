import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hamburgerbutton from '../img/hamburger-button.svg';
import CloseButton from '../img/close-button.svg';
import Envelope from '../img/envelope.svg';
import { openMobileMenu, closeMobileMenu } from '../redux/home/home';

const Header = () => {
  const dispatch = useDispatch();
  const statusMobileMenu = useSelector((state) => state.homeReducer.displayMobileMenu);
  const styleMobileMenu = (statusMobileMenu || window.innerWidth >= 1080) ? '0' : '-150%';

  useEffect(() => {
    const handleResize = () => (
      (window.innerWidth < 1080) ? dispatch(closeMobileMenu()) : dispatch(openMobileMenu())
    );
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

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
            <button type="button" onClick={() => window.open('mailto:carhersolstack@gmail.com?subject=Hi')}>
              <img src={Envelope} alt="get my e-mail" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
