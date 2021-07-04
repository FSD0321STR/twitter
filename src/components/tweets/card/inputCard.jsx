import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import "./inputCard.css";

//Esto envia la info de un tweet al backend para despues printearla en una card

function InputCard() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = () => {
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Button
          className="tweetBox__tweetButton"
          onClick={sendTweet}
          type="submit"
        >
          Crow
        </Button>
      </form>
    </div>
  );
}

export default InputCard;
