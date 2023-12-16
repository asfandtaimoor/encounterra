// redux/actions/authActions.js
import axios from "axios";

export const loginSuccess = (userData) => ({
  type: "LOGIN_SUCCESS",
  payload: userData,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const fetchUserDetails = (AccessToken) => async (dispatch) => {
  try {
    const response = await axios.get("https://encounterra.com/api/user_data", {
      headers: {
        Authorization: `Bearer ${AccessToken}`,
      },
    });

    console.log("Response:", response);

    if (!response.data || response.data.status !== "success") {
      console.log("Error in response data:", response.data);
      throw new Error("Failed to fetch user details");
    }

    const { data } = response.data;

    dispatch(loginSuccess(data));
  } catch (error) {
    console.error("Fetch user details error:", error);
    dispatch(
      loginFailure(
        error.message || "An error occurred while fetching user details"
      )
    );
    throw error; // Propagate the error for the component to handle
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("https://encounterra.com/api/login", {
      email,
      password,
    });

    if (!response.data || response.data.status !== "success") {
      throw new Error("Login failed");
    }

    const { data } = response.data;
    dispatch(loginSuccess(data));

    localStorage.setItem("AccessToken", data.AccessToken);
    localStorage.setItem("RefreshToken", data.RefreshToken);

    // Fetch user details after successful login
    await dispatch(fetchUserDetails(data.AccessToken));
  } catch (error) {
    dispatch(loginFailure(error.message || "An error occurred"));
    throw error; // Propagate the error for the component to handle
  }
};
