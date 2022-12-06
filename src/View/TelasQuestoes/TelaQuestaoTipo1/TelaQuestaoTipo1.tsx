import './TelaQuestaoTipo1.css';
import fundo from '../../../imagens/fundoIlhaPlaca.png'

interface Params {
  enunciado: string
}

function TelaTipo1({ enunciado }: Params) {

  return (
    <div className="TelaTipo1"
      style={{ backgroundImage: `url(${fundo})` }}>

      <div>
        <label id='enunciadoDaQuestao'>{enunciado}</label>
      </div>

      <div>
        <input id='inputRespostaTipoQuestao1'></input>
      </div>

    </div >
  );
}

export default TelaTipo1;