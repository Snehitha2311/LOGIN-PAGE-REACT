import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Example from './Example/Example';
import React, { Component, Fragment } from 'react';
import { Button, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import Demo from './Login';
import Demo1 from './ResetLogin';
import Forgot from './Forget';
import Dashboard from './Dashboard';


class App extends Component {

  render() {
    return (
      <Fragment>
        <Router>
          <div className="App">
            <Navbar bg="dark" variant="dark" sticky="top">
              <Navbar.Brand href="#home">SNEHITHA</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/login">Login Page</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/ResetLogin">Forget Password</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Dashboard">Dashboard</Link>
                </Nav.Link>
              </Nav>
              
              <Navbar.Collapse className="justify-content-end">

                <NavDropdown title="English" variant="dark" id="dropdown-custom-components" style={{ color: 'white', fontSize: '13px' }}>
                  <NavDropdown.Item >Telugu</NavDropdown.Item>
                  <NavDropdown.Item >Hindi</NavDropdown.Item>
                  <NavDropdown.Item >Tamil</NavDropdown.Item>
                  <NavDropdown.Item >English(UK)</NavDropdown.Item>
                </NavDropdown>
              </Navbar.Collapse>
              <div>
                <b><i>SNEHITHA</i></b>
              </div>
            </Navbar>
            <br /><br />


            {/* <Demo />  */}
            {/* <Forgot /> */}
            {/* <Demo1 />  */}
            {/* <Example />   */}
            {/* <Dashboard />   */}

            <Switch>
              <Route exact path="/"><Redirect to="/login" /></Route>
              <Route path="/login" component={Demo}></Route>
              <Route path="/ResetLogin" component={Demo1}></Route>
              <Route path="/Dashboard" component={Dashboard}></Route>
              <Route path="**">
                <div>404 not found</div>
              </Route>
            </Switch>
            
          </div>
        </Router>

      </Fragment>
    );
  }
}

export default App;
