// Import necessary dependencies
import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image"; // Importing the Image component from Next.js
import { useDropzone } from "react-dropzone"; // Importing the useDropzone hook

// Internal imports
import Style from "../styles/account.module.css"; // Importing CSS styles
import images from "../img"; // Importing image assets
import Form from "../AccountPage/Form/Form"; // Importing the Form component

// Define the account component
const account = () => {

    // Render the account component
    return (
        <div className={Style.account}>
            <div className={Style.account_info}>
                {/* Title and description */}
                <h1>Profile settings</h1>
                <p>You can set preferred display name, create your profile, and customize other personal settings</p>
            </div>

            <div className={Style.account_box}>
                {/* Image upload section */}
                <div className={Style.account_box_img} >
                    {/* Display the current profile image or placeholder */}
                    <Image
                        src={images.user1}
                        alt="account upload"
                        width={150}
                        height={150}
                        className={Style.account_box_img_img}
                    />
                </div>

                {/* Form section */}
                <div className={Style.account_box_from}>
                    <Form /> {/* Render the Form component */}
                </div>
            </div>
        </div>
    );
};

export default account; // Export the account component
