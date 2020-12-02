import { CHANGE_FILTER } from './filterTypes';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload.category;

    default:
      return state;
  }
};

export default filterReducer;
