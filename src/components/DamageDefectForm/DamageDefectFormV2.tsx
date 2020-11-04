import React, { ChangeEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LevelOneHead from "./LevelOne";
import LevelTwoHead from "./LevelTwo";
import LevelThreeHead from "./LevelThree";
import OfferDiscount from "./FormComponents/OfferDiscount";
import RefundAmount from "./FormComponents/RefundAmount";
import ItemAmount from "./FormComponents/ItemAmount";
import DamageDescription from "./FormComponents/FileCase/DamageDescription";
import ActionNeeded from "./FormComponents/FileCase/ActionNeeded";
import ReplacementOrder from "./FormComponents/ReplacementOrder";
import NarvarReturn from "./FormComponents/NarvarReturn";
import SubmitConfirmation from "./SubmitConfirmation";

interface FormInputs {
  purchaseReceived: string;
  orderNumber: string;
  vendor: string;
  skuNumber: string;
  damageLevel: string;
}

const DDForm = (props: any) => {
  let level: string = "";
  const [levelHeadElement, setLevelHeadElement] = useState<JSX.Element>();
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
  const { register, handleSubmit, errors } = useForm<FormInputs>();

  const setLevel = (newLevel: string) => {
    level = newLevel;
  };

  // Resets components on level change
  const clearDynamicComponents = () => {
    setOfferDiscountElement(<div></div>);
    setRefundAmountElement(<div></div>);
    setNarvarReturnElement(<div></div>);
    setItemAmountElement(<div></div>);
    setFileCaseElements([<div></div>]);
    setReplacementOrderElement(<div></div>);
    setShowLevelOnePreview(false);
    setShowAllPreviews(false);
  };

  const [imageOneURL, setImageOneURL] = useState<string>();
  const [imageTwoURL, setImageTwoURL] = useState<string>();
  const [imageThreeURL, setImageThreeURL] = useState<string>();
  const [showLevelOnePreview, setShowLevelOnePreview] = useState(false);
  const [showAllPreviews, setShowAllPreviews] = useState(false);
  const handleImageUpload = (event: ChangeEvent<any>) => {
    const el = event.target as HTMLFormElement;
    const name = el.getAttribute("name");
    const url = URL.createObjectURL(el.files[0]);
    if (name === "image1") {
      setImageOneURL(url);
    } else if (name === "image2") {
      setImageTwoURL(url);
    } else if (name === "image3") {
      setImageThreeURL(url);
    }
  };

  // Damage Level Change Handler
  const handleLevelChange = (event: ChangeEvent<any>) => {
    const el = event.target as HTMLFormElement;
    const value = el.value;
    clearDynamicComponents();
    setLevel(value);
    if (value === "Level 1") {
      setLevelHeadElement(<LevelOneHead></LevelOneHead>);
      setImageUploadElements([
        <Form.File
          key="image1"
          name="image1"
          ref={register({ required: true })}
          onChange={handleImageUpload}
        />,
      ]);
      setShowLevelOnePreview(true);
      setOfferDiscountElement(
        <OfferDiscount
          name="levelOneOfferDiscount"
          ref={register({ required: true })}
          onChange={handleOfferDiscount}
        />
      );
    } else if (value === "Level 2") {
      setLevelHeadElement(<LevelTwoHead></LevelTwoHead>);
      setImageUploadElements([
        <Form.File
          key="image1"
          name="image1"
          ref={register({ required: true })}
          onChange={handleImageUpload}
        />,
        <Form.File
          key="image2"
          name="image2"
          ref={register({ required: true })}
          onChange={handleImageUpload}
        />,
        <Form.File
          key="image3"
          name="image3"
          ref={register({ required: true })}
          onChange={handleImageUpload}
        />,
      ]);
      setShowAllPreviews(true);
      setOfferDiscountElement(
        <OfferDiscount
          name="levelTwoOfferDiscount"
          ref={register({ required: true })}
          onChange={handleOfferDiscount}
        />
      );
    } else if (value === "Level 3") {
      setLevelHeadElement(<LevelThreeHead></LevelThreeHead>);
      setImageUploadElements([
        <Form.File
          key="image1"
          name="image1"
          ref={register({ required: true })}
          onChange={handleImageUpload}
        />,
        <Form.File
          key="image2"
          name="image2"
          ref={register({ required: true })}
          onChange={handleImageUpload}
        />,
        <Form.File
          key="image3"
          name="image3"
          ref={register({ required: true })}
          onChange={handleImageUpload}
        />,
      ]);
      setShowAllPreviews(true);
      setItemAmountElement(
        <ItemAmount
          name="levelThreeItemAmount"
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

    // TODO: need a step to check if the item is out of stock
    if (level === "Level 1") {
      if (value === "Discount") {
        // Issue discount, submit form?
      } else if (value === "Refund") {
        console.log("level 1 Refund");
        setRefundAmountElement(
          <RefundAmount
            name="levelOneRefund"
            ref={register({ required: true })}
          />
        );
        //Submit
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
        // Issue discount, submit form?
        console.log("Level 2 Discount");
      } else if (value === "Refund") {
        setRefundAmountElement(
          <RefundAmount
            name="levelTwoRefund"
            ref={register({ required: true })}
          />
        );
      } else if (value === "Replace") {
        setItemAmountElement(
          <ItemAmount
            name="levelTwoItemAmount"
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

  const handleReview = (formData: any) => {
    setData(formData);
    handleShow();
  };

  const onSubmit = (formData: any) => {
    // TODO: API CALL TO SUBMIT DATA TO MONGO DATABASE
    console.log(formData);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Damaged/Defective Form</h2>
        {/* Purchase Received */}
        <Form.Group>
          <Form.Label>Purchase Received</Form.Label>
          <Form.Control
            name="purchaseReceived"
            as="select"
            ref={register({ required: true })}
          >
            <option value="">Received?</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
          {errors.purchaseReceived && "receipt status is required"}
        </Form.Group>

        {/* Order # */}
        <Form.Group>
          <Form.Label>Order #</Form.Label>
          <Form.Control
            name="orderNumber"
            placeholder="Order #"
            ref={register({ required: true })}
          ></Form.Control>
          {errors.orderNumber && "Order # is required"}
        </Form.Group>

        {/* Vendor */}
        <Form.Group>
          <Form.Label>Vendor</Form.Label>
          <Form.Control
            name="vendor"
            as="select"
            defaultValue="Choose Vendor..."
            ref={register({ required: true })}
          >
            <option></option>
            {vendorList.map((vendor) => (
              <option key={vendor}>{vendor}</option>
            ))}
          </Form.Control>
          {errors.vendor && "Vendor required"}
        </Form.Group>

        {/* SKU Number */}
        <Form.Group>
          <Form.Label>SKU #</Form.Label>
          <Form.Control
            name="skuNumber"
            placeholder="SKU #"
            ref={register({ required: true })}
          ></Form.Control>
          {errors.skuNumber && "SKU # is required"}
        </Form.Group>

        {/* Damage Level */}
        <Form.Group>
          <Form.Label>Damage Level</Form.Label>
          <Form.Control
            name="damageLevel"
            as="select"
            defaultValue="Damage Level..."
            ref={register({ required: true })}
            onChange={handleLevelChange}
          >
            <option></option>
            {damageLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </Form.Control>
          {errors.damageLevel && "Please select damage level"}
        </Form.Group>

        {/* Level Paths */}
        {levelHeadElement}
        <Form.Group>{imageUploadElements}</Form.Group>
        <Form.Group>
          {showLevelOnePreview ? (
            <div>
              <img width="100px" height="100px" src={imageOneURL}></img>
            </div>
          ): null}
          {showAllPreviews ? (
            <div>
              <img width="100px" height="100px" src={imageOneURL}></img>
              <img width="100px" height="100px" src={imageTwoURL}></img>
              <img width="100px" height="100px" src={imageThreeURL}></img>
            </div>
          ) : null}
        </Form.Group>
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
      </Form>
    </div>
  );
};

export default DDForm;

const vendorList = ["vendor1", "vendor2", "vendor3", "vendor4", "vendor 5"];
const damageLevels = ["Level 1", "Level 2", "Level 3"];
