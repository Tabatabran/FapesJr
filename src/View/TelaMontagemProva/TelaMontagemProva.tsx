import React, { useState } from 'react';
import './TelaMontagemProva.css';
import PopUp from '../../Componentes/PopUp/PopUps'
import fundo from '../../imagens/fundoCeu.jpg'
import { useNavigate } from 'react-router-dom';
import previewTipo1 from '../../imagens/questaoTipo1.png'
import previewTipo2 from '../../imagens/questaoTipo2.png'
import previewTipo3 from '../../imagens/questaoTipo3.png'
import previewTipo4 from '../../imagens/questaoTipo4.png'

interface Params {
  setInputTurma: (text: string) => void, inputTurma: string, inputDescricao: string, setInputDescricao: (texte: string) => void,
  tipoQuestao: number, setTipoquestao: (tipoQuestao: number) => void, questao: number,
  handleSetProximaQuestao: () => void, handleSetQuestaoAnterior: () => void, writeUserData: () => void,
  showPopUp: boolean, openModal: () => void, closeModal: () => void, salvarTipoQuestao1: (e: any) => void,
  salvarTipoQuestao2: (e: any) => void, salvarTipoQuestao3: (e: any) => void, salvarTipoQuestao4: (e: any) => void,
  mensagem: string, handleFileSelectedQuestao3: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function TelaMontagemProva(
  { setInputTurma, inputTurma, inputDescricao, setInputDescricao,
    tipoQuestao, setTipoquestao, questao, handleSetProximaQuestao,
    handleSetQuestaoAnterior, writeUserData, showPopUp, openModal, closeModal, salvarTipoQuestao1,
    salvarTipoQuestao2, salvarTipoQuestao3, salvarTipoQuestao4, mensagem, handleFileSelectedQuestao3 }:
    Params) {

  const navigate = useNavigate();

  return (

    <div className="TelaPrincipalProfessor" style={{ backgroundImage: `url(${fundo})` }}>

      <div className="TelaPrincipalProfessorItens">

        <div>
          <button id='voltarTPP' onClick={(event) => { navigate('/TelaPrincipalProfessor') }}>Voltar</button>
        </div>

        <div className='divExplicaoes'>
          <label id='labelExplicacao'>*Cada prova contêm 5 questões</label>
          <label id='labelExplicacao'>**Escolha o tipo de questão e preencha todos os itens</label>
          <label id='labelExplicacao'>***Não esqueça de salvar cada questão individualmente</label>
          <label id='labelExplicacao'>****As questões com imagens podem demorar alguns segundos para serem salvas</label>
        </div>

        <div className='formformTMP'>

          <div className='itensDescricaoTMP'>
            <label id='labelDescricao'>Descrição da prova:</label>
            <textarea id='inputDescricaoTMP' value={inputDescricao} onChange={(event) => setInputDescricao(event.target.value)} />
          </div>

          <div className='itensTurmaTMP'>
            <label id='labelTurma'>Turma:</label>
            <input id='inputTurmaTMP' value={inputTurma} onChange={(event) => setInputTurma(event.target.value)} />
          </div>

        </div>

        <div className='buttonsTipos'>
          <div className='divLabelQuestaoAtual'>
            <label id='labelquestaoAtual'>Questão {questao}</label>
          </div>

          <button id='tipo1' onClick={() => setTipoquestao(1)}>Tipo 1</button>
          <button id='tipo2' onClick={() => setTipoquestao(2)}>Tipo 2</button>
          <button id='tipo3' onClick={() => setTipoquestao(3)}>Tipo 3</button>
          <button id='tipo4' onClick={() => setTipoquestao(4)}>Tipo 4</button>
        </div>

        {tipoQuestao === 1 && (
          <form onSubmit={salvarTipoQuestao1}>

            <div className='divPreview'>
              <label id='labelPrevie'>Exemplo de questão:</label>
              <img id='imgPreview' src={previewTipo1} />
            </div>

            <div>
              <label id='labelEnunciado'>Informe o enunciado da questão:</label>
              <textarea id='enunciado' />
            </div>

            <div>
              <button type='submit' id='buttonSalvarQuestao'>Salvar questão</button>
            </div>
          </form>
        )}

        {tipoQuestao === 2 && (
          <form onSubmit={salvarTipoQuestao2}>

            <div className='divPreview'>
              <label id='labelPrevie'>Exemplo de questão:</label>
              <img id='imgPreview' src={previewTipo2} />
            </div>

            <div>
              <label id='labelEnunciado'>Informe o enunciado da questão:</label>
              <textarea id='enunciado' />
            </div>

            <div>
              <label id='labelEnunciado'>Informe a resposta 1:</label>
              <input id='resposta1' />
            </div>

            <div>
              <label id='labelEnunciado'>Informe a resposta 2:</label>
              <input id='resposta2' />
            </div>

            <div>
              <label id='labelEnunciado'>Informe a resposta 3:</label>
              <input id='resposta3' />
            </div>

            <div>
              <label id='labelEnunciado'>Informe a resposta 4:</label>
              <input id='resposta4' />
            </div>

            <div>
              <label id='labelEnunciado'>Informe o número da resposta correta:</label>
              <input id='respostaCorreta' />
            </div>

            <div>
              <button type='submit' id='buttonSalvarQuestao'>Salvar questão </button>
            </div>

          </form>
        )}

        {tipoQuestao === 3 && (
          <form onSubmit={salvarTipoQuestao3}>

            <div className='divPreview'>
              <label id='labelPrevie'>Exemplo de questão:</label>
              <img id='imgPreview' src={previewTipo3} />
            </div>

            <div>
              <label id='labelEnunciado'>Informe o enunciado da questão:</label>
              <textarea id='enunciado' />
            </div>

            <div>
              <label id='labelEnunciado'>Selecione a imagem desejada:</label>
              <input id='inputEscolhaImagem' type="file" onChange={handleFileSelectedQuestao3} />
            </div>

            <div>
              <label id='labelEnunciado'>Informe a resposta 1:</label>
              <input id='resposta1' />
            </div>

            <div>
              <label id='labelEnunciado'>Informe a resposta 2:</label>
              <input id='resposta2' />
            </div>

            <div>
              <label id='labelEnunciado'>Informe a resposta 3:</label>
              <input id='resposta3' />
            </div>

            <div>
              <label id='labelEnunciado'>Informe a resposta 4:</label>
              <input id='resposta4' />
            </div>

            <div>
              <label id='labelEnunciado'>Informe o número da resposta correta:</label>
              <input id='respostaCorreta' />
            </div>

            <div>
              <button type='submit' id='buttonSalvarQuestao'>Salvar questão </button>
            </div>

          </form>
        )}

        {tipoQuestao === 4 && (
          <form onSubmit={salvarTipoQuestao4}>

            <div className='divPreview'>
              <label id='labelPrevie'>Exemplo de questão:</label>
              <img id='imgPreview' src={previewTipo4} />
            </div>

            <div>
              <label id='labelEnunciado'>Informe o enunciado da questão:</label>
              <textarea id='enunciado' />
            </div>

            <div>
              <label id='labelEnunciado'>Selecione a imagem desejada:</label>
              <input id='inputEscolhaImagem' type='file' onChange={handleFileSelectedQuestao3} />
            </div>

            <div>
              <button type='submit' id='buttonSalvarQuestao'>Salvar questão </button>
            </div>

          </form>
        )}



        {tipoQuestao > 0 && (
          <div>
            {questao !== 1 && (
              <button id='buttonAnteriorQuestao' onClick={() => handleSetQuestaoAnterior()}>Questão anterior</button>
            )}
            {questao < 5 && (
              <button id='buttonProximaQuestao' onClick={() => handleSetProximaQuestao()}>Próxima questão</button>
            )}
            {questao == 5 && (
              <button onClick={() => writeUserData()} id='botaoSalvar'>Salvar Prova</button>
            )}

          </div>
        )}

      </div>
      <div>
        <PopUp mensagem={mensagem} visible={showPopUp} openModal={openModal} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default TelaMontagemProva;
