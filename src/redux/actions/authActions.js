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
    localStorage.setItem("RefreshToken", data.RefreshToken);

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
//     // Get the access token from local storage
//     const accessToken = localStorage.getItem("AccessToken");
//     console.log("AccessToken:", accessToken);

//     // Make an Axios GET request
//     const response = await axios.get("https://encounterra.com/api/user_data", {
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //     Authorization: `Bearer ${accessToken}`,
//       // },

//       headers: {
//         Authorization:
//           "Bearer eyJraWQiOiJLa0RKUGJxYzZkR0lYeG5cL1hNcjF5NE05blRIa1wvREU3ZDhRVllYMmRxR3c9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwODBiZmE1ZS1lNGIwLTQ4YTUtOTNjNi0wYTVmOTM5NGYyZGIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMV82blcxWVZKMTciLCJjbGllbnRfaWQiOiIzNmVnbXI4ajZvMWUybG92MDdmZHZra2ttdSIsIm9yaWdpbl9qdGkiOiIyMTM4MzY3ZC00MjE5LTRjZjQtYWVmYy0yNTM4OTQ0NDk5NmEiLCJldmVudF9pZCI6IjkwMmZiMjMxLTczODktNDlkYy05ZjExLTAyZDZhNDIyMjc4NyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDM0MDk3NzIsImV4cCI6MTcwMzQxMzM3MiwiaWF0IjoxNzAzNDA5NzcyLCJqdGkiOiIwNGVjOGMzZS01NmRiLTRiMDUtOGE1YS02YTVkYjQyODEzOTMiLCJ1c2VybmFtZSI6ImNiOTg3OGIzLTM0ZmItNDdjOC1iZTQ0LWVmNDc4MjdmZTc2MSJ9.FMpZPrkPuGFApKGFHXtecrcmkgZ0BCM4MTHJU8agkmGhQUaCJbCnUFq6VJmsmgPoQqxtv3HGPmzrWZ-f_BEM8Pe-jMCx3SoBJl_3QajF-l6CdUPB5o1e_1HoogvXirMPooXc0lWqaklYBkKLUqgIf59TqKEowc4y4-HzkNjcSLRKhYcXi4EqnKSnR6IP3EH8vkBRjhbLwgAGsdNm4hkquzv4v05JPMB3hxS4L1ddhv5cCeqq53N-uFg90-yN33TCPye19WblLm-04cM8G6UgzQNjQNdecm1sCcLLhwpp9fi48ZUtSNDhNqOngOdThMq1AzAzoXpECpEohojMRSncTg",
//         Cookie:
//           "session=.eJxVlseu5DgSRX-l8NalgmxmqlYtn_LebgR576WUafS_j141BphZUiIvI06QvPH3V9ZFVfv1-2uNqm4Y5rb6ZM_X46_i-_OvZOi-fn5lx1jN2RJW_ddv5AGCP7_aoaj6cK267Ov3318_0nu9ufU_f8DoDzpLfsAgjPyAsHvybxT_wcnW1z8_v-Ysv0XKcB2a7Bb6yk6hTt9NpVaC6EB6JVFCG3fy95iUaxs2QEXhq73y3aPn66GyW4WUbJw0HKLK9V-9uaX786KLxkgKXdiHvqHp8qSNzerQ9z6URdbj04CArGd3A4JSyt7vDKEyxEIECPUSQRyIJi7ENySlm-kVcu1CnDy_tMgiJfQwydE6iJ2HwyttGWxKIg1Y90_VBkrbLR4zzxpuqEWMnzJTdZnoh3foLBL5UswhgZIUjg_hU-sFFxvNN-CQsvBm_SgWhlZY7HqtPT9iYyuL0FwJfJOAM2J8pgyBhHQsAeYjLcphMA9AKi473BAGOlktHGWgOVPoM0uQFgSDB9tcSAe5_4JTubcNS7pqysqD1rmOqbJ0Wqi1wn0eG866-fMB-Wn_LNFRQI4ggF-hzMsSgXoQJpJJYtFzOSf7rxwj6fCE8vYJngWZGL82YN78eElZdyyYki50WwQWyePFjn20a9rIrwp-4UKHayYNfo5XB2Ka5VBMGC16qu3zQVNj5E4k-tgtf6r2XaZxlBTQZocTGdbF9mBDF8IYdGFENFoT3kvfA8FeXP2hHngCC5pzAZlSluaM4vqlW8QaH_Bmli9GesSnyrvCssxwpw0u-ABVvnx0ncRPyVWnD1VedVLi464mlYNeNAzca2UKM9Q90Dw5OFd9asqx0pjhGMbHB-M6NdwxlQAsI20-eemcTrzzsedxieUTZzGy5c2uZZOjPj2tunOY9TZ4SlKmWZyofom3Mt_hAxVzeqbEh9-BViK5oAHJVDPvqYUUDCKumH104VQfmV6ba4tm41DzBnv09xmrBw2i5PkNaPgNl6oOCJqGhiRh_HEm6nG92wbYi3B255DPwI-I0gDu7nNIYNjHrYkVfD6oDfOK0dBF5zGL-8w2-am10FN8a8MOAIy9VLksmiwoAMUKaD4SMa6gJfmw5YmhoMgHsYFshy78miyarKgaDYOnbU5EWV6ilHg1zC62tviNAL8BgIgla0YGjYJIjAwE0vYwo7HnanW1Y60D0udrLZPmWYcdI42svPUZkDEPjXMlo8A8k8443j7QojLn_lBgamzkutZe_inZZj3Qb0w9K-dlEMTe9i4xhF1JyOEsdyU4BX1WZQJszMp7jUSZd8PSyHhFcBJMHakEl3wNiWHKxLucxFTzugz1QlUEwqacJxQUQ3RGkqS88QATjymf3lPkqRFnY8CnTSa7ET1GdK5BUoPrnu9I1hDEtQOYI6cdt_Cg7ryP9IDb_BPdzlfl5BL9HK-8Zw2LTNY3AhVEnVLzMm0WDR3We5hT671ltRv30Dkf1Wf7BJTzoQreI54I87yEM-in7TOmJo3UoGDqmBu3lblG2xtGAA_ayXXY3GFogsQOLXfUVbrI-W0vkqTRTghc0HGfy5Vh54tZ-ljYhFqU9gTZssYhUeKpDIFB9642yTx637TnwZlGJT8BvcoGnPssaiQS_UMsE1FCderzWNdMuxpNjsVHbVtxvRsVrCgjocaQzfMv-FO1k7exGSvsoru2bRKOCbdeSjMsyhygOAFrdXb4VhjtJH7JppOvb30-tBQ6TB1WCm7gCEbsbMLWZZ8RSKjh3GNG6eC1wELEyji3u7w3v0v4sx5QRXpxeshVa6wIkxKJMp0a7ikcbQLYFsAeFjSzAR7K9OZWCejn9prSmcItiY34TzpUpKOJIwaOiJnaHEPFDyDLy5d57dKS-c7jE70VlgEV92AMbFiCZb6spHq5tveUJjgfS9VdzGLamtyHybfXSCbBTGGjXAdM2O7Zh5xvPh9rAH7uFyk09QwFCR_9ZWtOQ5qVv_TVxAQ2vBbMURC3o_6PB86Rq397nhSBhmhzwuFfQWOArZ9xWCJBpZLULKYwIBa3Bh9B-8dgbCSgS8NpW1_ujMNAEvz_fVI-Fcv_9shb_kpd_pbnd_W-zUHHQIEJtbc57ZKlo75lr6ql1EoF7r7ldKolYwrnnwHHf9vxmCB_7HhI38aeXOMdzv7xYbyPuxaMT2gM3sQWePaaws6VUuAhdezqe-Mn7lgkObE6hqFEgh1I8tI2QfRVdl5w3CaH6wSifAO-96hjrm3j3sj_xcBfSuf0scejUR18ZNc-Yw6HZTrtgncwR_C6pia_3I_sGbnpGLf4lHJ_WogqsOzLd23MP6E2qBnwzu9UYH71O6X2K_DOiTl9y7_8y2gU2P_TbqSds6UsPgYU_-BrHfZh-7zzxyTLqBWaXxWaOFQKRAOL7SQ3aJTOB_1LRwIraILvOHrjE8HO5iHOdY8ffMfW_s0iOb__KXWMkO13SXwvvaRO-QQwNqbca0vg9pvhJvX3Oo_ffNdYIxf9jqlMPWPwEGOMXbtSawaRaRmU6QSTL_3O20GTO9ab3X6PL8UqdtXcq8hlwXufQ7mIS6HlU64J7Nb6L5tW-Y7L8lGZAk-_ZqCbDShb8l17GZZNEJXdm9VF1jLNY4r7hw2UwM5513H9Ny-lUq0CUTn-kiwZDLpvNmmtUtDNXQcl1-kUOkHl-q6TldyaAv7L2thLbUZ8f_XPEy9fXInGijZtZBrI73yQXc6BfIHoyWJBeJDYCu25DeddUCtanmSHscGaDzOKoOcwCoZnlrEHPx7j-zVNtVJmyxFQoHgF9BHWVb-pb0uN5Q8BGs9tnM7r5Q-912Ahs8hbQkGzA8wySwObKaIfmAcDtNVDQXundBgQEDJtBHL3T73LbZOXqP2lVdAAaoZXgMKrhTHxLAczAuTW3tGZaAlAEFDD2YlCMo6rrENDVTdAbIm2GPvu8tFTXYvpVGJOPdn0tSPRI4YCOBWGWY6a8G2RApUkIGVHG5kEu2jKWdmtwYggYK_jRKB9ZrtrRRHsGXlTWqyoPvYWmdMz3b_--Q_mkvIA.ZYhQEQ.9NFYy79rKHTn3CUMCcMau9cYXNA",
//       },
//     });

//     // Log the entire response object
//     console.log("Full Response:", response);

//     // Check for success status
//     if (!response || response.status !== 200) {
//       console.error(
//         `Server response was not OK (${response.status}):`,
//         response.statusText
//       );
//       throw new Error(`Server response was not OK (${response.status})`);
//     }

//     // Access the response data
//     const data = response.data;
//     console.log("Response Data:", data);
//   } catch (error) {
//     console.error("Error fetching user data:", error.message);
//   }
// };

// fetchUserData();
