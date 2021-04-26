import { MDBBtn } from "mdbreact";
import React, { SyntheticEvent } from "react";
import { Container } from "react-bootstrap";
import "./OrdersContainer.scss";

interface IOrdersContainerProps {
  children?: React.ReactNode;
  onContinueClick: (event: SyntheticEvent<HTMLButtonElement, Event>) => void;
}

export const OrdersContainer = ({
  children,
  onContinueClick,
}: IOrdersContainerProps) => {
  return (
    <Container className="orders-container">
      {children}
      <MDBBtn
        name="orders-continue"
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 10,
          width: "100%",
        }}
        onClick={onContinueClick}
      >
        Continue
      </MDBBtn>
    </Container>
  );
};
