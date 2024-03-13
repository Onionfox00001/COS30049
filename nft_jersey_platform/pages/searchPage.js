import React, { useState } from 'react';

//INTERNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { SearchBar } from '@/SearchPage/searchBarIndex';
import { Filter, NFTCard } from '@/components/components_index';


const SearchPage = () => {
  const [category, setCategory] = useState(null); // Add a state variable for the category
  const [searchTerm, setSearchTerm] = useState(''); // Add a state variable for the search term

  const handleCategoryChange = (category) => {
    // Handle category change here
    console.log(category);
    setCategory(category); // Update the category state variable when the category changes
  }

  const handleSearch = (term) => {
    // Handle search here
    console.log(term);
    setSearchTerm(term); // Update the search term state variable when a search is performed
  }

  return (
    <div className={Style.searchPage}>
        <SearchBar onSearch={handleSearch} />
        <Filter onCategoryChange={handleCategoryChange}/>
        {/* <Slider /> */}
        <NFTCard category={category} searchTerm={searchTerm}/> {/* Pass the category and search term to the NFTCard component */}
    </div>
  )
}

export default SearchPage;