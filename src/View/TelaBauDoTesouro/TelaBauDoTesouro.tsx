import './TelaBauDoTesouro.css';
import fundo from '../../imagens/mapa.png'

function TelaTipo1() {

  return (
    <div className="TelaTipo1" 
    style={{ backgroundImage: `url(${fundo})` }}>
      
      <label>bau do tesouro</label>

    </div >
  );
}

export default TelaTipo1;