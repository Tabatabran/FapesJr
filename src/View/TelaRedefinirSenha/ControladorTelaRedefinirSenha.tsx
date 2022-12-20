import { keyboardKey } from '@testing-library/user-event';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetEmail } from "../../dao/firebase";
import TelaRedefinirSenha from './TelaRedefinirSenha'


function ControladorTelaRedefinirSenha() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const redefinirSenha = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        try {
            await resetEmail(email);
            alert('Verifique o seu email. Lembre-se de conferir a pasta de spam.');
            navigate('/');
        } catch (e) {
            alert(e);
        }
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;

        if (name === 'emailRedefinir') {
            setEmail(value);
        }
    };

    return (<TelaRedefinirSenha
        email={email}
        onChangeHandler={onChangeHandler} 
        redefinirSenha={redefinirSenha}
        navigate={navigate} />)

}

export default ControladorTelaRedefinirSenha;