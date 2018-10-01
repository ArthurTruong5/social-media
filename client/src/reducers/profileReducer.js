import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type){
    case PROFILE_LOADING:
    // return current state
      return {
        ...state,
        loading: true
      }
      // when we get our profile - on the success of getting it
      case GET_PROFILE:
        return {
          ...state,
          profile: action.payload,
          loading: false
        };
      case CLEAR_CURRENT_PROFILE:
      // return the current state
        return {
          ...state,
          // set profile to null
          profile: null
        }
    default:
      return state;
  }
}
