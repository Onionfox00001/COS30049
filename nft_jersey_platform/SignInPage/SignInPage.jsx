import React from 'react';

//internal import
import Style from "./SignInPage.module.css";
import { Button } from '@/components/components_index';

const SignInPage = () => {
  return (
    <div className={Style.SignIn}>
        <div className={Style.SignIn_box}>
            <h2 className={Style.SignIn_box_title}>Sign In</h2>
            <form>
                <div className={Style.SignIn_box_input}>
                    <label htmlFor="name">Username</label>
                    <input type="text" placeholder="Enter your username" className={Style.SignIn_box_input_name}/>
                </div>

                <div className={Style.SignIn_box_input}>
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder="Enter your password" className={Style.SignIn_box_input_password}/>
                    <div class={Style.SignIn_box_input_password_forgot}>
                        <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                    </div>
                </div>

                <div className={Style.SignIn_box_button}>
                    {/* <Button 
                        btnName= "Sign in"
                        handleClick={() => {}}
                        classStyle = {Style.button}
                    /> */}
                    <button className={Style.SignIn_box_button_signin}>Sign In</button>
                </div>

                <div className={Style.SignIn_box_social_message}>
                    <div className={Style.SignIn_box_social_message_line}></div>
                    <p className={Style.SignIn_box_social_message_msg}>Sign in with social accounts</p>
                    <div className={Style.SignIn_box_social_message_line}></div>
                </div>

                <div className={Style.SignIn_box_social_icons}>
                    <button aria-label="Log in with Google" className={Style.SignIn_box_social_icon}>
                        <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"/>
                            <path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"/>
                            <path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"/>
                            <path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"/>
                        </svg>
                    </button>

                    <button aria-label="Log in with Twitter" className={Style.SignIn_box_social_icon}>
                        <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path fill="#1D9BF0" d="M13.567 5.144c.008.123.008.247.008.371 0 3.796-2.889 8.173-8.172 8.173v-.002A8.131 8.131 0 011 12.398a5.768 5.768 0 004.25-1.19 2.876 2.876 0 01-2.683-1.995c.431.083.875.066 1.297-.05A2.873 2.873 0 011.56 6.348v-.036c.4.222.847.345 1.304.36a2.876 2.876 0 01-.89-3.836 8.152 8.152 0 005.92 3 2.874 2.874 0 014.895-2.619 5.763 5.763 0 001.824-.697 2.883 2.883 0 01-1.262 1.588A5.712 5.712 0 0015 3.656a5.834 5.834 0 01-1.433 1.488z"/>
                        </svg>
                    </button>
            
                    <button aria-label="Log in with GitHub" className={Style.SignIn_box_social_icon}>
                        <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"/>
                            <path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"/>
                        </svg>
                    </button>

                    {/* <p className={Style.SignIn_box_link}>Don't have an account?
                        <a rel="noopener noreferrer" href="#">Sign up</a>
                    </p> */}
                </div>

                <div className={Style.SignIn_box_link}>
                        <p>
                            Don't have an account?  
                            <a rel="noopener noreferrer" href="signup"> Sign up</a>
                        </p>
                    </div>
            </form>
        </div>
    </div>
  )
};

export default SignInPage;