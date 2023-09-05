import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListaUnidades({ mudarFormulario }) {

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

  const editarUnidade = () => console.log("editarUnidade")

  const removerUnidade = (id) => {
      fetch("http://localhost:3000/unidades/" + id, {
        method: "DELETE",
      });

      window.location.reload(false);
      alert(`Unidade com o ${id} foi removido com sucesso.`);
      }



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
              <td>
                <Link to={`http://localhost:3000/unidades/${item.id}`}>
                  <Button variant="success" onClick={() => editarUnidade(item.id)}>
                    Editar
                  </Button>
                </Link>
              </td>
              <td>
                <Button variant="danger" onClick={() => removerUnidade(item.id)}>
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <Button onClick={() => mudarFormulario()}>Nova Unidade</Button>
    </div>
  );
}

ListaUnidades.propTypes = {
  mudarFormulario: PropTypes.func.isRequired,
};
