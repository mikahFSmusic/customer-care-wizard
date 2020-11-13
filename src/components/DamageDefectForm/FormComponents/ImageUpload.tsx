import React, { useState } from "react";
import Form from "react-bootstrap/Form";

// allows passing of url from parent element
// (could implement a fetch to database for updating for contents)
// TODO: implement reference/registering of field with react-hook-form
interface ImageUploadProps {
  imageURL?: string;
}

export const ImageUpload = (props: ImageUploadProps) => {
  const [imageData, setImageData] = useState([]);
  const [url, setURL] = useState<string>(
    "https://images.ctfassets.net/0jkr5d02o14t/4Tsq7upvRUHBdW4HwzeNEy/7f140b351543035dae54015d634c0df4/placeholder.png?h=250"
  );

  const placeholder =
    "https://images.ctfassets.net/0jkr5d02o14t/4Tsq7upvRUHBdW4HwzeNEy/7f140b351543035dae54015d634c0df4/placeholder.png?h=250";

  if (props.imageURL && url !== placeholder) {
    setURL(props.imageURL);
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const el = event.target as HTMLInputElement;
    console.log(el);
    const newURL = el.files ? el.files : url;
    handleFileUpload(newURL);
  };

  const handleFileUpload = async (files: any) => {
    const imageData = new FormData();
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      imageData.append("images", files[i]);
    }
    // imageData.append("images", files);
    console.log(imageData);

    const url = `http://localhost:4000/upload-damage-image`;

    const config = {
      method: "POST",
      body: imageData,
    };
    try {
      const req = await fetch(url, config);
      console.log(req);
      if (req.ok) {
        const res = await req.json();
        console.log(res);
        if (res.success) {
          setImageData(res.images);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form.File
        name="images"
        type="file"
        accept="image/png image/jpeg"
        onChange={handleFileChange}
        multiple
      ></Form.File>
      <br />
      <br />
      {imageData?.map((image) => (
        <img
          width="80px"
          height="80px"
          src={`${image["location"]}`}
          alt="damage"
        ></img>
      ))}
    </div>
  );
};
