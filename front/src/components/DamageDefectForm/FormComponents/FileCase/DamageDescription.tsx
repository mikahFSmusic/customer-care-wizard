import React from "react";
import Form from "react-bootstrap/Form";

type DamageDescriptionProps = {
  name: string
};

type TextProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { options: DamageDescriptionProps } & HTMLTextAreaElement;

const DamageDescription = React.forwardRef<TextProps, DamageDescriptionProps>(
  (props, ref) => (
    <Form.Group>
      <Form.Label>File Case</Form.Label>
      <Form.Text muted>Brief description of damage</Form.Text>
      <Form.Control name={props.name} as="textarea" rows={3} ref={ref} />
    </Form.Group>
  )
);

export default DamageDescription;
