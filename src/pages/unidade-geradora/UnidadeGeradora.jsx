import ListaUnidades from "../../components/listaUnidades/listaUnidades";
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
        <CadastroUnidade mudarFormulario={mudarFormulario}/>
      ) : (
        <>
          <h3>Lista de unidades</h3>
          <ListaUnidades />
        </>
      )}{" "}
    </>
  );
};
