import { MDBBtn } from "mdbreact";
import React, { SyntheticEvent } from "react";

interface IOrdersContainerProps {
  children?: React.ReactNode;
  onContinueClick: (event: SyntheticEvent<HTMLButtonElement, Event>) => void;
}

export const OrdersContainer = ({
  children,
  onContinueClick,
}: IOrdersContainerProps) => {
  return (
    <>
      {children}
      <MDBBtn
        name="orders-continue"
        style={{
          marginTop: 20,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 10,
        }}
        onClick={onContinueClick}
      >
        Continue
      </MDBBtn>
    </>
  );
};
