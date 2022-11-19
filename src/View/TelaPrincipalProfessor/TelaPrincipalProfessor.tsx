import { Button } from '@material-ui/core';
import React from 'react';
import './TelaPrincipalProfessor.css';
import {useNavigate} from 'react-router-dom';


function TelaInicial() {
  const navigate = useNavigate();

  return (
    <div className="TelaPrincipalProfessor">

      <div>
        <Button id="botaoCriarProva" onClick={() => navigate('/TelaMontagemProva')}>Criar prova</Button>
      </div>

      <div>
        <label>Provas criadas:</label>
      </div>
    </div >
  );
}

export default TelaInicial;