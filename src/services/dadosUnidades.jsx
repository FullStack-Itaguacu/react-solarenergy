import axios from 'axios';
import { useEffect, useState } from 'react';

export default function dadosUnidades() {
  const [unidades, setUnidades] = useState([]);
  const [unidadesAtivas, setUnidadesAtivas] = useState([]); 
  const [unidadeInativa , setUnidadeInativa] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const urlUnidades = "http://localhost:3000/unidades";

  useEffect(() => {
    async function fetchUnidades() {
      try {
        const response = await axios.get(urlUnidades);
        setUnidades(response.data);
        setCarregando(false);
        setUnidadesAtivas(response.data.filter(unidade => unidade.ativa === false));
        setUnidadeInativa(response.data.filter(unidade => unidade.ativa === true));
      } catch (error) {
        console.log(error);
      }
    }

    fetchUnidades();
  }, []);

  return { unidades,unidadesAtivas,unidadeInativa};
}