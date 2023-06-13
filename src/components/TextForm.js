// rfc+enter: for react's function based component
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };



const handleOnChange = (event) => {
  setText(event.target.value);
};
// Declare a new state variable, which we'll call "count" and its update-function is setCount.
const [text, setText] = useState('');

return (
  <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
    </div>
    <div className="container my-3">
      <h2> Your text summary</h2>

      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

  </>
);
}
