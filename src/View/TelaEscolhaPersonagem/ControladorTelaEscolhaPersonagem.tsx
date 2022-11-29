import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TelaEscolhaPersonagem from './TelaEscolhaPersonagem';
import {useDispatch } from 'react-redux'
import {saveRespostaAluno} from '../../Componentes/redux/aluno'


function ControladorTelaEscolhaPersonagem() {
    const navigate= useNavigate();
    const [tipoBarco, setTipoBarco] = useState('');
    const [nomeAluno, setNomeAluno] = useState('');
    const dispatch = useDispatch();
    let alunoInformacoes = {};

    function setInformacaoAluno() {

        alunoInformacoes = {
            ...alunoInformacoes,
            nome: nomeAluno,
            tipoBarco: tipoBarco
        }

        dispatch(saveRespostaAluno(alunoInformacoes));
        navigate('/TelaMapa');
    }

    return (

        <TelaEscolhaPersonagem
            tipoBarco={tipoBarco}
            setTipoBarco={setTipoBarco}
            setNomeAluno={setNomeAluno}
            setInformacaoAluno={setInformacaoAluno}
        />
    );

}

export default ControladorTelaEscolhaPersonagem;
