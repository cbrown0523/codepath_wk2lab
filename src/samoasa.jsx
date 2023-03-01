import React from "react";

export const samoasa = () => {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="app">
      <h1>Samoasa Selector</h1>
      <h2>count: {count}</h2>
      <img
        className="samoasa-img"
        src="https://bing.com/th?id=AMMS_db55e5059be950bf6e649d182d2fe8b2"
        onclick={updateCount}
      />
    </div>
  );
};
