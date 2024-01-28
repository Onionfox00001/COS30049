import React from 'react';

// Internal import
import Style from "./SignInPage.module.css"; // Importing CSS module for styles
import { Button } from '@/components/components_index'; // Importing Button component

const SignInPage = () => {
  return (
    <div className={Style.SignIn}> {/* Main container */}
        <div className={Style.SignIn_box}> {/* Box container */}
            <h2 className={Style.SignIn_box_title}>Sign In</h2> {/* Title */}
            <form> {/* Form */}
                <div className={Style.SignIn_box_input}> {/* Input field for username */}
                    <label htmlFor="name">Username</label> {/* Label */}
                    <input type="text" placeholder="Enter your username" className={Style.SignIn_box_input_name}/> {/* Input field */}
                </div>

                <div className={Style.SignIn_box_input}> {/* Input field for password */}
                    <label htmlFor="password">Password</label> {/* Label */}
                    <input type="text" placeholder="Enter your password" className={Style.SignIn_box_input_password}/> {/* Input field */}
                    <div class={Style.SignIn_box_input_password_forgot}> {/* Link for forgot password */}
                        <a rel="noopener noreferrer" href="#">Forgot Password ?</a> {/* Forgot Password link */}
                    </div>
                </div>

                <div className={Style.SignIn_box_button}> {/* Button container */}
                    {/* <Button 
                        btnName= "Sign in"
                        handleClick={() => {}}
                        classStyle = {Style.button}
                    /> */}
                    <button className={Style.SignIn_box_button_signin}>Sign In</button> {/* Sign In button */}
                </div>

                <div className={Style.SignIn_box_social_message}> {/* Message for social accounts */}
                    <div className={Style.SignIn_box_social_message_line}></div> {/* Line */}
                    <p className={Style.SignIn_box_social_message_msg}>Sign in with social accounts</p> {/* Message */}
                    <div className={Style.SignIn_box_social_message_line}></div> {/* Line */}
                </div>

                <div className={Style.SignIn_box_social_icons}> {/* Container for social icons */}
                    {/* Social login buttons */}
                    <button aria-label="Log in with Google" className={Style.SignIn_box_social_icon}>
                        {/* SVG for Google login */}
                    </button>

                    <button aria-label="Log in with Twitter" className={Style.SignIn_box_social_icon}>
                        {/* SVG for Twitter login */}
                    </button>
            
                    <button aria-label="Log in with GitHub" className={Style.SignIn_box_social_icon}>
                        {/* SVG for GitHub login */}
                    </button>

                    {/* <p className={Style.SignIn_box_link}>Don't have an account?
                        <a rel="noopener noreferrer" href="#">Sign up</a>
                    </p> */}
                </div>

                <div className={Style.SignIn_box_link}> {/* Link for sign up */}
                    <p>
                        Don't have an account?  
                        <a rel="noopener noreferrer" href="signup"> Sign up</a> {/* Sign up link */}
                    </p>
                </div>
            </form>
        </div>
    </div>
  );
};

export default SignInPage;
