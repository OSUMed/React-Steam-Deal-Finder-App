import React, { useContext } from "react";
import { PageContext } from "../helpers/Context";
import { Table } from "react-bootstrap";
import Checkout from "./checkout";
import { Button } from "react-bootstrap";

function Cart() {
  const {
    cart,
    onCartDelete,
    checkout,
    toggleCheckout,
    totalprice,
    setTotalPrice,
  } = useContext(PageContext);

  //   const handleIncrement = (quantity) => {
  //     quantity += 1;
  //     console.log("increment: ", quantity);
  //     return quantity;
  //   };

  //   const handleDecrement = (quantity, title) => {
  //     if (quantity - 1 == 0) {
  //       onCartDelete(title);
  //     } else {
  //       quantity -= 1;
  //     }
  //     return quantity;
  //   };
  const final_price = () => {
    let total = 0;
    let mycart = [...cart];
    console.log("this is my cart: ", mycart[1]);

    for (let i = 0; i < mycart.length; i++) {
      total += parseFloat(mycart[i].cartprice);
      console.log("current total: ", total.toFixed(2));
    }
    setTotalPrice(total.toFixed(2));
    return totalprice;
    // let total = price;
    // total = total * quantity;
    // console.log("This is the total price: ", 10 * quantity, price, total);
    // return total;
  };
  return (
    <div>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>My Cart</th>
            <th> Price </th>
            <th>Quantity </th>
            <th>Quantity Change</th>
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
                {/* <button
                  onClick={handleIncrement(val.title)}
                  className="btn btn-secondary btn-sm"
                >
                  Increment
                </button>
                <button
                  onClick={() => handleDecrement(val.cartStock, val.title)}
                  className="btn btn-danger btn-sm m-2"
                >
                  Decrement
                </button> */}
              </td>
              <td>
                <Button
                  variant="btn btn-danger btn-sm m-2"
                  onClick={() => onCartDelete(val.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <div className="totalprice">
        <h3 style={{ marginBottom:"20px" }}>Total Price: $ {final_price()}</h3>
        <Button variant="primary" onClick={(e) => toggleCheckout(e)}>
          Checkout
        </Button>
      </div>
      {checkout && <Checkout />}
    </div>
  );
}

export default Cart;
