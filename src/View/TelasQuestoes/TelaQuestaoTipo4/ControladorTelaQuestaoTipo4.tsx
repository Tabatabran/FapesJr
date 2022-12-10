import React, { useEffect, useState } from 'react';
import TelaQuestaoTipo4 from './TelaQuestaoTipo4';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {saveRespostaAluno} from '../../../Componentes/redux/aluno'
import {increment} from '../../../Componentes/redux/questao'

function ControladorTelaQuestaoTipo4() {

  const questaoAtual = useSelector((state: any) => state.storeQuestao.questao);
  const prova = useSelector((state: any) => state.storeProva.prova.prova.prova);
  const urlImagem = useSelector((state: any) => state.storeProva.prova.prova.prova[questaoAtual].imagem);
  const enunciado = prova[questaoAtual].enunciado;
  const [resposta, setResposta] = useState('');
  let alunoInformacoes = {};
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(urlImagem)

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

    <TelaQuestaoTipo4
      enunciado={enunciado}
      setResposta={setResposta}
      handleSalvarRespostaAluno={handleSalvarRespostaAluno}
      urlImagem={urlImagem}
    />
  );

}

export default ControladorTelaQuestaoTipo4