import React, { FormEvent } from "react";
import Form from "react-bootstrap/Form";

type ItemAmountProps = {
  onChange: (id: string | null) => void;
};

const ItemAmount = (props: ItemAmountProps) => {
  const setID = (event: FormEvent<HTMLDivElement>) => {
    const el = event.target as HTMLDivElement;
    const id = el.getAttribute("id");
    props.onChange(id);
  };

  return (
    <Form.Group onChange={setID}>
      <Form.Label>Item Amount</Form.Label>
      <Form.Check
        name="itemAmountRadios"
        type="radio"
        label="Over $50"
        id="over50"
      ></Form.Check>
      <Form.Check
        name="itemAmountRadios"
        type="radio"
        label="Under $50"
        id="under50"
      ></Form.Check>
    </Form.Group>
  );
};

export default ItemAmount;
