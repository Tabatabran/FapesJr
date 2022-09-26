import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Link to='/TelaMapa'>
          <button>
            Jogar
          </button>
        </Link>
      </header>
    </div>
  );
}

export default App;