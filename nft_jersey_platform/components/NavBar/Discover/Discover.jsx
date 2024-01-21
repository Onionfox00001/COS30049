import React from 'react'
import Link from 'next/link'

//INTERNAL IMPORT
import Style from './Discover.module.css'

const Discover = () => {

  // DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Search",
      link: "search",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
  ]
  return ( 
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
  
}

export default Discover