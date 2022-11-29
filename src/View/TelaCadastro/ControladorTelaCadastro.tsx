import React, { useState } from "react";
import {  registerWithEmailAndPassword } from "../../dao/firebase";
import {useNavigate} from 'react-router-dom';

import TelaCadastro from './TelaCadastro'

const SignUp = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState('');

  const createUserWithEmailAndPasswordHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    try{
     await registerWithEmailAndPassword(displayName, email, password);
     alert('Tudo certo! \n Cadastro realizado!')
     navigate('/TelaLogin')
    }
    catch(error){
      alert(error);
    }
      
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <TelaCadastro navigate={navigate} error={error} password={password} displayName={displayName} onChangeHandler={onChangeHandler} createUserWithEmailAndPasswordHandler={createUserWithEmailAndPasswordHandler} email={email}/>
  );
};

export default SignUp;