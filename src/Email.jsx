import React, { Component, Fragment } from 'react';
import {Form} from 'react-bootstrap';

class Email extends Component {
    render() {
        return (
            <Fragment>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label  style={{ marginRight: '270px', fontSize: '15px' }}>Email</Form.Label>
                    <Form.Control type="email" placeholder="" size="lg"
                    value={this.props.emailVal}
                    onChange={this.props.emailValueChange} block/>
                </Form.Group>

            </Fragment>
        )
    }
}
export default Email;
