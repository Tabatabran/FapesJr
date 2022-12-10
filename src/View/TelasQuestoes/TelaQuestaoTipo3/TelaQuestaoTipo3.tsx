import './TelaQuestaoTipo3.css';
import fundo from '../../../imagens/fundoIlhaPlaca.png'
import { DeveloperBoardOutlined } from '@material-ui/icons';

interface Params {
  enunciado: string, setResposta: (text: string) => void, handleSalvarRespostaAluno: () => void,
  opcao1: string, opcao2: string, opcao3: string, opcao4: string, resposta: string, urlImagem: string
}

function TelaTipo3({ enunciado, setResposta, handleSalvarRespostaAluno, opcao1, opcao2, opcao3, opcao4,
  resposta, urlImagem
}: Params) {

  return (
    <div className="TelaTipo3"
      style={{ backgroundImage: `url(${fundo})` }}>


      <div id='conteudoPagina'>
        <label id='enunciadoQuestaoTipo3'>{enunciado}</label>

        <img id='imagem' src={urlImagem} />
      </div>

      <div id='botoes'>
        <div>
          <button id={resposta === opcao1 ? 'resposta1Tipo3Selected' : 'resposta1Tipo3'} onClick={() => setResposta(opcao1)}>{opcao1}</button>
          <button id={resposta === opcao2 ? 'resposta2Tipo3Selected' : 'resposta2Tipo3'} onClick={() => setResposta(opcao2)}>{opcao2}</button>
        </div>

        <div>
          <button id={resposta === opcao3 ? 'resposta3Tipo3Selected' : 'resposta3Tipo3'} onClick={() => setResposta(opcao3)}>{opcao3}</button>
          <button id={resposta === opcao4 ? 'resposta4Tipo3Selected' : 'resposta4Tipo3'} onClick={() => setResposta(opcao4)}>{opcao4}</button>
        </div>
      </div>


      <button id='salvarRespostaTipo3' onClick={() => handleSalvarRespostaAluno()}>Próxima</button>

    </div >
  );
}

export default TelaTipo3;