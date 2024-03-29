import React, { useEffect, useState } from 'react';
import TelaQuestaoTipo1 from './TelaQuestaoTipo1';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {saveRespostaAluno} from '../../../Componentes/redux/aluno'
import {increment} from '../../../Componentes/redux/questao'

function ControladorTelaQuestaoTipo1() {

  const questaoAtual = useSelector((state: any) => state.storeQuestao.questao);
  const prova = useSelector((state: any) => state.storeProva.prova.prova.prova);
  const enunciado = prova[questaoAtual].enunciado;
  const [resposta, setResposta] = useState('');
  let alunoInformacoes = {};
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSalvarRespostaAluno() {
    alunoInformacoes = {
      ...alunoInformacoes,
      [questaoAtual]:{
        resposta: resposta
      }
      
    }

    dispatch(saveRespostaAluno(alunoInformacoes));
    dispatch(increment());
    navigate('/TelaMapa')
  }

  return (

    <TelaQuestaoTipo1
      enunciado={enunciado}
      setResposta={setResposta}
      handleSalvarRespostaAluno={handleSalvarRespostaAluno}
    />
  );

}

export default ControladorTelaQuestaoTipo1