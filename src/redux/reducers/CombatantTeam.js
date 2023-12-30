import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
        // Show error toast
        toast.error(
          `Cannot add more than ${MAX_TEAM_SIZE} items to ${team} team.`,
          {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return state;
      }

      // Check if data already exists in the team
      state[team].push(data);

      return state;
    },
    removeCombatantFromTeam(state, action) {
      const { team, id, index } = action.payload;
      console.log(index);

      // If index is provided, use it to remove the item
      if (index !== undefined) {
        state[team].splice(index, 1);
      } else {
        // Otherwise, remove the item with the specified ID from the team
        state[team] = state[team].filter((item) => item.id !== id);
      }

      return state;
    },
  },
});

const { actions, reducer } = CombatantTeam;

export const { updateCombatantTeams, removeCombatantFromTeam } = actions;

export default reducer;
