import { MDBBtn } from "mdbreact";
import React, { SyntheticEvent } from "react";
import { Container } from "react-bootstrap";
import { Customer } from "./Customer";
import { useCustomer } from "./CustomerContext";
import { CustomerSearch } from "./CustomerSearch";

export interface IFindCustomerProps {
  onCustomerClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  onContinueClick?: (event: SyntheticEvent<HTMLButtonElement, Event>) => void;
}

export const FindCustomer = (props: IFindCustomerProps) => {
  const { customer } = useCustomer();
  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <CustomerSearch />
      <Customer onClick={props.onCustomerClick} />
      {customer && (
        <MDBBtn
          name="customer-continue"
          style={{
            marginTop: 20,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 10,
          }}
          onClick={props.onContinueClick}
        >
          Continue
        </MDBBtn>
      )}
    </Container>
  );
};
