import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TweetsFeed from "../feed/tweetsFeed.jsx";
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
