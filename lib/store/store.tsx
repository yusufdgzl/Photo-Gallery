import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { imageApi } from "../services/imageApi";
import viewUsersSliceReducer from "../features/view-user/wievUsersSlice";

export const store = configureStore({
  reducer: {
    [imageApi.reducerPath]: imageApi.reducer,
    showUsers: viewUsersSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imageApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
