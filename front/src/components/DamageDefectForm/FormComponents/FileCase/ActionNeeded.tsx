import React from "react";
import Form from "react-bootstrap/Form";

type ActionNeededProps = {
  name: string;
};

type SelectProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: ActionNeededProps } & HTMLSelectElement;

const ActionNeeded = React.forwardRef<SelectProps, ActionNeededProps>(
  (props, ref) => (
    <Form.Group>
      <Form.Label>Action Needed...</Form.Label>
      <Form.Control name={props.name} as="select" ref={ref}>
        <option value="">Select Action</option>
        <option>Full Refund</option>
        <option>Partial Refund</option>
        <option>Full Replacement</option>
        <option>Parts Needed</option>
      </Form.Control>
    </Form.Group>
  )
);

export default ActionNeeded;
