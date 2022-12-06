import React, { useEffect, useState } from 'react';
import TelaQuestaoTipo1 from './TelaQuestaoTipo1';
import { useDispatch, useSelector } from 'react-redux';

function ControladorTelaQuestaoTipo1() {
  
  const questaoAtual = useSelector((state: any) => state.storeQuestao.questao);
  const prova = useSelector((state: any) => state.storeProva.prova.prova);

  console.log(prova);

  const enunciado = prova[questaoAtual].enunciado;
    

    return (

    <TelaQuestaoTipo1
    enunciado = {enunciado}
    />
  );

}

export default ControladorTelaQuestaoTipo1