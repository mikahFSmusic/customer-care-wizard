import React from "react";
import DamageDefectFormV2 from "./DamageDefectForm/DamageDefectFormV2";

const FormContainer = () => {
  return (
    <div style={{ width: "100%", display: "flex", overflow: "scroll", margin:30, justifyContent:"center"}}>
      <DamageDefectFormV2 />
      {/* <div style={{ height: "100%", width: "70%" }}>Form guide</div> */}
    </div>
  );
};

export default FormContainer;