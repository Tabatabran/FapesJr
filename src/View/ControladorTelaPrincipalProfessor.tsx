import React, { useEffect, useState } from 'react';
import TelaPrincipalProfessor from './TelaPrincipalProfessor';
import { db } from '../dao/firebase'
import { getDatabase, ref, set } from "firebase/database";
import { storage } from "../dao/firebaseStorage";
import { ref as referencia, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function ControladorTelaPrincipalProfessor() {
    const [inputTurma, setInputTurma] = useState('');
    const [inputDescricao, setInputDescricao] = useState('');
    const [tipoQuestao, setTipoquestao] = useState(0);
    const [questao, setQuestao] = useState(1);
    const [showPopUp, setShowPopUp] = useState(false);
    const [imgURL, setImgURL] = useState("");
    let dado = {}
    let exemplo = {}

    function handleSetProximaQuestao() {
        setQuestao(questao + 1)
    }

    function handleSetQuestaoAnterior() {
        setQuestao(questao - 1)
    }

    function tipoQuestaoUm(texto: string) {
        dado = {
            ...dado,
            [questao]: {
                tipoQuestao: tipoQuestao,
                pergunta: texto
            }
        }
    }
    function tipoQuestao2() {

    }
    function tipoQuestao3() {

    }
    function tipoQuestao4() {

    }

    function writeUserData() {

        set(ref(db, 'professor/' + 'guilherme12/prova'), {

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
            openModal={openModal} />
    );

}

export default ControladorTelaPrincipalProfessor;
