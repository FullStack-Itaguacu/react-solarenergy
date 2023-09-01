import { useState } from 'react';
import axios from 'axios';
import { Form } from '../form/Form';
import './Cadastro.css';

export const CadastroUnidade = () => {
  const [error, setError] = useState(false);

  const unidadeFields = [
    {
      type: 'text',
      label: 'Apelido',
      name: 'apelido',
      placeholder: 'Painel 1',
      style: { width: '282px' },
    },
    {
      type: 'text',
      label: 'Local',
      name: 'local',
      placeholder: 'Rua Alberto 430',
    },
    {
      type: 'text',
      label: 'Marca',
      name: 'marca',
      placeholder: 'Resun',
    },
    {
      type: 'text',
      label: 'Modelo',
      name: 'modelo',
      placeholder: '155w',
    },
    { type: 'checkbox', label: 'Ativa', name: 'ativa', placeholder: 'check' },
  ];

  const handleUnidadeSubmit = async (formData) => {
    try {
      const novaUnidade = {
        id: Math.random().toString(36).substring(7),
        apelido: formData.apelido,
        local: formData.local,
        marca: formData.marca,
        modelo: formData.modelo,
        ativa: formData.ativa || false,
      };

      console.log(formData);

      const response = await axios.get('/database/data.json');
      const data = response.data;

      data.unidades.push(novaUnidade);

      const updatedResponse = await axios.put('/database/data.json', data);

      if (updatedResponse.status === 200) {
        console.log('Unidade cadastrada com sucesso');
        setError(false);
      } else {
        console.log('Erro ao cadastrar unidade');
        setError(true);
      }
    } catch (error) {
      console.error('Erro ao cadastrar unidade:', error);
      setError(true);
    }
  };

  return (
    <div>
      <h1 className="">Unidades</h1>
      {error && <p>Erro ao realizar lançamento.</p>}
      <h2>Cadastro de Unidade Geradora</h2>
      <Form
        fields={unidadeFields}
        onSubmit={handleUnidadeSubmit}
        submitButtonLabel="Salvar"
      />
    </div>
  );
};
