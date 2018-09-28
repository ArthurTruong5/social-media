// For more references on actions, refer to https://redux.js.org/basics/actions

// Register User

// This is where the thunk middleware comes in. We need dispatch arrow

import axios from 'axios';

import { GET_ERRORS } from './types';

export const registerUser = (userData, history) => dispatch => {

  axios.post('/api/users/register', userData)
  // result
  .then(res => history.push('/login'))
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};
