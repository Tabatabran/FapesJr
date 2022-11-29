import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TelaMapa from './TelaMapa';


function ControladorTelaMapa() {
    const prova = useSelector((state: any) => state.storeProva.prova);
    const aluno = useSelector((state: any) => state.storeAluno.respostasAluno);
    const questao = useSelector((state: any) => state.storeQuestao.increment);

    useEffect(() => {

        const timer = setTimeout(() => console.log('Initial timeout!'), 5000);

        return () => clearTimeout(timer);

    }, [])

    function handleNumeroQuestao(){
        var numeroQuestao = questao.increment;

        
    }

    function handleTipoQuestao(){

    }

    return (

        <TelaMapa
            tipoBarco={aluno.tipoBarco}
        />
    );

}

export default ControladorTelaMapa
