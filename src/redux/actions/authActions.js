// Axios Start
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://encounterra.com/api/",
});

axiosInstance.interceptors.request.use(
  (request) => {
    request.headers.DeveloperName = `Taimoor Salyhal`;

    // Get the access token from local storage
    const accessTokenString = localStorage.getItem("AccessToken");

    // Check if the access token string is not null and is a valid JSON string
    if (accessTokenString && accessTokenString.startsWith("{")) {
      const accessToken = JSON.parse(accessTokenString);
      request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
  },
  (error) => {
    // Handle request error
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);
// Axios End

export const loginSuccess = (userData) => ({
  type: "LOGIN_SUCCESS",
  payload: userData,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

// export const combatantDefinition = (combatantDefinition) => ({
//   type: "COMBATANT_DEFINITION",
//   payload: combatantDefinition,
// });

// export const fetchCombatants = (accessToken) => async (dispatch) => {
//   try {
//     // Dispatch a loading action to set loading state to true
//     dispatch({ type: "FETCH_COMBATANTS_START" });

//     const response = await axiosInstance.get("combatant-definition", {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     console.log("Response:", response);

//     if (!response.data || response.data.status !== "success") {
//       console.log("Error in response data:", response.data);
//       throw new Error("Failed to fetch combatants");
//     }

//     const { data } = response.data;

//     // Dispatch the combatantDefinition action to update state with the fetched data
//     dispatch(combatantDefinition(data));

//     // Dispatch a success action or set loading state to false if needed
//     dispatch({ type: "FETCH_COMBATANTS_SUCCESS" });
//   } catch (error) {
//     console.error("Fetch combatants error:", error);

//     // Dispatch an error action to update state with the error message
//     dispatch({
//       type: "FETCH_COMBATANTS_FAILURE",
//       payload: error.message || "An error occurred while fetching combatants",
//     });

//     // Propagate the error for the component to handle
//     throw error;
//   }
// };

// export const loginUser = (email, password) => async (dispatch) => {
//   console.log("Email: " + email + " Password: " + password);
//   try {
//     const response = await axiosInstance.post("login", {
//       email,
//       password,
//     });

//     if (!response.data || response.data.status !== "success") {
//       throw new Error("Login failed");
//     }

//     const { data } = response.data;
//     dispatch(loginSuccess(data));

//     localStorage.setItem("AccessToken", data.AccessToken);
//     localStorage.setItem("RefreshToken", data.RefreshToken);

//     // Fetch user details after successful login
//     // await dispatch(fetchUserDetails(data.AccessToken));
//     await dispatch(fetchCombatants(data.AccessToken));
//   } catch (error) {
//     dispatch(loginFailure(error.message || "An error occurred"));
//     throw error; // Propagate the error for the component to handle
//   }
// };

export const loginUser = (email, password) => async (dispatch) => {
  console.log("Email: " + email + " Password: " + password);
  // Get the access token from local storage

  try {
    // Dispatch a loading action to set loading state to true
    dispatch({ type: "FETCH_USER_START" });

    const response = await axiosInstance.post("login", {
      email,
      password,
    });

    if (!response.data || response.data.status !== "success") {
      throw new Error("Login failed");
    }
    console.log("Response:", response.data);

    const { data } = response.data;

    localStorage.setItem("AccessToken", data.AccessToken);
    localStorage.setItem("RefreshToken", data.RefreshToken);

    // Dispatch the combatantDefinition action to update state with the fetched data
    // dispatch(combatantDefinition(data));

    // Dispatch a success action or set loading state to false if needed
    dispatch({ type: "FETCH_USER_SUCCESS" });
    fetchUserData();
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

// const fetchUserData = async () => {
//   try {
//     const response = await fetch("https://encounterra.com/api/user_data", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
//       },
//     });

//     if (!response.ok) {
//       console.error("Server response was not OK", response.status);
//       throw new Error("Server response was not OK");
//     }
//     const data = await response.json();
//     console.log(response);
//     console.log(data);
//     // setUserData(data);
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// };

const fetchUserData = async () => {
  try {
    // Get the access token from local storage
    const accessToken = localStorage.getItem("AccessToken");
    console.log("AccessToken:", accessToken);

    // Make an Axios GET request
    const response = await axios.get("https://encounterra.com/api/user_data", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Log the entire response object
    console.log("Full Response:", response);

    // Check for success status
    if (!response || response.status !== 200) {
      console.error(
        `Server response was not OK (${response.status}):`,
        response.statusText
      );
      throw new Error(`Server response was not OK (${response.status})`);
    }

    // Access the response data
    const data = response.data;
    console.log("Response Data:", data);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
  }
};
