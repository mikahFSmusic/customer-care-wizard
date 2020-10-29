import React from 'react';
import Form from 'react-bootstrap/Form';

const RefundAmount = () => {
    return (
        <Form.Group>
            <Form.Label>Refund Amount (Solidus)</Form.Label>
            <Form.Control type="text" placeholder="Refund amount"></Form.Control>
        </Form.Group>
    )
}

export default RefundAmount;