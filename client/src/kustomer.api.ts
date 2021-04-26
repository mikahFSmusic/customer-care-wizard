// API Call to Kustomer for list of all customers
const kustomerAPIKey = process.env.REACT_APP_KUSTOMER_API_KEY;
const baseURL: string = "https://api.kustomerapp.com";
const proxyURL: string = "https://cors-anywhere.herokuapp.com/";

export const fetchCustomers = async (name: string) => {
  const endpoint: string = "/v1/customers/search";
  let headers = new Headers({
    Authorization: `Bearer ${kustomerAPIKey}`,
    "Content-Type": "application/json",
  });

  let raw = JSON.stringify({
    and: [{ customer_name: { contains: name } }],
    sort: [{ customer_updated_at: "asc" }],
    queryContext: "customer",
    or: [],
  });

  let initObject = {
    method: "POST",
    headers: headers,
    body: raw,
  };

  try {
    console.log("fetching customers");
    const response = await fetch(
      `${proxyURL}${baseURL}${endpoint}`,
      initObject
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCustomerOrders = async (customerID: string) => {
  const endpoint: string = `/v1/customers/${customerID}/klasses/orders`;
  let headers = new Headers({
    Authorization: `Bearer ${kustomerAPIKey}`,
    "Content-Type": "application/json",
  });

  let initObject = {
    method: "GET",
    headers: headers,
  };

  try {
    console.log("getting customer orders");
    const response = await fetch(
      `${proxyURL}${baseURL}${endpoint}`,
      initObject
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchOrdersById = async (orderId: string) => {
  const endpoint: string = `/v1/klasses/orders/${orderId}`;
  let headers = new Headers({
    Authorization: `Bearer ${kustomerAPIKey}`,
    "Content-Type": "application/json",
  });
  let initObject = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(
      `${proxyURL}${baseURL}${endpoint}`,
      initObject
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomerByEmail = async (email: string) => {
  const endpoint: string = `/v1/customers/email=${email}`;
  let headers = new Headers({
    Authorization: `Bearer ${kustomerAPIKey}`,
    "Content-Type": "application/json",
  });
  let initObject = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(
      `${proxyURL}${baseURL}${endpoint}`,
      initObject
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomerOrders = async (endpoint: string) => {
  let headers = new Headers({
    Authorization: `Bearer ${kustomerAPIKey}`,
    "Content-Type": "application/json",
  });
  let initObject = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(
      `${proxyURL}${baseURL}${endpoint}`,
      initObject
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
