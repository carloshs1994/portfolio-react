import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import MainCard from './MainCard';

const Cards = () => {
  const arrOfProjects = useSelector((state) => state.homeReducer.arrOfProjects);
  const PrintCards = () => arrOfProjects.map(
    (project, index) => ((index === 0)
      ? <MainCard key={project.title} data={project} />
      : <Card key={project.title} data={project} />
    ),
  );

  return (
    <PrintCards />
  );
};

export default Cards;
