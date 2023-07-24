import Web3 from "web3";

import ABI from "./API.json";
import "./wallet.css";
import { useState } from "react";

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(true);
  const [click, setClick] = useState(true);
  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          console.log(accounts);
        });

      const contract = new web3.eth.Contract(
        ABI,
        "0x7A9dBB79402443aB5c4a3c55FfB7b156Cd6A38eD"
      );
      console.log("Connection in Wallet : ", window.ethereum.isConnected());
      setConnected(false);
      saveState({ web3: web3, contract: contract });
    } catch (error) {
      alert("Please install Metamask");
    }
  };
  const clickFunc = () => {
    const element = document.getElementById("wallet-header-nav");
    element.classList.toggle("active");
    setClick(!click);
  };
  return (
    <div className="wallet">
      <div className="wallet-header-list" onClick={clickFunc}>
        {click ? (
          <i aria-hidden="true" class="list large  icon" />
        ) : (
          <i aria-hidden="true" class="close circular inverted icon" />
        )}
      </div>
      <div id="wallet-header-nav" onClick={clickFunc}>
        <ul id="nav-ui">
          <li>
            <a href="#about">
              <i aria-hidden="true" class="user large circular icon" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <i aria-hidden="true" class="save large circular icon" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#">
              {connected ? (
                <>
                  <i class=" linkify circular large icon" onClick={init}></i>
                  <span>Connect Metamask</span>
                </>
              ) : (
                <>
                  <i class="unlinkify circular large disabled icon"></i>
                  <span>Wallet Connected</span>
                </>
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Wallet;
