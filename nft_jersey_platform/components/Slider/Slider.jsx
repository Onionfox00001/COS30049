import React, {useState, useEffect, useRef} from "react";
import {motion} from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Image from "next/image";

import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
import images from "../../img";

const Slider = () => {
    const sliderArray = [
        { 
            id: 1,
            imageSrc: images.nft_jersey_basten,
            title: "NFT Jersey #1",
            currentBid: "1.000 ETH",
            remainingTime: "3h: 15m: 10s",
        },
        { 
            id: 2,
            imageSrc: images.nft_jersey_beckham,
            title: "NFT Jersey #2",
            currentBid: "2.500 ETH",
            remainingTime: "1h: 30m: 45s",
        },
        { 
            id: 3,
            imageSrc: images.nft_jersey_cafu,
            title: "NFT Jersey #3",
            currentBid: "1.500 ETH",
            remainingTime: "5h: 20m: 30s",
        },
        { 
            id: 4,
            imageSrc: images.nft_jersey_iniesta,
            title: "NFT Jersey #4",
            currentBid: "1.100 ETH",
            remainingTime: "2h: 10m: 5s",
        },
        { 
            id: 5,
            imageSrc: images.nft_jersey_pirlo,
            title: "NFT Jersey #5",
            currentBid: "3.000 ETH",
            remainingTime: "10h: 58m: 43s",
        },
        { 
            id: 6,
            imageSrc: images.nft_jersey_piero,
            title: "NFT Jersey #6",
            currentBid: "4.500 ETH",
            remainingTime: "21h: 23m: 25s",
        },
    ];
    const [width, setWidth] = useState(0);
    const dragSlider = useRef();

    useEffect(()=> {
        setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    });

    const handleScroll = (direction) => {
        const {current} = dragSlider;
        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

        if (direction == "left"){
            current.scrollLeft -= scrollAmount;
        } else{
            current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className={Style.slider}>
            <div className={Style.slider_box}>
                <h2>Featured NFTs</h2>
                <div className={Style.slider_box_button}>
                    <p>Discover, collect, and sell NFTs</p>
                    <div className={Style.slider_box_button_btn}>
                        <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll("left")}>
                            <TiArrowLeftThick />
                        </div>
                        <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll("right")}>
                            <TiArrowRightThick />
                        </div>
                    </div>
                </div>

                <motion.div className={Style.slider_box_items} ref={dragSlider}>
                    <motion.div ref={dragSlider} className={Style.slider_box_item} drag="x" dragConstraints={{right: 0, left: -width}}>
                        {sliderArray.map(({ id, imageSrc, title, currentBid, remainingTime }, i)=> (
                            <SliderCard 
                            key={id} 
                            imageSrc={imageSrc} 
                            title={title}
                            currentBid={currentBid}
                            remainingTime={remainingTime} 
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
};

export default Slider;