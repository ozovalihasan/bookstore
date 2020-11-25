import { ADD_BOOK } from '../actions/actionTypes';

const initialState = [
  {
    id: 1,
    title: 'MacBeth',
    category: 'History',
  },
  {
    id: 2,
    title: 'Rome and Juliet',
    category: 'Romantic',
  },
];

const bookReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default bookReducer;
