import React from 'react';
import Cards from './Cards';
import Modal from './Modal';

const Projects = () => (
  <section className="projects" id="projects">
    <div>
      <h1>My Recent Works</h1>
      <hr />
    </div>
    <Cards />
    <Modal />
  </section>
);

export default Projects;
