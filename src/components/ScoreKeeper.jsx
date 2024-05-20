// src/components/ScoreKeeper.jsx

import { useState } from "react";

function ScoreKeeper() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <p>Score: {score}</p>
      <button disabled={score >= 30}
        onClick={() => {
          setScore((prevCount)=> prevCount + 5)
        }}
      >
        Increase by 5
      </button>
      <button disabled={score <= 0}
        onClick={() => {
          /* complete the missing code */
          setScore((prevCount)=> prevCount - 5)
        }}
      >
        Decrease by 5
      </button>
    </div>
  );
}

export default ScoreKeeper;
