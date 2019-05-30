import React, { useState } from "react";
import ReactDOM from "react-dom";
import PopupAModal from "./PopupAModal";

import "./styles.css";

function App() {
  const [popA, setPopA] = useState(false);

  const closePopA = () => {
    setPopA(false);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setPopA(true)}>Popup A</button>
      <PopupAModal
        show={popA}
        makeClose={closePopA}
        makeCloseItself={closePopA}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
