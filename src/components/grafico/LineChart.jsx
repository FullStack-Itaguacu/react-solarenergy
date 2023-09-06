import styles from "./LineChart.module.css"
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

export const LineChart = () => {
  const [listaLancamentos, setListaLancamentos] = useState([]);

  // Realiza a busca dos dados ao carregar a página
  useEffect(() => {
    buscaListaLancamentos();
  }, []);

  // Faz a busca de informações no endpoint lancamentos
  const buscaListaLancamentos = async () => {
    await axios
      .get("http://localhost:3000/lancamentos")
      .then((response) => setListaLancamentos(response.data))
      .catch((error) => alert(error));
  };

  // Passa os dados do array para o objeto que vai conter os dados do gráfico
  let somaLancamentos = {};
  listaLancamentos.forEach((element) => {

    if (somaLancamentos[element.data]) {
      somaLancamentos[element.data] += element.total;
    } else {
      somaLancamentos[element.data] = element.total;
    }
  })

  // Cria um novo objeto com as propriedades ordenadas
  function organizaData(objeto) {
    const propriedadeOrdenada = Object.keys(objeto).sort();
    const objetoOrdenado = {};

    for (const propriedade of propriedadeOrdenada) {
      objetoOrdenado[propriedade] = objeto[propriedade];
    }

    return objetoOrdenado
  }

  // Caso o tamanho do objeto seja maior que 12 retira o mês mais antigo
  function ultimosMeses(objeto) {

    while (Object.keys(objeto).length > 12) {
      delete objeto[Object.keys(objeto)[0]];
    }

    return objeto
  }

  const dadosOrganizados = organizaData(somaLancamentos)
  const mesesFinais = ultimosMeses(dadosOrganizados)
  console.log(somaLancamentos)
  console.log(dadosOrganizados)
  console.log(mesesFinais)

  // Criação do Gráfico
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Title,
    Tooltip,
  );

  // Declaração dos dados usados e configurações visuais do gráfico
  const labels = Object.keys(mesesFinais).map((key) => key);
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: Object.values(mesesFinais).map((value) => value),
        backgroundColor: "white",
        borderColor: "aqua",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Configurações do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        onClick: false,
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        min: 0,
        position: 'right'
      },
    },
  };

  return (
    <div>
      {Object.keys(listaLancamentos).length > 0 ? (
        <div id={styles.lineChart}>
          <h3>Total de energia gerada por mês</h3>
          <Line id={styles.grafico} options={options} data={data} />
        </div>
      ) : (
        <h1 id={styles.mensagem}>Nenhum lançamento mensal consta no banco de dados.</h1>
      )}
    </div>
  )
};