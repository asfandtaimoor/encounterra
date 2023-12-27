import axiosInstance from "@/axios";
import { createSlice } from "@reduxjs/toolkit";

const combatantsReducer = createSlice({
  name: "COMBATANT_DEFINITION",
  initialState: null,
  reducers: {
    // updateCombatants(state, action) {
    //   console.log([...state, ...action.payload]);
    //   return [...state, ...action.payload];
    // },
    updateCombatants(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = combatantsReducer;

export const { updateCombatants } = actions;

// Modify fetchCombatants to accept dispatch as an argument
export const fetchCombatants = () => async (dispatch) => {
  try {
    // Dispatch a loading action to set loading state to true
    dispatch({ type: "FETCH_COMBATANTS_START" });

    const accessToken = localStorage.getItem("AccessToken");
    const response = await axiosInstance.get("combatant-definition", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = response.data;
    // Dispatch the combatantDefinition action to update state with the fetched data
    dispatch(updateCombatants(data));

    // Dispatch a success action or set loading state to false if needed
    dispatch({ type: "FETCH_COMBATANTS_SUCCESS" });
  } catch (error) {
    console.error("Fetch combatants error:", error);

    // Dispatch an error action to update state with the error message
    dispatch(updateCombatantDefinition(null));

    // Propagate the error for the component to handle
    throw error;
  }
};

export default reducer;
