import React from 'react'
import {
    TiSocialFacebook, 
    TiSocialLinkedin, 
    TiSocialTwitter, 
    TiSocialYoutube, 
    TiSocialInstagram, 
    TiArrowSortedDown,
    TiArrowSortedUp,
} from 'react-icons/ti'
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image"

//INTERNAL IMPORT 
import Style from '../styles/contactus.module.css'
import formStyle from '../AccountPage/Form/Form.module.css'
import {Button} from '../components/components_index'
import images from '../img'

const contactus = () => {
    const founderArray = [
        {
            name: "Huy Vu Tran",
            position: "Co-founder and Project Manager",
            images: images.founder1
        },
        {
            name: "Thai Anh Bui",
            position: "Developer",
            images: images.founder5
        },
        {
            name: "Duc Nhan Nguyen",
            position: "Developer",
            images: images.founder2
        },
        {
            name: "Gia Khanh Lai",
            position: "Developer",
            images: images.founder4
        },
        {
            name: "Gia Bao Nguyen",
            position: "Developer",
            images: images.founder3
        },
    ]

    const factsArray = [
        {
            title: "10 million",
            info: "Articles have been public around the world (as of Jan 25, 2024)"
        },
        {
            title: "100,000",
            info: "Registered users account (as of Jan 25, 2024)"
        },
        {
            title: "220+",
            info: "Countries and regions have our presence (as of Jan 25, 2024)"
        },
    ]
  return (
    <div className={Style.contactus}>
        <div className={Style.contactus_aboutus}>
            <div className={Style.contactus_aboutus_box}>
                <div className={Style.contactus_aboutus_box_hero}>
                    <div className={Style.contactus_aboutus_box_hero_left}>
                        <h1>👋 About Us</h1>
                        <p>Welcome to VANKBT, where passion meets performance. We specialize in collecting high-quality football jerseys that blend style with the spirit of the game. Join us in elevating your football experience with VANKBT's commitment to quality and style.
                        </p>
                    </div>
                    <div className={Style.contactus_aboutus_box_hero_right}>
                        <Image src={images.hero} alt="Logo" width={700} height={700}/>
                    </div>
                </div>

                <div className={Style.contactus_aboutus_box_title}>
                    <h2>☔ Founder</h2>
                    <p>Welcome to VANKBT, where passion meets performance. We specialize in collecting high-quality football jerseys that blend style with the spirit of the game. Join us in elevating your football experience with VANKBT's commitment to quality and style.
                    </p>
                </div>

                <div className={Style.contactus_aboutus_box_founder}>
                    <div className={Style.contactus_aboutus_box_founder_box}>
                        {founderArray.map((el, i) => (
                            <div className={Style.contactus_aboutus_box_founder_box_img}>
                                <Image src={el.images} 

                                alt={el.name}
                                width={500}
                                height={500}
                                className={Style.contactus_aboutus_box_founder_box_img_img}
                                />
                                <h3>{el.name}</h3>
                                <p>{el.position}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Style.contactus_aboutus_box_title}>
                    <h2>🚀 Fast Facts</h2>
                    <p>Welcome to VANKBT, where passion meets performance. We specialize in collecting high-quality football jerseys that blend style with the spirit of the game. Join us in elevating your football experience with VANKBT's commitment to quality and style.
                    </p>
                </div>

                <div className={Style.contactus_aboutus_box_facts}>
                    <div className={Style.contactus_aboutus_box_facts_box}>
                        {factsArray.map((el, i)=>(
                            <div className={Style.contactus_aboutus_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className={Style.contactus_box}>
            <h1>✆ Contact Us</h1>
            <div className={Style.contactus_box_box}>
                <div className={Style.contactus_box_box_left}>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>🗺 ADDRESS</h3>
                        <p>80 Duy Tan, Cau Giay, Ha Noi, Vietnam.</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>📧 EMAIL</h3>
                        <p>104177995@student.swin.edu.au</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>☏ PHONE</h3>
                        <p>012-345-6789-JQKA</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>🌎 SOCIALS</h3>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>
                        <a href="#">
                            <TiSocialLinkedin />
                        </a>
                        <a href="#">
                            <TiSocialYoutube />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                        <a href="#">
                            <TiSocialTwitter />
                        </a>
                    </div>
                </div>
                <div className={Style.contactus_box_box_right}>
                    <form>
                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" placeholder="Thai Anh Bui" className={formStyle.Form_box_input_userName}/>
                        </div>

                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="email">Email</label>
                            <div className={formStyle.Form_box_input_box}>
                                <div className={formStyle.Form_box_input_box_icon}>
                                    <HiOutlineMail />
                                </div>
                                <input type="text" placeholder="Email" />
                            </div>
                        </div>

                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="description">Message</label>
                            <textarea
                                name = ""
                                id = ""
                                cols = ""
                                rows = ""
                                placeholder="Something about yourself in few words"
                            ></textarea>
                        </div>
                        <Button 
                            btnName="Send Message" 
                            handleClick={() => {}} 
                            classStyle={Style.button} 
                        />

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contactus