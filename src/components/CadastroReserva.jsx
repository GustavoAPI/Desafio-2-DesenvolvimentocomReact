import React, { useState } from 'react';
import './CadastroReserva.css';

const CadastroReserva = ({ adicionarVaga }) => {
  const [form, setForm] = useState({
    placa: '',
    proprietario: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    adicionarVaga(form);
    alert('Cadastro realizado com sucesso!');
    setForm({
      placa: '',
      proprietario: '',
      apartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      vaga: ''
    });
  };

  return (
    <div>
      <h2>Cadastro de Reserva</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Placa do veículo:</label>
          <input type="text" name="placa" value={form.placa} onChange={handleChange} required />
        </div>
        <div>
          <label>Nome do proprietário:</label>
          <input type="text" name="proprietario" value={form.proprietario} onChange={handleChange} required />
        </div>
        <div>
          <label>Número do apartamento:</label>
          <input type="text" name="apartamento" value={form.apartamento} onChange={handleChange} required />
        </div>
        <div>
          <label>Bloco do apartamento:</label>
          <input type="text" name="bloco" value={form.bloco} onChange={handleChange} required />
        </div>
        <div>
          <label>Modelo do veículo:</label>
          <input type="text" name="modelo" value={form.modelo} onChange={handleChange} required />
        </div>
        <div>
          <label>Cor do veículo:</label>
          <input type="text" name="cor" value={form.cor} onChange={handleChange} required />
        </div>
        <div>
          <label>Número da vaga:</label>
          <input type="text" name="vaga" value={form.vaga} onChange={handleChange} required />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default CadastroReserva;
