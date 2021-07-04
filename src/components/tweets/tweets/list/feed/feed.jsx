import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputCard from "../../../card/inputCard";
import TweetCard from "../../../card/card";
import "./tweetCard.css";
import "./feed.css";
import "./widgets.css";
import FlipMove from "react-flip-move";

function Feed() {
  /* const [tweet, setTweets] = useState[""];

  const createTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  }; */

  return (
    <Container>
      <Row>
        <Col className="feed" sm={8}>
          <Card style={{ width: "45rem" }}>
            <Card.Header className="feed__header">Tweets</Card.Header>
            <InputCard />
            <Card style={{ width: "45rem" }} className="twitter-tweet p">
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Text>Hey @Agustín, what are you doing?</Card.Text>
                <Card.Link href="#">Recrow</Card.Link>
                <Card.Link href="#">❤</Card.Link>
                <Card.Link href="#">Respond</Card.Link>
                <Card.Link href="#">Share</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Text>
                  Hi my name is JJ. I am watching TV #Eurocopa #Spain
                </Card.Text>
                <Card.Link href="#">Recrow</Card.Link>
                <Card.Link href="#">❤</Card.Link>
                <Card.Link href="#">Respond</Card.Link>
                <Card.Link href="#">Share</Card.Link>
              </Card.Body>
            </Card>
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
  //   return (
  //     <div className="feed">
  //       <div className="feed__header">
  //         <h2>Home</h2>
  //       </div>

  //       <InputCard />

  //       <FlipMove>
  //         {posts.map((post) => (
  //           <Post
  //             key={post.text}
  //             displayName={post.displayName}
  //             username={post.username}
  //             verified={post.verified}
  //             text={post.text}
  //             avatar={post.avatar}
  //             image={post.image}
  //           />
  //         ))}
  //       </FlipMove>
  //     </div>
  //   );
}
export default Feed;
