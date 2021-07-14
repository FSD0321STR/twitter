import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tweet from "../../../card/tweet";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputTweet from "../../../card/inputTweet";
import TweetList from "../../../card/tweetList";
import Menu from "../../../../template/menu/menu";
import Footer from "../../../../template/footer/footer";
import api from "../../../../../../src/utils/api";
import "./tweetCard.css";
import "./feed.css";
import "./widgets.css";

function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(async () => {
    await api.getAllTweets().then(setTweets);
  }, []);

  const createTweet = async (tweet) => {
    try {
      const response = await api.postTweet(tweet);
      setTweets([response, ...tweets]);
    } catch {
      setTweets(tweets);
      createNotification("Could not create a crow");
    }
  };

  const removeTweet = async (id) => {
    const response = await api.deleteTweet(id);
    alert(response.message);
    const tweets = await api.getAllTweets();
    setTweets(tweets);
  };

  return (
    <Container>
      <div className="feed__header">
        <Menu />
      </div>
      <Row>
        <Col sm={8}>
          <div className="feed">
            <h2>Home</h2>
            <InputTweet onSubmit={createTweet} />

            <TweetList>
              {tweets.map((tweet) => (
                <Tweet
                  key={tweet._id}
                  body={tweet.body}
                  onRemove={removeTweet}
                />
              ))}
            </TweetList>
          </div>
        </Col>
        <div className="feed">
          <h2>Explore the world</h2>
        </div>
      </Row>
    </Container>
  );
}

export default Feed;
