import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from '../../img';
import { ST } from "next/dist/shared/lib/utils";

const NFTCard = () => {
    const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={Style.NFTCard}>
        {featureArray.map((el, i) => (
            <div className={Style.NFTCard_box} key={i+1}>
                <div className={Style.NFTCard_box_img}>
                    <Image src="https://postimg.cc/0zZ8qNmR"
                    alt="NFT images" 
                    width={400} 
                    height={400}
                    className={Style.NFTCard_box_img_img}
                    />
                </div>

                <div className={Style.NFTCard_box_update_details}>
                    <div className={Style.NFTCard_box_update_details_price}>
                        <div className={Style.NFTCard_box_update_details_price_box}>
                            <h4>Jersey #2201</h4>

                            <div className={Style.NFTCard_box_update_details_price_box_box}>
                                <div className={Style.NFTCard_box_update_details_price_box_bid}>
                                    <small>Buy Now</small>
                                    <p>1.000ETH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
};

export default NFTCard;