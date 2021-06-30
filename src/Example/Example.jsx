import React, { Component, Fragment } from 'react';
import { Jumbotron, Button, FormControl, InputGroup } from 'react-bootstrap';
import { } from 'react-bootstrap/esm/ThemeProvider';

class Example extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            version: "17.0.1",
            topics: ["Life Cycle Methods", "props", "States"],
            indexValue: 0,
            inputValue: ''

        }
    }

    changeData = () => {
        // console.log('Change data');
        this.setState({
            name: "Angular",
            version: "10.0.1",
            topics: ["Life Cycle", "pipes", "directives", "Topics", 'Data'],
            indexValue: this.state.indexValue + 1
        })

    }

    onChangeInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    showTechie = () => {
        this.setState({
            showTechieDetails: !this.state.showTechieDetails
        })
    }
    render() {
        const { name, version, topics, indexValue, inputValue, showTechieDetails } = this.state;
        return (
            <Fragment>
                <Jumbotron>
                    <h1>Handling Events</h1>
                    <Button variant="success" onClick={this.showTechie}>{showTechieDetails ? 'Hide' : 'Show'}Techie Details</Button>
                    {
                        showTechieDetails ?
                        <Fragment>
                    {name === "React" && <p>Technology Name: {name}</p>}
                    <p>Technology Version: {version} </p>
                    {topics.length > 4 && <p>Todays Topics: {topics.join(', ')}</p>}
                    </Fragment>:<p>No techie details</p>}
                    <p>Index: {indexValue}</p>
                    <p>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl onChange={this.onChangeInputValue} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                    </p>
                    <p>Input Value: {inputValue}</p>
                    <p>
                        <Button variant="primary" onClick={this.changeData}>Learn more</Button>
                    </p>
                </Jumbotron>

            </Fragment>
        )
    }
}
export default Example;