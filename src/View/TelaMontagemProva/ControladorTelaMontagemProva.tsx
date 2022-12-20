import React, { useState } from 'react';
import TelaPrincipalProfessor from './TelaMontagemProva';
import { db, auth, registerProva } from '../../dao/firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { storage, refStorageDAO } from "../../dao/firebaseStorage";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

function ControladorTelaPrincipalProfessor() {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);

    const [inputTurma, setInputTurma] = useState('');
    const [inputDescricao, setInputDescricao] = useState('');
    const [tipoQuestao, setTipoquestao] = useState(0);
    const [questao, setQuestao] = useState(1);
    const [showPopUp, setShowPopUp] = useState(false);
    const [imgURL, setImgURL] = useState([]);
    const [imgPath, setImgPath] = useState('');
    const [mensagem, setMensagem] = useState("");
    const [dado, setDado] = useState({})

    function handleSetProximaQuestao() {
        if (Object.keys(dado).find(element => +element === questao)) {
            setQuestao(questao + 1)
            setImgPath('')
            setImgURL([])
        } else {
            setMensagem('A questão não foi preenchida')
            setShowPopUp(true)
        }
    }

    function handleSetQuestaoAnterior() {
        setQuestao(questao - 1)
    }

    function salvarTipoQuestao1(event: any) {
        event.preventDefault()
        if (event.target.enunciado.value) {
            setDado({
                ...dado,
                [questao]: {
                    tipoQuestao: tipoQuestao,
                    enunciado: event.target.enunciado.value
                }
            })

            event.target.enunciado.value = ''
            setMensagem('A questão foi salva com sucesso')
            setShowPopUp(true)
        } else {
            setMensagem('Informe o enunciado da questão')
            setShowPopUp(true)
        }

    }

    function salvarTipoQuestao2(event: any) {
        event.preventDefault()
        if (event.target.enunciado.value && event.target.resposta1.value && event.target.resposta3.value && event.target.resposta4.value && event.target.respostaCorreta.value) {
            setDado({
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
            })

            event.target.enunciado.value = ''
            event.target.resposta1.value = ''
            event.target.resposta2.value = ''
            event.target.resposta3.value = ''
            event.target.resposta4.value = ''
            event.target.respostaCorreta.value = ''
            setMensagem('A questão foi salva com sucesso')
            setShowPopUp(true)
        } else if (!event.target.enunciado.value) {
            setMensagem('Informe o enunciado da pergunta')
            setShowPopUp(true)
        } else if (!event.target.resposta1.value) {
            setMensagem('Informe a pergunta 1')
            setShowPopUp(true)
        } else if (!event.target.resposta2.value) {
            setMensagem('Informe a pergunta 2')
            setShowPopUp(true)
        } else if (!event.target.resposta3.value) {
            setMensagem('Informe a pergunta 3')
            setShowPopUp(true)
        } else if (!event.target.resposta4.value) {
            setMensagem('Informe a pergunta 4')
            setShowPopUp(true)
        } else {
            setMensagem('Informe a resposta correta')
            setShowPopUp(true)
        }
    }

    async function salvarTipoQuestao3(event: any) {
        event.preventDefault()
        if (event.target.enunciado.value && event.target.resposta1.value && event.target.resposta3.value && event.target.resposta4.value && event.target.respostaCorreta.value) {


            handleUploadImagem(imgURL).then((result) => {
                setDado({
                    ...dado,
                    [questao]: {
                        tipoQuestao: tipoQuestao,
                        enunciado: event.target.enunciado.value,
                        imagem: result,
                        resposta1: event.target.resposta1.value,
                        resposta2: event.target.resposta2.value,
                        resposta3: event.target.resposta3.value,
                        resposta4: event.target.resposta4.value,
                        respostaCorreta: event.target.respostaCorreta.value
                    }
                })

                event.target.enunciado.value = ''
                event.target.resposta1.value = ''
                event.target.resposta2.value = ''
                event.target.resposta3.value = ''
                event.target.resposta4.value = ''
                event.target.inputEscolhaImagem.value = ''
                event.target.respostaCorreta.value = ''
                setMensagem('A questão foi salva com sucesso')
                setShowPopUp(true)
            })


        } else if (!event.target.enunciado.value) {
            setMensagem('Informe o enunciado da questão')
            setShowPopUp(true)
        } else if (!event.target.resposta1.value) {
            setMensagem('Informe a questão 1')
            setShowPopUp(true)
        } else if (!event.target.resposta2.value) {
            setMensagem('Informe a questão 2')
            setShowPopUp(true)
        } else if (!event.target.resposta3.value) {
            setMensagem('Informe a questão 3')
            setShowPopUp(true)
        } else if (!event.target.resposta4.value) {
            setMensagem('Informe a questão 4')
            setShowPopUp(true)
        } else {
            setMensagem('Informe a resposta correta')
            setShowPopUp(true)
        }

    }

    async function salvarTipoQuestao4(event: any) {
        event.preventDefault()
        if (event.target.enunciado.value) {

            handleUploadImagem(imgURL).then((result) => {
                setDado({
                    ...dado,
                    [questao]: {
                        tipoQuestao: tipoQuestao,
                        enunciado: event.target.enunciado.value,
                        imagem: result
                    }
                })

                event.target.enunciado.value = ''
                event.target.inputEscolhaImagem.value = ''
                setMensagem('A questão foi salva com sucesso')
                setShowPopUp(true)
            })


        } else {
            setMensagem('Informe o enunciado')
            setShowPopUp(true)
        }
    }

    function writeUserData() {
        if (inputTurma && inputDescricao) {
            let newDado = {
                turma: inputTurma,
                descricao: inputDescricao,
                prova: dado
            }
            registerProva({ dado: newDado, uidUser: user?.uid })

            setMensagem('A prova foi salva com sucesso')
            setShowPopUp(true)
            navigate('/TelaPrincipalProfessor')
        } else {
            setMensagem('Favor informar os dados da turma')
            setShowPopUp(true)
        }

    }

    function handleFileSelectedQuestao3(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files
        setImgURL(files as any)
    }

    function openModal() {
        setShowPopUp(true);
    }

    function closeModal() {
        setShowPopUp(false);
    }

    function handleUploadImagem(img: any) {
        return new Promise((resolve, reject) => {
            if (!img) reject('Vazio');
            const file = img[0]
            const storageRef = refStorageDAO(storage, `${user?.uid}/imagens/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress =
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    //setProgresspercent(progress);
                },
                (error) => {
                    reject(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                        resolve(downloadURL);
                    });
                }
            );
        })


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
            salvarTipoQuestao4={salvarTipoQuestao4}
            handleFileSelectedQuestao3={handleFileSelectedQuestao3}
            mensagem={mensagem} />
    );

}

export default ControladorTelaPrincipalProfessor;
