import React, { useEffect, useState } from 'react';
import Img1About from '../img/img-1-about.svg';
import Img2About from '../img/img-1-about-desktop.svg';
import List1 from '../img/list1.svg';
import List2 from '../img/list2.svg';
import List3 from '../img/list3.svg';

const About = () => {
  const [imgForRender, setImgForRender] = useState(
    (window.innerWidth < 1080) ? Img1About : Img2About,
  );
  useEffect(() => {
    const handleResize = () => (
      (window.innerWidth < 1080) ? setImgForRender(Img1About) : setImgForRender(Img2About)
    );
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);
  return (
    <section className="about" id="about">
      <section className="about-info">
        <h1>About me</h1>
        <h2>
          Hello I&apos;m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don&apos;t hestiate to contact me.
        </h2>
        <button
          onClick={
            () => {
              window.open('https://docs.google.com/document/d/13wprQqbZluKo4rELVGHOU6yLt3HqIanXoPjl5wKD820/edit?usp=sharing', '_blank');
            }
          }
          type="button"
        >
          Get My Resume
        </button>
        <img src={imgForRender} alt="decoration" />
      </section>
      <hr />
      <section className="about-skills">
        <ul className="about-skills-list">
          <li>
            <img src={List1} alt="decoration" />
            Language
            <ul>
              <li>Javascript</li>
              <li>Html</li>
              <li>CSS</li>
              <li>Ruby</li>
            </ul>
          </li>
          <li>
            <img src={List2} alt="decoration" />
            Frameworks
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>Material UI</li>
              <li>Ruby on Rails</li>
            </ul>
          </li>
          <li>
            <img src={List3} alt="decoration" />
            Skills
            <ul>
              <li>Github</li>
              <li>Terminal</li>
              <li>Codekit</li>
              <li>Gitlab</li>
              <li>Codepen</li>
            </ul>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default About;
