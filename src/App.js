import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Using eval to evaluate the string, but be cautious with it.
    } catch {
      setResult("Error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple React Calculator</h1>
      <div style={{ display: "inline-block", border: "1px solid #ccc", padding: "10px" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={input}
            placeholder="0"
            readOnly
            style={{ width: "200px", textAlign: "right", fontSize: "18px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <button onClick={clearInput}>C</button>
        </div>
        <div>
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
              style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
            >
              {char}
            </button>
          ))}
        </div>
        <div style={{ marginTop: "10px" }}>
          <h3>Result: {result}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
