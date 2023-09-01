import { useState, useEffect } from 'react'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

export const LineChart = () => {

    const [listaUnidades, setListaUnidades] = useState([]);
    const [listaLancamentos, setListaLancamentos] = useState([]);

    useEffect(() => {
        buscaUnidades()
        buscaListaLancamentos()
    }, [])

    // Faz a busca de informações no endpoint unidades
    const buscaUnidades = () => {
        axios.get('http://localhost:3000/unidades')
            .then(response => setListaUnidades(response.data))
            .catch(error => console.log(error))
    }

    // Faz a busca de informações no endpoint lancamentos
    const buscaListaLancamentos = () => {
        axios.get('http://localhost:3000/lancamentos')
            .then(response => setListaLancamentos(response.data))
            .catch(error => console.log(error))
    }

    // Lógica para cálculo dos dados do gráfico
    const totalUnidades = listaUnidades.length
    const unidadesAtivas = listaUnidades.filter(unidade => unidade.ativa == true).length
    const unidadesInativas = listaUnidades.filter(unidade => unidade.ativa == false).length

    let somaLancamentos = {}
    somaLancamentos = listaLancamentos.map(lancamento => {

    })

    // Criação do Gráfico
    ChartJS.register(
        LineElement,
        CategoryScale,
        LinearScale,
        PointElement,
        Title,
        Legend
    )

    // Dados do gráfico
    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março'],
        datasets: [{
            label: "Total de energia gerada mensalmente",
            data: [180, 480, 250],
            backgroundColor: 'white',
            borderColor: 'aqua',
            tension: 0.4,
            fill: true
        }]
    }

    // Configurações do gráfico
    const options = {
        plugins: {
            legend: {
                onClick: false,
                labels: {
                    boxWidth: 0
                }
            },
        },
        elements: {
            point: {
                radius: 0
            }
        },
        scales: {
            y: {
                min: 0,
                max: 500
            }
        }
    }

    return (
        <Line options={options} data={data} />
    )
}