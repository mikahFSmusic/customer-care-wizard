import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormContainer from "../../reportForm/FormContainer";
import Dashboard from "../../dashboard/Dashboard";
import Login from "../../auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

function App() {
  const { signedIn } = useAuth();

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
