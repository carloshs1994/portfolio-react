import React from 'react';
import PropTypes from 'prop-types';

const MainCard = ({ data, projectNumber }) => {
  const {
    title,
    image,
    languages,
    description,
  } = data;

  const PrintLanguages = () => languages.map((item) => <li key={`${title}: stack-${item}`}><p>{item}</p></li>);

  return (
    <div className="main-card">
      <img src={image} alt="preview" />
      <h2>{title}</h2>
      <h3>{description}</h3>
      <ul>
        <PrintLanguages />
      </ul>
      <button id={projectNumber} type="button">See Project</button>
    </div>
  );
};
MainCard.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  ).isRequired,
  projectNumber: PropTypes.number.isRequired,
};

export default MainCard;
