import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ data, projectNumber }) => {
  const {
    title,
    image,
    languages,
    description,
  } = data;

  const PrintLanguages = () => languages.map((item) => <li key={`${title}: stack-${item}`}><p>{item}</p></li>);

  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>{description}</h3>
      <ul>
        <PrintLanguages />
      </ul>
      <img src={image} alt="preview" />
      <button id={projectNumber} type="button">See Project</button>
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  ).isRequired,
  projectNumber: PropTypes.number.isRequired,
};

export default Card;
