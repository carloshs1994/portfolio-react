import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseButton from '../img/close-button.svg';
import LiveButton from '../img/live-button.svg';
import SourceButton from '../img/source-button.svg';
import { closeModal } from '../redux/home/home';

const Modal = () => {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.homeReducer.displayModal);
  const {
    title,
    image,
    languages,
    description,
    linkLiveVersion,
    linkToSource,
  } = useSelector((state) => state.homeReducer.currentProject);
  const positionModal = (statusModal) ? '0' : '-150%';
  const displayModal = (statusModal) ? 'flex' : 'none';

  const PrintLanguages = () => languages.map((item) => <li key={`${title}: stack-modal-${item}`}><p>{item}</p></li>);

  return (
    <section className="modal" style={{ left: positionModal, display: displayModal }}>
      <div className="modal-background" style={{ left: positionModal }} />
      <div className="modal-container">
        <button onClick={() => dispatch(closeModal())} className="close-modal" type="button">
          <img src={CloseButton} alt="close" />
        </button>
        <h2>{title}</h2>
        <ul>
          <PrintLanguages />
        </ul>
        <img src={image} className="preview" alt="preview" />
        <h3>{description}</h3>
        <div className="button-container">
          <button
            onClick={
              () => {
                window.open(linkLiveVersion, '_blank');
              }
            }
            type="button"
          >
            See Live
            {' '}
            <img src={LiveButton} alt="See Live version" />
          </button>
          <button
            onClick={
              () => {
                window.open(linkToSource, '_blank');
              }
            }
            type="button"
          >
            See Source
            {' '}
            <img src={SourceButton} alt="See Source" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
