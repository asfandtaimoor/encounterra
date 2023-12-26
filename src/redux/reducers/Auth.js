// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/axios"; // Assuming you have your axiosInstance configured in a separate file

const userDataSlice = createSlice({
  name: "login",
  initialState: null,
  reducers: {
    getLoginDetails(state, action) {
      // Set the state to the payload value directly
      return action.payload;
    },
  },
});

export const { getLoginDetails } = userDataSlice.actions;

export const loginUser = (email, password) => async (dispatch) => {
  try {
    // Dispatch a loading action to set loading state to true
    dispatch({ type: "FETCH_USER_START" });

    const response = await axiosInstance.post("login", {
      email,
      password,
    });

    if (!response.data || response.data.status !== "success") {
      throw new Error("Login failed");
      dispatch(getLoginDetails(false));
    }

    dispatch(getLoginDetails(true));

    console.log("Response:", response.data);

    const { data } = response.data;

    localStorage.setItem("AccessToken", data.AccessToken);
    localStorage.setItem("RefreshToken", data.RefreshToken);

    // Dispatch a success action or set loading state to false if needed
    dispatch({ type: "FETCH_USER_SUCCESS" });
    // fetchUserData();
  } catch (error) {
    console.error("Fetch combatants error:", error);

    // Dispatch an error action to update state with the error message
    dispatch({
      type: "FETCH_USER_FAILURE",
      payload: error.message || "An error occurred while fetching combatants",
    });

    // Propagate the error for the component to handle
    throw error;
  }
};

// export const logoutUser = () => async (dispatch) => {
//   try {
//     const response = await axiosInstance.get("logout");

//     if (!response.data || response.data.status !== "success") {
//       throw new Error("Logout failed");
//     }

//     console.log("Logout " + response);
//     // dispatch(getLoginDetails(false)); // Set login status to false on successful logout
//   } catch (error) {
//     console.error("Logout error:", error);

//     // Dispatch an error action to update state with the error message
//     dispatch({
//       type: "FETCH_USER_FAILURE",
//       payload: error.message || "An error occurred during logout",
//     });

//     // Propagate the error for the component to handle
//     throw error;
//   }
// };

export default userDataSlice.reducer;
