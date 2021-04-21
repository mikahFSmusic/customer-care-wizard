import React from "react";
import DamageDefectFormV2 from "./DamageDefectForm";
import Col from "react-bootstrap/Col";
import "./FormContainer.scss";
import { ReportForm } from "./ReportForm";
import { CustomerProvider } from "../customer/CustomerContext";

const FormContainer = () => {
  return (
    <CustomerProvider>
      <div className="Form-container">
        <div className="Form-wrapper">
          {/* <DamageDefectFormV2 /> */}
          <ReportForm />
        </div>
      </div>
    </CustomerProvider>
  );
};

export default FormContainer;
