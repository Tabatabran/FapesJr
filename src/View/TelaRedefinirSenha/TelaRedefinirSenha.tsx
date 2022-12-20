import React from 'react';
import './TelaRedefinirSenha.css';
import fundo from '../../imagens/fundoCeu.jpg'
import { NavigateFunction } from 'react-router-dom';

interface Params {
    email: string,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    redefinirSenha: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    navigate: NavigateFunction
}

function TelaRedefinirSenha({ email, onChangeHandler, redefinirSenha, navigate }: Params) {

    return (
        <div className="TelaRedefinirSenha" style={{ backgroundImage: `url(${fundo})` }}>

            <form>

                <div className='formRedefinirSenha'>

                    <div className='Redefinir' id='inputs'>
                        <input type="email"
                            className="my-1 p-1 w-full"
                            name="emailRedefinir"
                            placeholder='Email'
                            value={email}
                            id="emailRedefinir"
                            onChange={(event) => onChangeHandler(event)} />
                    </div>

                    <div className='buttonsEnviarRedefinir'>
                        <button id='botaoVoltarRedefinirSenha' onClick={() => navigate('/')}>
                            Voltar
                        </button>
                        <button id='botaoEnviarRedefinirSenha' onClick={(event) => { redefinirSenha(event) }}>
                            Enviar email
                        </button>
                    </div>

                </div>
            </form>
        </div >
    );
}

export default TelaRedefinirSenha;