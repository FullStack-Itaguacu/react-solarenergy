import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

function ListaUnidades() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:3000/unidades`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const editarUnidade = (id) => {
    // Implemente a lógica de edição aqui
    console.log(`Editar unidade com ID ${id}`);
  };

  const removerUnidade = (id) => {
    // Implemente a lógica de remoção aqui
    console.log(`Remover unidade com ID ${id}`);
  };

  const adicionaUnidade = () => {
    // Implemente a lógica de adição aqui
    console.log("Adicionar nova unidade");
  };

  return (
    <div className="wrapper">
      <Table className="my-4">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Apelido</th>
            <th>Local</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ações</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.apelido}</td>
              <td>{item.local}</td>
              <td>{item.marca}</td>
              <td>{item.modelo}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => editarUnidade(item.id)}
                >
                  Editar
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => removerUnidade(item.id)}
                >
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <Button onClick={adicionaUnidade}>Nova Unidade</Button>
    </div>
  );
}
export default ListaUnidades();
