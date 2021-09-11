import React, { useContext } from "react";
import { PageContext } from "../helpers/Context";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Checkout() {
  const {
    test,
    cart,
    onCartDelete,
    setCheckout,
    checkout,
    totalprice,
    setTotalPrice,
  } = useContext(PageContext);


  return (
    <div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Checkout</th>
            <th> Price </th>

            <th>Quantity </th>
            <th> Link </th>
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
                <a href={val.fullLink}>
                  <Button variant="primary">Link to Purchase Item</Button>
                </a>
              </td>
              <td>
                <Button variant="danger" onClick={() => onCartDelete(val.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3 className="totalprice">Total Price: $ {totalprice} </h3>
    </div>
  );
}

export default Checkout;
