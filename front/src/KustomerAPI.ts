

// API Call to Kustomer for list of all customers
const kustomerAPIKey = process.env.REACT_APP_KUSTOMER_API_KEY;
const baseURL: string = "https://api.kustomerapp.com/v1/customers/search";
const proxyURL: string = "https://cors-anywhere.herokuapp.com/";

export const fetchCustomers = async (name: string) => {
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
    const response = await fetch(`${proxyURL}${baseURL}`, initObject);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
