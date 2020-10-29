import React from "react";
import Form from "react-bootstrap/Form";

const ReplacementOrder = () => {
  return (
    <Form.Group>
      <Form.Label>Replacement Order</Form.Label>
      <Form.Control
        type="text"
        placeholder="Replacement Order #"
      ></Form.Control>
    </Form.Group>
  );
};

export default ReplacementOrder;
