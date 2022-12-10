import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TelaBauDoTesouro from './TelaBauDoTesouro';

import {registerResultadosAlunos} from '../../dao/firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, dbFire } from "../../dao/firebase";

function ControladorTelaBauDoTesouro() {
    const [user] = useAuthState(auth);
    const prova = useSelector((state: any) => state.storeProva.prova.prova);
    const aluno = useSelector((state: any) => state.storeAluno.respostasAluno);

    useEffect(() => {
        
    }, [])

    return (

        <TelaBauDoTesouro

        />
    );

}

export default ControladorTelaBauDoTesouro