import React from "react";
import "./FormContainer.scss";
import { ReportForm } from "./ReportForm";
import { CustomerProvider } from "../customer/CustomerContext";
import { ReportFormProvider } from "./ReportFormContext";

const FormContainer = () => {
  return (
    <CustomerProvider>
      <ReportFormProvider>
        <div className="Form-container">
          <div className="Form-wrapper">
            <ReportForm />
          </div>
        </div>
      </ReportFormProvider>
    </CustomerProvider>
  );
};

export default FormContainer;
