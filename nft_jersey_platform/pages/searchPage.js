import React, { useState } from 'react'

//INTERNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { SearchBar } from '@/SearchPage/searchBarIndex';
import { Filter, NFTCard } from '@/components/components_index';
import images from "../img";

const searchPage = () => {
  const [category, setCategory] = useState(null); // Add a state variable for the category

  const handleCategoryChange = (category) => {
    // Handle category change here
    console.log(category);
    setCategory(category); // Update the category state variable when the category changes
  }

  return (
    <div className={Style.searchPage}>
        <SearchBar />
        <Filter onCategoryChange={handleCategoryChange}/>
        {/* <Slider /> */}
        <NFTCard category={category}/> {/* Pass the category to the NFTCard component */}
    </div>
  )
}

export default searchPage