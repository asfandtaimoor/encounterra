// Axios Start
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://encounterra.com/api/",
  withCredentials: true,
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

export default axiosInstance;
