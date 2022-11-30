import React, { useState } from "react";

export const Textform = (props) => {
  const upClick = () => {
   
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const loClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const uploClick = () => {
    let newText = Text.charAt(0).toUpperCase() + Text.slice(1);
    setText(newText);
  };
  const clClick = () => {
    let newText = "";
    setText(newText);
  };
  const coClick = () => {
    
    let Text = document.getElementById("Mytext");
     Text.select();
     navigator.clipboard.writeText(Text.value);
    
  };
  const exClick = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  };


  const upClickChange = (event) => {
    setText(event.target.value);
  };
  const [Text, setText] = useState("Please Enter The Text");
  let Time;
  if (Text.split(" ").length * 0.008 * 60 > 60) {
    Time = Text.split(" ").length + "sec";
  } else {
    Time =
      Math.floor(Text.split("").length / 60) +
      "min " +
      (Text.split("").length % 60) +
      "sec";
  }

  return (
    <>
      <React.Fragment>
        <div className="mb-3">
          <h1>{props.Heading}</h1>

          <textarea
            className="form-control"
            value={Text}
            onChange={upClickChange}
            id="Mytext"
            rows="10"
            placeholder="Start typing..."
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={upClick}>
          ABCD
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={loClick}>
          abcd
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={uploClick}>
          Abcd
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={coClick} id="Mytext">
          Copy
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={exClick} id="Mytext">
          Remove Extra Spaces
        </button>

        <div className="container my-2">
          <h3>Summary</h3>
          <h5>No of words = {Text.split(" ").length} </h5>
          <h5>No of characters = {Text.length}</h5>
          <h5>Time to read = {Time} </h5>
        </div>
      </React.Fragment>
    </>
  );
};
