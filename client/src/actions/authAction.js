// For more references on actions, refer to https://redux.js.org/basics/actions

// Register User

import { TEST_DISPATCH } from './types';

export const registerUser = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
