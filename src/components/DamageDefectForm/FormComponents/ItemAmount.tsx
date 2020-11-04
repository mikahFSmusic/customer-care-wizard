import React, { ChangeEvent } from "react";
import Form from "react-bootstrap/Form";

type ItemAmountProps = {
  onChange: (event: ChangeEvent<any>) => void;
  name: string
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: ItemAmountProps } & HTMLSelectElement;

const ItemAmount = React.forwardRef<SelectProps, ItemAmountProps>(
  (props, ref) => (
    <Form.Group>
      <Form.Label>Item Amount</Form.Label>
      <Form.Control
        name={props.name}
        as="select"
        onChange={props.onChange}
        ref={ref}
      >
        <option value="">Select Amount...</option>
        <option>Over $50</option>
        <option>Under $50</option>
      </Form.Control>
    </Form.Group>
  )
);

export default ItemAmount;
