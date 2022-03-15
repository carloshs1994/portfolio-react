import React from 'react';
import Card from './Card';
import arrOfProjects from './arrOfProjects';

const Cards = () => {
  const PrintCards = () => arrOfProjects.map(
    (project, index) => <Card key={project.title} data={project} projectNumber={index} />,
  );

  return (
    <PrintCards />
  );
};

export default Cards;
