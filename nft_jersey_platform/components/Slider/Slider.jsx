import React, {useState, useEffect, useRef} from "react";
import {motion} from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Image from "next/image";

import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
import images from "../../img";

const Slider = () => {
    const [products, setProducts] = useState([]);
    const [sliderArray, setSliderArray] = useState([]); // Define sliderArray as a state variable

    useEffect(() => {
        fetch('http://127.0.0.1:5000/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                const newSliderArray = data.map(product => ({
                    id: product.nft_token_id,
                    imageSrc: product.image,
                    title: product.title,
                    currentBid: product.price,
                }));
                setSliderArray(newSliderArray.slice(0, 6)); // Only take the first 6 items
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, []);

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
                        {sliderArray.map(({ id, imageSrc, title, currentBid })=> (
                            <SliderCard 
                            key={id} 
                            imageSrc={imageSrc} 
                            title={title}
                            currentBid={currentBid}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
};

export default Slider;