import React, { useState } from "react"; // using hook 'useState'

export default function TextForm(props) {
  // syntax:  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  // text = "new text";       // wrong way to change the state
  // setText = "new text";    // right way to change the state

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUppClick = () => {
    let new_text = text.toUpperCase();
    setText(new_text);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    let new_text = text.toLowerCase();
    setText(new_text);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClear = () => {
    let new_text = "";
    setText(new_text);
    props.showAlert("Cleared All Text!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleRemSpaces = () => {
    let new_text = text.split(/[ ]+/);
    setText(new_text.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0b3366",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="10"
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <button className="btn btn-warning" onClick={handleUppClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-warning mx-4" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-warning" onClick={handleRemSpaces}>
          Remove Extra spaces
        </button>
        <button className="btn btn-warning mx-4" onClick={handleCopy}>
          Copy All
        </button>
        <button className="btn btn-danger" onClick={handleClear}>
          Clear All
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes required to read.</p>
        <h4>Preview:</h4>
        <p>
          {text.length > 0 ? text : "Enter something above to preview here"}
        </p>
      </div>
    </>
  );
}
