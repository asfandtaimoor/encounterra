// reducers/index.js
import { combineReducers } from "redux";
// import authReducer from "./authReducer";
import combatantsReducer from "./combatantsReducer";
import userData from "./UserData";
import Login from "./Auth";

const rootReducer = combineReducers({
  login: Login,
  // auth: authReducer,
  userData: userData,
  combatantsDefinition: combatantsReducer,
  // Add other reducers here if needed
});

export default rootReducer;
