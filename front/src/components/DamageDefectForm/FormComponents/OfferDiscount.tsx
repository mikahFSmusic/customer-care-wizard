import React, { ChangeEvent } from "react";
import Form from "react-bootstrap/Form";

type OfferDiscountProps = {
  onChange: (event: ChangeEvent<any>) => void;
  name: string
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: OfferDiscountProps } & HTMLSelectElement;

const OfferDiscount = React.forwardRef<SelectProps, OfferDiscountProps>(
  (props, ref) => (
    <Form.Group>
      <Form.Label>Discount/Refund/Replace</Form.Label>
      <Form.Control
      name={props.name}
      as="select"
      onChange={props.onChange}
      ref={ref}
      defaultValue="Choose Action..."
    >
        <option value="">Choose Action...</option>
        <option>Discount</option>
        <option>Refund</option>
        <option>Replace</option>
      </Form.Control>
    </Form.Group>
  )
);

export default OfferDiscount;
