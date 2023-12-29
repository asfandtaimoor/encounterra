import axiosInstance from "@/axios";
import { createSlice } from "@reduxjs/toolkit";

const combatantsReducer = createSlice({
  name: "COMBATANT_DEFINITION",
  initialState: {
    combatants: null,
    loading: false,
    error: null,
  },
  reducers: {
    startFetchingCombatants(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    fetchCombatantsSuccess(state, action) {
      return {
        ...state,
        combatants: action.payload,
        loading: false,
        error: null,
      };
    },
    fetchCombatantsError(state, action) {
      return {
        ...state,
        combatants: null,
        loading: false,
        error: action.payload,
      };
    },
    searchCombatantsByName(state, action) {
      const searchTerm = action.payload.toLowerCase();
      // If search term is empty, return all combatants
      if (!searchTerm) {
        return {
          ...state,
        };
      }
      // Filter combatants by name
      const filteredCombatants = state.combatants.filter((combatant) =>
        combatant.name.toLowerCase().includes(searchTerm)
      );
      return {
        ...state,
        combatants: filteredCombatants,
      };
    },
  },
});

const { actions, reducer } = combatantsReducer;

export const {
  startFetchingCombatants,
  fetchCombatantsSuccess,
  fetchCombatantsError,
  searchCombatantsByName,
} = actions;

export const fetchCombatants = () => async (dispatch) => {
  try {
    dispatch(startFetchingCombatants());

    const accessToken = localStorage.getItem("AccessToken");
    const response = await axiosInstance.get("combatant-definition", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = response.data;
    dispatch(fetchCombatantsSuccess(data));
  } catch (error) {
    console.error("Fetch combatants error:", error);
    dispatch(fetchCombatantsError(error.message));
    throw error;
  }
};

export default reducer;
