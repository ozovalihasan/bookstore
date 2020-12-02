import { CHANGE_FILTER } from './filterTypes';

export const changeFilter = category => ({
  type: CHANGE_FILTER,
  payload: {
    category,
  },
});
