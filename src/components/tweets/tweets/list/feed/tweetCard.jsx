import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div>
      <form>
        <div>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Crow, crow!"
            type="text"
          />
        </div>
        <Button onClick={sendTweet} type="submit">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
