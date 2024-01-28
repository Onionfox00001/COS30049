import React, { useState, useEffect } from 'react';
import Image from "next/image";

// Internal imports
import Style from '../styles/connectWallet.module.css'; // Importing CSS module for styles
import images from '../img'; // Importing images

const connectWallet = () => {
    // State variable for active button
    const [activeBtn, setActiveBtn] = useState(1);

    // Array containing wallet provider data
    const providerArray = [
        {
            provider: images.provider_1,
            name: "Metamask",
        },
        {
            provider: images.provider_2,
            name: "walletConnect",
        },
        {
            provider: images.provider_3,
            name: "walletlink",
        },
        {
            provider: images.provider_4,
            name: "Formatic",
        },
    ];

    // JSX to render
    return (
        <div className={Style.connectWallet}> {/* Container for connecting wallet */}
            <div className={Style.connectWallet_box}> {/* Box for connecting wallet */}
                <h1>Connect your wallet</h1> {/* Title */}
                <p className={Style.connectWallet_box_para}> {/* Description */}
                    Connect with one of our available wallet providers or create a new one
                </p>

                <div className={Style.connectWallet_box_provider}> {/* Container for wallet provider options */}
                    {/* Mapping over providerArray to render each provider option */}
                    {providerArray.map((el, i) => (
                        <div 
                            className={`${Style.connectWallet_box_provider_item} 
                            ${activeBtn === i + 1 ? Style.active : ""}`} // Conditional styling for active button
                            key={i + 1}
                            onClick={() => setActiveBtn(i + 1)} // Function to set active button
                        >
                            <Image 
                                src={el.provider} 
                                alt={el.provider} 
                                width={50} 
                                height={50}
                                className={Style.connectWallet_box_provider_item_img} // Styling for provider image
                            />
                            <p>{el.name}</p> {/* Wallet provider name */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default connectWallet;
