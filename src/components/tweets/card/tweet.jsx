import React, { useState } from "react";
import Card from "react-bootstrap/Card";

//Esto pide un tweet al backend y lo printea en esta card   :)

function Tweet({ body, onRemove }) {
  return (
    <Card style={{ width: "display", padding: "0px 0px 0px 0px" }}>
      <Card.Body>
        <p>{body}</p>
        <Card.Link onClick href="#">
          recrow
        </Card.Link>
        <Card.Link href="#">❤</Card.Link>
        <Card.Link href="#">respond</Card.Link>
        <Card.Link href="#">share</Card.Link>
        <Card.Link onClick={() => onRemove(id)} href="#">
          Delete
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Tweet;
