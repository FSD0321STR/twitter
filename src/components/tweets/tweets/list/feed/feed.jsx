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
          <header className="feed__header">Tweets</header>
        </Col>
        <Col className="widgets" sm={4}>
          <header className="feed__discover">Discover</header>
          <Card style={{ width: "18rem" }}>
            <Card.Header>What's going on?</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Story 1</ListGroup.Item>
              <ListGroup.Item>Story 2</ListGroup.Item>
              <ListGroup.Item>Story 3</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <TweetsFeed />
        </Col>
        <Col className="widgets" sm={4}></Col>
      </Row>
    </Container>
  );
}

export default Feed;
