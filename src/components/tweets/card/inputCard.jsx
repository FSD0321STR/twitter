import React from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Esto envia la info de un tweet al backend para despues printearla en una card

function InputCard() {
  return (
    <Card>
      <Card.Header as="h5">Type Crowers</Card.Header>
      <Card.Body>
        <InputGroup size="lg">
          <Form.Control
            placeholder="What's Going On??"
            aria-label="What's Going On??"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append></InputGroup.Append>
        </InputGroup>
        <Button variant="dark" size="lg">
          Send
        </Button>
        <Button variant="outline-danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default InputCard;
