import React from "react";
import Form from "react-bootstrap/Form";

type NarvarReturnProps = {
  name: string;
};

type TextProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { props: NarvarReturnProps } & HTMLTextAreaElement;

const NarvarReturn = React.forwardRef<TextProps, NarvarReturnProps>(
  (props, ref) => (
      <Form.Group>
        <Form.Label>Narvar Return</Form.Label>
        <Form.Text muted> Set up narvar return</Form.Text>
        <Form.Label>Narvar Return Notes</Form.Label>
        <Form.Control name={props.name} as="textarea" rows={3} ref={ref} />
      </Form.Group>
  )
);

export default NarvarReturn;
