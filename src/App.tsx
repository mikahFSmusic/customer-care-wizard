import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import FormContainer from './components/FormContainer';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const appStyle = {
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }

  const appContainerStyle = {
    left: '5rem',
    top: '50px',
    bottom: 0,
    right: 0,
    backgroundColor:'#fdf8e8',
    padding: 5,
    display:'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }

  return (
    <Router>
      <div className="App" style={appStyle}>
        <TopBar />
        <SideBar />
        <div className="App-container" style={appContainerStyle}>
          <Switch>
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/damage-defect-form' component={FormContainer}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
