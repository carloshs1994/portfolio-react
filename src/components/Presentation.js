import React, { useEffect, useState } from 'react';
import Github from '../img/github.svg';
import Linkedin from '../img/linkedin.svg';
import Angel from '../img/angel.svg';
import Twitter from '../img/twitter.svg';
import Img1Head from '../img/img-1-head.svg';
import Img2Head from '../img/img-1-head-desktop.svg';

const Presentation = () => {
  const [imgForRender, setImgForRender] = useState(
    (window.innerWidth < 1080) ? Img1Head : Img2Head,
  );
  useEffect(() => {
    const handleResize = () => (
      (window.innerWidth < 1080) ? setImgForRender(Img1Head) : setImgForRender(Img2Head)
    );
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);
  return (
    <section className="presentation">
      <h1>Hey There. I&apos;m Carlos</h1>
      <h2>I am a Software Developer</h2>
      <p>
        I can help you build a product , feature or website.
        Look through some of my work and experience!
        If you like what you see and have a project you need coded,
        don&apos;t hestiate to contact me.
      </p>
      <ul>
        <li><a href="https://github.com/carloshs1994"><img src={Github} alt="github.com icon" /></a></li>
        <li><a href="https://www.linkedin.com/in/carloshs94/"><img src={Linkedin} alt="linkedin.com icon" /></a></li>
        <li><a href="https://angel.co/u/carloshs94"><img src={Angel} alt="angel icon" /></a></li>
        <li><a href="https://twitter.com/hscarlos_"><img src={Twitter} alt="twitter.com icon" /></a></li>
      </ul>
      <img className="decoration" src={imgForRender} alt="decoration" />
    </section>
  );
};

export default Presentation;
