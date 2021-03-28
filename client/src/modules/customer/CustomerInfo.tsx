import React from "react";

type CustomerInfoProps = {
  customerData: any;
};

export const CustomerInfo = (props: CustomerInfoProps) => {
  const name = props.customerData.attributes.displayName;
  const emails = props.customerData.attributes.emails[0];
  const phones = props.customerData.attributes.phones[0];
  let email = "";
  let phone = "";

  if (emails !== undefined) {
    email = emails.email;
  }

  if (phones !== undefined) {
    phone = phones.phone;
  }

  const customerInfoStyles = {
  };

  return (
    <div style={customerInfoStyles}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{name}</td>
          </tr>
          <br />
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <br />
          <tr>
            <td>Phone:</td>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
