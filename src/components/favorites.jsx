import React, { useContext } from "react";
import { PageContext } from "../helpers/Context";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";


function Favorites() {
  const { test, favorites, onFavDelete, addToCart, cart, setCheckout } =
    useContext(PageContext);
  return (
    <div>
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
              <td>{val.title}</td>
              <td>
                <img src={val.img} />
              </td>
              <td>
                <button
                  onClick={() =>
                    addToCart(
                      val.title,
                      val.img,
                      val.cprice,
                      val.stock,
                      val.fullgameLink
                    )
                  }
                >
                  Add To Cart
                </button>
              </td>
              <td>
                <Button variant="danger" onClick={() => onFavDelete(val.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Favorites;
