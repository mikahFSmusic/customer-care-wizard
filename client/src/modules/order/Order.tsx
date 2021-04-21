import React from "react";
import { Container } from "react-bootstrap";

interface IOrderProps {
  order: IOrder;
  onSelect?: React.ReactEventHandler<HTMLInputElement>;
  selected?: boolean;
}

export const Order = (props: IOrderProps) => {
  const { order, selected, onSelect } = props;

  return (
    <Container style={{ width: "100%", height: "150px", display: "flex" }}>
      <div style={{ width: "60%", height: "100%" }}>
        <p>Order Number: {order.attributes.data.orderNumber}</p>
        <p>Shipping Address: {order.attributes.data.shippingAddress.address}</p>
        <p>
          {order.attributes.data.shippingAddress.city},{" "}
          {order.attributes.data.shippingAddress.zipcode},
        </p>
      </div>
      <div style={{ width: "30%", height: "100%" }}>
        {order.attributes.data.lineItemDetails && (
          <img
            style={{ width: "100px", height: "100px" }}
            src={order.attributes.data.lineItemDetails[0].images}
          ></img>
        )}
      </div>
      <div
        style={{
          width: "10%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <input type="checkbox" onSelect={onSelect} checked={selected} />
      </div>
    </Container>
  );
};

export default Order;
