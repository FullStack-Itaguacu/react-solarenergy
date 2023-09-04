import { useState } from "react";
import axios from "axios";
import { Form } from "../form/Form";
import  "./cadastro.css";
import PropTypes from "prop-types";

export const CadastroUnidade = ({ mudarFormulario }) => {
  const [error, setError] = useState(false);
  const [apelidoExistsError, setApelidoExistsError] = useState(false);
  const [formData, setFormData] = useState({
    ativa: false,
  });
  
  const unidadeFields = [
    {
      type: "text",
      label: "Apelido",
      name: "apelido",
      placeholder: "Painel 1",
      inputClassName: "input-pequeno"
    },
    {
      type: "text",
      label: "Local",
      name: "local",
      placeholder: "Rua Alberto 430",
      inputClassName: "input-extra-grande "
    },
    {
      type: "text",
      label: "Marca",
      name: "marca",
      placeholder: "marca",
      inputClassName: "input-extra-grande "
    },
    {
      type: "text",
      label: "Modelo",
      name: "modelo",
      placeholder: "155w",
      inputClassName: "input-extra-grande "
    },
    { type: "checkbox",  name: "ativa", value: true, label: "Ativo", placeholder: "check", className: 'checkbox-label'},
  ];


  const ENDPOINT_UNIDADES = "http://localhost:3000/unidades";

  const checarApelidoExists = async (apelido) => {
    try {
      const response = await axios.get(`${ENDPOINT_UNIDADES}?apelido=${apelido}`);
      return response.data.length > 0;
    } catch (error) {
      console.error('Erro ao verificar o apelido:', error);
      return false;
    }
  };

  const validarInputs = async (formData) => {
    const { apelido, local, marca, modelo } = formData;

    if (!apelido || !local || !marca || !modelo) {
      alert('Preencha todos os campos');
      return false;
    }

    // Verifique se o apelido já existe antes de enviar o formulário
    const apelidoExists = await checarApelidoExists(apelido);
    if (apelidoExists) {
      setApelidoExistsError(true);
      alert('O apelido já existe. Escolha outro.');
      return false;
    }

    return true;
  };


  const postNovaUnidade = async (novaUnidade) => {
    try {
      const updatedResponse = await axios.post(ENDPOINT_UNIDADES, novaUnidade);
      if (updatedResponse.status === 201) {
        alert("Unidade cadastrada com sucesso");
        setError(false);
        mudarFormulario();
      } else {
        alert("Erro ao cadastrar unidade");
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
    <div>
      {error && <p>Erro ao realizar lançamento.</p>}
      {apelidoExistsError && <p>O apelido já existe. Escolha outro.</p>}
      <h2 className='sub-titulo'>Cadastro de Unidade Geradora</h2>
      <Form
        fields={unidadeFields}
        onSubmit={(formValues) => handleUnidadeSubmit({ ...formValues, ativa: formData.ativa })}
        submitButtonLabel="Salvar"
      />
    </div>
  );
};

CadastroUnidade.propTypes = {
  mudarFormulario: PropTypes.func.isRequired,
};