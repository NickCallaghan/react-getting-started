import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = (increment = 1) => {
    let newCount = count + increment;
    setCount(newCount);
  };

  return (
    <div className="App">
      <Button className="m-3" variant="primary" onClick={() => handleCount(-1)}>
        Down
      </Button>
      <span className="count">{count}</span>
      <Button className="m-3" variant="primary" onClick={() => handleCount(1)}>
        Up
      </Button>
    </div>
  );
}

export default App;
