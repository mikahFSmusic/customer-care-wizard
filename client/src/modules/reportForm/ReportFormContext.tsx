import React, { createContext, useContext, useState } from "react";
import { useCustomer } from "../customer/CustomerContext";

interface IReportFormContextValue {
  customer: ICustomerData | null;
  orders: ISelectedOrder[] | null | undefined;
  addOrder: (order: IOrder) => void;
  removeOrder: (order: IOrder) => void;
}

interface IReportFormContextProviderProps {
  children: React.ReactNode;
}

export const DEFAULT_FORM_CONTEXT_VALUE: IReportFormContextValue = {
  customer: null,
  orders: null,
  addOrder: () => {
    return;
  },
  removeOrder: () => {
    return;
  },
};

export const ReportFormContext = createContext<IReportFormContextValue>(
  DEFAULT_FORM_CONTEXT_VALUE
);

export const ReportFormProvider: React.FC<IReportFormContextProviderProps> = (
  props
) => {
  const { customer } = useCustomer();
  const [selectedOrders, setSelectedOrders] = useState<ISelectedOrder[]>([]);
  const addOrder = async (order: IOrder) => {
    if (order) {
      setSelectedOrders((selectedOrders) =>
        selectedOrders?.concat({
          orderNumber: order.attributes.data.orderNumber,
          order,
        })
      );
    }
  };

  const removeOrder = async (order: IOrder) => {
    if (order && selectedOrders) {
      selectedOrders.forEach((selectedOrder, index) => {
        if (selectedOrder.orderNumber === order.attributes.data.orderNumber) {
          selectedOrders.splice(index);
          setSelectedOrders(selectedOrders);
        }
      });
    }
  };

  return (
    <ReportFormContext.Provider
      value={{ customer, orders: selectedOrders, addOrder, removeOrder }}
    >
      {props.children}
    </ReportFormContext.Provider>
  );
};

export function useForm() {
  return useContext(ReportFormContext);
}
