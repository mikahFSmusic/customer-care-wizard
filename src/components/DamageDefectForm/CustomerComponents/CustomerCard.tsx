import React, { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

type CustomerCardProps = {
  customerData: any
}

export const CustomerCard = (props: CustomerCardProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string>('white')

  const name = props.customerData.item.attributes.displayName
  const emails = props.customerData.item.attributes.emails[0]
  const phones = props.customerData.item.attributes.phones[0]
  let email = ""
  let phone = ""
  if (emails !== undefined) {
    email = emails.email
  }

  if (phones !== undefined) {
    phone = phones.phone
  }

  let cardStyles = {
    backgroundColor: backgroundColor,
    color: "black",
    border: "1px solid gray",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px"
  }

  const handleMouseEnter = () => {
    setBackgroundColor('lightgray')
  }

  const handleMouseLeave = () => {
    setBackgroundColor('white')
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("Clicked")
    console.log(props.customerData)
  }

  return(
    <div style={cardStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      <h6>{name}</h6>
      <Row>
        <Col><p>{email}</p></Col>
        <Col><p>{phone}</p></Col>
      </Row>

    </div>
  )
}