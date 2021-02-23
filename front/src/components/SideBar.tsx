import React from "react";
import FormIcon from "../assets/images/dynamic_form-white-48dp.svg";
import DashIcon from "../assets/images/dashboard-white-48dp.svg";
import { MDBNav, MDBNavItem, MDBNavLink, MDBTooltip, MDBIcon, MDBCol } from "mdbreact";

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
    height: "93%",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "15px",
  };

  let sideBarIconStyle = {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    color: "white"
  };

  const navStyle = {
    justifyContent: "center",
  };



  return (
    <div className="Side-bar" style={sideBarStyle}>
      <MDBCol>
        <div
          className="Side-bar-icon-container"
          style={sideBarIconContainerStyle}
        >
          <MDBNav style={navStyle}>
            <MDBNavItem>
              <MDBTooltip placement="right">
                <MDBNavLink active to="/">
                  <MDBIcon fab icon="dashcube" style={sideBarIconStyle} size="2x"/>
                </MDBNavLink>
                <div style={{backgroundColor:"white", color:"black"}}>Dashboard</div>
              </MDBTooltip>
            </MDBNavItem>
            <MDBNavItem>
              <MDBTooltip placement="right">
                <MDBNavLink to="/damage-defect-form">
                  <MDBIcon fab icon="wpforms" style={sideBarIconStyle} size="2x"/>
                </MDBNavLink>
                <div style={{backgroundColor:"white", color:"black"}}>Forms</div>
              </MDBTooltip>
            </MDBNavItem>

          </MDBNav>
        </div>
        <div style={{alignContent: "center", justifyContent: "center", display: "flex"}}>
          <MDBNav>
            <MDBNavItem>
              <MDBNavLink to="/login">
                <MDBIcon icon="user-circle" style={sideBarIconStyle} size="2x"/>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </div>
      </MDBCol>
    </div>
  );
};

export default SideBar;
