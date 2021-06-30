import React, { Component, Fragment } from 'react';
import {Form} from 'react-bootstrap';

class Password extends Component {
    render() {
        return(
            <Fragment>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label  style={{ marginRight: '270px', fontSize: '15px' }}>Password</Form.Label>
                  <Form.Control type="password" placeholder="" size="lg"
                  value={this.props.passwordVal} 
                  onChange={this.props.passwordChange}
                  block/>
                </Form.Group>
            </Fragment>
        )
    }
}
export default Password;