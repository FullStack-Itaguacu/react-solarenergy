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

  useEffect(() => {
    buscaUnidades();
    buscaListaLancamentos();
  }, []);

  // Faz a busca de informações no endpoint unidades
  const buscaUnidades = () => {
    axios
      .get("http://localhost:3000/unidades")
      .then((response) => setListaUnidades(response.data))
      .catch((error) => console.log(error));
  };

  // Faz a busca de informações no endpoint lancamentos
  const buscaListaLancamentos = () => {
    axios
      .get("http://localhost:3000/lancamentos")
      .then((response) => setListaLancamentos(response.data))
      .catch((error) => console.log(error));
  };

  // Lógica para cálculo dos dados do gráfico
  const totalUnidades = listaUnidades.length;
  const unidadesAtivas = listaUnidades.filter(
    (unidade) => unidade.ativa == true
  ).length;
  const unidadesInativas = listaUnidades.filter(
    (unidade) => unidade.ativa == false
  ).length;

  let somaLancamentos = {};
  listaLancamentos.forEach((element) => {
    if (somaLancamentos[element.data]) {
      somaLancamentos[element.data] += element.total;
    } else {
      somaLancamentos[element.data] = element.total;
    }
  });
  console.log(somaLancamentos);

  // Criação do Gráfico
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
  );

  // Dados do gráfico
  const labels = Object.keys(somaLancamentos).map((key) => key);
  const data = {
    labels,
    datasets: [
      {
        label: "Total gerado mensalmente",
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
        labels: {
          boxWidth: 0,
        },
      },
    },
    title: {
      display: true,
      text: "Total de energia gerada por mês",
    },
    scales: {
      y: {
        min: 0,
      },
    },
  };

  return <Line options={options} data={data} />;
};
