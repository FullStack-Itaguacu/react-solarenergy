import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

export default function ListaUnidades() {

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:3000/unidades`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Table className="my-4">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Apelido</th>
            <th>Local</th>
            <th>Marca</th>
            <th>Modelo</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.apelido}</td>
              <td>{item.local}</td>
              <td>{item.marca}</td>
              <td>{item.modelo}</td>
              <Button variant="success" onClick={() => editarUnidade(item.id)}>
                Editar
              </Button>
              <Button variant="danger" onClick={() => removerUnidade(item.id)}>
                Remover
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <Button onClick={() => adicionaUnidade()}>Nova Unidade</Button>
    </div>
  );
};
