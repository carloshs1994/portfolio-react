import arrOfProjects from './arrOfProjects';

const OPEN_MOBILE_MENU = 'portfolio-react/homeReducer/OPEN_MOBILE_MENU';
const CLOSE_MOBILE_MENU = 'portfolio-react/homeReducer/CLOSE_MOBILE_MENU';
const OPEN_MODAL = 'portfolio-react/homeReducer/OPEN_MODAL';
const CLOSE_MODAL = 'portfolio-react/homeReducer/CLOSE_MODAL';

const initialState = {
  displayMobileMenu: false,
  displayModal: false,
  currentProject: {
    title: '',
    image: '',
    languages: [''],
    description: '',
  },
  arrOfProjects,
};

export const openMobileMenu = () => ({
  type: OPEN_MOBILE_MENU,
});

export const closeMobileMenu = () => ({
  type: CLOSE_MOBILE_MENU,
});

export const openModal = (payload) => ({
  type: OPEN_MODAL,
  payload,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MOBILE_MENU:
      return { ...state, displayMobileMenu: true };
    case CLOSE_MOBILE_MENU:
      return { ...state, displayMobileMenu: false };
    case OPEN_MODAL:
      return { ...state, currentProject: action.payload, displayModal: true };
    case CLOSE_MODAL:
      return {
        ...state,
        currentProject: {
          title: '',
          image: '',
          languages: [''],
          description: '',
        },
        displayModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
