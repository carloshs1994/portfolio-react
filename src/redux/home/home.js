const OPEN_MODAL = 'portfolio-react/homeReducer/OPEN_MODAL';
const initialState = {};

export const openModal = (payload) => ({
  type: OPEN_MODAL,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
