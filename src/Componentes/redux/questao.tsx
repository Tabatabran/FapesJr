import { createSlice} from '@reduxjs/toolkit'

export const handleStateQuestao = createSlice({
  name: 'stateQuestao',
  initialState: {
    questao: 1,
  },
  reducers: {
    increment: (state) => {
      state.questao += 1;
    },
    decrement: (state) => {
      state.questao -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const {increment, decrement} = handleStateQuestao.actions

export const selectCount = (state: { counter: { questao: any; }; }) => state.counter.questao

export default handleStateQuestao.reducer 