import React, { ChangeEvent, useEffect, useState } from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import Fuse from "fuse.js";
import { CustomerCard } from "./CustomerComponents/CustomerCard";

// API Call to Kustomer for list of all customers
const kustomerAPIKey = process.env.REACT_APP_KUSTOMER_API_KEY;
const xhr = new XMLHttpRequest();
xhr.responseType = "json"

let headers = new Headers({
  'authorization': `Bearer ${kustomerAPIKey}`,
  'content-type': 'application/json'
})

let initObject = {
  method: 'GET', headers: headers
}

const baseURL: string = "https://api.kustomerapp.com"
const proxyURL: string = "https://cors-anywhere.herokuapp.com/"
const pageSize: number= 1000

const fetchCustomers = async (page: number) => {
  try {
    const response = await fetch(
      `${proxyURL}${baseURL}/v1/customers?page=${page}&pageSize=${pageSize}`,
      initObject
    )
    const data = await response.json();
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

// const getCustomers = async (page: number) => {
//   let proxyUrl: string = "https://cors-anywhere.herokuapp.com/";
//   let requestAddition: string = "/v1/customers?page=1&pageSize=1000"
//   let requestUrl: string = "https://api.kustomerapp.com";

//   try {
//     xhr.open("GET", proxyUrl + requestUrl + requestAddition, true);
//     xhr.setRequestHeader("authorization", `Bearer ${kustomerAPIKey}`);
//     xhr.setRequestHeader("content-type", "application/json");
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === XMLHttpRequest.DONE) {
//         let status = xhr.status;
//         if (status === 0 || (status >= 200 && status < 400)) {
//           let response = xhr.response;
//           let resJSON = JSON.parse(JSON.stringify(response));
//           allCustomers = resJSON.data;
//           nextUrl = resJSON.links.next
//           numPages = resJSON.meta.totalPages
//           return resJSON.data
//         }
//       }
//     };
//     xhr.send();
//   } catch (error) {
//     throw new Error(error);
//   }
// };

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
  const [loading, setLoading] = useState<boolean>(true);
  const [customers, setCustomers] = useState<any[]>([])
  const [numPages, setNumPages] = useState(1)

  console.log(numPages)

  useEffect(() => {
    setLoading(true)
    fetchCustomers(numPages).then(data => {
      setNumPages(data.meta.totalPages)
    })
    // while (currentPage <= numPages) {

    // }
    setLoading(false)
  }, [])

  useEffect(() => {
    let currentPage = 1
    setLoading(true)
    while (currentPage <= numPages) {
      fetchCustomers(currentPage).then(data => {
        setCustomers(prevCustomers => [...prevCustomers, data.data])
      })
      currentPage++;
    }
    setLoading(false)
  }, [numPages])

  const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const el = event.target as HTMLInputElement;
    const value = el.value;
    setSearchValue(value);
    if (customers !== undefined) {
      console.log("customer data loaded");
      setValidCustomers(searchCustomers(customers, value));
    } else {
      console.log("loading customer data");
    }
  };

  // Styles
  const customerInfoStyle = {
    borderRight: "2px solid gray",
    margin: "10px",
    height: "95%",
    borderRadius: "10px",
    padding: "10px"
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
            value={searchValue}
            className="form-control form-control-lg ml-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearchChange}
          ></input>
        </MDBFormInline>
        <div style={resultsStyles}>
          {customers
            ? validCustomers?.map((customer: any) => (
                <CustomerCard key={customer.item.id} customerData={customer} />
              ))
            : "Loading customer information! Try searching again in a couple of seconds"}
        </div>
      </MDBCol>
    </div>
  );
};
