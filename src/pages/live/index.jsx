
import React, { useState } from "react";

export default function Live() {
  const [counter, setCounter] = useState(0);


  return (
    <>
      <h1>Live</h1>
      <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          CLick meq {counter}
        </button>
    </>
  );
}