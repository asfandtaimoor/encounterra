// middleware/loggerMiddleware.js
import { updateUserData, fetchUserDataAsync } from "../reducers/UserData";
import { updateCombatants } from "../reducers/combatants";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Action:", action);

  // Check if the action type is logout and login value is false
  if (action.type === "LOGOUT_SUCCESS") {
    store.dispatch(updateUserData(null));
    store.dispatch(updateCombatants(null));
    // Dispatch an action to set userData to null
  }

  //   if (action.type === "lOGIN_SUCCESS" || store.login) {
  //     store.dispatch(updateUserData(null));
  //     store.dispatch(fetchUserDataAsync());
  //     // Dispatch an action to set userData to null
  //   }

  next(action);
};

export default loggerMiddleware;
