import { configureStore } from '@reduxjs/toolkit'
import prova from './prova'
import aluno from './aluno'
import questao from './questao'

export default configureStore({
  reducer: {
    storeProva: prova,
    storeAluno: aluno,
    storeQuestao: questao
  },
})