import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {RiCopperCoinFill, RiUserFill, RiLock2Fill} from "react-icons/ri"

//internal import
import Style from "./Form.module.css";
import { Button } from "../../components/components_index";

const Form = () => {
    return (
        <div className={Style.Form}>
            <div className={Style.Form_box}>
                <form>
                    <div className={Style.Form_box_input}>
                        <label htmlFor="name">Username</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <RiUserFill />
                            </div>
                            <input type="text" placeholder="thaianhbui" className={Style.Form_box_input_userName}/>
                        </div>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="password">Password</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <RiLock2Fill />
                            </div>
                            <input type="text" placeholder="0x1A2B3C4D5E6F7G8H9J"/>
                        </div>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <HiOutlineMail />
                            </div>
                            <input type="text" placeholder="Email" />
                        </div>
                    </div>


                    <div className={Style.Form_box_input}>
                        <label htmlFor="balance">Account Balance</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <RiCopperCoinFill />
                            </div>
                            <input type="text" placeholder="1000 ETH" />
                        </div>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="history">Transaction History</label>
                        <table>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Transaction Number</th>
                                <th>Item</th>
                                <th>Price</th>
                            </tr>
                            <tr>
                                <td>#1243</td>
                                <td>1234jahds0890712</td>
                                <td>Cristiano Ronaldo NFT Jersey</td>
                                <td>500 ETH</td>
                            </tr>
                            <tr>
                                <td>#1249</td>
                                <td>1234asdasd99686</td>
                                <td>Ronaldo NFT Jersey</td>
                                <td>300 ETH</td>
                            </tr>
                        </table>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name = ""
                            id = ""
                            cols = ""
                            rows = ""
                            placeholder="Something about yourself in few words"
                        ></textarea>
                    </div>

                    <div className={Style.Form_box_btn}>
                        <Button 
                            btnName= "Upload profile"
                            handleClick={() => {}}
                            classStyle = {Style.button}
                        />
                    </div>                    
                </form>
            </div>
        </div>
    );
};

export default Form;