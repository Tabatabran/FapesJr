import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TelaEscolhaPersonagem from './TelaEscolhaPersonagem';


function ControladorTelaEscolhaPersonagem() {
    const navigate= useNavigate();
    const [tipoBarco, setTipoBarco] = useState('');
    const [nomeAluno, setNomeAluno] = useState('');
    let alunoInformacoes = {};

    function setInformacaoAluno() {
        alunoInformacoes = {
            ...alunoInformacoes,
            nome: nomeAluno,
            tipoBarco: tipoBarco
        }

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
