import { createSlice } from '@reduxjs/toolkit'

export const handleStateProva = createSlice({
  name: 'stateProva',
  initialState: {
    prova: [],
  },
  reducers: {
    saveProva: (state, action) => {
      state.prova = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {saveProva} = handleStateProva.actions

export default handleStateProva.reducer