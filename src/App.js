import * as React from "react";
// import { ethers } from "ethers";
import "./App.scss";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
          <img
            src="wave.gif"
            alt="Computer man"
            style={{ width: "72px", height: "72px" }}
          />
          <span>Hey there!</span>
        </div>

        <div className="bio">
          I am Subhankar and learning to build Web3 apps, pretty cool right?
          Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          <span role="img" aria-label="wave">
            👋
          </span>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
