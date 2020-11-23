import React, { ChangeEvent, useEffect, useState } from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import Fuse from "fuse.js";
import { CustomerCard } from "./CustomerComponents/CustomerCard";

// API Call to Kustomer for list of all customers
const kustomerAPIKey = process.env.REACT_APP_KUSTOMER_API_KEY;

const baseURL: string = "https://api.kustomerapp.com/v1/customers/search";
const proxyURL: string = "https://cors-anywhere.herokuapp.com/";

const fetchCustomers = async (name: string) => {
  let headers = new Headers({
    Authorization: `Bearer ${kustomerAPIKey}`,
    "Content-Type": "application/json",
  });

  let raw = JSON.stringify({
    "and": [{ "customer_name": { "contains": name } }],
    "sort": [{ "customer_updated_at": "asc" }],
    "queryContext": "customer",
    "or": [],
  });

  let initObject = {
    method: "POST",
    headers: headers,
    body: raw,
  };

  try {
    const response = await fetch(`${proxyURL}${baseURL}`, initObject);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

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
  const [loading, setLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [customers, setCustomers] = useState<Array<Object>>();

  console.log("new render")

  useEffect(() => {
    const doFetch = async (searchValue:string) => {
      setLoading(true)
      const data = await fetchCustomers(searchValue)
      setCustomers(data.data)
      setLoading(false)
    }
    doFetch(searchValue)
  }, [searchValue])

  console.log(customers)

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const el = event.target as HTMLInputElement;
    const value = el.value;
    if (value.length > 2) {
      setSearchValue(value)
    }
  };

  // Styles
  const customerInfoStyle = {
    borderRight: "2px solid gray",
    margin: "10px",
    height: "95%",
    borderRadius: "10px",
    padding: "10px",
  };

  const resultsStyles = {
    height: "90vh",
    overflow: "scroll",
  };

  return (
    <div style={customerInfoStyle} className="z-depth-1">
      <MDBCol md="12">
        <h2>Customer Info</h2>
        <MDBFormInline
          className="md-form"
          style={{ display: "flex", alignContent: "center" }}
          onSubmit={handleSearchChange}
        >
          <MDBIcon icon="search"></MDBIcon>
          <input
            className="form-control form-control-lg ml-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearchChange}
          ></input>
        </MDBFormInline>
        <div style={resultsStyles}>
          {!loading
            ? customers?.map((customer: any) => (
              <CustomerCard key={customer.id} customerData={customer} />
              ))
            : "Loading..."}
        </div>
      </MDBCol>
    </div>
  );
};
