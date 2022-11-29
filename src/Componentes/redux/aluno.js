import { createSlice } from '@reduxjs/toolkit'

export const handleStateAluno = createSlice({
  name: 'stateAluno',
  initialState: {
    respostasAluno: [],
  },
  reducers: {
    saveRespostaAluno: (state, action) => {
      state.respostasAluno = {...state.respostasAluno, ...action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { saveRespostaAluno} = handleStateAluno.actions

export default handleStateAluno.reducer