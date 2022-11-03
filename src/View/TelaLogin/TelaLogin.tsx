import React from 'react';
import './TelaLogin.css';


function TelaInicial() {

  return (
    <div className="TelaInicial">
      <header className="header">

        <form>
          <div className='form'>
            <div className='itens'>
              <label id='labelLogin'>Login:</label>
              <label id='labelSenha'>Senha:</label>
            </div>

            <div className='itens' id='inputs'>
              <input />
              <input id='inputSenha' />
            </div>
          </div>

          <div>
            <button id='botaoCadastrar'>
              Cadastrar
            </button>
            <button id='botaoLogar'>
              Logar
            </button>
          </div>

        </form>
      </header>
    </div>
  );
}

export default TelaInicial;