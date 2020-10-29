import React from 'react';
import Form from 'react-bootstrap/Form';

const ItemAmount = () => {
    return (
        <Form.Group>
            <Form.Label>Item Amount</Form.Label>
            <Form.Check name="itemAmountRadios" type="radio" label="Over $50" id="over50"></Form.Check>
            <Form.Check name="itemAmountRadios" type="radio" label="Under $50" id="under50"></Form.Check>
        </Form.Group>
    )
}

export default ItemAmount;