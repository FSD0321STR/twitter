import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./inputCard.css";
//import { postTweet } from "../../../utils/api";

//Esto envia la info de un tweet al backend para despues printearla en una card

function InputCard() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = () => {
    //postTweet(tweetMessage);
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
