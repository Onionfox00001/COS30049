import React from 'react';

// Internal import
import Style from "./SignUpPage.module.css"; // Importing CSS module for styles
import { Button } from '@/components/components_index'; // Importing Button component

const SignUpPage = () => {
  return (
    <div className={Style.SignUp}> {/* Main container */}
        <div className={Style.SignUp_box}> {/* Box container */}
            <h2 className={Style.SignUp_box_title}>Sign Up</h2> {/* Title */}
            <form> {/* Form */}
                <div className={Style.SignUp_box_input}> {/* Input field for username */}
                    <label htmlFor="name">Username</label> {/* Label */}
                    <input type="text" placeholder="Enter your username" className={Style.SignUp_box_input_name}/> {/* Input field */}
                </div>

                <div className={Style.SignUp_box_input}> {/* Input field for password */}
                    <label htmlFor="password">Password</label> {/* Label */}
                    <input type="text" placeholder="Enter your password" className={Style.SignUp_box_input_password}/> {/* Input field */}
                </div>

                <div className={Style.SignUp_box_input}> {/* Input field for email */}
                    <label htmlFor="email">Email</label> {/* Label */}
                    <input type="text" placeholder="Enter your email" className={Style.SignUp_box_input_email}/> {/* Input field */}
                </div>

                <div className={Style.SignUp_box_button}> {/* Button container */}
                    {/* <Button 
                        btnName= "Sign in"
                        handleClick={() => {}}
                        classStyle = {Style.button}
                    /> */}
                    <button className={Style.SignUp_box_button_signup}>Sign Up</button> {/* Sign Up button */}
                </div>

                <div className={Style.SignUp_box_social_message}> {/* Message for social accounts */}
                    <div className={Style.SignUp_box_social_message_line}></div> {/* Line */}
                    <p className={Style.SignUp_box_social_message_msg}>Sign up with social accounts</p> {/* Message */}
                    <div className={Style.SignUp_box_social_message_line}></div> {/* Line */}
                </div>

                <div className={Style.SignUp_box_social_icons}> {/* Container for social icons */}
                    {/* Social login buttons */}
                    <button aria-label="Log in with Google" className={Style.SignUp_box_social_icon}>
                        {/* SVG for Google login */}
                    </button>

                    <button aria-label="Log in with Twitter" className={Style.SignUp_box_social_icon}>
                        {/* SVG for Twitter login */}
                    </button>
            
                    <button aria-label="Log in with GitHub" className={Style.SignUp_box_social_icon}>
                        {/* SVG for GitHub login */}
                    </button>
                </div>

                <div className={Style.SignUp_box_link}> {/* Link for sign in */}
                    <p>
                        Already have an account?  
                        <a rel="noopener noreferrer" href="signin"> Sign in</a> {/* Sign in link */}
                    </p>
                </div>
            </form>
        </div>
    </div>
  );
};

export default SignUpPage;
