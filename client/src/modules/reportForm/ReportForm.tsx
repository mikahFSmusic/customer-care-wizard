import React, { SyntheticEvent, useState } from "react";
import { Container } from "react-bootstrap";
import { getCustomerOrders } from "../../kustomer.api";
import SideBar from "../app/components/SideBar";
import { useCustomer } from "../customer/CustomerContext";
import { FindCustomer } from "../customer/FindCustomer";
import Order from "../order/Order";
import { OrdersContainer } from "../order/OrdersContainer";
import { useForm } from "./ReportFormContext";

export const ReportForm = () => {
  const { customer } = useCustomer();
  const { addOrder, removeOrder, orders } = useForm();
  const [customerOrders, setOrders] = useState<IOrderList | null>(null);
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
      const customerOrders = await getCustomerOrders(
        customer.data.relationships.orders.links.self
      );
      console.log(customerOrders);
      if (customerOrders) {
        setOrders(customerOrders);
        console.log(customerOrders);
        setShowFindCustomer(false);
        setShowOrders(true);
      }
    }
  };

  const handleOrderSelect = (
    e: SyntheticEvent<HTMLInputElement, Event>,
    order: IOrder
  ) => {
    const el = e.target as HTMLInputElement;
    if (el.checked) {
      addOrder(order);
    }
    removeOrder(order);
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
          {showOrders && customerOrders && (
            <OrdersContainer
              onContinueClick={handleContinueClick}
              children={customerOrders?.data?.map((order) => (
                <Order order={order} onSelect={handleOrderSelect} />
              ))}
            />
          )}
        </Container>
      </Container>
      <SideBar />
    </>
  );
};
