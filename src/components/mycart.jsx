import React, { useContext } from "react";
import { PageContext } from "../helpers/Context";
import { Table } from "react-bootstrap";
import Checkout from "./checkout";
import { Button } from "react-bootstrap";

function Cart() {
  const { cart, onCartDelete, checkout, toggleCheckout } =
    useContext(PageContext);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>My Cart</th>
            <th> Price </th>
            <th>Quantity </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((val) => (
            <tr>
              <td>
                {val.title} <img src={val.img} />
              </td>
              <td>{val.cartprice}</td>
              <td>{val.cartStock}</td>

              <td>
                <Button
                  variant="danger"
                  onClick={() => onCartDelete(val.title)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        <br />
        <Button variant="primary" onClick={(e) => toggleCheckout(e)}>Checkout</Button>
      
      {checkout && <Checkout />}
    </div>
  );
}

export default Cart;
