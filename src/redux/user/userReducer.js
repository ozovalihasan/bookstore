import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  USER_SIGN_OUT,
} from './userTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.username,
        error: '',
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        user: '',
        error: action.payload,
      };

    case USER_SIGN_OUT:
      return {
        ...state,
        loading: false,
        user: '',
        error: '',
      };

    default:
      return state;
  }
};

export default reducer;
