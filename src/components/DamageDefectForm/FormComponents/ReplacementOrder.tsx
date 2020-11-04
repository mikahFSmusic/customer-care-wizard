import React, { forwardRef } from "react";
import Form from "react-bootstrap/Form";

type ReplacementOrderProps = {
  name: string
}

type InputProps = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement> & { options: ReplacementOrderProps } & HTMLInputElement

const ReplacementOrder = forwardRef<InputProps, ReplacementOrderProps>((props, ref) => (
  <Form.Group>
      <Form.Label>Replacement Order</Form.Label>
      <Form.Control
        name={props.name}
        type="text"
        placeholder="Replacement Order #"
        ref={ref}
      ></Form.Control>
  </Form.Group>
))

export default ReplacementOrder;
