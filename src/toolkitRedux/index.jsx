import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import toolkitReducer from "./toolkitReducer";

import toolkitSlice from '../slices/popupSlice'

// use toolkitReducet
// const rootReducer = combineReducers({
//   toolkit: toolkitReducer
// });

// use slice
const rootReducer = combineReducers({
  toolkit: toolkitSlice
});

export const store = configureStore({
  reducer: rootReducer
})