import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🙂": "smiling",
  "😳": "disbelief",
  "😔": "Sad",
  "😘": "kisses",
  "😡": "Angry",
  "😴": "Sleepy",
  "🤡": "joker",
  "💩": "ughh!",
  "👌": "nice",
  "🦷": "teeth",
  "🥵": "Hot",
  "😭 ": "crying",
  "🧁": "cupcake",
  "🍭": "candy",
  "🌶": "chilli"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    // console.log(meaning);
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>emotions! </h1>
      <input onChange={emojiInputHandler} />

      <h2>{meaning} </h2>

      <h3> emojis we know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
