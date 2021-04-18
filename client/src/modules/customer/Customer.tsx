import React, { useEffect, useState } from "react";
import { useCustomer } from "./CustomerContext";

interface ICustomerProps {
  customerData?: ICustomerData;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    customerData: ICustomerData
  ) => void;
}
export const Customer = (props: ICustomerProps) => {
  const { customer } = useCustomer();
  const [customerId, setCustomerId] = useState<string>("");
  const [ordersLink, setOrdersLink] = useState<string>("");
  const [phones, setPhones] = useState<PhonesEntity[] | null | undefined>();
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    if (customer) {
      setCustomerId(customer.data.id);
      setOrdersLink(customer.data.relationships.orders.links.self);
      setPhones(customer.data.attributes.phones);
      if (customer.data.attributes.emails) {
        setEmail(customer.data.attributes.emails[0].email);
      }
    }
  }, [customer]);
  return (
    <>
      {customer && (
        <div
          style={{
            borderRadius: 5,
            color: "black",
            borderColor: "black",
            paddingLeft: 15,
            paddingTop: 5,
            paddingBottom: 5,
          }}
          className="z-depth-1"
        >
          <p>ID: {customerId}</p>
          <p>Phone(s): {phones?.map((phone) => phone.phone + ", ")}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </>
  );
};
