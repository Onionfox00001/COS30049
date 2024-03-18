import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../components/components_index.js";
import { DropZone } from "../UploadNFT/uploadNFTIndex.js";
import Style from "./Upload.module.css";
import images from "../img";

const UploadNFT = () => {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [successMessage, setSuccessMessage] = useState(false);
    const router = useRouter();

    const handleSubmit = () => {
        setSuccessMessage(true);
        setTimeout(() => {
            setSuccessMessage(false);
            router.push("/");
        }, 2000);
    };

    return (
        <div className={Style.upload}>
            <DropZone
                title="JPG, PNG, Max 100MB"
                heading="Drag & drop file"
                subHeading="or Browse media on your device"
                itemName={itemName}
                description={description}
                price={price}
                image={images.upload}
            />

            <div className={Style.upload_box}>
                <div className={Style.Form_box_input}>
                    <label htmlFor="nft">Item Name:</label>
                    <input
                        type="text"
                        className={Style.Form_box_input_userName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="6"
                        placeholder="Something about your item in few words"
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor="nft">Price(ETH):</label>
                    <input
                        type="text"
                        className={Style.Form_box_input_userName}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className={Style.upload_box_btn}>
                    <Button
                        btnName="Upload"
                        handleClick={handleSubmit} 
                        classStyle={Style.upload_box_btn_style}
                    />
                </div>
            </div>
            {successMessage && (
                <div className={Style.success_message}>
                    <p>Create NFT successfully !!!!!!</p>
                </div>
            )}
        </div>
    );
};

export default UploadNFT;
