// Axios is a Javascript library used to make http requests from node.js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. Another feature that it has over .fetch() is that it performs automatic transforms of JSON data.
import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE
} from "./types";

// Dispatches an action. This is the only way to trigger a state change.
//
// The store's reducing function will be called with the current getState() result and the given action synchronously. Its return value will be considered the next state. It will be returned from getState() from now on, and the change listeners will immediately be notified.

// Get current profile
export const getCurrentProfile = () => dispatch => {
  setProfileLoading();
  // When we hit this endpoint and if it finds a profile
  axios
    .get("api/profile")
    .then(res =>
      dispatch({
        // It then calls get profile
        type: GET_PROFILE,
        // then passes along the data which is the actual profile
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Create profile
// We need to use history to redirect
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/api/profile", profileData)
    // Once we get the result, we want to history.push and redirect back to the dashboard
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        // You'll see in the redux extension tools
        type: GET_ERRORS,
        // data that has errors
        payload: err.response.data
      })
    );
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
