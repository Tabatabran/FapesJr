import React from 'react';
import './TelaLogin.css';
import { Link } from 'react-router-dom'


function TelaInicial() {

  return (
    <div className="TelaInicial">
      <header className="header">

        <form>
          <div className='form'>
            <div className='itens'>
              <label id= 'labelLogin'>Login:</label>
              <label id= 'labelSenha'>Senha:</label>
            </div>

            <div className='itens' id = 'inputs'>
              <input />
              <input id = 'inputSenha'/>
            </div>
          </div>

          <div>
            <Link to='/TelaMapa'>
              <button id='botaoCadastrar'>
                Cadastrar
              </button>
            </Link>
            <Link to='/TelaMapa'>
              <button id='botaoLogar'>
                Logar
              </button>
            </Link>
          </div>

        </form>
      </header>
    </div>
  );
}

export default TelaInicial;