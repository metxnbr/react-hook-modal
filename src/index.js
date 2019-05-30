import React, { useState } from "react";
import ReactDOM from "react-dom";
import PopupAModal from "./PopupAModal";
import PopupBModal from "./PopupBModal";
import PopupCModal from "./PopupCModal";

import "./styles.css";

function App() {
  const [popA, setPopA] = useState(false);
  const [popB, setPopB] = useState(false);
  const [popC, setPopC] = useState(false);

  const closePopA = () => {
    setPopA(false);
  };

  const closePopB = () => {
    setPopB(false);
  };

  const closePopC = () => {
    setPopC(false);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setPopA(true)}>Popup A</button>
      <button onClick={() => setPopB(true)}>Popup B</button>
      <button onClick={() => setPopC(true)}>Popup C</button>
      <PopupAModal
        show={popA}
        makeClose={closePopA}
        makeCloseItself={closePopA}
      />
      <PopupBModal show={popB} makeClose={closePopB} />
      <PopupCModal show={popC} makeClose={closePopC} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
