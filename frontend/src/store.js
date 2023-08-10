import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './slices/apiSlice';

const store = new configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
