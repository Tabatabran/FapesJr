import { createSlice } from '@reduxjs/toolkit'

export const handleStateQuestao = createSlice({
  name: 'stateQuestao',
  initialState: {
    questao: 0,
  },
  reducers: {
    increment: (state) => {
      state.questao += 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment} = handleStateQuestao.actions

export default handleStateQuestao.reducer