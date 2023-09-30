import { useState } from "react";
import "./App.css";
const { ethers } = require("ethers");

function App() {
  //state to store about the connection of wallet
  const [connected, setConnected] = useState(false);
  //state to store the wallet address that is connected
  const [walletAddress, setWalletAddress] = useState("");

  async function connectWallet() {
    if (!connected) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      setConnected(true);
      setWalletAddress(_walletAddress);
    } else {
      window.ethereum.selectedAddress = null;
      setConnected(false);
      setWalletAddress("");
    }
  }

  return (
    <>
      <div className='app'>
        <div className='main'>
          <button className='btn' onClick={connectWallet}>
            {connected ? "Disconnect Wallet" : "Connect Wallet"}
          </button>
          <h3>Address</h3>
          <h4 className='wal-add'>{walletAddress}</h4>
        </div>
      </div>
    </>
  );
}

export default App;
