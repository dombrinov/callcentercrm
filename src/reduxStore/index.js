import { configureStore } from "@reduxjs/toolkit";
import { partnershipApi } from "./ApiSlice";
import filterReducer from "./filterSlice";
export default configureStore({
  reducer: {
    filter: filterReducer,
    [partnershipApi.reducerPath]: partnershipApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(partnershipApi.middleware),
});
