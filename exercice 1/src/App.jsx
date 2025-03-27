import React from "react";
import { useState } from "react";

export default function App() {
  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = (score * 10).toString() + '%';

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  const [score, setScore] = useState(0);
  let retrieve = (e) => {
    setScore(e.target.value);
  } 

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" onChange={retrieve} min="0" max="10"></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
