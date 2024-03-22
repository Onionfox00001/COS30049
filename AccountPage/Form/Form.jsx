import React, { useEffect, useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { RiCopperCoinFill, RiUserFill, RiLock2Fill } from "react-icons/ri";
import axios from 'axios';

// Internal import
import Style from "./Form.module.css";
import { Button } from "../../components/components_index";

const Form = () => {
    axios.defaults.withCredentials = true;

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Fetch the username of the logged-in user
                const usernameResponse = await axios.get('http://localhost:5000/get_username');
                const username = usernameResponse.data.username;
    
                // Fetch the user data
                const userResponse = await axios.get(`http://localhost:5000/users/${username}`);
                if (userResponse.status === 200) {
                    setUser(userResponse.data);
                } else {
                    console.error('Failed to fetch user');
                }
            } catch (error) {
                console.error('An error occurred while fetching the user', error);
            }
        };
    
        fetchUser();
    }, []);

    return (
        <div className={Style.Form}>
            <div className={Style.Form_box}>
                <form>
                    {/* Username Input */}
                    <div className={Style.Form_box_input}>
                        <label htmlFor="name">Username</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <RiUserFill />
                            </div>
                            <input type="text" placeholder={user ? user.username : 'Not logged in'} className={Style.Form_box_input_userName} />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className={Style.Form_box_input}>
                        <label htmlFor="password">Password</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <RiLock2Fill />
                            </div>
                            <input type="text" placeholder={user ? user.password : 'Not logged in'} />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className={Style.Form_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <HiOutlineMail />
                            </div>
                            <input type="text" placeholder={user ? user.email : 'Not logged in'} />
                        </div>
                    </div>

                    {/* Account Balance Input */}
                    <div className={Style.Form_box_input}>
                        <label htmlFor="balance">Account Balance</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <RiCopperCoinFill />
                            </div>
                            <input type="text" placeholder={user ? user.balance : 'Not logged in'} />
                        </div>
                    </div>

                    {/* Transaction History Table */}
                    <div className={Style.Form_box_input}>
                        <label htmlFor="history">Transaction History</label>
                        <table>
                            <thead>
                                <tr>
                                    <th>Transaction ID</th>
                                    <th>Transaction Number</th>
                                    <th>Item</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
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
                            </tbody>
                        </table>
                    </div>

                    {/* Upload Button */}
                    <div className={Style.Form_box_btn}>
                        <Button
                            btnName="Upload Profile"
                            handleClick={() => { }}
                            classStyle={Style.button}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
