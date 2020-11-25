import React from "react";
import DamageDefectFormV2 from "./DamageDefectForm/DamageDefectFormV2";
import Col from "react-bootstrap/Col";

const FormContainer = () => {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        overflow: "scroll",
        margin: 30,
        justifyContent: "center",
      }}
    >
      <Col style={{ height: "100%", width: "50vw"}}>
        <DamageDefectFormV2 />
      </Col>
    </div>
  );
};

export default FormContainer;