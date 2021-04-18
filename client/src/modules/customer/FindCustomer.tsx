import { MDBBtn } from "mdbreact";
import React from "react";
import { Container } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Customer } from "./Customer";
import { useCustomer } from "./CustomerContext";
import { CustomerSearch } from "./CustomerSearch";

export interface IFindCustomerProps {
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    customerData: ICustomerData
  ) => void;
}

export const FindCustomer = (props: IFindCustomerProps) => {
  const { customer } = useCustomer();
  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <CustomerSearch />
      <Customer onClick={props.onClick} />
      {customer && (
        <MDBBtn
          style={{
            marginTop: 20,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 10,
          }}
        >
          Continue
        </MDBBtn>
      )}
    </Container>
  );
};
