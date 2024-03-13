import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter from Next.js
import { Button } from "../components/components_index.js";
import { DropZone } from "../UploadNFT/uploadNFTIndex.js";
import Style from "./Upload.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import images from "../img";

const UploadNFT = () => {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [successMessage, setSuccessMessage] = useState(false); // State variable for success message
    const router = useRouter(); // Initialize useRouter

    const handleSubmit = () => {
        // Logic for form submission
        // Assuming validation passes and submission is successful
        setSuccessMessage(true); // Display success message
        setTimeout(() => {
            setSuccessMessage(false); // Hide success message after 2 seconds
            router.push("/"); // Redirect to home page after 2 seconds
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
                {/* Item name */}
                <div className={formStyle.Form_box_input}>
                    <label htmlFor="nft">Item Name</label>
                    <div className={Style.Form_box_input_box}>
                        <input
                            type="text"
                            className={formStyle.Form_box_input_userName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                    </div>
                </div>
                {/* Item description */}
                <div className={formStyle.Form_box_input}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="6"
                        placeholder="Something about your item in few words"
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                {/* Price */}
                <div className={formStyle.Form_box_input}>
                    <label htmlFor="nft">Price (ETH)</label>
                    <div className={Style.Form_box_input_box}>
                        <input
                            type="text"
                            className={formStyle.Form_box_input_userName}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                {/* Upload button */}
                <div className={Style.upload_box_btn}>
                    <Button
                        btnName="Upload"
                        handleClick={handleSubmit} 
                        classStyle={Style.upload_box_btn_style}
                    />
                </div>
            </div>

            {/* Success message */}
            {successMessage && (
                <div className={Style.success_message}>
                    <p>Create NFT successfully !!!!!!</p>
                </div>
            )}
        </div>
    );
};

export default UploadNFT;
