import React from 'react';
import './VagasDisponiveis.css';

const VagasDisponiveis = ({ vagas }) => {
  const totalVagas = 50; // Total de vagas no estacionamento
  const vagasOcupadas = vagas.map(vaga => vaga.vaga);
  const vagasDisponiveis = Array.from({ length: totalVagas }, (_, i) => i + 1)
    .filter(vaga => !vagasOcupadas.includes(vaga.toString()));

  return (
    <div>
      <h2>Vagas Disponíveis</h2>
      {vagasDisponiveis.length === 0 ? (
        <p>Nenhuma vaga disponível.</p>
      ) : (
        <ul>
          {vagasDisponiveis.map(vaga => (
            <li key={vaga}>Vaga {vaga}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VagasDisponiveis;
