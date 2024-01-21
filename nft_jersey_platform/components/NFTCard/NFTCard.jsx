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

    const [like, setLike] = useState(true);

    const likeNft = ()=>{
        if(!like){
            setLike(true);
        } else {
            setLike(false);
        }
    } 
  return (
    <div className={Style.NFTCard}>
        {featureArray.map((el, i) => (
            <div className={Style.NFTCard_box} key={i+1}>
                <div className={Style.NFTCard_box_img}>
                    <Image src={images.nft_jersey_messi} 
                    alt="NFT images" 
                    width={400} 
                    height={400}
                    className={Style.NFTCard_box_img_img}
                    />
                </div>
                
                <div className={Style.NFTCard_box_update}>
                    <div className={Style.NFTCard_box_update_left}>
                        <div
                            className={Style.NFTCard_box_update_left_like}
                            onClick={() => likeNft()}
                        >
                            {like ? (
                                <AiOutlineHeart />
                            ) : (
                                <AiFillHeart 
                                    className={Style.NFTCard_box_update_left_like_icon}
                                />
                            )}
                            {""} 68
                        </div>
                    </div>

                    <div className={Style.NFTCard_box_update_right}>
                        <div className={Style.NFTCard_box_update_right_info}>
                            <small>Remaining time</small>
                            <p>8h: 22m: 36s</p>
                        </div>
                    </div>
                </div>

                <div className={Style.NFTCard_box_update_details}>
                    <div className={Style.NFTCard_box_update_details_price}>
                        <div className={Style.NFTCard_box_update_details_price_box}>
                            <h4>Jersey #2201</h4>

                            <div className={Style.NFTCard_box_update_details_price_box_box}>
                                <div className={Style.NFTCard_box_update_details_price_box_bid}>
                                    <small>Current Bid</small>
                                    <p>1.000ETH</p>
                                </div>
                                <div className={Style.NFTCard_box_update_details_price_box_stock}>
                                    <small>6 in stock</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Style.NFTCard_box_update_details_category}>
                        <BsImage />
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
};

export default NFTCard;