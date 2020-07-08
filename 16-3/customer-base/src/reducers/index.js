import { CHECK_ACCESS } from '../actions';

const INITIAL_STATE = {
  login: '',
  password: '',
};

export const userAccessReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_ACCESS:
      return Object.assign(state, action);
    default:
      return state;
  }
};
