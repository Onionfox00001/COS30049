import React from 'react'


//INTERNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { SearchBar } from '@/SearchPage/searchBarIndex';
import { Filter, NFTCard } from '@/components/components_index';
import images from "../img";

const searchPage = () => {
    const collectionArray = [
        images.nft_jersey_alonso,
        images.nft_jersey_basten,
        images.nft_jersey_basten,
        images.nft_jersey_basten,
        images.nft_jersey_basten,
        images.nft_jersey_basten,
        images.nft_jersey_basten,
        images.nft_jersey_basten,
        images.nft_jersey_basten,
    ]
  return (
    <div className={Style.searchPage}>
        <SearchBar />
        <Filter />
        {/* <Slider /> */}
        <NFTCard />
    </div>
  )
}

export default searchPage