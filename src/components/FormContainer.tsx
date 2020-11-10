import React from "react";
import DamageDefectFormV2 from "./DamageDefectForm/DamageDefectFormV2";
import { CustomerInfo } from "./DamageDefectForm/CustomerInfo";
import Col from "react-bootstrap/Col";

const FormContainer = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        overflow: "scroll",
        margin: 30,
        justifyContent: "center",
      }}
    >
      <Col style={{ height: "100%" }}>
        <CustomerInfo />
      </Col>
      <Col>
        <DamageDefectFormV2 />
      </Col>
    </div>
  );
};

export default FormContainer;
