import React from 'react'

type CustomerInfoProps = {
  customerData: any
}

export const CustomerInfo = (props:CustomerInfoProps) => {
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


  return (
    <div>
      <h4>Customer: {name}</h4>
      <h5>Email: {email}</h5>
      <h5>Phone: {phone}</h5>
    </div>
  )
}