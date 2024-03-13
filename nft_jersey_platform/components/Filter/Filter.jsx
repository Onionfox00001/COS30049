import React, { useState } from "react";
import {FaFilter, FaAngleDown, FaAngleUp, FaWallet, FaUserAlt, FaCoins, FaLanguage} from 'react-icons/fa';
import {AiFillCloseCircle} from 'react-icons/ai';
import {MdVerified} from 'react-icons/md';
import {TiTick} from 'react-icons/ti';

//INTERNAL IMPORT
import Style from "./Filter.module.css";

const Filter = ({ onCategoryChange }) => {
    const [filter, setFilter] = useState(true);
    const [price1, setPrice1] = useState(true);
    const [price2, setPrice2] = useState(true);
    const [letter, setLetter] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null); // New state variable
    
  
  //FUNCTION SECTION 
  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const openPrice1 =() => {
    if (!price1) {
      setPrice1(true);
    } else {
      setPrice1(false);
    }
  };

  const openPrice2 =() => {
    if (!price2) {
      setPrice2(true);
    } else {
      setPrice2(false);
    }
  };

  const openLetter =() => {
    if (!letter) {
      setLetter(true);
    } else {
      setLetter(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Set the selected category
    const hashtag = `#${category.replace(' ', '').toLowerCase()}`;
    onCategoryChange(hashtag);
  };

  return (
    <div className={Style.filter}>
      <div className={Style.filter_box}>
        <div className={Style.filter_box_left}>
          <button className={selectedCategory === 'Premier League' ? Style.selected : ''} onClick={()=> handleCategoryChange('Premier League')}>Premier League</button>
          <button className={selectedCategory === 'La Liga' ? Style.selected : ''} onClick={()=> handleCategoryChange('La Liga')}>La Liga</button>
          <button className={selectedCategory === 'Ligue 1' ? Style.selected : ''} onClick={()=> handleCategoryChange('Ligue 1')}>Ligue 1</button>
          <button className={selectedCategory === 'Serie A' ? Style.selected : ''} onClick={()=> handleCategoryChange('Serie A')}>Serie A</button>
          <button className={selectedCategory === 'National Teams' ? Style.selected : ''} onClick={()=> handleCategoryChange('National Teams')}>National Teams</button>
        </div> 
        <div className={Style.filter_box_right}>
          <div
            className={Style.filter_box_right_box}
            onClick={() => openFilter()}
          >
            <FaFilter/>
            <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>

      {
        filter && (
          <div className={Style.filter_box_items}>
            <div className={Style.filter_box_items_box}>
              <div className={Style.filter_box_items_box_item}>
                <FaWallet /> <span>ETH</span>
                <AiFillCloseCircle />
              </div>
            </div>

            <div className={Style.filter_box_items_box}>
              <div 
                className={Style.filter_box_items_box_item_trans}
                onClick={() => openPrice1()}
              >
                <FaCoins /> <small>High - Low</small>
                {price1 ? <AiFillCloseCircle /> : <TiTick />}
              </div>
            </div>  

            <div className={Style.filter_box_items_box}>
              <div 
                className={Style.filter_box_items_box_item_trans}
                onClick={() => openPrice2()}
              >
                <FaCoins /> <small>Low - High</small>
                {price2 ? <AiFillCloseCircle /> : <TiTick />}
              </div>
            </div>

            <div className={Style.filter_box_items_box}>
              <div 
                className={Style.filter_box_items_box_item_trans}
                onClick={() => openLetter()}
              >
                <FaLanguage /> <small>A - Z</small>
                {letter ? <AiFillCloseCircle /> : <TiTick />}
              </div>
            </div>

            <div className={Style.filter_box_items_box}>
                <div className={Style.filter_box_items_box_item}>
                    <FaUserAlt/> <span>Verified</span>
                    <MdVerified />
                </div>
            </div>

          </div>
        )
      }
    </div>
  );
};

export default Filter;