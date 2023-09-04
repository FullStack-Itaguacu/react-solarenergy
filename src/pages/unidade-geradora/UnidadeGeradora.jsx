import { CadastroUnidade } from "../../components/cadastro-unidade/cadastro";
import { useState } from "react";
import './unidade-geradora.css'

export const UnidadeGeradora = () => {
  const [renderizarCadastroUnidade, setRenderizarCadastroUnidade] =
    useState(false);
  const mudarFormulario = () => {
    setRenderizarCadastroUnidade(!renderizarCadastroUnidade);
  };

  return (
    <div className='container'>
    {renderizarCadastroUnidade && (
      <CadastroUnidade mudarFormulario={mudarFormulario} />
    )}

    {!renderizarCadastroUnidade && (
      <>
       {/* Colocar componente aqui */}
        <button onClick={() => mudarFormulario()}>
          Mudar formulário
          </button>
      </>
    )}
  </div>
  );
};
