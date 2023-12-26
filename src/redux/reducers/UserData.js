// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/axios"; // Assuming you have your axiosInstance configured in a separate file

const userDataReducer = createSlice({
  name: "USER_DATA",
  initialState: null,
  reducers: {
    updateUserData(state, action) {
      // If payload is null, set the state to null
      return action.payload !== null ? { ...state, ...action.payload } : null;
    },
  },
});

export const { updateUserData } = userDataReducer.actions;

export const fetchUserDataAsync = () => async (dispatch) => {
  try {
    // Get the access token from local storage
    const accessToken = localStorage.getItem("AccessToken");

    if (accessToken) {
      // If access token exists, fetch user data
      const response = await axiosInstance.get("user_data", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response && response.status === 200) {
        const data = response.data;
        console.log("User Data Fetched:", data);
        dispatch(updateUserData(data));
      } else {
        console.error(
          `Server response was not OK (${response.status}):`,
          response.statusText
        );
        dispatch(updateUserData(null));
      }
    } else {
      // If access token does not exist, set user data to null
      dispatch(updateUserData(null));
    }
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    dispatch(updateUserData(null));
  }
};

export default userDataReducer.reducer;
