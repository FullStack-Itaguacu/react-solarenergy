import { CadastroUnidade } from "../../components/cadastroUnidade/Cadastro";
import { useState } from "react";

export const UnidadeGeradora = () => {
  const [renderizarCadastroUnidade, setRenderizarCadastroUnidade] =
    useState(false);
  const mudarFormulario = () => {
    setRenderizarCadastroUnidade(!renderizarCadastroUnidade);
  };

  return (
    <>
      {/* este button e apenas para testes e debera ser eliminado quando este pronto o menu lateral */}
      <button
        onClick={() => mudarFormulario()}
      >
        Mudar formulario{" "}
      </button>
      {renderizarCadastroUnidade ? (
        <CadastroUnidade />
      ) : (
        <>
          <h1>Lista de unidades</h1>
          {/* Este codigo debe ser substituido pelo componente de lista de unidades  */}
        </>
      )}{" "}
    </>
  );
};
