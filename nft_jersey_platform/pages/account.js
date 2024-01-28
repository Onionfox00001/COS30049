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
    // State variable to store the uploaded file URL
    const [fileUrl, setFileUrl] = useState(null);

    // Callback function to handle file drop
    const onDrop = useCallback(async (acceptedFile) => {
        setFileUrl(acceptedFile[0]); // Set the file URL to the first accepted file
    }, []);

    // Get the root and input props from the useDropzone hook
    const { getRootProps, getInputProps } = useDropzone({
        onDrop, // Pass the onDrop callback function
        accept: "image/*", // Accept only image files
        maxSize: 5000000, // Set maximum file size to 5MB
    });

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
                <div className={Style.account_box_img} {...getRootProps()}>
                    <input {...getInputProps()} /> {/* Input element to handle file selection */}
                    {/* Display the current profile image or placeholder */}
                    <Image
                        src={images.user1}
                        alt="account upload"
                        width={150}
                        height={150}
                        className={Style.account_box_img_img}
                    />
                    <p className={Style.account_box_img_para}>Change Image</p> {/* Text for changing image */}
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
