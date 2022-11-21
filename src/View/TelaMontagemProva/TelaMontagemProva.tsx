import React, { useState } from 'react';
import './TelaMontagemProva.css';
import PopUp from '../../Componentes/PopUps'

interface Params {
  setInputTurma: (text: string) => void, inputTurma: string, inputDescricao: string, setInputDescricao: (texte: string) => void,
  tipoQuestao: number, setTipoquestao: (tipoQuestao: number) => void, questao: number,
  handleSetProximaQuestao: () => void, handleSetQuestaoAnterior: () => void, writeUserData: () => void,
  showPopUp: boolean, openModal: () => void, closeModal: () => void, salvarTipoQuestao1: (e: any) => void,
  salvarTipoQuestao2: (e: any) => void, salvarTipoQuestao3: (e: any) => void, salvarTipoQuestao4: (e: any) => void, 
  mensagem: string, handleFileSelectedQuestao3:(e: React.ChangeEvent<HTMLInputElement>) => void
}

function TelaMontagemProva(
  { setInputTurma, inputTurma, inputDescricao, setInputDescricao,
    tipoQuestao, setTipoquestao, questao, handleSetProximaQuestao,
    handleSetQuestaoAnterior, writeUserData, showPopUp, openModal, closeModal, salvarTipoQuestao1,
     salvarTipoQuestao2,  salvarTipoQuestao3, salvarTipoQuestao4, mensagem, handleFileSelectedQuestao3}:
    Params) {

  return (

    <div>
      <header className="TelaPrincipalProfessorHeader">
        <a>logo</a>
      </header >

      <div className="TelaPrincipalProfessorBody">

        <div id='formularioGeral'>

          <div className='form'>
            <div className='itens'>
              <label id='labelDescricao'>Descrição da prova:</label>
              <label id='labelTurma'>Turma:</label>
            </div>

            <div className='itens' id='inputs'>
              <textarea id='inputDescricao' value={inputDescricao} onChange={(event) => setInputDescricao(event.target.value)} />
              <input id='inputTurma' value={inputTurma} onChange={(event) => setInputTurma(event.target.value)} />
            </div>
          </div>

          <div>
            <a>questão {questao}</a>
            <button id = 'tipo1' onClick={() => setTipoquestao(1)}>Tipo 1</button>
            <button id = 'tipo2' onClick={() => setTipoquestao(2)}>Tipo 2</button>
            <button id = 'tipo3' onClick={() => setTipoquestao(3)}>Tipo 3</button>
            <button id = 'tipo4' onClick={() => setTipoquestao(4)}>Tipo 4</button>
          </div>

          {tipoQuestao === 1 && (
            <form onSubmit={salvarTipoQuestao1}>
              <div>
                <label>Informe o enunciado da questão:</label>
                <textarea id='enunciado' />
              </div>

              <div>
                <button type='submit' >Salvar questão </button>
              </div>
            </form>
          )}

          {tipoQuestao === 2 && (
            <form onSubmit={salvarTipoQuestao2}>

              <div>
                <label>Informe o enunciado da questão:</label>
                <textarea id='enunciado' />
              </div>

              <div>
                <label>Informe a resposta 1:</label>
                <input id='resposta1' />
              </div>

              <div>
                <label>Informe a resposta 2:</label>
                <input id='resposta2' />
              </div>

              <div>
                <label>Informe a resposta 3:</label>
                <input id='resposta3' />
              </div>

              <div>
                <label>Informe a resposta 4:</label>
                <input id='resposta4' />
              </div>

              <div>
                <label>Informe o número da resposta correta:</label>
                <input id='respostaCorreta' />
              </div>

              <div>
                <button type='submit' >Salvar questão </button>
              </div>

            </form>
          )}

          {tipoQuestao === 3 && (
            <form onSubmit={salvarTipoQuestao3}>

              <div>
                <label>Informe o enunciado da questão:</label>
                <textarea id='enunciado' />
              </div>

              <div>
                <label>Selecione a imagem desejada:</label>
                <input type="file" onChange={handleFileSelectedQuestao3} />
              </div>

              <div>
                <label>Informe a resposta 1:</label>
                <input id='resposta1' />
              </div>

              <div>
                <label>Informe a resposta 2:</label>
                <input id='resposta2'/>
              </div>

              <div>
                <label>Informe a resposta 3:</label>
                <input id='resposta3'/>
              </div>

              <div>
                <label>Informe a resposta 4:</label>
                <input id='resposta4'/>
              </div>

              <div>
                <label>Informe o número da resposta correta:</label>
                <input id='respostaCorreta'/>
              </div>

              <div>
                <button type='submit' >Salvar questão </button>
              </div>

            </form>
          )}

          {tipoQuestao === 4 && (
            <form onSubmit={salvarTipoQuestao4}>

              <div>
                <label>Informe o enunciado da questão:</label>
                <textarea id='enunciado'/>
              </div>

              <div>
                <label>Selecione a imagem desejada:</label>
                <input type='file' onChange={handleFileSelectedQuestao3} />
              </div>

              <div>
                <button type='submit' >Salvar questão </button>
              </div>

            </form>
          )}



          {tipoQuestao > 0 && (
            <div>
              {questao !== 1 && (
                <button onClick={() => handleSetQuestaoAnterior()}>Anterior</button>
              )}
              {questao < 5 && (
                <button onClick={() => handleSetProximaQuestao()}>Próximo</button>
              )}
              {questao == 5 && (
                <button onClick={() => writeUserData()} id='botaoSalvar'>Salvar</button>
              )}

            </div>
          )}

        </div>

      </div>
      <div>
        <PopUp mensagem={mensagem} visible={showPopUp} openModal={openModal} closeModal={closeModal} />
      </div>

    </div >
  );
}

export default TelaMontagemProva;
