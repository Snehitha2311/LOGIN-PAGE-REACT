import React, { Component, Fragment } from 'react';
import { Form, Button, Card, Alert, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Demo1 from './ResetLogin';
import Mobile from './Mobile';
import Email from './Email';
import Password from './Password';
import Dashboard from './Dashboard';
import './App.css';

const { Provider, Consumer } = React.createContext("details");

const Example = () => (
    <Consumer>{
        ({ info, update }) => (
          <Fragment>
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
                <Form.Group controlId="formBasicEmail">
                                {/* <Form.Label>Name</Form.Label> */}
                                <Form.Control type="text"
                                    name="email"
                                    onChange={(e) => update({ 'email': e.target.value })} />
                            </Form.Group>
                {/* <div>
                  <b><i>SNEHITHA</i></b>
                </div> */}
              </Navbar>
           </div> 
           </Fragment>
        )}
    </Consumer>
  )

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            changeMobile: false,
            changeEmail: false,
            emailVal: '',
            passwordVal: '',
            showAlert: '',
            email: ''
        }
    }
    showEmail = () => {
        this.setState({
            changeMobile: !true
        })
    }
    showMobile = () => {
        this.setState({
            changeMobile: true
        })
    }
    emailValueChange = (e) => {
    
        this.setState({ emailVal: e.target.value });
    }
    passwordValueChange = (e) => {

        this.setState({ passwordVal: e.target.value });
    }
    onSubmit = () => {
        const { emailVal, passwordVal, email } = this.state;
        const newEmail = {
            email: email
        }
        
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passwordVal);
        if (isEmailValid && isPasswordValid) {
           // this.setState({ showAlert: true });
           //this.props.history.push('/Dashboard');
           this.setState({ emailVal: newEmail} );
        } else {
            this.setState({ showAlert: false });
        }

    }

    goToForgot = () => {
        this.props.history.push('/ResetLogin');
    }
    
    update = (details) => this.setState(details);

    render() {
        console.log('---', this.props);
        const info = this.state;
        return (
            <Fragment>
           <Provider value={{ info: info, update: this.update }}>
                <Card style={{ width: '24rem' }}>
                    <Card.Body>
                        <Card.Title className='demo'>Log In</Card.Title><br />
                        <Card.Subtitle className="mb-2 text-muted"><small>Please check that you are visiting the correct URL</small></Card.Subtitle>
                        <Card.Text>
                            <br />
                            <small className="lock1">
                                <img
                                    alt="Lock Logo"
                                    src="https://tse3.mm.bing.net/th/id/OIP.lKFi4olpYEI9_6lBcWGIowHaHa?w=175&h=180&c=7&o=5&dpr=1.5&pid=1.7"
                                    width="20"
                                    height="22"
                                    className="d-inline-block align-top"
                                />{' '}
                                <b className="lock2">http://</b>Accounts.com/LOGIN</small><br></br><br></br>
                            <Form>
                                <div style={{ marginRight: '200px' }}>
                                    <Button variant="light" size="sm" onClick={this.showEmail}>Email</Button>{' '}

                                    <Button variant="light" size="sm" onClick={this.showMobile}>Mobile</Button><hr></hr>
                                </div>
                                {
                                    this.state.changeMobile ?
                                        <Mobile />
                                        :
                                        <Email emailVal={this.state.emailVal}
                                            emailValueChange={this.emailValueChange} />
                                }

                                <Password
                                    passwordVal={this.state.passwordVal}
                                    passwordChange={this.passwordValueChange} />
                             
                                    <Button variant="warning" size="lg" onClick={this.onSubmit} block>Log In
                                    
                                    </Button>
                                    {
                                        this.state.showAlert === true && (
                                            <Alert variant="success">Success</Alert>
                                        )}{(this.state.showAlert === false &&
                                            <Alert variant="warning">Failure</Alert>
                                        )}
                                    <br />

                                    <Button variant="link" onClick={this.goToForgot}>Forgot Password</Button>
                                
                            </Form>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Example />
                <br /><br />
                <small><footer className="foot">&copy; 2020 - 2021 Snehitha.com. All rights reserved</footer></small>
     </Provider>
            </Fragment>
        )
    }

}
export default Demo;