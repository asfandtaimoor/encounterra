// reducers/index.js
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import combatantsReducer from "./combatantsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  combatantsDefinition: combatantsReducer,
  // Add other reducers here if needed
});

export default rootReducer;
