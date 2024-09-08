import React from "react";
import { useState } from "react";
import './AnswerItem.css'
function AnswerItem({ answer, setShowButton }) {
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

 

  const onHandleStatus = () => {
    if (answer.status) {
      setButtonStyle({
        backgroundColor: "green",
        color: "white",
      });
      setShowButton(true);
    } else {
      setButtonStyle({
        backgroundColor: "red",
        color: "white",
      });
    }
  };

  return (
    <div>
      <button onClick={onHandleStatus} style={buttonStyle} className="answer">
        {answer.title}
      </button>
    </div>
  );
}

export default AnswerItem;
