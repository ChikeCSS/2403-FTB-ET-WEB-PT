import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "./api/puppyBowlApi";

//Redux store
export default configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
  },
  // getDefaultMiddleware is a function that returns the default middleware used by Redux Toolkit
  // We're concatenating our API service's middleware to the array of default middleware
  // This means that when we dispatch an action, the API service's middleware will have a chance to handle it
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});
