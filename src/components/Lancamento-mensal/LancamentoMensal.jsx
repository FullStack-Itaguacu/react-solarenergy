import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Lancamento-mensal.module.css";

export const LancamentoGeracaoMensal = () => {
  const [unidades, setUnidades] = useState([]);
  const [unidadeGeradora, setUnidadeGeradora] = useState("");
  const [data, setData] = useState("");
  const [total, setTotal] = useState("");
  const [formulario, setFormulario] = useState(false);
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

  const validar = () => {
    if (unidadeGeradora && data && total) {
      setFormulario(true);
    } else {
      setFormulario(false);
    }
  };

  useEffect(() => {
    validar();
  }, [unidadeGeradora, data, total]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formulario) {
      axios
        //.post("http://localhost:3000/lancamentos", lancamento)
        //.then((response) => {
        //  console.log(response);
        //})

        //Recuperar lançamentos já existentes na base de dados json
        .get("http://localhost:3000/lancamentos")
        .then((response) =>{
          const lancamentosExistentes = response.data.lancamentos;

          //Criação de um novo lancamento com base nos dados do formulário
          const novoLancamento = {
            //id: Math.random().toString(36).substring(7),
            id_unidade: unidadeGeradora,
            data: data,
            total: total, 
          };

          //Adicionar o novo lançamento a base de dados json
          lancamentosExistentes.push(novoLancamento);
          const dadosAtualizados = {
            lancamentos: lancamentosExistentes
          } 

          //Atualizar a base de dados json com os novos dados
          axios
            .put("http://localhost:3000/lancamentos", dadosAtualizados)
            .then((response) =>{
              console.log(response);
              
              //Limpar os dados do formulário após enviar os dados para a base json
              setFormulario({
                id_unidade: "",
                data: "",
                total: 0,
              });
            });
        })  
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div>
      <header>
        <h1>Lançamento de geração mensal</h1>
      </header>

      <div className={styles.formulario}>
        <form onSubmit={handleSubmit}>
          <div className={styles.gridContainer}>
            <div className={styles.unidade}>
              <label>Unidade Geradora</label>
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
            <div className={styles.data}>
              <label htmlFor="">Mês/ano</label>
              <input
                type="month"
                name="data"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <div className={styles.total}>
              <label htmlFor="">Total kw gerado</label>
              <input
                type="number"
                name="kw"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
            </div>
            <div className={styles.botao}>
              <button type="submit" className="btn btn-primary">
                Cadastro
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
