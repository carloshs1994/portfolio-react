import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/home/home';

const Card = ({ data }) => {
  const {
    title,
    mobileImage,
    languages,
    description,
  } = data;
  const dispatch = useDispatch();

  const PrintLanguages = () => languages.map((item) => <li key={`${title}: stack-${item}`}><p>{item}</p></li>);

  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>{description}</h3>
      <ul>
        <PrintLanguages />
      </ul>
      <img src={mobileImage} alt="preview" />
      <button onClick={() => dispatch(openModal(data))} type="button">See Project</button>
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
};

export default Card;
