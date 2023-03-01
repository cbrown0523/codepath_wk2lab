import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
    }
  };
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  };
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Samoasa Selector</h1>
        <h2>Count: {count}</h2>
        <img
          className="samosa"
          src="https://bing.com/th?id=AMMS_db55e5059be950bf6e649d182d2fe8b2"
          onClick={updateCount}
        />
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️ </h3>
          <p>2x per click </p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉 </h3>
          <p>5x per click </p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳 </h3>
          <p>10x per click </p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>
    </div>
  );
}
