// userSlice.js
import { toast } from "react-toastify";
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
    dispatch({ type: "LOGIN_START" });

    const response = await axiosInstance.post("login", {
      email,
      password,
    });

    if (!response.data || response.data.status !== "success") {
      throw new Error("Login failed");
      dispatch(getLoginDetails(false));

      // Show error toast
      toast.error("Login failed", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    dispatch(getLoginDetails(true));
    const { data } = response.data;

    localStorage.setItem("AccessToken", data.AccessToken);
    localStorage.setItem("RefreshToken", data.RefreshToken);

    // Show success toast
    toast.success("Login successful", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Dispatch a success action or set loading state to false if needed
    dispatch({ type: "lOGIN_SUCCESS" });
    // fetchUserData();
  } catch (error) {
    console.error("Fetch combatants error:", error);

    // Dispatch an error action to update state with the error message
    dispatch({
      type: "FETCH_USER_FAILURE",
      payload: error.message || "An error occurred while fetching combatants",
    });

    // Show error toast
    toast.error("An error occurred", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Propagate the error for the component to handle
    throw error;
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("logout");
    if (!response.data || response.data.status !== "success") {
      throw new Error("Logout failed");
    }

    localStorage.removeItem("AccessToken");
    localStorage.removeItem("RefreshToken");
    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: false,
    });
    // Show success toast
    toast.success("Logout successful", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // dispatch(getLoginDetails(false)); // Set login status to false on successful logout
  } catch (error) {
    console.error("Logout error:", error);

    // Dispatch an error action to update state with the error message
    dispatch({
      type: "FETCH_USER_FAILURE",
      payload: error.message || "An error occurred during logout",
    });

    // Show error toast
    toast.error("An error occurred during logout", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Propagate the error for the component to handle
    throw error;
  }
};

export default userDataSlice.reducer;
