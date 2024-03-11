import React from 'react'
import Image from "next/image"
import { MdSupportAgent } from 'react-icons/md'
import { TbUser, TbUserEdit, TbShirt, TbDownload } from 'react-icons/tb'
import Link from 'next/link'
// import axios from 'axios'

//INTERNAL IMPORT
import Style from './Profile.module.css'
import images from '../../../img'

const Profile = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/log_out');
      alert(response.data.message);
      // Redirect to the login page after successful logout
      window.location.href = '/signin';
    } catch (error) {
      console.error('Error logging out', error);
      alert('Error logging out');
    }
  };

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
              <Link href={{pathname:"/signin"}} onClick={handleLogout}>Disconnect</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile