import React from 'react';
import './ListarVagas.css';

const ListarVagas = ({ vagas, removerVaga }) => {
  return (
    <div>
      <h2>Lista de Vagas</h2>
      {vagas.length === 0 ? (
        <p>Nenhuma vaga cadastrada.</p>
      ) : (
        <table className="vagas-table">
          <thead>
            <tr>
              <th>Vaga</th>
              <th>Modelo</th>
              <th>Cor</th>
              <th>Placa</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {vagas.map((vaga, index) => (
              <tr key={index}>
                <td>{vaga.vaga}</td>
                <td>{vaga.modelo}</td>
                <td>{vaga.cor}</td>
                <td>{vaga.placa}</td>
                <td>
                  <button onClick={() => removerVaga(index)}>Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListarVagas;
