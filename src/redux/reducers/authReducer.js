// redux/reducers/authReducer.js
const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        accessToken: action.payload.AccessToken,
        refreshToken: action.payload.RefreshToken,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        accessToken: null,
        refreshToken: null,
        error: action.payload,
      };
    // Add other action cases as needed

    default:
      return state;
  }
};

export default authReducer;
