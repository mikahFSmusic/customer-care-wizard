import React from 'react';
import { ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'

type SubmitConfirmationProps = {
  show: boolean
  onHide: () => void
  onSubmit: () => void
  data: any
}

const getNewKey = (key:string) => {
  switch(key) {
    case "customerData":
      return "Customer: "
    case "orderNumber":
      return "Order Number: "
    case "vendor":
      return "Vendor: "
    case "skuNumber":
      return "SKU #: "
    case "damageLevel":
      return "Damage Level: "
    case "image1":
      return "Image 1: "
    case "image2":
      return "Image 2: "
    case "image3":
      return "Image 3: "
    case "levelOneOfferDiscount" || "levelTwoOfferDiscount" || "levelThreeOfferDiscount":
      return "Discount/Refund/Return: "
    case "levelOneRefund" || "levelTwoRefund" || "levelThreeRefund":
      return "Refund Amount: "
    case "levelTwoItemAmount" || "levelThreeItemAmount":
      return "Item Amount: "
    case "damageDescription":
      return "Damage Description: "
    case "actionNeeded":
      return "Action Needed: "
    case "replacementOrder":
      return "Replacement Order #"
  }
}


const SubmitConfirmation = (props: SubmitConfirmationProps) => {

  const formatData = (data:any) => {
    if (data !== undefined) {
      const dataEntries = Object.entries(data);
      let outputEntries:any = []
      for (let i = 0; i < dataEntries.length; i++) {
        const entry = dataEntries[i];
        const thisKey = entry[0]

        // formats fields for display
        let newKey = getNewKey(thisKey);
        if (typeof entry[1] === "string") {
          outputEntries[i] = [newKey, entry[1]];
        // TODO: Conditional here for customer data to format name
        } else if (typeof entry[1] == "object" && entry[1] !== null) {
          const el = entry[1] as HTMLFormElement;
          const url = URL.createObjectURL(el[0]);
          outputEntries[i] = [newKey, <img alt="damaged preview" width="50px" height="50px" src={url}/>]
          }

      }
      return outputEntries;
    } else {
      return [];
    }
  }

  const handleSubmit = () => {
    props.onHide();
    props.onSubmit();
  }

  return(
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
          <Modal.Title>Review Damage/Defect Submission</Modal.Title>
      </Modal.Header>
      <ModalBody>
        {formatData(props.data).map((field:any) => (
          <Row><h3>{field[0]}</h3><h3>{field[1]}</h3></Row>
        ))}
      </ModalBody>
      <Button type="submit" onClick={handleSubmit}>Submit</Button>
    </Modal>
  );
};

export default SubmitConfirmation;