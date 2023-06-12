// rfc+enter: for react's function based component
import React, {useState} from 'react';

export default function TextForm(props) {
  // Declare a new state variable, which we'll call "count" and its update-function is setCount.
  const [text, setText] = useState('Enter text here');

  return (
    <div>
      <div class="mb-3">
        <label for="myBox" class="form-label">
         <h1>{props.heading}</h1>
        </label>
        <textarea class="form-control" id="myBox" rows="8"></textarea>
      </div>
    </div>
  );
}
