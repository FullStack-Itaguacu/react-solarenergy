import { render, screen } from "@testing-library/react";
import { CadastroUnidade } from "./Cadastro";
const mudarFormulario = jest.fn();

describe("cadastro unidade", () => {
  test("Deveria a página apresentar um texto Cadastro de Unidade Geradora", () => {
    render(<CadastroUnidade mudarFormulario={mudarFormulario} />);
    const texto = screen.getByText(/Cadastro de Unidade Geradora/i);
    expect(texto).toBeInTheDocument();
  });
  test("A página não deve apresentar o texto Listagem de Unidades", () => {
    render(<CadastroUnidade mudarFormulario={mudarFormulario} />);
    const texto = screen.queryByText("Listagem de Unidade");
    expect(texto).not.toBeInTheDocument();
  });
  test.todo(
    "Deveria a página apresentar um objeto contendo: [type, label, name, placeholder, inputClassName]"
  );
  test.todo(
    "Deveria a página apresentar um botão tipo checkbox (estado: true/false)"
  );

  test.todo(
    "Deveria ter uma ação no botão salvar que verifica se todos os campos estão preenchidos"
  );
  test.todo("Deveria a página apresentar um alert com uma mensagem de erro");
  test.todo("Deveria, ao clicar no botão salvar, limpar todos os inputs");
});
