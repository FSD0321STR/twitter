import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./inputCard.css";
import api from "../../../utils/api";
//import useAuth from  HACER IMPORT

//Esto envia la info de un tweet al backend para despues printearla en una card

function InputCard() {
  //const { sendingTweet } = useAuth();
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = () => {
    api.postTweet(tweetMessage);
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
        <Button className="tweetBox__tweetButton" onClick={sendTweet}>
          Crow
        </Button>
      </form>
    </div>
  );
}

export default InputCard;
