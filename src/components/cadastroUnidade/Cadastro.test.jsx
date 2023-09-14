import { render, screen } from "@testing-library/react";
import { CadastroUnidade } from "./Cadastro";

describe("cadastro unidade", () => {
  test("Deveria a página apresentar um texto Cadastro de Unidade Geradora", () => {
    render(<CadastroUnidade />);
    const texto = screen.getByText(/Cadastro de Unidade Geradora/i);
    expect(texto).toBeInTheDocument();
  });
  test.todo("A página não deve apresentar o texto Listagem de Unidades");
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
