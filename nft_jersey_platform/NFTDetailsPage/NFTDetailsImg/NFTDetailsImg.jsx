import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import Style from "./NFTDetailsImg.module.css"; // Importing CSS module for styles
import images from "../../img"; // Importing images

const NFTDetailsImg = () => {
  // State variables
  const [description, setDescription] = useState(true); // State for description section visibility
  const [details, setDetails] = useState(true); // State for details section visibility
  const [like, setLike] = useState(false); // State for like status

  // Function to toggle description section visibility
  const openDescription = () => {
    setDescription(!description);
  };

  // Function to toggle details section visibility
  const openDetails = () => {
    setDetails(!details);
  };

  // Function to toggle like status
  const likeNFT = () => {
    setLike(!like);
  };

  return (
    <div className={Style.NFTDetailsImg}> {/* Container for NFT details */}
      <div className={Style.NFTDetailsImg_box}> {/* Box for NFT details */}
        <div className={Style.NFTDetailsImg_box_NFT}> {/* NFT section */}
          <div className={Style.NFTDetailsImg_box_NFT_like}> {/* Like section */}
            <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} /> {/* Image icon */}
            <p onClick={() => likeNFT()}> {/* Like button */}
              {like ? ( // Conditional rendering for like button icon
                <AiFillHeart className={Style.NFTDetailsImg_box_NFT_like_icon} />
              ) : (
                <AiOutlineHeart className={Style.NFTDetailsImg_box_NFT_like_icon} />
              )}
              <span>23</span> {/* Like count */}
            </p>
          </div>

          <div className={Style.NFTDetailsImg_box_NFT_img}> {/* NFT image */}
            <Image
              src={images.nft_jersey_messi}
              className={Style.NFTDetailsImg_box_NFT_img_img}
              alt="NFT image"
              width={700}
              height={800}
              objectFit="cover"
            />
          </div>
        </div>

        <div className={Style.NFTDetailsImg_box_description} onClick={() => openDescription()}> {/* Description section */}
          <p>Description</p> {/* Description label */}
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />} {/* Icon for toggle */}
        </div>

        {/* Description content */}
        {description && (
          <div className={Style.NFTDetailsImg_box_description_box}>
            <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p> {/* Placeholder text */}
          </div>
        )}

        <div className={Style.NFTDetailsImg_box_details} onClick={() => openDetails()}> {/* Details section */}
          <p>Details</p> {/* Details label */}
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />} {/* Icon for toggle */}
        </div>

        {/* Details content */}
        {details && (
          <div className={Style.NFTDetailsImg_box_details_box}>
            <small>2000 x 2000 px. IMAGE (685KB)</small> {/* Image details */}
            <p>
              <small>Contract Address</small> {/* Contract address label */}
              <br />
              000000000000000000000000000000000 {/* Contract address value */}
            </p>
            <p>
              <small>Token ID</small> {/* Token ID label */}
              1234567890 {/* Token ID value */}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImg;
