export const ListaUnidades = () => {
  return (
import React from 'react';
import { Table, Button } from 'react-bootstrap';

function Tabela() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Coluna 1</th>
          <th>Coluna 2</th>
          <th>Coluna 3</th>
          <th>Coluna 4</th>
          <th>Coluna 5</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dado 1</td>
          <td>Dado 2</td>
          <td>Dado 3</td>
          <td>Dado 4</td>
          <td>Dado 5</td>
          <td>
            <Button variant="warning">Editar</Button>{' '}
            <Button variant="danger">Remover</Button>
          </td>
        </tr>
        {/* Repita a estrutura para mais linhas */}
      </tbody>
    </Table>
  );
}

export default Tabela;
  )
}
