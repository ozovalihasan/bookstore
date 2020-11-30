import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          title: action.payload.title,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default bookReducer;
