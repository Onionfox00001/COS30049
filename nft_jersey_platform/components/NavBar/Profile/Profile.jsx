import React from 'react'
import Image from "next/image"
import { MdSupportAgent } from 'react-icons/md'
import { TbUser, TbUserEdit, TbShirt } from "react-icons/tb";
import { TbDownload } from 'react-icons/tb'
import Link from 'next/link'

//INTERNAL IMPORT
import Style from './Profile.module.css'
import images from '../../../img'

const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image 
          src={images.user1} 
          alt="user profile" 
          width={50} 
          height={50}
          className={Style.profile_account_img}
        />

        <div className={Style.profile_account_info}>
          <p>Thai Anh Bui</p>
          <small>A23589709325..</small>
        </div>
      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <TbUser/>
            <p>
              <Link href={{pathname: "/account"}}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbShirt/>
            <p>
              <Link href={{pathname: "/account"}}>My Items</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbUserEdit/>
            <p>
              <Link href={{pathname: "/account"}}>Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdSupportAgent />
            <p>
              <Link href={{pathname:"/contactus"}}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{pathname:"/disconnect"}}>Disconnect</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile