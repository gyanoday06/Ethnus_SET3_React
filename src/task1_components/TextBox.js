import React, { useState} from 'react';

export default function TextBox(props) {

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  
  const removeWhitespace = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container my-4">
        <div className="form-group" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h1>Enter Text</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="7"
            style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
          ></textarea>
        </div>
        <div className="btn btn-primary" onClick={upperCase}>
          To Uppercase
        </div>
        <div className="btn btn-primary mx-2" onClick={lowerCase}>
          To Lowercase
        </div>
        <div className="btn btn-primary mx-0" onClick={clearText}>
          Clear Text
        </div>
        <div className="btn btn-primary mx-2" onClick={removeWhitespace}>
          Remove White Spaces
        </div>
      </div>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2 className="my-4">Your Text Summary:</h2>
        <p>
          Number of Words: {(text.trim().split(' ').length) - 1} <br />
          Number of Characters: {text.length}
        </p>
      </div>
      <div className="container my-5" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Preview</h2>
        <p style={{opacity: '70%'}}>{text.length>0 ? text: "Enter Something"}</p>
      </div>
    </>
  );
}
