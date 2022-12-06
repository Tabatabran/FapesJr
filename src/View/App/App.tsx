import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaPrincipalProfessor from '../TelaPrincipalProfessor/ControladorTelaPrincipalProfessor';
import TelaMontagemProva from '../TelaMontagemProva/ControladorTelaMontagemProva';
import TelaEscolhaPersonagem from '../TelaEscolhaPersonagem/ControladorTelaEscolhaPersonagem';
import TelaInicialJogo from '../TelaInicialJogo/TelaInicialJogo';
import TelaLogin from '../TelaLogin/ControladorTelaLogin';
import TelaCadastro from '../TelaCadastro/ControladorTelaCadastro';
import TelaMapa from '../TelaMapa/ControladorTelaMapa';
import TelaQuestaoTipo1 from '../TelasQuestoes/TelaQuestaoTipo1/ControladorTelaQuestaoTipo1';
import TelaQuestaoTipo2 from '../TelasQuestoes/TelaQuestaoTipo2/TelaQuestaoTipo2';
import TelaQuestaoTipo3 from '../TelasQuestoes/TelaQuestaoTipo3/TelaQuestaoTipo3';
import TelaQuestaoTipo4 from '../TelasQuestoes/TelaQuestaoTipo4/TelaQuestaoTipo4';
import TelaBauDoTesouro from '../TelaBauDoTesouro/TelaBauDoTesouro'; 

function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TelaLogin />} />
            <Route path='/TelaPrincipalProfessor' element={<TelaPrincipalProfessor />} />
            <Route path='/TelaMontagemProva' element={<TelaMontagemProva />} />
            <Route path='/TelaEscolhaPersonagem' element={<TelaEscolhaPersonagem />} />
            <Route path='/TelaInicialJogo' element={<TelaInicialJogo />} />
            <Route path='/TelaMapa' element={<TelaMapa />} />
            <Route path='/CadastroProfessor' element={<TelaCadastro />} />
            <Route path='/TelaQuestaoTipo1' element={<TelaQuestaoTipo1 />} />
            <Route path='/TelaQuestaoTipo2' element={<TelaQuestaoTipo2 />} />
            <Route path='/TelaQuestaoTipo3' element={<TelaQuestaoTipo3 />} />
            <Route path='/TelaQuestaoTipo4' element={<TelaQuestaoTipo4 />} />
            <Route path='/TelaBauDoTesouro' element={<TelaBauDoTesouro />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;