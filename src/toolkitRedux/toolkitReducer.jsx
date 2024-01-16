import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  popupvisible: false
}

export const isvisible = createAction('ISVISIBLE');

export default createReducer(initialState, (builder) => {
  builder
    .addCase(isvisible, (state) => {
      state.popupvisible = !state.popupvisible
    })
})