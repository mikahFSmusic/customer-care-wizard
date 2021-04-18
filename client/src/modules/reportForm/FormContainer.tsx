import React from "react";
import DamageDefectFormV2 from "./DamageDefectForm";
import Col from "react-bootstrap/Col";
import "./FormContainer.scss";
import { ReportForm } from "./ReportForm";

const FormContainer = () => {
  return (
    <div className="Form-container">
      <div className="Form-wrapper">
        {/* <DamageDefectFormV2 /> */}
        <ReportForm />
      </div>
    </div>
  );
};

export default FormContainer;
