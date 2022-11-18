import React from 'react';
import './TelaInicialJogo.css';


function TelaInicial() {

  return (
    <div className="TelaInicialJogo">

      <form>

        <div className='formMenu'>

          <button id='jogar'>Jogar</button>
          <button id='voltar'>Voltar</button>

        </div>

      </form>
    </div >
  );
}

export default TelaInicial;