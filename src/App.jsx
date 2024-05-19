import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CadastroReserva from './components/CadastroReserva';
import ListarVagas from './components/ListarVagas';
import VagasDisponiveis from './components/VagasDisponiveis';
import './App.css';

function App() {
  const [vagas, setVagas] = useState([]);

  const adicionarVaga = (novaVaga) => {
    setVagas([...vagas, novaVaga]);
  };

  const removerVaga = (index) => {
    const novasVagas = vagas.filter((_, i) => i !== index);
    setVagas(novasVagas);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Controle de Estacionamento</h1>
          <nav>
            <ul>
              <li><Link to="/">Cadastro de Reserva</Link></li>
              <li><Link to="/listar-vagas">Listar Vagas</Link></li>
              <li><Link to="/vagas-disponiveis">Vagas Disponíveis</Link></li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<CadastroReserva adicionarVaga={adicionarVaga} />} />
            <Route path="/listar-vagas" element={<ListarVagas vagas={vagas} removerVaga={removerVaga} />} />
            <Route path="/vagas-disponiveis" element={<VagasDisponiveis vagas={vagas} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
