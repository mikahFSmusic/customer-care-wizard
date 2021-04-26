import { MDBBtn, MDBIcon, MDBInputGroup } from "mdbreact";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { getCustomerByEmail } from "../../kustomer.api";
import { useCustomer } from "./CustomerContext";

interface ICustomerSearchProps {
  customerData?: ICustomerData;
}

export const CustomerSearch = ({ customerData }: ICustomerSearchProps) => {
  const [email, setEmail] = useState<string | undefined>();
  const [disabled, setDisabled] = useState<boolean>();
  const { addCustomer } = useCustomer();

  const isValidEmail = (value: string) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        value
      )
    )
      return true;
    return false;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const value = el.value;
    if (isValidEmail(value)) {
      setEmail(value);
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLButtonElement, Event>
  ) => {
    if (email) {
      try {
        const res: ICustomerData = await getCustomerByEmail(email);
        console.log(res);
        if (res.data) {
          addCustomer(res);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Container style={{ width: "100%", padding: 0, margin: 0 }}>
      <MDBInputGroup
        style={{
          display: "flex",
          alignContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
          width: "100%",
        }}
        onChange={handleChange}
        type="email"
        hint="Search Customer Email"
        append={
          <MDBBtn
            type="submit"
            style={{ padding: 0, margin: 0, width: 50 }}
            color="blue"
            onClick={handleSubmit}
            disabled={disabled}
          >
            <MDBIcon icon="fas fa-search" />
          </MDBBtn>
        }
      />
    </Container>
  );
};
