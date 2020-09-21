import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Dashboard} from './components/Dashboard'



function App() {
  return (
    <Router>
    <div className="App">
         <h1> My How To App</h1>

         <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          </ul>
{/* Split */}
          {/* <Route path="/login" component={Login} />{" "} */}
        <Switch>
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
          ></PrivateRoute>
          {/* <PrivateRoute path="/add-note" component={AddNote}></PrivateRoute> */}
          <Route path="/login" component={Login} />{" "}

        </Switch>
{/* Split */}
    </div>
    </Router>
  );
}

export default App;
