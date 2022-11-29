import React from 'react';
import './TelaInicialJogo.css';
import fundo from '../../imagens/fundoCompletoPlaca.png'
import {useNavigate} from 'react-router-dom';

function TelaInicial() {
  const navigate = useNavigate();

  return (
    <div className="TelaInicialJogo"
      style={{ backgroundImage: `url(${fundo})` }}>

      <form>

        <div className='formMenu'>
          <button id='botaoJogar' onClick={() => navigate("/TelaEscolhaPersonagem")}>Jogar</button>
          <button id='botaoSair' onClick={() => navigate("/TelaPrincipalProfessor")}>Sair</button>
        </div>

      </form>
    </div >
  );
}

export default TelaInicial;