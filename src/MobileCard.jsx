import React, { Component, Fragment } from 'react';
import { Form, Card, FormControl, ListGroup } from 'react-bootstrap';


class Card1 extends Component {
    constructor() {
        super();
        this.state = {
            contactList: [
                {
                    id: "1",
                    name: "China",
                    value: "+86"
                },
                {
                    id: "2",
                    name: "America",
                    value: "+374"
                },
                {
                    id: "3",
                    name: "Brazil",
                    value: "+55"
                },
                {
                    id: "4",
                    name: "United Kingdom",
                    value: "+44"
                },
                {
                    id: "5",
                    name: "France",
                    value: "+33"
                },
                {
                    id: "6",
                    name: "Garbon",
                    value: "+241"
                },
                {
                    id: "7",
                    name: "Egypt",
                    value: "+20"
                },
                {
                    id: "8",
                    name: "Spain",
                    value: "+34"
                },
                {
                    id: "9",
                    name: "Chile",
                    value: "+56"
                },
                {
                    id: "10",
                    name: "SwitzerLand",
                    value: "+41"
                },
                {
                    id: "11",
                    name: "Cook Islands",
                    value: "+682"
                },
                {
                    id: "12",
                    name: "Angola",
                    value: "244"
                },
                {
                    id: "13",
                    name: "Argentina",
                    value: "+54"
                }

            ]
        }
    }
    render() {
        const { contactList } = this.state;
        return (
            <Fragment>
                <Card style={{ width: '20rem', height: '22rem' }}>
                    <Card.Body>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ width: '22rem' }} />
                            {/* <Button variant="outline-success">Search</Button> */}<br />
                            <ListGroup style={{ width: "17rem" }}>
                                {contactList.map((list) =>
                                    <ListGroup.Item >
                                        {list.name}
                                        {list.value}

                                        {/* <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                    <p>{list.name}</p>
                                 </div> */}
                                        {/* <p>{list.name}</p>
                                <p>{list.value}</p> */}

                                    </ListGroup.Item>
                                )}

                            </ListGroup>
                        </Form>


                    </Card.Body>
                </Card>

            </Fragment>
        )
    }
}
export default Card1;