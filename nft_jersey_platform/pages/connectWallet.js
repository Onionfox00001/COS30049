import React, { useState } from 'react';
import Image from 'next/image';
import Style from '../styles/connectWallet.module.css';
import images from '../img';

const ConnectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const providerArray = [
    {
      provider: images.provider_1,
      name: 'Metamask',
    },
    {
      provider: images.provider_2,
      name: 'walletConnect',
    },
    {
      provider: images.provider_3,
      name: 'walletlink',
    },
    {
      provider: images.provider_4,
      name: 'Formatic',
    },
  ];

  const connectToMetaMask = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request access to MetaMask accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const blockchain_id = accounts[0];
        console.log('Connected to MetaMask:', blockchain_id);
        alert('Wallet connected successfully.'); // Display a pop-up notification

        // Switch to Sepolia network
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xaa36a7' }], // Chain ID for Sepolia
        });

        // Request account balance
        const balanceInWeiHex = await window.ethereum.request({ method: 'eth_getBalance', params: [blockchain_id, 'latest'] });
        const balanceInWei = BigInt(balanceInWeiHex); // Convert hexadecimal to decimal

        // Convert Wei to Ether and round to 4 decimal places
        const balanceInEther = (Number(balanceInWei) / 10**18).toFixed(4);
        console.log('Account balance in Ether:', balanceInEther);
        
        // Handle the account connection here
      } else {
        alert('MetaMask not detected. Please install MetaMask to connect.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Connect your wallet</h1>
        <p className={Style.connectWallet_box_para}>
          Connect with one of our available wallet providers or create a new one
        </p>

        <div className={Style.connectWallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              className={`${Style.connectWallet_box_provider_item} ${
                activeBtn === i + 1 ? Style.active : ''
              }`}
              key={i + 1}
              onClick={() => {
                setActiveBtn(i + 1);
                connectToMetaMask(); // Call the connectToMetaMask function when clicked
              }}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={Style.connectWallet_box_provider_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
