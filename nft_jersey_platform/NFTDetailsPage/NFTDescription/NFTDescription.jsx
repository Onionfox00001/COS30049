import React, {useState} from "react";
import Image from "next/image";
import { MdVerified, MdCloudUpload, MdTimer, MdReportProblem, MdOutlineDeleteSweep } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
    TiSocialFacebook, 
    TiSocialLinkedin, 
    TiSocialTwitter, 
    TiSocialYoutube, 
    TiSocialInstagram, 
} from 'react-icons/ti';
import { BiTransferAlt, BiDollar } from "react-icons/bi";

// Internal imports
import Style from './NFTDescription.module.css'; // Importing CSS module for styles
import images from '../../img'; // Importing images
import { Button } from "../../components/components_index"; // Importing Button component
import { NFTTabs } from "../NFTDetailsIndex"; // Importing NFTTabs component

const NFTDescription = () => {
    // State variables
    const [social, setSocial] = useState(false); // State for social share menu visibility
    const [NFTMenu, setNFTMenu] = useState(false); // State for NFT menu visibility
    const [history, setHistory] = useState(true); // State for bid history tab visibility
    const [provanance, setProvanance] = useState(false); // State for provanance tab visibility
    const [owner, setOwner] = useState(false); // State for owner tab visibility

    // Arrays for tab content
    const historyArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
    ];

    const provananceArray = [
        images.user6,
        images.user7,
        images.user8,
        images.user9,
        images.user10,
    ];

    const ownerArray = [
        images.user1,
        images.user8,
        images.user2,
        images.user6,
        images.user5,
    ];

    // Function to toggle social share menu visibility
    const openSocial = () => {
        if (!social){
            setSocial(true);
            setNFTMenu(false);
        } else {
            setSocial(false);
        }
    };

    // Function to toggle NFT menu visibility
    const openNFTMenu = () => {
        if (!NFTMenu){
            setNFTMenu(true);
            setSocial(false);
        } else {
            setNFTMenu(false);
        }
    };

    // Function to switch between tabs
    const openTabs = (e) => {
        const btnText = e.target.innerText;
        if (btnText === "Bid History"){
            setHistory(true);
            setProvanance(false);
            setOwner(false);
        } else if (btnText === "Provanance"){
            setHistory(false);
            setProvanance(true);
            setOwner(false);
        }
    };

    // Function to toggle owner tab visibility
    const openOwner = () => {
        if (!owner){
            setOwner(true);
            setHistory(false);
            setProvanance(false);
        } else {
            setOwner(false);
            setHistory(true);
        }
    };

    return (
        <div className={Style.NFTDescription}> {/* Container for NFT description */}
            <div className={Style.NFTDescription_box}> {/* Box for NFT description */}
                {/* Part One: Social share and NFT menu */}
                <div className={Style.NFTDescription_box_share}> {/* Share section */}
                    <p>Virtual Worlds</p>
                    <div className={Style.NFTDescription_box_share_box}> {/* Share menu */}
                        <MdCloudUpload 
                            className={Style.NFTDescription_box_share_box_icon} 
                            onClick={() => openSocial()} 
                        />

                        {/* Social share options */}
                        {social && (
                            <div className={Style.NFTDescription_box_share_box_social}>
                                <a href="#"><TiSocialFacebook/> Facebook</a>
                                <a href="#"><TiSocialInstagram/> Instagram</a>
                                <a href="#"><TiSocialLinkedin/> LinkedIn</a>
                                <a href="#"><TiSocialTwitter/> Twitter</a>
                                <a href="#"><TiSocialYoutube/> Youtube</a>
                            </div>
                        )}

                        {/* NFT menu */}
                        <BsThreeDots 
                            className={Style.NFTDescription_box_share_box_icon} 
                            onClick={() => openNFTMenu()}
                        />

                        {/* NFT menu options */}
                        {NFTMenu && (
                            <div className={Style.NFTDescription_box_share_box_social}>
                                <a href="#"><BiDollar/> Change price</a>
                                <a href="#"><BiTransferAlt/> Transfer</a>
                                <a href="#"><MdReportProblem/> Report Abuse</a>
                                <a href="#"><MdOutlineDeleteSweep/> Delete Item</a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Part Two: NFT profile and bidding details */}
                <div className={Style.NFTDescription_box_profile}> {/* Profile section */}
                    <h1>BearX #23453</h1>
                    <div className={Style.NFTDescription_box_profile_box}> {/* Profile boxes */}
                        {/* Creator profile */}
                        <div className={Style.NFTDescription_box_profile_box_left}>
                            <Image 
                                src={images.user1} 
                                alt="profile" 
                                width={40} 
                                height={40}
                                className={Style.NFTDescription_box_profile_box_left_img}
                            />
                            <div className={Style.NFTDescription_box_profile_box_left_info}>
                                <small>Creator</small> <br />
                                <span>Karli Costa <MdVerified/></span>
                            </div>
                        </div>

                        {/* Owner profile */}
                        <div className={Style.NFTDescription_box_profile_box_right}>
                            <Image 
                                src={images.user2} 
                                alt="profile" 
                                width={40} 
                                height={40}
                                className={Style.NFTDescription_box_profile_box_left_img}
                            />
                            <div className={Style.NFTDescription_box_profile_box_right_info}>
                                <small>Creator</small> <br />
                                <span>Karli Costa <MdVerified/></span>
                            </div>
                        </div>
                    </div>

                    {/* Bidding details */}
                    <div className={Style.NFTDescription_box_profile_biding}>
                        

                        {/* Current bid price */}
                        <div className={Style.NFTDescription_box_profile_biding_box_price}>
                            <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
                                <small>Current Price</small>
                                <p>1.000 ETH <span>(= $3, 221.22)</span></p>
                            </div>

                        </div>

                        {/* Bid and offer buttons */}
                        <div className={Style.NFTDescription_box_profile_biding_box_button}>
                            <Button 
                                icon=<FaWallet/> 
                                btnName="Buy Now"
                                handleClick={() => {}}
                                classStyle={Style.button}
                            />
                        </div>

                        {/* Tabs for bid history, provanance, and owner */}
                        <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
                            <button onClick={(e) => openTabs(e)}>Bid History</button>
                            <button onClick={(e) => openTabs(e)}>Provanance</button>
                            <button onClick={(e) => openOwner()}>Owner</button>
                        </div>

                        {/* Content for each tab */}
                        {history && (
                            <div className={Style.NFTDescription_box_profile_biding_box_card}>
                                <NFTTabs dataTab= {historyArray}/>
                            </div>
                        )}
                        {provanance && (
                            <div className={Style.NFTDescription_box_profile_biding_box_card}>
                                <NFTTabs dataTab= {provananceArray}/>
                            </div>
                        )}
                        {owner && (
                            <div className={Style.NFTDescription_box_profile_biding_box_card}>
                                <NFTTabs dataTab= {ownerArray} icon=<MdVerified/> />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTDescription;
