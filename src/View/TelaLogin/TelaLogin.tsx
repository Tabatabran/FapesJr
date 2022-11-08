import React from 'react';
import './TelaLogin.css';


function TelaInicial() {

  return (
    <div className="TelaLogin">

      <form>

        <div className='formLoginGoogle'>
          <button id='botaoLogarGoogle'>
            Entrar com o Google
          </button>
        </div>


      </form >

      <form>

        <div className='formLogin'>
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
    </div >
  );
}

export default TelaInicial;