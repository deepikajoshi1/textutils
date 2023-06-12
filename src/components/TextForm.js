// rfc+enter: for react's function based component
import React, {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
setText(newText)
  }

  const handleOnChange= (event)=>{
    setText(event.target.value);

  }
  // Declare a new state variable, which we'll call "count" and its update-function is setCount.
  const [text, setText] = useState('Enter text here');

  return (
    <div>
      <div class="mb-3">
        <label for="myBox" class="form-label">
         <h1>{props.heading}</h1>
        </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
    </div>
  );
}
