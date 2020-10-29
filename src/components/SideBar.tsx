import React from "react";
import FormIcon from "../assets/images/dynamic_form-white-48dp.svg";
import DashIcon from "../assets/images/dashboard-white-48dp.svg";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideBarStyle = {
    top: 0,
    left: 0,
    width: "5rem",
    height: "100vh",
    backgroundColor: "#3250a2",
    borderRight: "1px solid white",
    alignContent: "center",
    display: "flex",
  };

  let sideBarIconStyle = {
    width: "3rem",
    height: "3rem",
    alignSelf: "center",
  };

  return (
    <div className="Side-bar" style={sideBarStyle}>
      <Col
        style={{
          justifyContent: "center",
          height: "100%",
          alignContent: "center",
        }}
      >
        <br />
        <div className="Side-bar-icon">
          <Link to="/">
            <img src={DashIcon} style={sideBarIconStyle} alt="dashboard"></img>
          </Link>
        </div>
        <br />
        <div className="Side-bar-icon">
          <Link to="/damage-defect-form">
            <img src={FormIcon} style={sideBarIconStyle} alt="forms"></img>
          </Link>
        </div>
      </Col>
    </div>
  );
};

export default SideBar;
