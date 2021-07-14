import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import "./inputTweet.css";
import api from "../../../utils/api";
//import useAuth from  HACER IMPORT

//Esto envia la info de un tweet al backend para despues printearla en una card

function InputTweet({ onSubmit, children }) {
  //const { sendingTweet } = useAuth();
  const [tweetMessage, setTweetMessage] = useState("");

  const [error, setError] = useState("");

  const ref = useRef();

  const handleInput = (event) => {
    const newMessage = event.target.value;
    setTweetMessage(newMessage);
    if (error && newMessage) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!tweetMessage) {
      setError("Your crow message cannot be empty");
    } else {
      onSubmit(tweetMessage);
      setTweetMessage("");
      setError("");
    }
    ref.current.focus();
  };

  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__input">
          <input
            ref={ref}
            onChange={handleInput}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Button type="submit" className="tweetBox__tweetButton">
          Crow
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {children}
      </form>
    </div>
  );
}

export default InputTweet;
