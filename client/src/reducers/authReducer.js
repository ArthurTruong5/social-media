// We created a authReducer
import { TEST_DISPATCH } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

// Every reducer is going to export a function
export default function(state = initialState, action) {
  switch(action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}
