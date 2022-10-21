import React, { useState } from 'react';
import './TelaPrincipalProfessor.css';
import PopUp from '../Componentes/PopUps'

function TelaPrincipalProfessor(
  { setInputTurma, inputTurma, inputDescricao, setInputDescricao,
    tipoQuestao, setTipoquestao, questao, handleSetProximaQuestao,
    handleSetQuestaoAnterior, writeUserData, showPopUp, openModal, closeModal }:
    {
      setInputTurma: (text: string) => void, inputTurma: string, inputDescricao: string, setInputDescricao: (texte: string) => void,
      tipoQuestao: number, setTipoquestao: (tipoQuestao: number) => void, questao: number,
      handleSetProximaQuestao: () => void, handleSetQuestaoAnterior: () => void, writeUserData: () => void,
      showPopUp: boolean, openModal: () => void, closeModal: () => void
    }) {

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
            <button onClick={() => setTipoquestao(1)} />
            <button onClick={() => setTipoquestao(2)} />
            <button onClick={() => setTipoquestao(3)} />
            <button onClick={() => setTipoquestao(4)} />
          </div>
          <form>
            {tipoQuestao === 1 && (
              <div>

                <label>Informe o enunciado da questão:</label>
                <textarea />

              </div>
            )}

            {tipoQuestao === 2 && (
              <div>

                <div>
                  <label>Informe o enunciado da questão:</label>
                  <textarea />
                </div>

                <div>
                  <label>Informe a resposta 1:</label>
                  <input />
                </div>

                <div>
                  <label>Informe a resposta 2:</label>
                  <input />
                </div>

                <div>
                  <label>Informe a resposta 3:</label>
                  <input />
                </div>

                <div>
                  <label>Informe a resposta 4:</label>
                  <input />
                </div>

                <div>
                  <label>Informe o número da resposta correta:</label>
                  <input />
                </div>

              </div>
            )}

            {tipoQuestao === 3 && (
              <div>

                <div>
                  <label>Informe o enunciado da questão:</label>
                  <textarea />
                </div>

                <div>
                  <label>Selecione a imagem desejada:</label>
                  <input type="file" />
                </div>

                <div>
                  <label>Informe a resposta 1:</label>
                  <input />
                </div>

                <div>
                  <label>Informe a resposta 2:</label>
                  <input />
                </div>

                <div>
                  <label>Informe a resposta 3:</label>
                  <input />
                </div>

                <div>
                  <label>Informe a resposta 4:</label>
                  <input />
                </div>

                <div>
                  <label>Informe o número da resposta correta:</label>
                  <input />
                </div>

              </div>
            )}

            {tipoQuestao === 4 && (
              <div>

                <div>
                  <label>Informe o enunciado da questão:</label>
                  <textarea />
                </div>

                <div>
                  <label>Selecione a imagem desejada:</label>
                  <input />
                </div>

              </div>
            )}

</form>
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
        <PopUp mensagem='Prova salva com sucesso' visible={showPopUp} openModal={openModal} closeModal={closeModal} />
      </div>

    </div >
  );
}

export default TelaPrincipalProfessor;
