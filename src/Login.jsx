import React, { Component, Fragment } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import Demo1 from './ResetLogin';
import Mobile from './Mobile';
import Email from './Email';
import Password from './Password';
import Dashboard from './Dashboard';
import './App.css';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            changeMobile: false,
            changeEmail: false,
            emailVal: '',
            passwordVal: '',
            showAlert: ''
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
        const { emailVal, passwordVal } = this.state;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passwordVal);
        if (isEmailValid && isPasswordValid) {
           // this.setState({ showAlert: true });
           this.props.history.push('/Dashboard');
        } else {
            this.setState({ showAlert: false });
        }

    }

    goToForgot = () => {
        this.props.history.push('/ResetLogin');
    }

    render() {
        console.log('---', this.props);
        return (
            <Fragment>
            
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

                <br /><br />
                <small><footer className="foot">&copy; 2020 - 2021 Snehitha.com. All rights reserved</footer></small>
    
            </Fragment>
        )
    }

}
export default Demo;