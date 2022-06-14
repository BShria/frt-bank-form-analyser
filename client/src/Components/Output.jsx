import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Output(props) {
    return (
        <Container className="output my-5">
            <Row>
                <Col>
                    <Card className="cards-bg">
                        <Card.Header className="mt-2"><h3>Form Data</h3></Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="custID">
                                            <Form.Label>Customer ID</Form.Label>
                                            <Form.Control ref={props.refs[0]} type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="custName">
                                            <Form.Label>Name of Account Holder</Form.Label>
                                            <Form.Control ref={props.refs[1]} type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="accNo">
                                            <Form.Label>Account Number</Form.Label>
                                            <Form.Control ref={props.refs[2]} type="text" />
                                        </Form.Group>
                                    </Row>


                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="father">
                                            <Form.Label>Father Name</Form.Label>
                                            <Form.Control ref={props.refs[3]} type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="mother">
                                            <Form.Label>Mother Name</Form.Label>
                                            <Form.Control ref={props.refs[4]} type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="spouse">
                                            <Form.Label>Spouse Name</Form.Label>
                                            <Form.Control ref={props.refs[5]} type="text" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">

                                        <Form.Group as={Col} controlId="placeOfBirth">
                                            <Form.Label>Place and City of Birth</Form.Label>
                                            <Form.Control ref={props.refs[6]} type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="dob">
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Form.Control ref={props.refs[7]} type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="profession">
                                            <Form.Label>Profession</Form.Label>
                                            <Form.Control ref={props.refs[8]} type="text" />
                                        </Form.Group>


                                        <Form.Group as={Col} controlId="income">
                                            <Form.Label>Total Annual Income</Form.Label>
                                            <Form.Control ref={props.refs[9]} type="text" />
                                        </Form.Group>

                                    </Row>

                                    <Row className="mb-3">
                                        <Form.Group className="mb-3" xs={9} as={Col} controlId="address">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control  ref={props.refs[10]} type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="pin">
                                            <Form.Label>PIN</Form.Label>
                                            <Form.Control ref={props.refs[11]} type="text" />
                                        </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="mobile">
                                            <Form.Label>Mobile Number</Form.Label>
                                            <Form.Control ref={props.refs[12]} type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="email">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control ref={props.refs[13]} type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="aadhaar">
                                            <Form.Label>Aadhaar No.</Form.Label>
                                            <Form.Control ref={props.refs[14]} type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="pan">
                                            <Form.Label>PAN No.</Form.Label>
                                            <Form.Control ref={props.refs[15]} type="text" />
                                        </Form.Group>
                                    </Row>

                                </Form>
                            </Card.Title>
                            <Button variant="primary" onClick={props.onReset} >Reset</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Output;