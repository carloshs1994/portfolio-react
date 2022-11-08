import React, { useState } from 'react';
import Github from '../img/github-dark.svg';
import Linkedin from '../img/linkedin-dark.svg';
import Angel from '../img/angel-dark.svg';
import Twitter from '../img/twitter-dark.svg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setText('');
  };

  return (
    <section className="contact" id="contact">
      <div>
        <h1>
          I&apos;m always interested in hearing about new projects, so if you&apos;d like
          to chat please get in touch.
        </h1>
        <form onSubmit={() => resetForm()} id="form" action="https://formspree.io/f/xayvwlqd" method="post">
          <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="user-name" placeholder="Full Name" maxLength="30" required value={name} />
          <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="user-email" placeholder="Email Address" required value={email} />
          <textarea onChange={(e) => setText(e.target.value)} name="message" id="msg" maxLength="500" placeholder="Enter Text Here" required value={text} />
          <button id="form-button" type="submit">Get in Touch</button>
        </form>
      </div>
      <hr />
      <ul>
        <li><a href="https://github.com/carloshs1994"><img src={Github} alt="github" /></a></li>
        <li><a href="https://www.linkedin.com/in/carloshs94/"><img src={Linkedin} alt="linkedin" /></a></li>
        <li><a href="https://angel.co/u/carloshs94"><img src={Angel} alt="angelist" /></a></li>
        <li><a href="https://twitter.com/hscarlos_"><img src={Twitter} alt="twitter" /></a></li>
        <li><a href="https://github.com/carloshs1"><img src={Github} alt="github" /></a></li>
      </ul>
    </section>
  );
};

export default Contact;
