import React from "react";
import Form from "react-bootstrap/Form";

const NarvarReturn = () => {
  return (
    <div>
      <Form.Group>
        <Form.Label>Narvar Return</Form.Label>
        <Form.Text muted> Set up narvar return</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Narvar Return Notes</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </div>
  );
};

export default NarvarReturn;
