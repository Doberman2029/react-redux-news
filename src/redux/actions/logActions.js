import { LOG_IN, LOG_OUT } from "../constants";

export function logIn(user) {
  return { type: LOG_IN, user };
}
export function logOut() {
  return { type: LOG_OUT };
}
