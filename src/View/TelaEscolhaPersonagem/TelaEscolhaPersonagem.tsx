import React from 'react';
import './TelaEscolhaPersonagem.css';
import fundo from '../../imagens/fundoIlhaPlaca.png'
import { useNavigate } from 'react-router-dom';

function TelaEscolhaPersonagem(
  {
    tipoBarco, setTipoBarco, setNomeAluno, setInformacaoAluno
  }:
    {
      tipoBarco: string,
      setTipoBarco: (tipobarco: string) => void,
      setNomeAluno: (text: string) => void,
      setInformacaoAluno: () => void
    }
) {
  return (
    <div className="TelaEscolhaPersonagem"
      style={{ backgroundImage: `url(${fundo})` }}>

        <div className='formEscolhaPersonagem'>
          <div>
            <label id='labelNome'> Qual o seu nome?</label>
            <input id='inputNome' type='text' onChange={(event) => setNomeAluno(event.target.value)}/>
          </div>

          <div>
            <label id='labelEscolha'>
              Escolha o seu barco
            </label>
          </div>

          <div className='botaoTipoBarco'>
            <button id={tipoBarco === 'vermelho' ? 'barcoVermelhoSelected' : 'barcoVermelho'} onClick={() => setTipoBarco('vermelho')} />
            <button id={tipoBarco === 'pirata' ? 'barcoPirataSelected' : 'barcoPirata'} onClick={() => setTipoBarco('pirata')} />
            <button id={tipoBarco === 'branco' ? 'barcoBrancoSelected' : 'barcoBranco'} onClick={() => setTipoBarco('branco')} />
          </div>

          <div>
            <button id='botaoComeçar' onClick={() => setInformacaoAluno}>Começar</button>
          </div>

        </div>

    </div >
  );
}

export default TelaEscolhaPersonagem;