import React, { useEffect, useState } from 'react';
import TelaQuestaoTipo2 from './TelaQuestaoTipo2';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {saveRespostaAluno} from '../../../Componentes/redux/aluno'
import {increment} from '../../../Componentes/redux/questao'

function ControladorTelaQuestaoTipo2() {

  const questaoAtual = useSelector((state: any) => state.storeQuestao.questao);
  const prova = useSelector((state: any) => state.storeProva.prova.prova.prova);
  const enunciado = prova[questaoAtual].enunciado;
  let alunoInformacoes = {};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const opcao1 = useSelector((state: any) => state.storeProva.prova.prova.prova[questaoAtual].resposta1);
  const opcao2 = useSelector((state: any) => state.storeProva.prova.prova.prova[questaoAtual].resposta2);
  const opcao3 = useSelector((state: any) => state.storeProva.prova.prova.prova[questaoAtual].resposta3);
  const opcao4 = useSelector((state: any) => state.storeProva.prova.prova.prova[questaoAtual].resposta4);
  const [resposta, setResposta] = useState('');

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

    <TelaQuestaoTipo2
      enunciado={enunciado}
      setResposta={setResposta}
      handleSalvarRespostaAluno={handleSalvarRespostaAluno}
      opcao1={opcao1}
      opcao2={opcao2}
      opcao3={opcao3}
      opcao4={opcao4}
      resposta={resposta}
    />
  );

}

export default ControladorTelaQuestaoTipo2