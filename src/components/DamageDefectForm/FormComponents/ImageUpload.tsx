import React from "react";
import Form from "react-bootstrap/Form";

// TODO: implement reference/registering of field with react-hook-form
interface ImageUploadProps {
  onChange: (event:any) => void
}

export const ImageUpload = (props: ImageUploadProps) => {
  return (
    <div>
      <Form.File
        name="images"
        type="file"
        accept="image/png image/jpeg"
        onChange={props.onChange}
        multiple
      ></Form.File>
      <br />
      <br />
    </div>
  );
};
