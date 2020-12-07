import React from "react";
import { CustomerCard } from "./CustomerCard";

type CustomerSearchProps = {
  customers?: Array<Object>;
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    customerData: any
  ) => void;
};

export const CustomerSearchResults = (props: CustomerSearchProps) => {
  return (
    <div>
      {props.customers?.map((customer: any) => (
        <CustomerCard
          key={customer.id}
          customerData={customer}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
};
