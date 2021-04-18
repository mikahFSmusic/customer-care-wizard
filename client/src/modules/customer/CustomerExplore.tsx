import React, {
  FormEvent,
  useEffect,
  useState,
  useRef,
  MutableRefObject,
} from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import { CustomerInfo } from "./CustomerInfo";
import { CustomerSearchResults } from "./CustomerSearchResults";
import { fetchCustomers } from "../../kustomer.api";

type CustomerExploreProps = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    customerData: any
  ) => void;
};

// COMPONENT
export const CustomerExplore = (props: CustomerExploreProps) => {
  // State Hooks
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [customers, setCustomers] = useState<Array<Object>>();
  const [showSearchBar, setShowSearchBar] = useState<boolean>(true);
  const [showBackIcon, setShowBackIcon] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(true);
  const [showCustomer, setShowCustomer] = useState<boolean>(false);
  const [customerData, setCustomerData] = useState();

  // Effect Hooks
  const prevSearchValueRef: MutableRefObject<string> = useRef("");

  useEffect(() => {
    setShowCustomer(false);
    setShowResults(true);
    const prevSearchValue: string = prevSearchValueRef.current;
    prevSearchValueRef.current = searchValue;
    const doFetch = async (searchValue: string, prevSearchValue: string) => {
      if (
        searchValue.length > prevSearchValue.length &&
        searchValue !== prevSearchValue
      ) {
        setLoading(true);
        const data = await fetchCustomers(searchValue);
        if (data) {
          setCustomers(data.data);
        }
        setLoading(false);
      }
    };
    doFetch(searchValue, prevSearchValue);

    console.log("Search Value: " + searchValue);
    console.log("Previous Search Value: " + prevSearchValue);
  }, [searchValue]);

  const handleSearchChange = (event: FormEvent<HTMLInputElement>) => {
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
    console.log(customerData);
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
        <div className="form-inline">
          <MDBInput
            className="form-control form-control-lg"
            type="text"
            label="Find a customer"
            aria-label="Customer Search"
            onChange={handleSearchChange}
            icon="search"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          />
        </div>
      );
    } else if (showBackIcon && !showSearchBar) {
      return (
        <div>
          <MDBBtn flat color="primary" onClick={handleBackClick}>
            Change Customer
          </MDBBtn>
        </div>
      );
    }
  };

  const renderSwitch = () => {
    if (loading) {
      return (
        <div
          style={{ alignSelf: "center" }}
          className="spinner-border"
          role="status"
        ></div>
      );
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
    overflow: "scroll",
    maxHeight: "500px",
  };

  const resultsStyles = {
    height: "100%",
    overflow: "hidden",
  };

  return (
    <div style={customerInfoStyle}>
      {headerSwitch()}
      <div>
        <div style={resultsStyles}>{renderSwitch()}</div>
      </div>
    </div>
  );
};
