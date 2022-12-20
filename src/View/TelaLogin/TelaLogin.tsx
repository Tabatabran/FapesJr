import React from 'react';
import { useNavigate } from "react-router-dom";
import './TelaLogin.css';
import fundo from '../../imagens/fundoCeu.jpg'

interface Params {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  signInWithEmailAndPasswordHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  password: string;
  email: string;
  error: string;
}

function TelaInicial({ onChangeHandler, signInWithEmailAndPasswordHandler, password, email, error }: Params) {
  const navigate = useNavigate();

  return (
    <div className="TelaLogin" style={{ backgroundImage: `url(${fundo})` }}>
      {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}

      <form>

        <div className='formLogin'>

          <div className='itensLogin' id='inputs'>
            <input type="email"
              className="my-1 p-1 w-full"
              name="userEmail"
              placeholder='Email'
              value={email}
              id="userEmail"
              onChange={(event) => onChangeHandler(event)} />

            <input type="password"
              className="mt-1 mb-3 p-1 w-full"
              placeholder='Senha'
              name="userPassword"
              value={password}
              id="userPassword"
              onChange={(event) => onChangeHandler(event)} />
          </div>

          <div className='buttons'>
            <button id='botaoCadastrar' onClick={() => navigate('/CadastroProfessor')}>
              Cadastrar
            </button>
            <button id='botaoLogar' onClick={(event) => { signInWithEmailAndPasswordHandler(event) }}>
              Logar
            </button>
          </div>

          <div className='buttonsRedefinir'>
            <button id='botaoRedefinirSenha' onClick={ () => navigate('/TelaRedefinirSenha')} >
              Redefinir senha
            </button>
          </div>

        </div>
      </form>
    </div >
  );
}

export default TelaInicial;