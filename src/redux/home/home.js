const OPEN_MOBILE_MENU = 'portfolio-react/homeReducer/OPEN_MOBILE_MENU';
const CLOSE_MOBILE_MENU = 'portfolio-react/homeReducer/CLOSE_MOBILE_MENU';
const OPEN_MODAL = 'portfolio-react/homeReducer/OPEN_MODAL';
const initialState = {
  displayMobileMenu: false,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case OPEN_MOBILE_MENU:
      return { ...state, displayMobileMenu: true };
    case CLOSE_MOBILE_MENU:
      return { ...state, displayMobileMenu: false };
    default:
      return state;
  }
};

export default reducer;
