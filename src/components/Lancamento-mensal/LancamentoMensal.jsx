import { useState, useEffect } from "react";
import axios from "axios";
import "./Lancamento-mensal.module.css";

export const LancamentoGeracaoMensal = () => {
  const [unidades, setUnidades] = useState([]);
  const [unidadeGeradora, setUnidadeGeradora] = useState("");
  const [data, setData] = useState("");
  const [total, setTotal] = useState("");
  const lancamento = {
    id_unidade: unidadeGeradora,
    data: data,
    total: total,
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/unidades")
      .then((response) => {
        setUnidades(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/lancamentos", lancamento)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <header>
        <h1>Lançamento de geração mensal</h1>
      </header>

      <div className="formulario">
        <form onSubmit={handleSubmit}>
          <div className="unidade">
            <label htmlFor="">Unidade Geradora</label>
            <select
              name=""
              id=""
              value={unidadeGeradora}
              onChange={(e) => setUnidadeGeradora(e.target.value)}
            >
              {unidades.map((unidade) => (
                <option key={unidade.id} value={unidade.id}>
                  {unidade.apelido}
                </option>
              ))}
            </select>
          </div>
          <div className="data">
            <label htmlFor="">Mês/ano</label>
            <input
              type="month"
              name="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="total">
            <label htmlFor="">Total kw gerado</label>
            <input
              type="number"
              name="kw"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
            />
          </div>
          <div className="botao">
            <button type="submit" className="btn btn-primary">
              Cadastro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
