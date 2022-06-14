import React from "react";
import {Container, Row, Col, Card, Button, Form} from "react-bootstrap";

function Input(props){
    return (
        <Container className="input mt-5">
          <Row>
            <Col>
              <Card className="cards-bg">
                <Card.Header ><h1>Bank Form Analyser</h1></Card.Header>
                <Card.Body>
                  <Card.Title>
                    <Form.Group controlId="formFileLg" className="mb-3">
                      <Form.Label>Upload Scanned Form</Form.Label>
                      <Form.Control type="file" name={props.name} size="lg" onChange={props.onChange} />
                    </Form.Group>
                  </Card.Title>
                  <Button variant="primary" onClick={props.onUpload}>Upload</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
}

export default Input;
