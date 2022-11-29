import React, { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";

import './TelaPrincipalProfessor.css';
import { auth, dbFire } from "../../dao/firebase";

import { useNavigate, } from 'react-router-dom';
import { query, collection, getDocs, where } from "firebase/firestore";
import { useState } from 'react';

interface Params {
  handleLogout: () => void, iniciarJogo: (valor: { turma: String, descricao: string, prova: any }) => void
}

function TelaInicial({
  handleLogout, iniciarJogo
}: Params) {
  const [user, loading, error] = useAuthState(auth);
  const [prova, setProva] = useState([])
  const navigate = useNavigate();

  const initial = async () => {
    try {
      const q = query(collection(dbFire, `professor/${user?.uid}/provas`));
      const doc = await getDocs(q);
      let newDataProva = [] as any
      await doc.docs.forEach((prova) => newDataProva.push(prova.data()))
      console.log(newDataProva)
      setProva(newDataProva)
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
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

  return (
    <div className="TelaPrincipalProfessor">

      <div>
        <button id="botaoLogaut" onClick={handleLogout}>Sair</button>
      </div>

      <div>
        <button id="botaoCriarProva" onClick={() => navigate('/TelaMontagemProva')}>Criar prova</button>
      </div>

      <div>
        <label>Provas criadas</label>
      </div>
      <div>
        {prova.map((value: { turma: String, descricao: string, prova: any }, index) => (
          <div className='ListaProvas'>
            <div className='descricaoProva'>
              <label key={index.toString()}>{value.turma}</label>
              <label key={index.toString()}>{value.descricao}</label>
            </div>

            <div className='BotoesListaProvas'>
              <button id="botaoIniciarProva" onClick={() => iniciarJogo(value)}>Iniciar prova</button>
              <button id="botaoEditar" >Editar</button>
              <button id="botaoExcluir" >Excluir</button>
            </div>

          </div>
        ))}
      </div>
    </div >
  );
}

export default TelaInicial;