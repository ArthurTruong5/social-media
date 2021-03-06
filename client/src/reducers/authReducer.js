import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';


const initialState = {
  isAuthenticated: false,
  user: {}
};

// Every reducer is going to export a function
export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        // isAuthenticated is going to depend if this payload is empty. The user will be the actual payload.
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
