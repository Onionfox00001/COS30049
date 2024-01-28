import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from './NFTTabs.module.css';


const NFTTabs = ({ dataTab }) => {
  return (
    <div className={Style.NFTTabs}> {/* Container for NFT tabs */}
        {dataTab.map((el, i) => ( 
            <div className={Style.NFTTabs_box} key={i + 1}> {/* Box for each tab */}
                <Image 
                    src={el} 
                    alt="profile image" 
                    width={40} 
                    height={40}
                    className={Style.NFTTabs_box_img} 
                /> {/* Styling for profile image */}
                <div className={Style.NFTTabs_box_info}> {/* Container for tab information */}
                    <span> {/* Offer information */}
                        Offer by $770 by 
                        <span> Shoaib Bhai</span> {/* Offerer's name */}
                        {/* {icon} */} 
                    </span>
                    
                    <small>Jun 14 - 4:12 PM</small> {/* Date and time */}
                </div>
            </div>
        ))} {/* Mapping over dataTab array */}
    </div>
  )
};

export default NFTTabs;