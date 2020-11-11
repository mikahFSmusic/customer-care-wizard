import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// allows passing of url from parent element
// (could implement a fetch to database for updating for contents)
// TODO: implement reference/registering of field with react-hook-form
interface ImageUploadProps {
  imageURL?: string
}

export const ImageUpload = (props: ImageUploadProps) => {
  const [url, setURL] = useState<string>("https://images.ctfassets.net/0jkr5d02o14t/4Tsq7upvRUHBdW4HwzeNEy/7f140b351543035dae54015d634c0df4/placeholder.png?h=250")

  const placeholder = "https://images.ctfassets.net/0jkr5d02o14t/4Tsq7upvRUHBdW4HwzeNEy/7f140b351543035dae54015d634c0df4/placeholder.png?h=250"

  if (props.imageURL && url !== placeholder) {
    setURL(props.imageURL)
  }

  const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const el = event.target as HTMLInputElement
    const newURL = el.files ? el.files[0] : url
    handleFileUpload(newURL)
  }

  const handleFileUpload = async (file: string | Blob ) => {
    const imageData = new FormData()
    // console.log(file)
    imageData.append("image", file)
    console.log(imageData)

    const url = `http://localhost:4000/upload-damage-image`;

    const config = {
      method: "POST",
      body: imageData
    }
    try {
      const req = await fetch(url, config)
      console.log(req)
      if (req.ok) {
        const res = await req.json()
        console.log(res)
        if (res.success) {
          setURL(res.image.damageImage)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <img width="50px" height="50px" src={`${url}`} alt="damage"></img>
      <Form.File name="image" type="file" accept="image/png image/jpeg" onChange={handleFileChange}></Form.File>
    </div>
  )
}