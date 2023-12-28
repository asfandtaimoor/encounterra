import { createSlice } from "@reduxjs/toolkit";

const MAX_TEAM_SIZE = 6;

const CombatantTeam = createSlice({
  name: "COMBATANT_TEAM",
  initialState: {
    blue: [],
    red: [],
  },
  reducers: {
    updateCombatantTeams(state, action) {
      const { team, data } = action.payload;

      // Check if the team has reached the maximum size
      if (state[team].length >= MAX_TEAM_SIZE) {
        console.warn(
          `Cannot add more than ${MAX_TEAM_SIZE} items to ${team} team.`
        );
        return state;
      }

      // Check if data already exists in the team
      const existingData = state[team].find((item) => item.id === data.id);

      if (!existingData) {
        // If data doesn't exist and team size is below the limit, push it into the team
        state[team].push(data);
      }

      return state;
    },
    removeCombatantFromTeam(state, action) {
      const { team, id } = action.payload;

      // Remove the item with the specified ID from the team
      state[team] = state[team].filter((item) => item.id !== id);

      return state;
    },
  },
});

const { actions, reducer } = CombatantTeam;

export const { updateCombatantTeams, removeCombatantFromTeam } = actions;

export default reducer;
