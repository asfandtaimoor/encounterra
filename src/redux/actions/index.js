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

// export const loginSuccess = (userData) => ({
//   type: "LOGIN_SUCCESS",
//   payload: userData,
// });

// export const loginFailure = (error) => ({
//   type: "LOGIN_FAILURE",
//   payload: error,
// });

// export const loginUser = (combatantDefinition) => ({
//   type: "COMBATANT_DEFINITION",
//   payload: combatantDefinition,
// });
// export const combatantDefinition = (combatantDefinition) => ({
//   type: "COMBATANT_DEFINITION",
//   payload: combatantDefinition,
// });

// export const fetchCombatants = () => async (dispatch) => {
//   console.log("Fetch combatants");
//   // Get the access token from local storage
//   const accessToken = localStorage.getItem("AccessToken");

//   try {
//     // Dispatch a loading action to set loading state to true
//     dispatch({ type: "FETCH_COMBATANTS_START" });

//     const response = await axiosInstance.get("combatant-definition", {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     console.log("Response:", response.data);

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
//   // Get the access token from local storage
//   const accessToken = localStorage.getItem("AccessToken");

//   try {
//     // Dispatch a loading action to set loading state to true
//     dispatch({ type: "FETCH_COMBATANTS_START" });

//     const response = await axiosInstance.get("combatant-definition", {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     console.log("Response:", response.data);

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

// loginUser()