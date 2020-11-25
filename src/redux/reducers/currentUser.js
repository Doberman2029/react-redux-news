import { LOG_IN, LOG_OUT } from "../constants";

let initialState = {};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return action.user;
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
