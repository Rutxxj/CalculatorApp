import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };
  //added a comment
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Be cautious with eval; consider alternatives for better security.
    } catch {
      setResult("Error");
    }
  };

  // Advanced Feature: Increment By 2
  const incrementBy2 = () => {
    try {
      const current = eval(input) || 0; // Parse current input or assume 0
      setResult(current + 2); // Increment by 2
    } catch {
      setResult("Error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Advanced React Calculator</h1>
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
          <button onClick={incrementBy2}>Increment By 2</button>
        </div>
        <div>
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
              style={{ margin: "10px", padding: "15px", fontSize: "16px" }}
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
