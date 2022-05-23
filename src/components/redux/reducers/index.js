import { combineReducers } from "redux";
import { ActionReducers } from "./actionReducers";
const reducers = combineReducers({
  allReducers: ActionReducers,
});

export default reducers;
