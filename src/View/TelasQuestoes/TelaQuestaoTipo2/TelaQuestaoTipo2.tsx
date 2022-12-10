import './TelaQuestaoTipo2.css';
import fundo from '../../../imagens/fundoIlhaPlaca.png'

interface Params {
  enunciado: string, setResposta: (text: string) => void, handleSalvarRespostaAluno: () => void,
  opcao1: string, opcao2: string, opcao3: string, opcao4: string, resposta: string
}

function TelaTipo2({ enunciado, setResposta, handleSalvarRespostaAluno, opcao1, opcao2, opcao3, opcao4, 
  resposta
}: Params) {

  return (
    <div className="TelaTipo2"
      style={{ backgroundImage: `url(${fundo})` }}>

      <div>
        <label id='enunciadoDaQuestao'>{enunciado}</label>
      </div>

      <div>
        <div>
          <button id={resposta === opcao1 ? 'resposta1Tipo2Selected' : 'resposta1Tipo2'} onClick={() => setResposta(opcao1)}>{opcao1}</button>
          <button id={resposta === opcao2 ? 'resposta2Tipo2Selected' : 'resposta2Tipo2'} onClick={() => setResposta(opcao2)}>{opcao2}</button>
        </div>

        <div>
          <button id={resposta === opcao3 ? 'resposta3Tipo2Selected' : 'resposta3Tipo2'} onClick={() => setResposta(opcao3)}>{opcao3}</button>
          <button id={resposta === opcao4 ? 'resposta4Tipo2Selected' : 'resposta4Tipo2'} onClick={() => setResposta(opcao4)}>{opcao4}</button>
        </div>
      </div>

      <div>

        <button id='salvarRespostaTipo2' onClick={() => handleSalvarRespostaAluno()}>Próxima</button>
      </div>
    </div >
  );
}

export default TelaTipo2;