import React from "react";
import FormIcon from "../assets/images/dynamic_form-white-48dp.svg";
import DashIcon from "../assets/images/dashboard-white-48dp.svg";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { MDBNav, MDBNavItem, MDBNavLink, MDBTooltip } from "mdbreact";

const SideBar = () => {
  const sideBarStyle = {
    top: 0,
    left: 0,
    width: "5rem",
    height: "100vh",
    backgroundColor: "black",
    borderRight: "1px solid white",
    alignContent: "center",
    display: "flex",
  };

  const sideBarIconContainerStyle = {
    height: "33%",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "15px",
  };

  let sideBarIconStyle = {
    width: "2rem",
    height: "2rem",
    alignSelf: "center",
  };

  const navStyle = {
    justifyContent: "center",
  };

  return (
    <div className="Side-bar" style={sideBarStyle}>
      <div
        className="Side-bar-icon-container"
        style={sideBarIconContainerStyle}
      >
        <MDBNav style={navStyle}>
          <MDBNavItem>
            <MDBTooltip placement="right">
              <MDBNavLink active to="/">
                <img
                  src={DashIcon}
                  style={sideBarIconStyle}
                  alt="dashboard"
                ></img>
              </MDBNavLink>
              <div style={{backgroundColor:"white", color:"black"}}>Dashboard</div>
            </MDBTooltip>
          </MDBNavItem>
          <MDBNavItem>
            <MDBTooltip placement="right">
              <MDBNavLink to="/damage-defect-form">
                <img src={FormIcon} style={sideBarIconStyle} alt="forms"></img>
              </MDBNavLink>
              <div style={{backgroundColor:"white", color:"black"}}>Forms</div>
            </MDBTooltip>
          </MDBNavItem>

        </MDBNav>
      </div>
    </div>
  );
};

export default SideBar;
