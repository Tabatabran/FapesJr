import React, { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";

import './TelaRespostasAlunos.css';
import { auth, dbFire } from "../../dao/firebase";

import { useNavigate, } from 'react-router-dom';
import { query, collection, getDocs, where } from "firebase/firestore";
import { useState } from 'react';

import { useSelector } from 'react-redux';

import fundo from '../../imagens/fundoCeu.jpg'

interface Params {

}

function TelaRespostasAlunos({

}: Params) {
    const [user, loading, error] = useAuthState(auth);
    const [colecaoRespostas, setRespostas] = useState([])
    const prova = useSelector((state: any) => state.storeProva.prova);
    const navigate = useNavigate();

    const initial = async () => {
        try {
            const q = query(collection(dbFire, `professor/${user?.uid}/provas/${prova.id}/respostasAlunos`));
            const doc = await getDocs(q);


            if (doc.size > 0) {
                let newData = [] as any
                await doc.docs.forEach((resposta) => newData.push(resposta.data()))
                setRespostas(newData)

                // console.log(colecaoRespostas)
            } else {
                alert("Não existem respostas para essa prova");
            }

        } catch (err) {
            console.error(err);
            alert("Não existem respostas para essa prova");
        }
    };

    useEffect(() => {
        window.addEventListener('popstate', e => {
            navigate('/')
        })
    }, [])

    useEffect(() => {
        if (user) initial()
    }, [user])
    console.log({ colecaoRespostas })
    return (
        <div className="TelaRespostasAlunos" style={{ backgroundImage: `url(${fundo})` }}>

            <div className="TelaRespostasAlunosItens">

                <div>
                    <button id="botaoVoltarTelaPrincipalProfessor" onClick={() => navigate('/TelaPrincipalProfessor')}>Voltar</button>
                </div>

                <div id='titulo'>
                    <label>Respostas dos alunos:</label>
                </div>
                <div>
                    {colecaoRespostas.map((value: any, index) => (
                        <div key={index} className='ListaResultado'>
                            <div className='descricaoResultados'>

                                <div id='divisor'>
                                    <label>___________________________________________</label>
                                </div>

                                <div id='nomeDoAluno'>
                                    <label id='tituloItens'>Nome do aluno:</label>
                                    <label>{value.nome}</label>
                                </div>

                                <div id='questao1'>
                                    <label id='tituloItens'>Questão 1:</label>
                                    <label>{value[1].resposta}</label>
                                </div>

                                <div id='questao2'>
                                    <label id='tituloItens'>Questão 2:</label>
                                    <label>{value[2].resposta}</label>
                                </div>

                                <div id='questao3'>
                                    <label id='tituloItens'>Questão 3:</label>
                                    <label>{value[3].resposta}</label>
                                </div>

                                <div id='questao4'>
                                    <label id='tituloItens'>Questão 4:</label>
                                    <label>{value[4].resposta}</label>
                                </div>

                                <div id='questao5'>
                                    <label id='tituloItens'>Questão 5:</label>
                                    <label>{value[5].resposta}</label>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div >
        </div >
    );
}

export default TelaRespostasAlunos;