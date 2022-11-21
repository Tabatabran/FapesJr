import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { logInWithEmailAndPassword, auth } from "../../dao/firebase";
import TelaLogin from './TelaLogin';


function ControladorTelaInicial() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorInfo, setError] = useState('');
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        console.log({user})
        if (user) navigate("/TelaPrincipalProfessor");
      }, [user, loading]);

    const signInWithEmailAndPasswordHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        logInWithEmailAndPassword(email, password)
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    return (<TelaLogin
        navigate={navigate}
        signInWithEmailAndPasswordHandler={signInWithEmailAndPasswordHandler}
        email={email}
        error={errorInfo}
        password={password}
        onChangeHandler={onChangeHandler} />)

}

export default ControladorTelaInicial;