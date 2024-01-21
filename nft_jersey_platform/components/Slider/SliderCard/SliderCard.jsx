import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Style from "./SliderCard.module.css";
import images from "../../../img";
// import LikeProfile from "../../LikeProfile/LikeProfile";

const SliderCard = () => {
    return (
        <motion.div className={Style.sliderCard}>
            <div className={Style.sliderCard_box}>
                <motion.div className={Style.sliderCard_box_img}>
                    <Image 
                    src={images.creatorbackground1} 
                    alt="slider profile" 
                    width={500} 
                    height={300} 
                    className={Style.sliderCard_box_img_img} 
                    objectFit="cover"/>
                </motion.div>
                <div className={Style.sliderCard_box_title}>
                <p>NFT Video #1245</p>
                    <p className={Style.sliderCard_box_title_like}>
                        {/* <LikeProfile/> */}
                        {/* <small>1 of 100</small> */}
                    </p>
                </div>

                <div className={Style.sliderCard_box_price}>
                    <div className={Style.sliderCard_box_price_box}>
                        <small>Current Bid</small>
                        <p>$1.000</p>
                    </div>

                    <div className={Style.sliderCard_box_price_time}>
                        <small>Reaming time</small>
                        <p>3h : 15m</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default SliderCard;