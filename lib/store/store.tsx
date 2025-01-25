import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { imageApi } from "../services/imageApi";
import openModalSliceReducer from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    [imageApi.reducerPath]: imageApi.reducer,
    openModal: openModalSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imageApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
