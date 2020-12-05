/* eslint-disable import/prefer-default-export */
import { CHANGE_FILTER } from './filterTypes';

export const changeFilter = category => ({
  type: CHANGE_FILTER,
  payload: {
    category,
  },
});

/* eslint-enable import/prefer-default-export */
