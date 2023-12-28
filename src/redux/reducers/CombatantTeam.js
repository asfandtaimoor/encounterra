import { createSlice } from "@reduxjs/toolkit";

const CombatantTeam = createSlice({
  name: "COMBATANT_TEAM ",
  initialState: {
    blue: [],
    red: [],
  },
  reducers: {
    updateCombatantTeams(state, action) {
      const { team, data } = action.payload;

      // Check if data already exists in the team
      const existingData = state[team].find((item) => item.id === data.id);

      if (!existingData) {
        // If data doesn't exist, push it into the team
        state[team].push(data);
      }

      return state;
    },
  },
});

const { actions, reducer } = CombatantTeam;

export const { updateCombatantTeams } = actions;

export default reducer;
