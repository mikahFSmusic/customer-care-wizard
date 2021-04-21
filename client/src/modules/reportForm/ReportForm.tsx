import React, { SyntheticEvent, useState } from "react";
import { Container } from "react-bootstrap";
import { getCustomerOrders } from "../../kustomer.api";
import SideBar from "../app/components/SideBar";
import { CustomerProvider, useCustomer } from "../customer/CustomerContext";
import { FindCustomer } from "../customer/FindCustomer";
import Order from "../order/Order";
import { OrdersContainer } from "../order/OrdersContainer";

export const ReportForm = () => {
  const { customer } = useCustomer();
  const [orders, setOrders] = useState<IOrderList | null>(null);
  const [showFindCustomer, setShowFindCustomer] = useState<boolean>(true);
  const [showOrders, setShowOrders] = useState<boolean>(false);

  const handleCustomerSelect = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Show dialog with more customer information
  };

  const handleContinueClick = async (
    event: SyntheticEvent<HTMLButtonElement, Event>
  ) => {
    const el = event.target;
    console.log(el);
    if (customer) {
      console.log("customer found");
      const orders = await getCustomerOrders(
        customer.data.relationships.orders.links.self
      );
      console.log(orders);
      if (orders) {
        setOrders(orders);
        console.log(orders);
        setShowFindCustomer(false);
        setShowOrders(true);
      }
    }
  };

  return (
    <>
      <Container style={{ alignSelf: "center", marginTop: 30 }}>
        <h1 style={{ textAlign: "center" }}>File Report</h1>
        <Container className="z-depth-1">
          {showFindCustomer && (
            <FindCustomer
              onCustomerClick={handleCustomerSelect}
              onContinueClick={handleContinueClick}
            />
          )}
          {showOrders && orders && (
            <OrdersContainer
              onContinueClick={handleContinueClick}
              children={orders?.data?.map((order) => (
                <Order order={order} />
              ))}
            />
          )}
        </Container>
      </Container>
      <SideBar />
    </>
  );
};
