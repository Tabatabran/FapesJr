import React from 'react';
import './TelaPrincipalProfessor.css';
import {useNavigate} from 'react-router-dom';


function TelaInicial() {
  const navigate = useNavigate();

  return (
    <div className="TelaPrincipalProfessor">

      <div>
        <button id="botaoCriarProva" onClick={() => navigate('/TelaMontagemProva')}>Criar prova</button>
      </div>

      <div>
        <label>Provas criadas:</label>
      </div>
    </div >
  );
}

export default TelaInicial;