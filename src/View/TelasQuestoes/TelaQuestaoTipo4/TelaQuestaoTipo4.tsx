import './TelaQuestaoTipo4.css';
import fundo from '../../../imagens/fundoIlhaPlaca.png'

interface Params {
  enunciado: string, setResposta: (text: string) => void, handleSalvarRespostaAluno: () => void, urlImagem: string
}

function TelaTipo4({ enunciado, setResposta, handleSalvarRespostaAluno, urlImagem }: Params) {

  return (
    <div className="TelaTipo4"
      style={{ backgroundImage: `url(${fundo})` }}>

      <div>
        <label id='enunciadoDaQuestao'>{enunciado}</label>
      </div>

      <div>
        <img id = 'imagemTipo4' src={urlImagem}/>
      </div>

      <div>
        <input id='inputRespostaTipoQuestao4' type='text' onChange={(event) => setResposta(event.target.value)}></input>
      </div>

      <div>
        <button id='salvarRespostaTipo4' onClick={() => handleSalvarRespostaAluno()}>Próxima</button>
      </div>
    </div >
  );
}

export default TelaTipo4;