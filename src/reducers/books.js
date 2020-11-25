import { ADD_BOOK } from '../actions/actionTypes';

const initialState = [
  {
    id: 1,
    title: 'MacBeth',
    category: 'History',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          category: action.payload.category,
        },
      ];
    default:
      return state;
  }
};

export default bookReducer;
