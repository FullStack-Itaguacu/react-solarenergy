import "./LineChart.css"
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
  const [listaUnidades, setListaUnidades] = useState([]);
  const [listaLancamentos, setListaLancamentos] = useState([]);

  // Realiza a busca dos dados ao carregar a página
  useEffect(() => {
    buscaUnidades();
    buscaListaLancamentos();
  }, []);

  // Faz a busca de informações no endpoint unidades
  const buscaUnidades = () => {
    axios
      .get("http://localhost:3000/unidades")
      .then((response) => setListaUnidades(response.data))
      .catch((error) => alert(error));
  };

  // Faz a busca de informações no endpoint lancamentos
  const buscaListaLancamentos = () => {
    axios
      .get("http://localhost:3000/lancamentos")
      .then((response) => setListaLancamentos(response.data))
      .catch((error) => alert(error));
  };

  // Lógica para cálculo dos dados do gráfico
  const unidadesAtivas = listaUnidades.filter(
    (unidade) => unidade.ativa == true
  );

  // Passa os dados do array para o objeto que vai conter os dados do gráfico
  let somaLancamentos = {};
  listaLancamentos.forEach((element) => {
    let estaAtiva = false
    Object.values(unidadesAtivas).forEach(unidade => {
      if (unidade.id === element.id_unidade) {
        estaAtiva = true
      }
    })

    //
    if (estaAtiva) {
      if (somaLancamentos[element.data]) {
        somaLancamentos[element.data] += element.total;
      } else {
        somaLancamentos[element.data] = element.total;
      }
    }

    // Caso o tamanho do objeto seja maior que 12 retira o mês mais antigo
    if (Object.keys(somaLancamentos).length > 12) {
      delete somaLancamentos[Object.keys(somaLancamentos)[0]];
    }
  });

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
  const labels = Object.keys(somaLancamentos).map((key) => key);
  const data = {
    labels,
    datasets: [
      {
        label: "Total de energia gerada por mês",
        data: Object.values(somaLancamentos).map((value) => value),
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
        align: 'start',
        labels: {
          boxWidth: 0,
          font: {
            size: 30,
          }
        }
      },
    },
    scales: {
      y: {
        min: 0,
        position: 'right'
      },
    },
  };

  return (
    <div id="lineChart">
      <Line options={options} data={data} />
    </div>
  )
};
