import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TweetsFeed from "./tweetsFeed.jsx";
import "./feed.css";
import "./widgets.css";

function Feed() {
  return (
    <Container>
      <Row>
        <Col className="feed" sm={8}>
          <Card style={{ width: "45rem" }}>
            <Card.Header className="feed__header">Tweets</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Story 1</ListGroup.Item>
              <ListGroup.Item>Story 2</ListGroup.Item>
              <ListGroup.Item>Story 3</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col className="widgets" sm={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Header className="feed__discover">
              What's going on?
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Story 1</ListGroup.Item>
              <ListGroup.Item>Story 2</ListGroup.Item>
              <ListGroup.Item>Story 3</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Feed;
