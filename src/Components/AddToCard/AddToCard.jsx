import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { productsContext } from './../../Layout/index';



const AddToCard = () => {

  const { products } = useContext(productsContext);

  return (
    <div className="container">
      <div className="header-wrap-clone"></div>
      <Table>
        <thead>
          <tr className="custom-table-header">
            <th></th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products?.cart?.map((p) => (
            <tr className="">
              <td className="custom-table">
                <img
                  src={p.img}
                  alt="cardPhoto"
                  style={{ width: "64px", height: "64px" }}
                />
                
              </td>
              <td className="custom-table"> {p.name}</td>
              <td className="custom-table">${p.price}</td>
              <td className="custom-table">{p.quantity}</td>
              <td className="custom-table">${p.total}20</td>
            </tr>
          ))}
        </tbody>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>Total Quantity $5</th>
          <th>Total Price $10</th>
        </tr>
      </Table>
    </div>
  );
};

export default AddToCard;
