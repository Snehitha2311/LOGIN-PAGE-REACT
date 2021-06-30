import React, { Component, Fragment } from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import Demo from './Login';
import Mobile from './Mobile';
import Email from './Email';
import Password from './Password';

class Demo1 extends Component {
    constructor() {
        super();
        this.state = {
            changeMobile: false,
            changeEmail: false
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
        
        this.setState({emailVal: e.target.value});
      }
      passwordValueChange = (e) => {
       
        this.setState({passwordVal: e.target.value});
      }
      onSubmit = () => {
          const{emailVal, passwordVal}=this.state;
          const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passwordVal);
        if(isEmailValid && isPasswordValid) {
            // <Alert variant="success">
            //     Success
            // </Alert>
             alert("success");
        } else {
            // <Alert variant="success">
            //     invalid mail or password
            // </Alert>
            alert("invalid mail or password")
        }
    }
    render() {
        return(
            <Fragment>
                <Card style={{ width: '24rem' }}>
                    <Card.Body>
                        <Card.Title className='demo'> Reset Login Password</Card.Title><br />
                        <Alert variant="warning"><small>For security purposes, no withdrawals are permitted for 24 hours after modification of security methods</small></Alert>
                        <Card.Text>
                            <Form>
                                <div style={{ marginRight: '200px' }}>
                                    <Button variant="light" size="sm" onClick={this.showEmail}>Email</Button>{' '}

                                    <Button variant="light" size="sm" onClick={this.showMobile}>Mobile</Button><hr></hr>
                                </div>
                                {
                                    this.state.changeMobile ?
                                        <Mobile />
                                        :
                                        null
                                        // <Email emailVal={this.state.emailVal}
                                        //        emailValueChange={this.emailValueChange}/>
                                }
                                <Password 
                                   passwordVal={this.state.passwordVal}
                                   passwordChange={this.passwordValueChange}/>
                                {/* <Form.Group controlId="formBasicPassword">
                                        <Form.Label><small>Enter the account details to reset the password</small></Form.Label> 
                                        <Form.Control type="password" placeholder="" size="lg" block/>
                                    </Form.Group> */}
                                    
                                    <Button variant="warning" size="lg"onClick={this.onSubmit} block >
                                        Cancel
                                    </Button>
                                    <br />
                                
                                    
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
export default Demo1;