import { CHANGE_FILTER } from '../actions/actionTypes';

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload.category;

    default:
      return state;
  }
};

export default filterReducer;
