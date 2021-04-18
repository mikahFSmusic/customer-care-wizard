import React from "react";
import { Container } from "react-bootstrap";
import { getCustomerOrders } from "../../kustomer.api";
import SideBar from "../app/components/SideBar";
import { CustomerProvider } from "../customer/CustomerContext";
import { FindCustomer } from "../customer/FindCustomer";

export const ReportForm = () => {
  const handleCustomerSelect = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    customerData: ICustomerData
  ) => {
    if (customerData) {
      getCustomerOrders(customerData.data.relationships.orders.links.self);
    }
  };

  return (
    <>
      <CustomerProvider>
        <Container style={{ alignSelf: "center", marginTop: 30 }}>
          <h1 style={{ textAlign: "center" }}>File Report</h1>
          <Container className="z-depth-1">
            <FindCustomer onClick={handleCustomerSelect} />
          </Container>
        </Container>

        <SideBar />
      </CustomerProvider>
    </>
  );
};
