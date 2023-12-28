// reducers/index.js
import { combineReducers } from "redux";
import combatantsReducer from "./combatants";
import activeCombatant from "./ActiveCombatants";
import CombatantTeam from "./CombatantTeam";
import userData from "./UserData";
import Login from "./Auth";

const rootReducer = combineReducers({
  login: Login,
  userData: userData,
  combatantsDefinition: combatantsReducer,
  activeCombatant: activeCombatant,
  CombatantTeam: CombatantTeam,
});

export default rootReducer;
