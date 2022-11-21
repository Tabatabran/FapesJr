import React from 'react';
import './TelaInicialJogo.css';
import fundo from '../../imagens/fundoCompletoPlaca.png'

function TelaInicial() {

  return (
    <div className="TelaInicialJogo"
      style={{ backgroundImage: `url(${fundo})` }}>

      <form>

        <div className='formMenu'>
          <button id='botaoJogar'>Jogar</button>
          <button id='botaoSair'>Sair</button>
        </div>

      </form>
    </div >
  );
}

export default TelaInicial;