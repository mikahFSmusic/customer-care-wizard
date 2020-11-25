import React, { ChangeEvent, useEffect, useState } from "react";
import { MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import { CustomerInfo } from "./CustomerComponents/CustomerInfo";
import { CustomerSearchResults } from "./CustomerComponents/CustomerSearchResults";
import { fetchCustomers } from "../KustomerAPI";

type CustomerExploreProps = {
  customerData?: Object;
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    customerData: any
  ) => void;
};

// COMPONENT
export const CustomerExplore = (props: CustomerExploreProps) => {
  // State Hooks
  const [loading, setLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [customers, setCustomers] = useState<Array<Object>>();
  const [showSearchBar, setShowSearchBar] = useState<boolean>(true);
  const [showBackIcon, setShowBackIcon] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(true);
  const [showCustomer, setShowCustomer] = useState<boolean>(false);
  const [customerData, setCustomerData] = useState();

  // Effect Hooks
  useEffect(() => {
    setShowCustomer(false);
    setShowResults(true);
    const doFetch = async (searchValue: string) => {
      setLoading(true);
      const data = await fetchCustomers(searchValue);
      setCustomers(data.data);
      setLoading(false);
    };
    doFetch(searchValue);
  }, [searchValue]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const el = event.target as HTMLInputElement;
    const value = el.value;
    if (value.length > 2) {
      setSearchValue(value);
    }
  };

  const handleCustomerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    customerData: any
  ) => {
    setCustomerData(customerData);
    props.onClick(event, customerData);
    setShowSearchBar(false);
    setShowResults(false);
    setShowBackIcon(true);
    setShowCustomer(true);
  };

  const handleBackClick = () => {
    setShowBackIcon(false);
    setShowSearchBar(true);
    setShowResults(true);
  };

  const headerSwitch = () => {
    if (showSearchBar) {
      return (
        // TODO: (medium/high) change to form group to avoid nested form error
        <div className="form-inline">
          <MDBIcon icon="search"></MDBIcon>
          <input
            className="form-control form-control-lg ml-3 w-75"
            type="text"
            placeholder="Customer Search"
            aria-label="Customer Search"
            onChange={handleSearchChange}
          ></input>
        </div>
      );
    } else if (showBackIcon && !showSearchBar) {
      return (
        <div>
          <MDBBtn flat color="primary" onClick={handleBackClick}>
            Change Customer
          </MDBBtn>
          <br></br>
          <br></br>
        </div>
      );
    }
  };

  const renderSwitch = () => {
    if (loading) {
      return <div style={{alignSelf:'center'}}className="spinner-border" role="status"></div>;
    }
    if (!loading && showResults) {
      return (
        <CustomerSearchResults
          customers={customers}
          onClick={handleCustomerClick}
        />
      );
    } else if (!loading && !showResults && showCustomer) {
      return <CustomerInfo customerData={customerData} />;
    }
  };

  // Styles
  const customerInfoStyle = {
    margin: "10px",
    borderRadius: "10px",
    padding: "10px",
    overflow: "scroll",
    maxHeight: "500px",
  };

  const resultsStyles = {
    height: "100%",
    overflow: "hidden",
  };

  return (
    <div style={customerInfoStyle} className="z-depth-0-5">
      <MDBCol md="12">
        {headerSwitch()}
        <div>
          <div style={resultsStyles}>{renderSwitch()}</div>
        </div>
      </MDBCol>
    </div>
  );
};
