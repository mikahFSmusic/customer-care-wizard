import React, { ChangeEvent, useEffect, useState } from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import Fuse from "fuse.js";
import { CustomerCard } from "./CustomerComponents/CustomerCard";

// API Call to Kustomer for list of all customers
const kustomerAPIKey = process.env.REACT_APP_KUSTOMER_API_KEY;
const xhr = new XMLHttpRequest();
xhr.responseType = "json";

let allCustomers: any = undefined;

const getAllCustomers = () => {
  console.log("getting all customers");
  let proxyUrl: string = "https://cors-anywhere.herokuapp.com/";
  let requestUrl: string = "https://api.kustomerapp.com/v1/customers";
  try {
    xhr.open("GET", proxyUrl + requestUrl, true);
    xhr.setRequestHeader("authorization", `Bearer ${kustomerAPIKey}`);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        let status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          let response = xhr.response;
          let resJSON = JSON.parse(JSON.stringify(response));
          allCustomers = resJSON.data;
        }
      }
    };
    xhr.send();
  } catch (error) {
    throw new Error(error);
  }
};

allCustomers = getAllCustomers();

// Fuse fuzzy search
const searchCustomers = (customers: any, pattern: string) => {
  const options = {
    keys: ["attributes.displayName", "attributes.name"],
  };
  const fuse = new Fuse(customers, options);
  return fuse.search(pattern);
};

// COMPONENT
export const CustomerInfo = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [validCustomers, setValidCustomers] = useState<Array<Object>>();

  const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const el = event.target as HTMLInputElement;
    const value = el.value;
    setSearchValue(value);
    if (allCustomers !== undefined) {
      console.log("customer data loaded");
      setValidCustomers(searchCustomers(allCustomers, value));
    } else {
      console.log("loading customer data");
    }
  };

  // Styles
  const customerInfoStyle = {
    borderRight: "2px solid gray",
    margin: "10px",
    height: "95%",
  };

  const resultsStyles = {
    height: "90vh",
    overflow: "scroll",
  };

  return (
    <div style={customerInfoStyle}>
      <MDBCol md="12">
        <h2>Customer Info</h2>
        <MDBFormInline
          className="md-form"
          style={{ display: "flex", alignContent: "center" }}
          onSubmit={handleSearchChange}
        >
          <MDBIcon icon="search"></MDBIcon>
          <input
            value={searchValue}
            className="form-control form-control-lg ml-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearchChange}
          ></input>
        </MDBFormInline>
        <div style={resultsStyles}>
          {allCustomers
            ? validCustomers?.map((customer: any) => (
                <CustomerCard key={customer.item.id} customerData={customer} />
              ))
            : "Loading customer information! Try searching again in a couple of seconds"}
        </div>
      </MDBCol>
    </div>
  );
};
