import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {logout} from "../../dao/firebase";
import TelaPrincipalProfessor from './TelaPrincipalProfessor';
import {useDispatch } from 'react-redux'
import {saveProva} from '../../Componentes/redux/prova'


function ControladorTelaPrincipalProfessor() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogout(){
        logout();
        navigate("/");
    }

    function iniciarJogo(prova: {id: string, prova: { turma: String, descricao: string, prova: any }}){
        dispatch(saveProva(prova));
        navigate("/TelaInicialJogo");
    }

    function mostrarResultados(prova: {id: string, prova: { turma: String, descricao: string, prova: any }}){
        dispatch(saveProva(prova));
        navigate("/TelaRespostasAlunos");
    }

    return (
        <TelaPrincipalProfessor
            handleLogout={handleLogout}
            iniciarJogo={iniciarJogo}
            mostrarResultados={mostrarResultados}
        />)

}

export default ControladorTelaPrincipalProfessor;