import React from "react";
import Form from "react-bootstrap/Form";

const FileCase = () => {
  return (
    <div>
      <Form.Group>
        <Form.Label>File Case</Form.Label>
        {/* Some process for case filing here */}
        <Form.Text muted>Brief description of damage</Form.Text>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Action Needed...</Form.Label>
        <Form.Control as="select">
          <option>Full Refund</option>
          <option>Partial Refund</option>
          <option>Full Replacement</option>
          <option>Parts Needed</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default FileCase;
