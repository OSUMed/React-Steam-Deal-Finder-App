import React, { useContext } from "react";
import { PageContext } from "../helpers/Context";
import { Table } from "react-bootstrap";

function Favorites() {
  const { test, favorites, onFavDelete } = useContext(PageContext);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Game Name</th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {favorites.map((val) => (
          <tr>
            <td>
              {val.title} {val.id}
            </td>
            <td>
              <img src={val.img} />
            </td>
            <td>
              <button onClick={() => onFavDelete(val.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Favorites;
