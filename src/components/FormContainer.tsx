import React from "react";
import "./DamageDefectForm/DamageDefectForm";
import DamageDefectForm from "./DamageDefectForm/DamageDefectForm";

const FormContainer = () => {
  return (
    <div style={{ height: "100%", width: "100%", display: "flex" }}>
      <DamageDefectForm />
      <div style={{ height: "100%", width: "70%" }}>Form guide</div>
    </div>
  );
};

export default FormContainer;
