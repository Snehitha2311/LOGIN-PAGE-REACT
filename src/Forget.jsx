import { Component, Fragment } from 'react';
import {Button} from 'react-bootstrap';
import Demo from './Login';
import Demo1 from './ResetLogin';

class Forgot extends Component {
    constructor() {
        super(); 
        this.state = {
            showForgot: false
        }
    }
    changeForgot = () => {
        this.setState({
            showForgot: !this.showForgot
        })
    }


    render() {
        return( 
            <Fragment>
                <Button variant="warning" onClick={this.changeForgot}>{this.state.showForgot ? 'Login':'ForgotPassword'}Form</Button>
                {
                     this.state.showForgot ?
                     <Demo1 />: <Demo />
                }
                <br/>
            </Fragment>
        )
    }
}
export default Forgot;