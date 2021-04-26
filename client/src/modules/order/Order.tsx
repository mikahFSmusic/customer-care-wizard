import React, { SyntheticEvent } from "react";
import { Container } from "react-bootstrap";
import "./Order.scss";

interface IOrderProps {
  order: IOrder;
  onSelect: (e: SyntheticEvent<HTMLInputElement, Event>, order: IOrder) => void;
  selected?: boolean;
}

export const Order = (props: IOrderProps) => {
  const { order, onSelect } = props;

  const handleSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    console.log("selected input in order");
    if (e) {
      onSelect(e, order);
    }
  };
  return (
    <Container
      className="order-container"
      style={{ width: "100%", height: "150px", display: "flex" }}
    >
      <div style={{ width: "60%", height: "100%" }}>
        <p>Order Number: {order.attributes.data.orderNumber}</p>
        <p>Shipping Address: {order.attributes.data.shippingAddress.address}</p>
        <p>
          {order.attributes.data.shippingAddress.city},{" "}
          {order.attributes.data.shippingAddress.zipcode},
        </p>
      </div>
      <div
        className="order-image"
        style={{
          width: "30%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {order.attributes.data.lineItemDetails && (
          <img
            alt=""
            style={{ width: "100px", height: "100px" }}
            src={order.attributes.data.lineItemDetails[0].images}
          ></img>
        )}
      </div>
      <div
        className="order-checkbox"
        style={{
          width: "10%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <input type="checkbox" onChange={handleSelect} />
      </div>
    </Container>
  );
};

export default Order;
