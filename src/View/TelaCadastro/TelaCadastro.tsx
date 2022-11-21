import React from "react";
import { NavigateFunction } from "react-router-dom";
import './TelaCadastro.css'

interface Params {
    error: any;
    password: string | number;
    email: string;
    displayName: string;
    navigate: NavigateFunction;
    createUserWithEmailAndPasswordHandler: (event: any) => void;
    onChangeHandler: (event: any) => void;
}

const TelaCadastrar = ({ error, navigate, password, email, displayName, createUserWithEmailAndPasswordHandler, onChangeHandler }: Params) => {
    return (
        <div className="TelaCadastro" >
            {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}

            <div className='formLogin'>
                <div className='itens' id='inputs'>
                    <div>
                        <label>
                            Nome:
                        </label>
                        <input type="text"
                            className="mt-1 mb-3 p-1 w-full"
                            name="displayName"
                            value={displayName}
                            placeholder="Nome Completo"
                            id="displayName"
                            onChange={(event) => onChangeHandler(event)} />
                    </div>
                    <div>
                        <label>
                            Email:
                        </label>
                        <input type="email"
                            className="my-1 p-1 w-full"
                            name="userEmail"
                            value={email}
                            placeholder="faruq123@gmail.com"
                            id="userEmail"
                            onChange={(event) => onChangeHandler(event)} />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password"
                            className="mt-1 mb-3 p-1 w-full"
                            name="userPassword"
                            value={password}
                            placeholder="Sua senha"
                            id="userPassword"
                            onChange={(event) => onChangeHandler(event)} />
                    </div>
                </div>
            </div>

            <div>
                <button id='botaoVoltar' onClick={(event) => { navigate('/') }}>
                    Voltar
                </button>
                <button id='botaoLogar' onClick={(event) => { createUserWithEmailAndPasswordHandler(event) }}>
                    Salvar
                </button>
            </div>


        </div >
    );
};

export default TelaCadastrar;