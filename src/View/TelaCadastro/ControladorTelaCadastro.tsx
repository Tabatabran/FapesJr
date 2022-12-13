import React, { useState } from "react";
import { registerWithEmailAndPassword } from "../../dao/firebase";
import { useNavigate } from 'react-router-dom';

import TelaCadastro from './TelaCadastro'

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState('');

  const createUserWithEmailAndPasswordHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    try {
      if(confirmPassword === password){
        await registerWithEmailAndPassword(displayName, email, password);
        alert('Tudo certo! \n Cadastro realizado!')
        navigate('/')
      }else{
        alert('Senhas não conferem');
      }
    
    }
    catch (error) {
      alert(error);
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmailCadastro") {
      setEmail(value);
    } else if (name === "userPasswordCadastro") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }  else if (name === "userConfirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <TelaCadastro navigate={navigate} 
                  error={error} 
                  password={password} 
                  confirmPassword={confirmPassword}
                  displayName={displayName} 
                  onChangeHandler={onChangeHandler} 
                  createUserWithEmailAndPasswordHandler={createUserWithEmailAndPasswordHandler} 
                  email={email} />
  );
};

export default SignUp;