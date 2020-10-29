import React, { FormEvent } from "react";
import Form from "react-bootstrap/Form";

type DiscountToKeepProps = {
  onChange: (id: string | null) => void;
};

const DiscountToKeep = (props: DiscountToKeepProps) => {
  const setID = (event: FormEvent<HTMLDivElement>) => {
    const el = event.target as HTMLDivElement;
    const id = el.getAttribute("id");
    props.onChange(id);
  };

  return (
    <Form.Group onChange={setID}>
      <Form.Label>Discount/Refund</Form.Label>
      <Form.Check
        name="discountRefundRadios"
        type="radio"
        label="Discount To Keep"
        id="discountToKeep"
      ></Form.Check>
      <Form.Check
        name="discountRefundRadios"
        type="radio"
        label="Refund"
        id="refund"
      ></Form.Check>
    </Form.Group>
  );
};

export default DiscountToKeep;
