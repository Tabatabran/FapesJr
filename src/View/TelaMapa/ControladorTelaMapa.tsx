import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setValor } from '../../Componentes/redux/questao';
import TelaMapa from './TelaMapa';

import {registerResultadosAlunos} from '../../dao/firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, dbFire } from "../../dao/firebase";

function ControladorTelaMapa() {
  const navigate = useNavigate();
  const prova = useSelector((state: any) => state.storeProva.prova.prova.prova);
  const aluno = useSelector((state: any) => state.storeAluno.respostasAluno);
  const questaoAtual = useSelector((state: any) => state.storeQuestao.questao);
  const [showPopUp, setShowPopUp] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const dispatch = useDispatch();
  const barcoNavegacaoNome = handleBarcoNavegacaoNome();
  const [user] = useAuthState(auth);

  console.log(prova)

  var tipoBarco = aluno.tipoBarco;

  console.log(tipoBarco)

  useEffect(() => {
    var caminho = handleProximaQuestao()

    const timer = setTimeout(() => navigate(caminho), 3000);

    return () => clearTimeout(timer);

  }, [])

  function handleProximaQuestao() {
    var caminhoTelaQuestao = '';

    if (questaoAtual < 6 && questaoAtual > 0) {

      console.log(questaoAtual)

      var tipoquestao = prova[questaoAtual].tipoQuestao;

      console.log(tipoquestao)

      switch (tipoquestao) {
        case 1:
          return caminhoTelaQuestao = '/TelaQuestaoTipo1';
        case 2:
          return caminhoTelaQuestao = '/TelaQuestaoTipo2';
        case 3:
          return caminhoTelaQuestao = '/TelaQuestaoTipo3';
        case 4:
          return caminhoTelaQuestao = '/TelaQuestaoTipo4';
        default:
          setMensagem('Ocorreu algum erro com a prova');
          setShowPopUp(true);
          return caminhoTelaQuestao = '/TelaPrincipalProfessor';
      }
    } else if (questaoAtual === 6) {

      dispatch(setValor);

      console.log(aluno)

      registerResultadosAlunos({dado: aluno, uidUser: user?.uid, idProva: prova.id});

      return caminhoTelaQuestao = '/TelaBauDoTesouro';
    } else {
      setMensagem('Ocorreu algum erro com a prova');
      setShowPopUp(true);
      return caminhoTelaQuestao = '/TelaPrincipalProfessor';
    }


  }

  function handleBarcoNavegacaoNome() {
    if (questaoAtual === 1) {
      return 'barcoNavegacao1'
    } else if (questaoAtual === 2) {
      return 'barcoNavegacao2'
    } else if (questaoAtual === 3) {
      return 'barcoNavegacao3'
    } else if (questaoAtual === 4) {
      return 'barcoNavegacao4'
    } else {
      return 'barcoNavegacao5'
    }
  }

  function openModal() {
    setShowPopUp(true);
  }

  function closeModal() {
    setShowPopUp(false);
  }

  return (

    <TelaMapa
      tipoBarco={tipoBarco}
      showPopUp={showPopUp}
      closeModal={closeModal}
      openModal={openModal}
      mensagem={mensagem}
      barcoNavegacaoNome={barcoNavegacaoNome}
    />
  );

}

export default ControladorTelaMapa
