import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/home/home';

const MainCard = ({ data }) => {
  const {
    title,
    image,
    languages,
    description,
  } = data;
  const dispatch = useDispatch();

  const PrintLanguages = () => languages.map((item) => <li key={`${title}: stack-${item}`}><p>{item}</p></li>);

  return (
    <div className="main-card">
      <img src={image} alt="preview" />
      <h2>{title}</h2>
      <h3>{description}</h3>
      <ul>
        <PrintLanguages />
      </ul>
      <button onClick={() => dispatch(openModal(data))} type="button">See Project</button>
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
};

export default MainCard;
