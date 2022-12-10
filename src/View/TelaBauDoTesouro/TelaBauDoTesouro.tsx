import './TelaBauDoTesouro.css';
import fundo from '../../imagens/fundoIlha.jpg'
import bau from '../../imagens/bauTesouro.png'

function TelaTipo1({
  handleSair
}:
  {
    handleSair: () => void
  }) {

  return (
    <div className="TelaTipo1" 
    style={{ backgroundImage: `url(${fundo})` }}>

      <label id = 'label1'>Parabéns, você achou o tesouro!</label>

      <label id = 'label2'>Agora chame o seu professor para finalizar a sua prova.</label>
      
      <img id = 'bauTesouro' src={bau}/>

      <button id = 'botaoVoltarInicio' onClick={handleSair}>Sair</button>

    </div >
  );
}

export default TelaTipo1;