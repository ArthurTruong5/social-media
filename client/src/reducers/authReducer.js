const initialState = {
  isAuthenticated: false,
  user: {}
};

// Every reducer is going to export a function
export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
