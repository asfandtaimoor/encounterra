import { createSlice } from "@reduxjs/toolkit";

const activeCombatant = createSlice({
  name: "ACTIVE_COMBATANTS",
  initialState: null,
  reducers: {
    updateActiveCombatants(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = activeCombatant;

export const { updateActiveCombatants } = actions;

export default reducer;
