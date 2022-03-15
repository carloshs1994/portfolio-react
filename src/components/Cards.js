import React from 'react';
import Card from './Card';
import arrOfProjects from './arrOfProjects';
import MainCard from './MainCard';

const Cards = () => {
  const PrintCards = () => arrOfProjects.map(
    (project, index) => ((index === 0)
      ? <MainCard key={project.title} data={project} projectNumber={index} />
      : <Card key={project.title} data={project} projectNumber={index} />
    ),
  );

  return (
    <PrintCards />
  );
};

export default Cards;
