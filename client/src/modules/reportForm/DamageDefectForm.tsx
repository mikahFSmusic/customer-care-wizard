import React, { ChangeEvent, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import OfferDiscount from "./components/OfferDiscount";
import RefundAmount from "./components/RefundAmount";
import ItemAmount from "./components/ItemAmount";
import DamageDescription from "./components/DamageDescription";
import ActionNeeded from "./components/ActionNeeded";
import ReplacementOrder from "./components/ReplacementOrder";
import NarvarReturn from "./components/NarvarReturn";
import SubmitConfirmation from "./SubmitConfirmation";
import { addDamagedDefect } from "../../api";
import { ImageUpload } from "./components/ImageUpload";
import { CustomerExplore } from "../customer/CustomerExplore";
import { MDBCol } from "mdbreact";
import { fetchCustomerOrders } from "../../kustomer.api";
import SideBar from "../app/components/SideBar";
import { CustomerSearch } from "../customer/CustomerSearch";

const DDForm = (props: any) => {
  // Damage Level
  let level: string = "";
  const setLevel = (newLevel: string) => {
    level = newLevel;
  };

  /* STATE HOOKS */
  const [imageUploadElements, setImageUploadElements] = useState<
    Array<JSX.Element>
  >([]);

  const [offerDiscountElement, setOfferDiscountElement] = useState<
    JSX.Element
  >();
  const [refundAmountElement, setRefundAmountElement] = useState<JSX.Element>();
  const [narvarReturnElement, setNarvarReturnElement] = useState<JSX.Element>();
  const [itemAmountElement, setItemAmountElement] = useState<JSX.Element>();
  const [fileCaseElements, setFileCaseElements] = useState<Array<JSX.Element>>(
    []
  );
  const [replacementOrderElement, setReplacementOrderElement] = useState<
    JSX.Element
  >();

  // Submission Confirmation Modal
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const { register, handleSubmit, errors } = useForm();

  // Resets components on level change
  const clearDynamicComponents = () => {
    setOfferDiscountElement(<div></div>);
    setRefundAmountElement(<div></div>);
    setNarvarReturnElement(<div></div>);
    setItemAmountElement(<div></div>);
    setFileCaseElements([<div></div>]);
    setReplacementOrderElement(<div></div>);
  };

  const [customerData, setCustomerData] = useState<Object>();
  const [customerID, setCustomerID] = useState<string>("");
  const [customerOrders, setCustomerOrders] = useState<Array<Object>>();

  // TODO: set customer data type
  const handleCustomerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    customerData: any
  ) => {
    setCustomerData(customerData);
    setCustomerID(customerData.id);
  };

  useEffect(() => {
    const doFetch = async (customerID: string) => {
      if (customerID) {
        const data = await fetchCustomerOrders(customerID);
        if (data) {
          console.log(data);
          setCustomerOrders(data.data);
        }
      }
    };
    doFetch(customerID);
  }, [customerID]);

  // Image Upload
  const [imageURLs, setImageURLs] = useState<Array<string>>();
  useEffect(() => {
    imageURLs?.forEach((url) => {
      setImageUploadElements((prevElements) => [
        ...prevElements,
        <img width="80px" height="80px" src={url} alt="damage" />,
      ]);
    });
  }, [imageURLs]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const url =
      "https://images.ctfassets.net/0jkr5d02o14t/4Tsq7upvRUHBdW4HwzeNEy/7f140b351543035dae54015d634c0df4/placeholder.png?h=250";
    const el = event.target as HTMLInputElement;
    const newURL = el.files ? el.files : url;
    const images = await handleFileUpload(newURL);
    let urls: Array<string> = [];
    images.forEach((image: any) => {
      urls.push(image["location"]);
    });
    setImageURLs(urls);
  };

  const handleFileUpload = async (files: any) => {
    const imageForm = new FormData();

    // appends image data for submission to S3 bucket
    for (let i = 0; i < files.length; i++) {
      imageForm.append("images", files[i]);
    }

    //TODO: this needs to change for live version (won't work online)
    // variable named server url to replace localhost would work
    const url = `http://localhost:4000/upload-damage-image`;

    const config = {
      method: "POST",
      body: imageForm,
    };
    try {
      const req = await fetch(url, config);
      // console.log(req);
      if (req.ok) {
        const res = await req.json();
        // console.log(res);
        if (res.success) {
          return res.images;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Damage Level Change Handler
  const handleLevelChange = (event: ChangeEvent<any>) => {
    const el = event.target as HTMLFormElement;
    const value = el.value;
    clearDynamicComponents();
    setLevel(value);
    if (value === "Level 1") {
      setImageUploadElements([<ImageUpload onChange={handleFileChange} />]);
      setOfferDiscountElement(
        <OfferDiscount
          name="offerDiscount"
          ref={register({ required: true })}
          onChange={handleOfferDiscount}
        />
      );
    } else if (value === "Level 2") {
      setImageUploadElements([<ImageUpload onChange={handleFileChange} />]);
      setOfferDiscountElement(
        <OfferDiscount
          name="offerDiscount"
          ref={register({ required: true })}
          onChange={handleOfferDiscount}
        />
      );
    } else if (value === "Level 3") {
      setImageUploadElements([<ImageUpload onChange={handleFileChange} />]);
      setItemAmountElement(
        <ItemAmount
          name="itemAmount"
          onChange={handleItemAmount}
          ref={register({ required: true })}
        />
      );
    }
  };

  // Handle Offer Discount
  const handleOfferDiscount = (event: ChangeEvent<any>) => {
    const el = event.target as HTMLFormElement;
    const value = el.value;

    // Reset initial values if switched
    setItemAmountElement(<div />);
    setRefundAmountElement(<div />);
    setNarvarReturnElement(<div />);

    if (level === "Level 1") {
      if (value === "Discount") {
        // Issue discount
      } else if (value === "Refund") {
        setRefundAmountElement(
          <RefundAmount
            name="refundAmount"
            ref={register({ required: true })}
          />
        );
      } else if (value === "Replace") {
        setNarvarReturnElement(
          <NarvarReturn
            name="narvarReturn"
            ref={register({ required: true })}
          />
        );
      }
    } else if (level === "Level 2") {
      if (value === "Discount") {
        // Issue discount
      } else if (value === "Refund") {
        setRefundAmountElement(
          <RefundAmount
            name="refundAmount"
            ref={register({ required: true })}
          />
        );
      } else if (value === "Replace") {
        setItemAmountElement(
          <ItemAmount
            name="itemAmount"
            onChange={handleItemAmount}
            ref={register({ required: true })}
          />
        );
      }
    }
  };

  const handleItemAmount = (event: ChangeEvent<any>) => {
    const el = event.target as HTMLFormElement;
    const value = el.value;

    // reset values if change
    setFileCaseElements([<div></div>]);
    setReplacementOrderElement(<div></div>);

    if (value === "Over $50") {
      setFileCaseElements([
        <DamageDescription
          name="damageDescription"
          key="damageDescription"
          ref={register({ required: true })}
        />,
        <ActionNeeded
          name="actionNeeded"
          key="actionNeeded"
          ref={register({ required: true })}
        />,
      ]);
    } else if (value === "Under $50") {
      setReplacementOrderElement(
        <ReplacementOrder
          name="replacementOrder"
          ref={register({ required: true })}
        />
      );
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleReview = (formData: FormData) => {
    setData(formData);
    handleShow();
  };

  const onSubmit = (formData: any): void => {
    console.log("Pre-append");
    console.log(formData);
    let outputForm = new FormData();
    for (let key in formData) {
      console.log(key);
      outputForm.append(key, formData[key]);
    }
    outputForm.append("customerData", JSON.stringify(customerData));
    outputForm.append("images", JSON.stringify(imageURLs));
    // stores form to Mongo
    let outputData: any = {};
    for (const [key, value] of outputForm) {
      console.log("key: " + key + ", value: " + value);
      outputData[key] = value;
    }
    addDamagedDefect(outputData)
      .then(({ status }) => {
        if (status !== 201) {
          throw new Error("Error saving data");
        }
      })
      .catch((error) => console.log(error));
  };

  const formContainerStyles = {
    margin: "2px",
    height: "95%",
  };

  const formStyles = {
    borderRadius: "10px",
    padding: "20px",
  };

  const orderStyles = {
    border: "1px solid gray",
    padding: "5px",
  };

  return (
    <>
      <div style={formContainerStyles}>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          encType="multipart/form-data"
          action="/submit-damaged-defect"
          style={formStyles}
          className="z-depth-1"
        >
          {/* Customer Information  */}
          <MDBCol style={{ padding: "10px", justifyContent: "center" }}>
            <h5>Damaged/Defective Item Form</h5>
            {/* Customer search and base details */}
            <Form.Group>
              {/* <CustomerExplore onClick={handleCustomerClick} />
               */}
              <CustomerSearch />
            </Form.Group>
            <hr
              style={{
                color: "#e5e5e5",
                backgroundColor: "#e5e5e5",
                height: 1,
              }}
            />

            {/* Customer Orders */}
            {/* TODO: turn orders into a component */}
            <Form.Group>
              <div>
                {customerOrders?.map((order: any) => (
                  <div style={orderStyles}>
                    Order Number: {order.attributes.data.orderNumber}
                    <br />
                    Items:{" "}
                    {order.attributes.data.lineItemDetails.map((item: any) => (
                      <div>
                        Item SKU: {item.sku} <br />
                        Vendor SKU: {item.vendorSku} <br />
                        Quantity Ordered: {item.quantityOrdered} <br />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Form.Group>
            <hr
              style={{
                color: "#e5e5e5",
                backgroundColor: "#e5e5e5",
                height: 1,
              }}
            />

            {/* Order # */}
            <Form.Group>
              <Form.Control
                name="orderNumber"
                placeholder="Order #"
                ref={register({ required: true })}
              ></Form.Control>
              {errors.orderNumber && "Order # is required"}
            </Form.Group>

            {/* Vendor */}
            <Form.Group>
              <Form.Control
                name="vendor"
                as="select"
                placeholder="vendor"
                defaultValue="Select vendor"
                ref={register({ required: true })}
              >
                <option key="damage-level" value="Select vendor" disabled>
                  Select vendor
                </option>
                {vendorList.map((vendor) => (
                  <option key={vendor}>{vendor}</option>
                ))}
              </Form.Control>
              {errors.vendor && "Vendor required"}
            </Form.Group>

            {/* SKU Number */}
            <Form.Group>
              <Form.Control
                name="skuNumber"
                placeholder="SKU #"
                ref={register({ required: true })}
              ></Form.Control>
              {errors.skuNumber && "SKU # is required"}
            </Form.Group>
            <hr
              style={{
                color: "#e5e5e5",
                backgroundColor: "#e5e5e5",
                height: 1,
              }}
            />
            {/* Damage Level */}
            <Form.Group>
              <Form.Control
                name="damageLevel"
                as="select"
                defaultValue="Damage level"
                ref={register({ required: true })}
                onChange={handleLevelChange}
              >
                <option key="damage-level" value="Damage level" disabled>
                  Damage level
                </option>
                {damageLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </Form.Control>
              {errors.damageLevel && "Please select damage level"}
            </Form.Group>

            {/* Level Paths */}
            <Form.Group>{imageUploadElements}</Form.Group>
            <Form.Group>{offerDiscountElement}</Form.Group>
            <Form.Group>{narvarReturnElement}</Form.Group>
            <Form.Group>{refundAmountElement}</Form.Group>
            <Form.Group>{itemAmountElement}</Form.Group>
            <Form.Group>{fileCaseElements}</Form.Group>
            <Form.Group>{replacementOrderElement}</Form.Group>
            <Button onClick={handleSubmit(handleReview)}>Review</Button>
            <SubmitConfirmation
              data={data}
              show={show}
              onHide={handleClose}
              onSubmit={handleSubmit(onSubmit)}
            />
          </MDBCol>
        </Form>
      </div>
      <SideBar />
    </>
  );
};

export default DDForm;

const vendorList = ["vendor1", "vendor2", "vendor3", "vendor4", "vendor 5"];
const damageLevels = ["Level 1", "Level 2", "Level 3"];
