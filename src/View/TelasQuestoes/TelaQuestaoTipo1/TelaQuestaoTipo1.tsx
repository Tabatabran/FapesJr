import './TelaQuestaoTipo1.css';
import fundo from '../../../imagens/fundoIlhaPlaca.png'

interface Params {
  enunciado: string, setResposta: (text: string) => void, handleSalvarRespostaAluno: () => void
}

function TelaTipo1({ enunciado, setResposta, handleSalvarRespostaAluno }: Params) {

  return (
    <div className="TelaTipo1"
      style={{ backgroundImage: `url(${fundo})` }}>

      <div>
        <label id='enunciadoDaQuestao'>{enunciado}</label>
      </div>

      <div>
        <input id='inputRespostaTipoQuestao1' type='text' onChange={(event) => setResposta(event.target.value)}></input>
      </div>

      <div>
        <button id='salvarRespostaTipo1' onClick={() => handleSalvarRespostaAluno()}>Próxima</button>
      </div>
    </div >
  );
}

export default TelaTipo1;