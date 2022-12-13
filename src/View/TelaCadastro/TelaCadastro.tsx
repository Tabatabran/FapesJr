import React from "react";
import { NavigateFunction } from "react-router-dom";
import './TelaCadastro.css'
import fundo from '../../imagens/fundoCeu.jpg'

interface Params {
    error: any;
    password: string | number;
    confirmPassword: string | number;
    email: string;
    displayName: string;
    navigate: NavigateFunction;
    createUserWithEmailAndPasswordHandler: (event: any) => void;
    onChangeHandler: (event: any) => void;
}

const TelaCadastrar = ({ error, navigate, password, confirmPassword, email, displayName, createUserWithEmailAndPasswordHandler, onChangeHandler }: Params) => {
    return (
        <div className="TelaCadastro" style={{ backgroundImage: `url(${fundo})` }}>
            {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}

            <div className='formCadastro'>
                <div className='itensCadastro' id='inputs'>
                    <div>
                        <input type="text"
                            className="mt-1 mb-3 p-1 w-full"
                            name="displayName"
                            value={displayName}
                            placeholder="Nome Completo"
                            id="displayNameCadastro"
                            onChange={(event) => onChangeHandler(event)} />
                    </div>
                    <div>
                        <input type="email"
                            className="my-1 p-1 w-full"
                            name="userEmailCadastro"
                            value={email}
                            placeholder="Email"
                            id="userEmailCadastro"
                            onChange={(event) => onChangeHandler(event)} />
                    </div>
                    <div>
                        <input type="password"
                            className="mt-1 mb-3 p-1 w-full"
                            name="userPasswordCadastro"
                            value={password}
                            placeholder="Sua senha"
                            id="userPasswordCadastro"
                            onChange={(event) => onChangeHandler(event)} />
                    </div>
                    <div>
                        <input type="password"
                            className="mt-1 mb-3 p-2 w-full"
                            name="userConfirmPassword"
                            value={confirmPassword}
                            placeholder="Confirme sua senha"
                            id="userPasswordCadastroConfirmacao"
                            onChange={(event) => onChangeHandler(event)} />
                    </div>
                </div>


                <div>
                    <button id='botaoVoltar' onClick={(event) => { navigate('/') }}>
                        Voltar
                    </button>
                    <button id='botaoConfirmarCadastro' onClick={(event) => { createUserWithEmailAndPasswordHandler(event) }}>
                        Enviar
                    </button>
                </div>

            </div>

        </div >
    );
};

export default TelaCadastrar;