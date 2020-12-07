import React from "react";
import Form from "react-bootstrap/Form";

type RefundAmountProps = {
    name: string
}

type InputProps = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement> & { options: RefundAmountProps } & HTMLInputElement

const RefundAmount = React.forwardRef<InputProps, RefundAmountProps>((props , ref) => (

  <Form.Group>
      {console.log("in the refund amount component")}
    <Form.Label>Refund Amount (Solidus)</Form.Label>
    <Form.Control
      name={props.name}
      type="text"
      placeholder="Refund amount"
      ref={ref}
    ></Form.Control>
  </Form.Group>
));

export default RefundAmount;
