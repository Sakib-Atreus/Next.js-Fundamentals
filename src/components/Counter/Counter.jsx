"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="mx-4">
      <h1 className="text-3xl my-4">Counter : {counter}</h1>
      <button className="btn btn-accent" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button className="btn btn-accent ms-3" onClick={() => setCounter(counter - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
