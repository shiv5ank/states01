import Toggle from "./pages/Toggle";
import "./App.css";
import React, { useState } from "react";

function App() {
  const toggle_text = "Toggle";
  const [buttonText, setButtonText] = useState(toggle_text);
  const [style, setStyle] = useState("Light");
  const [color, setColor] = useState("Dark");

  const changeStyle = (Toggle) => {
    setStyle(Toggle);
  };

  function toggleButton() {
    if (buttonText === "Light") {
      setButtonText("Dark");
      setColor("black");
      console.log(buttonText);
      changeStyle("white");
    } else {
      setButtonText("Light");
      setColor("white");
      console.log(buttonText);
      changeStyle("black");
    }
  }

  return (
    <div className="body" style={{ backgroundColor: style, color: color }}>
      <div className="App">
        <header
          className="App-header"
          style={{ backgroundColor: style, color: color }}
        >
          <h2>Overreacted</h2>
          <button onClick={toggleButton}>{buttonText}</button>
        </header>

        <Toggle
          title="The WET Codbase"
          date="Sundy 4th,2020 11 min read"
          details="Come waste your time with me"
        />
        <Toggle
          title="Goodby,Clean Code"
          date="Friday 22nd 2019, 5 min read"
          details="Let  clean code guide  you, then let itt go"
        />
        <Toggle
          title="My Decade In Review"
          date="Saturday 11th 2018, 5 min read"
          details="A personal reflection"
        />
        <Toggle
          title="What Are  The React Team Principles"
          date="Thurstday 4th Mar  2018, 5 min read"
          details="A Life Is A Journey"
        />
      </div>
    </div>
  );
}

export default App;
