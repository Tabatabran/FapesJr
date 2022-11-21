import React from 'react';
import { NavigateFunction } from "react-router-dom";
import './TelaLogin.css';

interface Params {
  navigate : NavigateFunction;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  signInWithEmailAndPasswordHandler:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  password: string;
  email: string;
  error: string;
}

function TelaInicial({onChangeHandler,signInWithEmailAndPasswordHandler, navigate, password, email, error}: Params) {

  return (
    <div className="TelaLogin mt-8" >
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}

      <form>

        <div className='formLogin'>
          <div className='itens'>
            <label id='labelLogin'>Email:</label>
            <label id='labelSenha'>Senha:</label>
          </div>

          <div className='itens' id='inputs'>
            <input type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value = {email}
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)} />
            <input type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value = {password}
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}/>
          </div>
        </div>

        <div>
          <button id='botaoCadastrar' onClick = {() => navigate('/CadastroProfessor')}>
            Cadastrar
          </button>
          <button id='botaoLogar' onClick = {(event) => {signInWithEmailAndPasswordHandler(event)}}>
            Logar
          </button>
        </div>

      </form>
    </div >
  );
}

export default TelaInicial;