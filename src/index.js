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
      <div className="btn-item">
        <button onClick={() => setPopA(true)}>Popup A</button>
        <div className="btn-intro">居中弹窗, 除点击弹窗外, 点击遮罩层也可以关闭弹窗</div>
      </div>
      <div className="btn-item">
        <button onClick={() => setPopB(true)}>Popup B</button>
        <div className="btn-intro">自定义弹窗位置</div>
      </div>
      <div className="btn-item">
        <button onClick={() => setPopC(true)}>Popup C</button>
        <div className="btn-intro">背景色为白色 + 透明</div>
      </div>
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
