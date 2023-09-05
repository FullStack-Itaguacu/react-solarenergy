import { useState } from 'react';
import axios from 'axios';
import { Form } from '../form/Form';
import './Cadastro.css';
import PropTypes from 'prop-types';

export const CadastroUnidade = ({ mudarFormulario }) => {
  const [error, setError] = useState(false);

  const unidadeFields = [
    {
      type: 'text',
      label: 'Apelido',
      name: 'apelido',
      placeholder: 'Painel 1',
      inputClassName: 'input-pequeno',
    },
    {
      type: 'text',
      label: 'Local',
      name: 'local',
      placeholder: 'Rua Alberto 430',
      inputClassName: 'input-extra-grande',
    },
    {
      type: 'text',
      label: 'Marca',
      name: 'marca',
      placeholder: 'marca',
      inputClassName: 'input-extra-grande',
    },
    {
      type: 'text',
      label: 'Modelo',
      name: 'modelo',
      placeholder: '155w',
      inputClassName: 'input-extra-grande',
    },
    {
      type: 'checkbox',
      label: 'Ativo',
      name: 'ativa',
      placeholder: 'check',
      className: 'checkbox-label',
    },
  ];
  const ENDPOINT_UNIDADES = 'http://localhost:3000/unidades';

  const validarInputs = (formData) => {
    const { apelido, local, marca, modelo } = formData;
    if (!apelido || !local || !marca || !modelo) {
      alert('Preencha todos os campos');
      return false;
    }
    return true;
  };

  const postNovaUnidade = async (novaUnidade) => {
    try {
      const updatedResponse = await axios.post(ENDPOINT_UNIDADES, novaUnidade);
      if (updatedResponse.status === 201) {
        alert('Unidade cadastrada com sucesso');
        setError(false);
        mudarFormulario();
      } else {
        alert('Erro ao cadastrar unidade');
        setError(true);
      }
    } catch (error) {
      alert(`Error: ${error}`);
      setError(true);
    }
  };

  const handleUnidadeSubmit = async (formData) => {
    validarInputs(formData) && (await postNovaUnidade(formData));
  };

  return (
    <div className="content">
      {error && <p>Erro ao realizar lançamento.</p>}
      <h2 className="sub-titulo">Cadastro de Unidade Geradora</h2>
      <Form
        fields={unidadeFields}
        onSubmit={handleUnidadeSubmit}
        submitButtonLabel="Salvar"
      />
    </div>
  );
};

CadastroUnidade.propTypes = {
  mudarFormulario: PropTypes.func.isRequired,
};
