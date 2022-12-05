import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increment } from '../../Componentes/redux/questao';
import TelaMapa from './TelaMapa';


function ControladorTelaMapa() {
  const navigate = useNavigate();
  const prova = useSelector((state: any) => state.storeProva.prova);
  const aluno = useSelector((state: any) => state.storeAluno.respostasAluno);
  const questaoAtual = useSelector((state: any) => state.storeQuestao.questao);
  const [showPopUp, setShowPopUp] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const dispatch = useDispatch();
  var tipoBarco = aluno.tipoBarco
  var idCss = '';

  useEffect(() => {
    var caminho = handleNumeroQuestao()

    const timer = setTimeout(() => navigate(caminho), 3000);

    return () => clearTimeout(timer);

  }, [])

  function handleNumeroQuestao() {
    dispatch(increment)
    var caminhoTelaQuestao = '';
console.log(questaoAtual)
    if (questaoAtual < 1) {
      setMensagem('Ocorreu algum erro com a prova');
      setShowPopUp(true);
      return caminhoTelaQuestao = '/TelaPrincipalProfessor'
    }

    switch (questaoAtual) {
      case 1:
        return caminhoTelaQuestao = '/TelaQuestaoTipo1';
      case 2:
        return caminhoTelaQuestao = '/TelaQuestaoTipo2';
      case 3:
        return caminhoTelaQuestao = '/TelaQuestaoTipo3';
      case 4:
        return caminhoTelaQuestao = '/TelaQuestaoTipo4';
      case questaoAtual > 4:
        return caminhoTelaQuestao = '/TelaBauDoTesouro';
      default:
        setMensagem('Ocorreu algum erro com a prova');
        setShowPopUp(true);
        return caminhoTelaQuestao = '/TelaPrincipalProfessor';
    }

  }

  function handleTipoQuestao() {

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
    />
  );

}

export default ControladorTelaMapa
