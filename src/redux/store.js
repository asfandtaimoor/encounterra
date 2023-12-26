// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import loggerMiddleware from "./middleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  // Add other middleware, enhancers, etc., as needed
});

export default store;
// redux/store.js
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";

// const store = configureStore({
//   reducer: rootReducer,
//   // preloadedState: {
//   //   auth: { accessToken: null, refreshToken: null },
//   // },
//   // Add other middleware, enhancers, etc., as needed
// });

// export default store;
