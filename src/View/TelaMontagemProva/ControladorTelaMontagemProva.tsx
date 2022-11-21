import React, { FormEvent, useEffect, useState } from 'react';
import TelaPrincipalProfessor from './TelaMontagemProva';
import { db } from '../../dao/firebase'
import { getDatabase, ref, set } from "firebase/database";
import { storage } from "../../dao/firebaseStorage";
import { ref as referencia, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function ControladorTelaPrincipalProfessor() {
    const [inputTurma, setInputTurma] = useState('');
    const [inputDescricao, setInputDescricao] = useState('');
    const [tipoQuestao, setTipoquestao] = useState(0);
    const [questao, setQuestao] = useState(1);
    const [showPopUp, setShowPopUp] = useState(false);
    const [imgURL, setImgURL] = useState('');
    let dado = {}
    let exemplo = {}

    function handleSetProximaQuestao() {
        setQuestao(questao + 1)
    }

    function handleSetQuestaoAnterior() {
        setQuestao(questao - 1)
    }

    function salvarTipoQuestao1(event: any){
        event.preventDefault()
        dado = {
            ...dado,
            [questao]: {
                tipoQuestao: tipoQuestao,
                enunciado: event.target.enunciado.value
            }
        } 
    }

    function salvarTipoQuestao2(event: any) {
        event.preventDefault()
        dado = {
            ...dado,
            [questao]: {
                tipoQuestao: tipoQuestao,
                enunciado: event.target.enunciado.value,
                resposta1: event.target.resposta1.value,
                resposta2: event.target.resposta2.value,
                resposta3: event.target.resposta3.value,
                resposta4: event.target.resposta4.value,
                respostaCorreta: event.target.respostaCorreta.value
            }
        } 
    }

    function salvarTipoQuestao3(event: any) {
        event.preventDefault()
        
        handleUploadImagem(event)
        dado = {
            ...dado,
            [questao]: {
                tipoQuestao: tipoQuestao,
                enunciado: event.target.enunciado.value,
                imagem: imgURL,
                resposta1: event.target.resposta1.value,
                resposta2: event.target.resposta2.value,
                resposta3: event.target.resposta3.value,
                resposta4: event.target.resposta4.value,
                respostaCorreta: event.target.respostaCorreta.value
            }
        }

    }

    function salvarTipoQuestao4(event: any) {
        event.preventDefault()
        
        handleUploadImagem(event)
        dado = {
            ...dado,
            [questao]: {
                tipoQuestao: tipoQuestao,
                enunciado: event.target.enunciado.value,
                imagem: imgURL
            }
        }
    }

    function writeUserData() {

        set(ref(db, 'professor/' + 'tabata/prova'), {

            dado,

        });

        setShowPopUp(true)
    }

    function openModal() {
        setShowPopUp(true);
    }

    function closeModal() {
        setShowPopUp(false);
    }

    function handleUploadImagem(event: any) {

        event.preventDefault();
        const file = event.target[0]?.files[0];
        if (!file) return;

        const storageRef = referencia(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgURL(downloadURL);
                });
            }
        );

    }

    return (

        <TelaPrincipalProfessor
            inputTurma={inputTurma} setInputTurma={setInputTurma}
            inputDescricao={inputDescricao} setInputDescricao={setInputDescricao}
            tipoQuestao={tipoQuestao}
            setTipoquestao={setTipoquestao}
            handleSetProximaQuestao={handleSetProximaQuestao}
            handleSetQuestaoAnterior={handleSetQuestaoAnterior}
            questao={questao}
            writeUserData={writeUserData}
            showPopUp={showPopUp}
            closeModal={closeModal}
            openModal={openModal} 
            salvarTipoQuestao1={salvarTipoQuestao1}
            salvarTipoQuestao2={salvarTipoQuestao2}
            salvarTipoQuestao3={salvarTipoQuestao3}
            salvarTipoQuestao4={salvarTipoQuestao4}/>
    );

}

export default ControladorTelaPrincipalProfessor;
