import { createSlice } from "@reduxjs/toolkit";

const combatantsReducer = createSlice({
  name: "COMBATANT_DEFINITION", // Use "combatantDefinition" as the name
  initialState: null,
  reducers: {
    updateCombatantDefinition(state, action) {
      //   return "this is Combatant update Definition";
      // return { sdf: "asf" };
      // return state;
      return { ...state, ...action.payload };
    },
  },
});

const { actions, reducer } = combatantsReducer;

export const { updateCombatantDefinition } = actions;

export default reducer;
