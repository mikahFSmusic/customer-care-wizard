import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import SideBar from "./SideBar";
import FormContainer from "../../reportForm/FormContainer";
import Dashboard from "../../dashboard/Dashboard";
import Login from "../../auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

function App() {
  const { signedIn } = useAuth();

  const appStyle = {
    padding: 0,
    top: "70px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fdf8e8",
  };

  const appContainerStyle = {
    left: "5rem",
    top: "70px",
    height: "100%",
    bottom: 0,
    right: 0,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {signedIn ? <Dashboard /> : <Login />}
        </Route>
        <Route path="/dashboard">{signedIn ? <Dashboard /> : <Login />}</Route>
        <Route path="/damage-defect-form">
          {signedIn ? <FormContainer /> : <Login />}
        </Route>
        <Route path="/login">{signedIn ? <Dashboard /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
