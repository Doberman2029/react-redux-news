import { combineReducers } from "redux";
import news from "./reducers/news";
import currentUser from "./reducers/currentUser";

let rootReducer = combineReducers({ news, currentUser });

export default rootReducer;
