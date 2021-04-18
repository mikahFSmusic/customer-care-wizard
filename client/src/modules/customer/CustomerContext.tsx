import React, { createContext, useContext, useState } from "react";

interface ICustomerContextValue {
  addCustomer: (customerData: ICustomerData) => void;
  customer: ICustomerData | null;
}

interface ICustomerContextProviderProps {
  children: React.ReactNode;
}

export const DEFAULT_CUSTOMER_CONTEXT_VALUE: ICustomerContextValue = {
  addCustomer: () => {
    return;
  },
  customer: null,
};

export const CustomerContext = createContext<ICustomerContextValue>(
  DEFAULT_CUSTOMER_CONTEXT_VALUE
);

export const CustomerProvider: React.FC<ICustomerContextProviderProps> = (
  props
) => {
  const [currentCustomer, setCurrentCustomer] = useState<ICustomerData | null>(
    null
  );

  const addCustomer = async (customerData: ICustomerData) => {
    if (customerData) {
      setCurrentCustomer(customerData);
      return customerData;
    }
  };

  return (
    <CustomerContext.Provider
      value={{ customer: currentCustomer, addCustomer }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};

export function useCustomer() {
  return useContext(CustomerContext);
}
