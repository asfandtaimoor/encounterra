// reducers/index.js
import { combineReducers } from "redux";
import combatantsReducer from "./combatants";
import userData from "./UserData";
import Login from "./Auth";

const rootReducer = combineReducers({
  login: Login,
  userData: userData,
  combatantsDefinition: combatantsReducer,
});

export default rootReducer;
