import React, { FormEvent } from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LevelOneForm from "./LevelOne";
import LevelTwoForm from "./LevelTwo";
import LevelThreeForm from "./LevelThree";
import DiscountToKeep from "./FormComponents/DiscountToKeep";
import RefundAmount from "./FormComponents/RefundAmount";
import NarvarReturn from "./FormComponents/NarvarReturn";
import ItemAmount from "./FormComponents/ItemAmount";
import FileCase from "./FormComponents/FileCase";
import ReplacementOrder from "./FormComponents/ReplacementOrder";
import { useForm } from "react-hook-form";

// implement form item type?
type FormItem = {
  name: string;
  level: string;
  itemType: string;
  component: JSX.Element;
};

const DamageDefectForm = () => {
  const [levelPath, setLevelPath] = useState<string>();
  const [levelElement, setLevelElement] = useState<Array<JSX.Element>>();
  const [refundElement, setRefundElement] = useState<JSX.Element>();
  const [itemAmountElement, setItemAmountElement] = useState<JSX.Element>();
  const { handleSubmit, register, errors } = useForm<FormData>();

  useEffect(() => {
    console.log("use effect");
    setLevelPath('lvl1');
    return () => {
      console.log("use effect cleanup");
    };
  }, []);

  const resetForm = () => {
    setRefundElement(<div></div>);
    setItemAmountElement(<div></div>);
  };

  const handleFormPath = (event: FormEvent<HTMLDivElement>) => {
    resetForm();
    // gets element object
    const el = event.target as HTMLDivElement;

    // gets id of element object
    const id = el.getAttribute("id") as string;

    // sets form path state dependent on id of selected radio
    if (id !== undefined) {
      setLevelPath(id);
      if (id === "lvl1") {
        setLevelElement(levelOneElements);
        handleDiscountToKeep(id);
      } else if (id === "lvl2") {
        setLevelElement(levelTwoElements);
        handleDiscountToKeep(id);
      } else if (id === "lvl3") {
        setLevelElement(levelThreeElements);
        handleDiscountToKeep(id);
      }
    }
  };

  const handleDiscountToKeep = (id: string | null) => {
    let refundPathElement = <div></div>;
    if (levelPath === "lvl1") {
      refundPathElement = <NarvarReturn />;
    } else {
      refundPathElement = <ItemAmount onChange={handleItemAmount} />;
    }

    if (id === "discountToKeep") {
      // setFormElements(formElements => [<RefundAmount />])
      setRefundElement(<RefundAmount />);
    } else if (id === "refund") {
      setRefundElement(refundPathElement);
    }
  };

  const handleItemAmount = (id: string | null) => {
    if (id === "over50") {
      setItemAmountElement(<FileCase key="over50" />);
    } else if (id === "under50") {
      setItemAmountElement(<ReplacementOrder key="under50" />);
    }
  };

  let levelOneElements = [
    <LevelOneForm />,
    <DiscountToKeep key="discountToKeepLvl1" onChange={handleDiscountToKeep} />,
  ];
  let levelTwoElements = [
    <LevelTwoForm />,
    <DiscountToKeep key="discountToKeepLvl2" onChange={handleDiscountToKeep} />,
  ];
  let levelThreeElements = [
    <LevelThreeForm />,
    <ItemAmount key="itemAmountLvl3" onChange={handleItemAmount} />,
  ];

  const onSubmit = handleSubmit(({}) => {
    console.log("data submitted");
  });

  const onFormSubmit = (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target),
        formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);

  }

  const damageDefectFormStyle = {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  };
  const formContainerStyle = {
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    overflow: "scroll",
  };
  return (
    <div className="Damage-defect-form" style={damageDefectFormStyle}>
      <br />
      <h2>Damage/Defect Form</h2>
      <br />
      <div className="Form-container" style={formContainerStyle}>
        <Form
          style={{ alignSelf: "center", width: "33%", margin: 0 }}
          onSubmit={onFormSubmit}
        >
          <br />
          <Form.Group>
            <Form.Label>Purchase Received?</Form.Label>
            <Form.Control
              name="purchaseReceived"
              as="select"
              defaultValue="Yes or No"
              ref={register({ required: true })}
            >
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Order #</Form.Label>
            <Form.Control
              name="orderNumber"
              type="text"
              placeholder="Enter Order #"
              ref={register({ required: true })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Vendor</Form.Label>
            <Form.Control
              name="vendorName"
              as="select"
              defaultValue="Choose Vendor..."
              ref={register({ required: true })}
            >
              <option>Choose Vendor...</option>
              <option>Vendor 1</option>
              <option>Vendor 2</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>SKU #</Form.Label>
            <Form.Control
              name="skuNumber"
              type="text"
              placeholder="Enter SKU #"
              ref={register({ required: true })}
            />
          </Form.Group>
          <Form.Group onChange={handleFormPath} ref={register}>
            <Form.Label as="legend">Damage Level</Form.Label>
            <Form.Check
              name="damageLevelRadios"
              type="radio"
              label="Level 1"
              id="lvl1"
            />
            <Form.Check
              name="damageLevelRadios"
              type="radio"
              label="Level 2"
              id="lvl2"
            />
            <Form.Check
              name="damageLevelRadios"
              type="radio"
              label="Level 3"
              id="lvl3"
            />
          </Form.Group>

          {/* Dynamic Form Components */}
          <div>
            {levelElement}
            {refundElement}
            {itemAmountElement}
          </div>
          <br />
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <br />
        </Form>
      </div>
    </div>
  );
};

export default DamageDefectForm;
