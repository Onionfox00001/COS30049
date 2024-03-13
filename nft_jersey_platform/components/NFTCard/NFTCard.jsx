import React, { useEffect, useState } from 'react';
import Style from "./NFTCard.module.css";
import Image from 'next/image';
import Link from 'next/link';

const NFTCard = ({ category }) => {
    console.log(`Category prop: ${category}`);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Include the category in the fetch URL as a query parameter
        const url = category ? `http://localhost:5000/products?category=${encodeURIComponent(category)}` : 'http://localhost:5000/products';

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, [category]); // Add category to the dependency array so the effect runs again if the category changes

    return (
        <div className={Style.NFTCard}>
            {products.map((product, i) => (
                <Link href={`/NFT-details?nft_token_id=${product.nft_token_id}`} key={i} className={Style.NFTCard_link}>
                    <div className={Style.NFTCard_box} key={i}>
                        <div className={Style.NFTCard_box_img}>
                            <Image 
                                src={product.image} 
                                alt="NFT images" 
                                width={400} 
                                height={400}
                                className={Style.NFTCard_box_img_img}
                            />
                        </div>

                        <div className={Style.NFTCard_box_update_details}>
                            <div className={Style.NFTCard_box_update_details_price}>
                                <div className={Style.NFTCard_box_update_details_price_box}>
                                    <h4>{product.title}</h4>

                                    <div className={Style.NFTCard_box_update_details_price_box_box}>
                                        <div className={Style.NFTCard_box_update_details_price_box_bid}>
                                            <small>Buy Now</small>
                                            <p>{product.price} ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default NFTCard;