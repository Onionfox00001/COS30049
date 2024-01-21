import React from 'react';
import Image from "next/image";

import Style from "../styles/aboutus.module.css";
import images from "../img";
import {
    TiSocialFacebook,
    TiSocialLinkedIn,
    TiSocialTwitter,
    TiSocialYouTube,
    TiSocialIntagram,
} from "react-icons/ti";

import {HiOutlineMail} from "react-icons/hi";
// import formStyle from "../accountPage/Form/Form.module.css";
// import { Button } from "../components/componentsindex";

const aboutus = () => {
    const founderArray = [
    { name: "Niamh O'Shea", position: "Co-founder and Chief Exxecutive", images: images.founder1, },
    { name: "Danien Jame", position: "Co-founder and Chief Exxecutive", images: images.founder2},
    { name: "Orla Dwayer", position: "Co-founder, Chairman", images: images.founder3},
    { name: "Dara Frazier", position: "Co-founder and Chief Strategy Officer", images: images.founder4},
    ];

    const factsArray = [
        {
            title: "10 milions",
            info: "Articles have been public around the world (as of Sept. 30, 2021)"
        },
        {
            title: "100,000",
            info: "Registered users account (as of Sept. 30, 2021)"
        },
        {
            title: "10 milions",
            info: "Countries and regions have our presence (as of Sept. 30, 2021)"
        },
    ]
    return (
    <div className = {Style.aboutus}>
        <div className = {Style.aboutus_box}>
            <div className = {Style.aboutus_box_hero}>
                <div className = {Style.aboutus_box_hero_left}>
                    <h1>About US,</h1>
                    <p>We're impartial and independent, and everyday we create sistictive, world-class programmers and content which inform, educate and entertain millions of people around the world.</p>
                </div>
                <div className="Style.aboutus_box_hero_right">
                    <Image src={images.hero2} />
                </div>
            </div>
            <div className={Style.aboutus_box_title}>
                <h2>Founder</h2>
                <p>We're impartial and independent, and every day we create distinctive, world-class programmers and content.</p>
            </div>
            <div className={Style.aboutus_box_founder}>
                <div className="Style.aboutus_box_founder_box">
                    {founderArray.map((el, i) => (
                        <div className= {Style.aboutus_box_founder_box_img}>
                            <Image src={el.image} alt = {el.name} width ={500} height = {500}
                            className= {Style.aboutus_box_founder_box_img_img}
                            />
                            <h3>{el.name}</h3>
                            <p>{el.position}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={Style.aboutus_box_title}>
                <h2>Fast Facts</h2>
                <p>We're impartial and independent, and every day we create distinctive, world-class programmers and content.</p>
            </div>
            <div className={Style.aboutus_box_facts}>
                <div className={Style.aboutus_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div className={Style.aboutus_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    </div>
    );
};

export default aboutus;

const contactus =() =>{
    return (
        <div className={Style.contactus}>
            <div className={Style.contactus_box}>
                <h1>Contact</h1>
                <div className={Style.contactus_box_box}>
                    <div className={Style.contactus_box_box_left}>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3>ADDRESS</h3>
                            <p>Photo booth tattoped prism, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3>EMAIL</h3>
                            <p>nc.example@example.com</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3>PHONE</h3>
                            <p>000-123-456-7890</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3>SOCIALS</h3>
                            <a href = "#">
                                <TiSocialFacebook/>
                            </a>
                            <a href = "#">
                                <TiSocialLinkedIn/>
                            </a>
                            <a href = "#">
                                <TiSocialTwitter/>
                            </a>
                            <a href = "#">
                                <TiSocialYouTube/>
                            </a>
                            <a href = "#">
                                <TiSocialIntagram/>
                            </a>
                        </div>
                    </div>
                    <div className={Style.contactus_box_box_right}>
                        <form>
                            <div className={formStyle.Form_box_input}>
                                <label htmlFor="name">Fullname</label>
                                <input type="text" placeholder="1thing" className={formStyle.Form_box_input_userName} />
                            </div>
                            <div className={formStyle.Form_box_input}>
                                <label htmlFor="email">Email</label>
                                <div className={formStyle.Form_box_input_box}>
                                    <div className={formStyle.Form_box_input_box_icon}>
                                        <HiOutlineMail />
                                    </div>
                                    <input type="text" placeholder="Email*" />
                                </div>
                            </div>
                            <div className={formStyle.Form_box_input}>
                                <label htmlFor="description">Message</label>
                                <textarea
                                 name=""
                                 id = ""
                                 cols ="30"
                                 rows= "6"
                                 placeholder ="something about yourself in a few words" >
                                 </textarea>
                            </div>
                            <Button btnName ="Send Message" handleClick={() =>{}} classStyle={Style.button} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
