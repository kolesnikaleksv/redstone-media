import { createSlice } from '@reduxjs/toolkit'

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    popupvisible: false
  },
  reducers: {
    toggleVisibility: state => {
      state.popupvisible = !state.popupvisible
    }
  }
})

export const { toggleVisibility, popupvisible } = popupSlice.actions

export default popupSlice.reducer;